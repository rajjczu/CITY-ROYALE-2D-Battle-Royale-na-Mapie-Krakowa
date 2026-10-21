import {
  AmmoType,
  BuildingDoor,
  Bullet,
  EntityState,
  GroundItem,
  ItemType,
  KillEvent,
  MatchStats,
  Particle,
  Point,
  WeaponId,
} from '../types/game';
import {
  BASE_SPEED,
  DEFAULT_MAGAZINES,
  PLAYER_RADIUS,
  SPRINT_MULTIPLIER,
  TOTAL_MATCH_PLAYERS,
  WORLD_CENTER,
} from './constants';
import { WEAPON_REGISTRY } from './weapons';
import {
  distance,
  distanceSq,
  pointInPolygon,
  rayIntersectsPolygon,
  resolveCirclePolygonCollision,
} from './physics';
import {
  KRAKOW_BUILDINGS,
  KRAKOW_LOOT_SPAWNS,
  KRAKOW_PROPS,
  KRAKOW_SPAWN_POINTS,
  generateObstacles,
} from '../data/krakowMap';
import { SpatialHash } from './spatialHash';
import { ZoneManager } from './zone';
import { BotAI } from './botAI';
import { soundManager } from './audio';

export interface PlayerInputState {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  sprint: boolean;
  aimAngle: number;
  shooting: boolean;
  reload: boolean;
  interact: boolean;
  switchSlot: 'primary' | 'secondary' | 'melee' | null;
  useMed: boolean;
}

export class GameEngine {
  public player: EntityState;
  public bots: BotAI[] = [];
  public entities: EntityState[] = [];
  public bullets: Bullet[] = [];
  public groundItems: GroundItem[] = [];
  public particles: Particle[] = [];
  public killFeed: KillEvent[] = [];
  public spatialHash: SpatialHash;
  public zoneManager: ZoneManager;

  public matchStartTime = 0;
  public matchEnded = false;
  public matchStats: MatchStats | null = null;
  public nextBulletId = 1;

  public onStatsChange?: () => void;
  public onMatchEnd?: (stats: MatchStats) => void;

  constructor(playerColor = '#3b82f6') {
    this.spatialHash = new SpatialHash(400);
    this.zoneManager = new ZoneManager();

    // Populate spatial hash with building and barrier obstacles
    const obstacles = generateObstacles();
    for (const obs of obstacles) {
      this.spatialHash.insert(obs);
    }

    this.player = this.createPlayerEntity('player_local', 'Gracz', playerColor, false);
    this.initMatch();
  }

  public initMatch(playerColor = '#3b82f6'): void {
    this.matchStartTime = performance.now();
    this.matchEnded = false;
    this.matchStats = null;
    this.bullets = [];
    this.particles = [];
    this.killFeed = [];
    this.groundItems = [];
    this.zoneManager.reset();

    // Reset player
    const spawnIdx = Math.floor(Math.random() * KRAKOW_SPAWN_POINTS.length);
    const pSpawn = KRAKOW_SPAWN_POINTS[spawnIdx] || WORLD_CENTER;
    this.player = this.createPlayerEntity('player_local', 'Gracz', playerColor, false);
    this.player.x = pSpawn.x;
    this.player.y = pSpawn.y;

    // Create 19 Bots with authentic Polish and international gamer tags
    const botNames = [
      'Janek_KRK',
      'WawelskiSmok',
      'Krakus99',
      'Florian_PL',
      'RynekSniper',
      'PlantyNinja',
      'SukienniceKing',
      'GrodzkaRunner',
      'VistulaWolf',
      'HejnałMaster',
      'KazimierzGhost',
      'BarbakanTank',
      'Zygmunt_Bell',
      'PierógWarrior',
      'DragonBreath',
      'Krakow_Pro',
      'ShadowStriker',
      'EagleEye_PL',
      'Bursztyn',
    ];

    this.bots = [];
    this.entities = [this.player];

    for (let i = 0; i < TOTAL_MATCH_PLAYERS - 1; i++) {
      const bSpawn =
        KRAKOW_SPAWN_POINTS[(spawnIdx + i + 1) % KRAKOW_SPAWN_POINTS.length] || WORLD_CENTER;
      const botColor = '#ef4444'; // Red for bots
      const botName = botNames[i % botNames.length];
      const botEntity = this.createPlayerEntity(`bot_${i + 1}`, botName, botColor, true);

      // Standard Battle Royale: all combatants start with fists/knife and scavenge for weapons
      botEntity.primaryWeapon = 'fists';
      botEntity.currentWeapon = 'fists';

      botEntity.x = bSpawn.x + (Math.random() - 0.5) * 80;
      botEntity.y = bSpawn.y + (Math.random() - 0.5) * 80;

      const ai = new BotAI(botEntity);
      this.bots.push(ai);
      this.entities.push(botEntity);
    }

    // Populate initial ground loot (weapons, medkits, armor vests, ammo)
    this.spawnInitialLoot();
  }

  private createPlayerEntity(
    id: string,
    name: string,
    color: string,
    isBot: boolean
  ): EntityState {
    const magAmmo: Record<WeaponId, number> = { ...DEFAULT_MAGAZINES };

    return {
      id,
      name,
      x: WORLD_CENTER.x,
      y: WORLD_CENTER.y,
      angle: 0,
      targetAngle: 0,
      hp: 100,
      maxHp: 100,
      armor: 0,
      helmet: 0,
      primaryWeapon: 'glock17',
      secondaryWeapon: null,
      currentSlot: 'primary',
      currentWeapon: 'glock17',
      magAmmo,
      inventoryAmmo: {
        '9mm': 60,
        '45acp': 30,
        '762mm': 60,
        '556mm': 60,
        '300mag': 10,
      },
      medkits: 1,
      bandages: 2,
      isReloading: false,
      reloadProgress: 0,
      shootCooldown: 0,
      isAlive: true,
      kills: 0,
      damageDealt: 0,
      isBot,
      color,
      insideBuildingId: null,
      insideBuildingOpacity: 1.0,
      walkCycle: 0,
      recoilKick: 0,
      hitFlashTimer: 0,
      isSitting: false,
      sittingBenchId: null,
    };
  }

  private spawnInitialLoot(): void {
    const weaponKeys: WeaponId[] = [
      'glock17',
      'deagle',
      'mp5',
      'ump45',
      'ak47',
      'm4a1',
      'scarl',
      'm16',
      'sks',
      'awp',
    ];

    // High quality loot spawns in designated building rooms and landmarks
    for (const spot of KRAKOW_LOOT_SPAWNS) {
      const rand = Math.random();
      let itemType: ItemType = 'glock17';

      if (rand < 0.45) {
        // Weapons
        itemType = weaponKeys[Math.floor(Math.random() * weaponKeys.length)];
      } else if (rand < 0.70) {
        // Armor or Medkit
        itemType = Math.random() < 0.5 ? 'vest' : 'medkit';
      } else {
        // Ammunition
        const ammoTypes: AmmoType[] = ['9mm', '45acp', '762mm', '556mm', '300mag'];
        itemType = ammoTypes[Math.floor(Math.random() * ammoTypes.length)];
      }

      this.groundItems.push({
        id: `item_${Math.random().toString(36).substring(2, 9)}`,
        type: itemType,
        count: itemType === 'vest' ? 100 : itemType === 'medkit' ? 1 : 30,
        x: spot.x + (Math.random() - 0.5) * 40,
        y: spot.y + (Math.random() - 0.5) * 40,
        spawnTime: performance.now(),
      });
    }
  }

  public update(dt: number, input: PlayerInputState): void {
    if (this.matchEnded) return;

    // 1. Advance Zone Manager
    this.zoneManager.update(dt);

    // 2. Process Local Player
    if (this.player.isAlive) {
      this.updatePlayer(dt, input);
    }

    // 3. Process AI Bots
    for (const bot of this.bots) {
      if (!bot.entity.isAlive) continue;
      bot.update(
        dt,
        this.entities,
        this.groundItems,
        this.zoneManager,
        this.spatialHash,
        (shooter, angle) => this.fireWeapon(shooter, angle)
      );
      this.updateEntityBuildingInside(bot.entity, dt);
    }

    // 4. Update Bullets and Collisions
    this.updateBullets(dt);

    // 5. Update Particles
    this.updateParticles(dt);

    // 6. Check Win/Loss conditions
    this.checkMatchConditions();
  }

  private updatePlayer(dt: number, input: PlayerInputState): void {
    const p = this.player;

    // Cooldowns
    if (p.shootCooldown > 0) p.shootCooldown -= dt;
    if (p.hitFlashTimer > 0) p.hitFlashTimer -= dt;
    if (p.recoilKick > 0) p.recoilKick = Math.max(0, p.recoilKick - dt * 15);

    // Reloading
    if (p.isReloading) {
      const wDef = WEAPON_REGISTRY[p.currentWeapon];
      p.reloadProgress += dt / wDef.reloadTime;
      if (p.reloadProgress >= 1.0) {
        this.completeReload(p);
      }
    } else if (input.reload && p.currentWeapon !== 'fists') {
      this.startReload(p);
    }

    // Weapon slot switching
    if (input.switchSlot) {
      this.switchSlot(p, input.switchSlot);
    }

    // Healing
    if (input.useMed && p.medkits > 0 && p.hp < 100) {
      p.hp = Math.min(100, p.hp + 50);
      p.medkits--;
      soundManager.playPickup();
    }

    // Zone Damage Check
    if (this.zoneManager.isOutside(p)) {
      this.applyDamage(p, this.zoneManager.zone.damagePerSec * dt, 'strefa');
    }

    // Aim rotation
    p.angle = input.aimAngle;

    // Bench Sitting & Health Regeneration
    if (p.isSitting) {
      // Movement key cancels sitting and stands up
      if (input.up || input.down || input.left || input.right) {
        p.isSitting = false;
        p.sittingBenchId = null;
      } else {
        // Regenerate health up to 100 while sitting
        if (p.hp < p.maxHp) {
          p.hp = Math.min(p.maxHp, p.hp + 20 * dt);
          if (Math.random() < 0.28) {
            this.particles.push({
              x: p.x + (Math.random() - 0.5) * 22,
              y: p.y - 10 - Math.random() * 12,
              vx: (Math.random() - 0.5) * 10,
              vy: -24 - Math.random() * 18,
              radius: 3.5,
              color: '#4ade80',
              alpha: 0.9,
              decay: 1.2,
            });
          }
        }
      }
    }

    // Movement
    let dx = 0;
    let dy = 0;
    if (input.up) dy -= 1;
    if (input.down) dy += 1;
    if (input.left) dx -= 1;
    if (input.right) dx += 1;

    if (!p.isSitting && (dx !== 0 || dy !== 0)) {
      const len = Math.hypot(dx, dy);
      const wDef = WEAPON_REGISTRY[p.currentWeapon];
      const speed =
        BASE_SPEED *
        (input.sprint ? SPRINT_MULTIPLIER : 1.0) *
        wDef.speedModifier;
      const moveX = (dx / len) * speed * dt;
      const moveY = (dy / len) * speed * dt;

      let nextPos = { x: p.x + moveX, y: p.y + moveY };

      // Resolve obstacle collision with spatial hash
      const nearby = this.spatialHash.getNearby(nextPos, PLAYER_RADIUS * 2);
      for (const obs of nearby) {
        // Operable doors: open doors allow player to enter freely!
        if (obs.id.startsWith('door_obs_')) {
          const doorId = obs.id.replace('door_obs_', '');
          const door = this.getDoorById(doorId);
          if (door && door.isOpen) {
            continue; // Open doorway allows smooth entrance!
          }
        }
        nextPos = resolveCirclePolygonCollision(nextPos, PLAYER_RADIUS, obs.points);
      }

      p.walkCycle += Math.hypot(moveX, moveY) * 0.1;
      p.x = nextPos.x;
      p.y = nextPos.y;
    }

    // Check building interior entry (for smooth roof fade!)
    this.updateEntityBuildingInside(p, dt);

    // Shooting
    if (!p.isSitting && input.shooting && p.shootCooldown <= 0 && !p.isReloading) {
      this.fireWeapon(p, p.angle);
    }

    // Interaction priority [E]: Benches -> Doors -> Loot
    if (input.interact) {
      const benchToggled = this.trySitOrStandBench(p);
      if (!benchToggled) {
        const doorToggled = this.tryToggleNearbyDoor(p);
        if (!doorToggled) {
          this.tryPickupLoot(p);
        }
      }
    }
  }

  private updateEntityBuildingInside(entity: EntityState, dt: number): void {
    let foundBuildingId: string | null = null;

    for (const b of KRAKOW_BUILDINGS) {
      if (pointInPolygon(entity, b.polygon)) {
        foundBuildingId = b.id;
        break;
      }
    }

    entity.insideBuildingId = foundBuildingId;

    // Smoothly fade roof when inside
    const targetOpacity = foundBuildingId ? 0.08 : 1.0;
    const fadeSpeed = 4.5 * dt;
    if (entity.insideBuildingOpacity < targetOpacity) {
      entity.insideBuildingOpacity = Math.min(targetOpacity, entity.insideBuildingOpacity + fadeSpeed);
    } else if (entity.insideBuildingOpacity > targetOpacity) {
      entity.insideBuildingOpacity = Math.max(targetOpacity, entity.insideBuildingOpacity - fadeSpeed);
    }
  }

  public fireWeapon(shooter: EntityState, angle: number): void {
    const wDef = WEAPON_REGISTRY[shooter.currentWeapon];
    if (!wDef) return;

    if (wDef.magSize > 0) {
      const currentMag = shooter.magAmmo[shooter.currentWeapon] || 0;
      if (currentMag <= 0) {
        if (!shooter.isReloading) {
          this.startReload(shooter);
        }
        return;
      }
      shooter.magAmmo[shooter.currentWeapon]--;
    }

    shooter.shootCooldown = 1 / wDef.fireRate;
    shooter.recoilKick = Math.min(1.0, shooter.recoilKick + wDef.recoil * 0.1);

    // Audio
    soundManager.playGunshot(shooter.currentWeapon);

    // Muzzle Flash Particle
    const flashDist = PLAYER_RADIUS + 16;
    const flashX = shooter.x + Math.cos(angle) * flashDist;
    const flashY = shooter.y + Math.sin(angle) * flashDist;
    this.createMuzzleFlash(flashX, flashY, angle);

    // Bullets (support single shot and 3-round burst)
    const bursts = wDef.burstCount;
    for (let b = 0; b < bursts; b++) {
      const spreadOffset = (Math.random() - 0.5) * wDef.spread;
      const shotAngle = angle + spreadOffset;
      const vx = Math.cos(shotAngle) * wDef.bulletSpeed;
      const vy = Math.sin(shotAngle) * wDef.bulletSpeed;

      this.bullets.push({
        id: this.nextBulletId++,
        shooterId: shooter.id,
        x: flashX,
        y: flashY,
        vx,
        vy,
        startX: flashX,
        startY: flashY,
        maxDistance: wDef.range,
        damage: wDef.damage,
        weaponId: shooter.currentWeapon,
        createdAt: performance.now(),
      });
    }
  }

  private startReload(entity: EntityState): void {
    const wDef = WEAPON_REGISTRY[entity.currentWeapon];
    if (wDef.magSize === 0) return;
    const currentMag = entity.magAmmo[entity.currentWeapon] || 0;
    if (currentMag >= wDef.magSize) return;

    entity.isReloading = true;
    entity.reloadProgress = 0;
    if (entity.id === 'player_local') {
      soundManager.playReload();
    }
  }

  private completeReload(entity: EntityState): void {
    const wDef = WEAPON_REGISTRY[entity.currentWeapon];
    entity.magAmmo[entity.currentWeapon] = wDef.magSize;
    entity.isReloading = false;
    entity.reloadProgress = 0;
  }

  private switchSlot(entity: EntityState, slot: 'primary' | 'secondary' | 'melee'): void {
    if (entity.currentSlot === slot) return;
    entity.currentSlot = slot;
    entity.isReloading = false;

    if (slot === 'primary') {
      entity.currentWeapon = entity.primaryWeapon;
    } else if (slot === 'secondary') {
      entity.currentWeapon = entity.secondaryWeapon || 'fists';
    } else {
      entity.currentWeapon = 'fists';
    }
  }

  public tryPickupLoot(entity: EntityState): void {
    for (let i = this.groundItems.length - 1; i >= 0; i--) {
      const item = this.groundItems[i];
      if (distanceSq(entity, item) < 55 * 55) {
        if (WEAPON_REGISTRY[item.type as WeaponId]) {
          const newGun = item.type as WeaponId;
          // Swap into current slot
          if (entity.currentSlot === 'secondary') {
            entity.secondaryWeapon = newGun;
          } else {
            entity.primaryWeapon = newGun;
          }
          entity.currentWeapon = newGun;
          entity.magAmmo[newGun] = WEAPON_REGISTRY[newGun].magSize;
        } else if (item.type === 'vest') {
          entity.armor = 100;
        } else if (item.type === 'medkit') {
          entity.medkits += item.count;
        } else if (item.type in entity.inventoryAmmo) {
          entity.inventoryAmmo[item.type as AmmoType] += item.count;
        }

        if (entity.id === 'player_local') {
          soundManager.playPickup();
        }

        this.groundItems.splice(i, 1);
        break;
      }
    }
  }

  public getDoorById(doorId: string): BuildingDoor | null {
    for (const b of KRAKOW_BUILDINGS) {
      for (const d of b.doors) {
        if (d.id === doorId) return d;
      }
    }
    return null;
  }

  public tryToggleNearbyDoor(entity: EntityState): boolean {
    for (const b of KRAKOW_BUILDINGS) {
      for (const d of b.doors) {
        if (distanceSq(entity, d) < 75 * 75) {
          if (d.isLocked) {
            return false;
          }
          d.isOpen = !d.isOpen;
          soundManager.playDoor();
          return true;
        }
      }
    }
    return false;
  }

  public trySitOrStandBench(entity: EntityState): boolean {
    if (entity.isSitting) {
      entity.isSitting = false;
      entity.sittingBenchId = null;
      return true;
    }

    for (const prop of KRAKOW_PROPS) {
      if (prop.type === 'bench') {
        const dSq = distanceSq(entity, prop);
        if (dSq < 65 * 65) {
          entity.isSitting = true;
          entity.sittingBenchId = prop.id;
          entity.x = prop.x;
          entity.y = prop.y;
          soundManager.playPickup();
          return true;
        }
      }
    }
    return false;
  }

  public getInteractionPrompt(): { text: string; subText?: string } | null {
    const p = this.player;
    if (!p || !p.isAlive) return null;

    if (p.isSitting) {
      return {
        text: 'Siedzisz na ławce (odpoczynek)',
        subText: 'Regeneracja zdrowia +20 HP/s • [WASD] lub [E] aby wstać',
      };
    }

    // Check nearby bench
    for (const prop of KRAKOW_PROPS) {
      if (prop.type === 'bench') {
        if (distanceSq(p, prop) < 65 * 65) {
          return {
            text: '[E] Usiądź na ławce',
            subText: 'Siedząc regenerujesz zdrowie!',
          };
        }
      }
    }

    // Check nearby door
    for (const b of KRAKOW_BUILDINGS) {
      for (const d of b.doors) {
        if (distanceSq(p, d) < 75 * 75) {
          if (d.isLocked) {
            return { text: 'Drzwi zamknięte', subText: 'Wejście zablokowane' };
          }
          return {
            text: d.isOpen ? '[E] Zamknij drzwi' : '[E] Otwórz drzwi',
            subText: `${b.address || b.name}`,
          };
        }
      }
    }

    // Check nearby loot
    for (const item of this.groundItems) {
      if (distanceSq(p, item) < 55 * 55) {
        const name = WEAPON_REGISTRY[item.type as WeaponId]?.name || item.type.toUpperCase();
        return { text: `[E] Podnieś: ${name}` };
      }
    }

    return null;
  }

  private updateBullets(dt: number): void {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const b = this.bullets[i];
      const nextX = b.x + b.vx * dt;
      const nextY = b.y + b.vy * dt;
      const currentDist = Math.hypot(nextX - b.startX, nextY - b.startY);

      // 1. Check max range
      if (currentDist >= b.maxDistance) {
        this.bullets.splice(i, 1);
        continue;
      }

      // 2. Collision with solid walls
      const nearby = this.spatialHash.getNearby({ x: nextX, y: nextY }, 60);
      let hitObstacle = false;
      for (const obs of nearby) {
        if (obs.id.startsWith('door_obs_')) {
          const doorId = obs.id.replace('door_obs_', '');
          const door = this.getDoorById(doorId);
          if (door && door.isOpen) {
            continue; // Bullet passes through open doorway!
          }
        }
        const hit = rayIntersectsPolygon({ x: b.x, y: b.y }, { x: nextX, y: nextY }, obs.points);
        if (hit) {
          hitObstacle = true;
          this.createSparks(hit.x, hit.y);
          break;
        }
      }

      if (hitObstacle) {
        this.bullets.splice(i, 1);
        continue;
      }

      // 3. Collision with Entities
      let hitEntity = false;
      for (const target of this.entities) {
        if (target.id === b.shooterId || !target.isAlive) continue;
        if (distanceSq({ x: nextX, y: nextY }, target) < PLAYER_RADIUS * PLAYER_RADIUS * 1.5) {
          hitEntity = true;
          this.applyDamage(target, b.damage, b.shooterId, b.weaponId);
          this.createBloodSplatter(nextX, nextY);

          if (b.shooterId === 'player_local') {
            soundManager.playHitMarker();
          }
          break;
        }
      }

      if (hitEntity) {
        this.bullets.splice(i, 1);
      } else {
        b.x = nextX;
        b.y = nextY;
      }
    }
  }

  public applyDamage(
    victim: EntityState,
    rawDmg: number,
    killerId: string,
    weapon: WeaponId = 'glock17'
  ): void {
    if (!victim.isAlive) return;

    let dmg = rawDmg;
    victim.hitFlashTimer = 0.08;

    // Vest Armor absorption (absorbs 60% of bullet impact)
    if (victim.armor > 0) {
      const absorbed = dmg * 0.6;
      if (victim.armor >= absorbed) {
        victim.armor -= absorbed;
        dmg -= absorbed;
      } else {
        dmg -= victim.armor;
        victim.armor = 0;
      }
    }

    victim.hp -= dmg;

    // Track damage dealt for killer
    const killer = this.entities.find(e => e.id === killerId);
    if (killer) {
      killer.damageDealt += Math.round(dmg);
    }

    if (victim.hp <= 0) {
      victim.hp = 0;
      victim.isAlive = false;

      // Drop weapon and loot upon elimination
      this.groundItems.push({
        id: `drop_${victim.id}_gun`,
        type: victim.currentWeapon,
        count: 1,
        x: victim.x,
        y: victim.y,
        spawnTime: performance.now(),
      });

      if (victim.medkits > 0) {
        this.groundItems.push({
          id: `drop_${victim.id}_med`,
          type: 'medkit',
          count: victim.medkits,
          x: victim.x + 20,
          y: victim.y,
          spawnTime: performance.now(),
        });
      }

      if (killer) {
        killer.kills++;
      }

      const killerName = killer ? killer.name : 'Strefa Śmierci';
      this.killFeed.unshift({
        id: `kill_${Math.random().toString(36).substring(2, 9)}`,
        killerId,
        killerName,
        victimId: victim.id,
        victimName: victim.name,
        weapon,
        timestamp: performance.now(),
      });

      if (this.killFeed.length > 6) {
        this.killFeed.pop();
      }
    }
  }

  private checkMatchConditions(): void {
    const aliveCount = this.entities.filter(e => e.isAlive).length;

    if (!this.player.isAlive && !this.matchEnded) {
      // Local player died
      this.matchEnded = true;
      soundManager.playDefeat();
      const stats: MatchStats = {
        placement: aliveCount + 1,
        totalPlayers: TOTAL_MATCH_PLAYERS,
        kills: this.player.kills,
        damageDealt: this.player.damageDealt,
        survivalTimeSeconds: Math.round((performance.now() - this.matchStartTime) / 1000),
        isVictory: false,
      };
      this.matchStats = stats;
      this.onMatchEnd?.(stats);
    } else if (this.player.isAlive && aliveCount === 1 && !this.matchEnded) {
      // Victory Royale!
      this.matchEnded = true;
      soundManager.playVictory();
      const stats: MatchStats = {
        placement: 1,
        totalPlayers: TOTAL_MATCH_PLAYERS,
        kills: this.player.kills,
        damageDealt: this.player.damageDealt,
        survivalTimeSeconds: Math.round((performance.now() - this.matchStartTime) / 1000),
        isVictory: true,
      };
      this.matchStats = stats;
      this.onMatchEnd?.(stats);
    }
  }

  // Particle Effects
  private createMuzzleFlash(x: number, y: number, angle: number): void {
    for (let i = 0; i < 4; i++) {
      const pAngle = angle + (Math.random() - 0.5) * 0.6;
      const speed = 120 + Math.random() * 80;
      this.particles.push({
        x,
        y,
        vx: Math.cos(pAngle) * speed,
        vy: Math.sin(pAngle) * speed,
        radius: 3 + Math.random() * 2,
        color: '#ffbe0b',
        alpha: 1.0,
        decay: 12.0,
      });
    }
  }

  private createSparks(x: number, y: number): void {
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 120;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2,
        color: '#fb5607',
        alpha: 1.0,
        decay: 6.0,
      });
    }
  }

  private createBloodSplatter(x: number, y: number): void {
    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 60 + Math.random() * 90;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 3.5,
        color: '#dc2626',
        alpha: 1.0,
        decay: 4.0,
      });
    }
  }

  private updateParticles(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.alpha -= p.decay * dt;
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }
}
