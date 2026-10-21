import { EntityState, GroundItem, Point, WeaponId } from '../types/game';
import { distance, distanceSq, pointInPolygon, resolveCirclePolygonCollision } from './physics';
import { BASE_SPEED, PLAYER_RADIUS } from './constants';
import { WEAPON_REGISTRY } from './weapons';
import { ZoneManager } from './zone';
import { SpatialHash } from './spatialHash';

export class BotAI {
  public entity: EntityState;
  private wanderTarget: Point | null = null;
  private wanderTimer = 0;
  private shootCooldown = 0;
  private healCooldown = 0;
  private state: 'patrol' | 'chase' | 'flee_zone' | 'loot' = 'patrol';

  constructor(entity: EntityState) {
    this.entity = entity;
    this.wanderTimer = 1 + Math.random() * 3;
    this.shootCooldown = 0.3 + Math.random() * 0.5;
  }

  public update(
    dt: number,
    allEntities: EntityState[],
    groundItems: GroundItem[],
    zoneManager: ZoneManager,
    spatialHash: SpatialHash,
    onShoot: (shooter: EntityState, angle: number) => void
  ): void {
    if (!this.entity.isAlive) return;

    this.wanderTimer -= dt;
    this.shootCooldown -= dt;
    this.healCooldown -= dt;

    const me = this.entity;
    const isOutsideZone = zoneManager.isOutside(me);

    // 1. Check if outside or near edge of zone -> flee to zone center
    if (isOutsideZone) {
      this.state = 'flee_zone';
      this.wanderTarget = { x: zoneManager.zone.x, y: zoneManager.zone.y };
    }

    // 2. Self-healing check if low HP and has medkits
    if (me.hp < 45 && me.medkits > 0 && this.healCooldown <= 0) {
      me.hp = Math.min(100, me.hp + 50);
      me.medkits--;
      this.healCooldown = 6.0;
    }

    // 3. Scan for closest alive enemy within 500px radius
    let closestEnemy: EntityState | null = null;
    let closestEnemyDistSq = 550 * 550;

    for (const other of allEntities) {
      if (other.id === me.id || !other.isAlive) continue;
      const dSq = distanceSq(me, other);
      if (dSq < closestEnemyDistSq) {
        closestEnemyDistSq = dSq;
        closestEnemy = other;
      }
    }

    // 4. State Decision & Movement
    let moveTarget: Point | null = null;
    let shouldShoot = false;
    let aimAngle = me.angle;

    if (closestEnemy && !isOutsideZone) {
      this.state = 'chase';
      const enemyDist = Math.sqrt(closestEnemyDistSq);
      aimAngle = Math.atan2(closestEnemy.y - me.y, closestEnemy.x - me.x);

      // Add small aim error so bots feel human and beatable
      const aimSpread = (Math.random() - 0.5) * 0.12;
      aimAngle += aimSpread;

      // Desired combat range based on weapon
      const wDef = WEAPON_REGISTRY[me.currentWeapon];
      const idealRange = me.currentWeapon === 'fists' ? 25 : Math.min(300, wDef.range * 0.6);

      if (enemyDist > idealRange + 40) {
        // Move closer
        moveTarget = { x: closestEnemy.x, y: closestEnemy.y };
      } else if (enemyDist < idealRange - 40) {
        // Back off or strafe
        const strafeAngle = aimAngle + Math.PI / 2 * (Math.random() > 0.5 ? 1 : -1);
        moveTarget = {
          x: me.x + Math.cos(strafeAngle) * 80,
          y: me.y + Math.sin(strafeAngle) * 80,
        };
      } else {
        // Strafe around target
        const strafeAngle = aimAngle + Math.PI / 2;
        moveTarget = {
          x: me.x + Math.cos(strafeAngle) * 60,
          y: me.y + Math.sin(strafeAngle) * 60,
        };
      }

      if (this.shootCooldown <= 0) {
        shouldShoot = true;
        this.shootCooldown = 1 / wDef.fireRate + Math.random() * 0.15;
      }
    } else if (this.state === 'flee_zone') {
      moveTarget = { x: zoneManager.zone.x, y: zoneManager.zone.y };
      aimAngle = Math.atan2(moveTarget.y - me.y, moveTarget.x - me.x);
    } else {
      // 5. Look for valuable loot if we have fists or empty ammo
      if (me.currentWeapon === 'fists') {
        let nearestGun: GroundItem | null = null;
        let nearestGunDistSq = 350 * 350;
        for (const item of groundItems) {
          if (WEAPON_REGISTRY[item.type as WeaponId]) {
            const dSq = distanceSq(me, item);
            if (dSq < nearestGunDistSq) {
              nearestGunDistSq = dSq;
              nearestGun = item;
            }
          }
        }
        if (nearestGun) {
          moveTarget = { x: nearestGun.x, y: nearestGun.y };
          aimAngle = Math.atan2(moveTarget.y - me.y, moveTarget.x - me.x);
        }
      }

      // Default patrol / wander
      if (!moveTarget) {
        if (!this.wanderTarget || this.wanderTimer <= 0) {
          const randAngle = Math.random() * Math.PI * 2;
          const randDist = 200 + Math.random() * 400;
          this.wanderTarget = {
            x: me.x + Math.cos(randAngle) * randDist,
            y: me.y + Math.sin(randAngle) * randDist,
          };
          this.wanderTimer = 2.5 + Math.random() * 3.5;
        }
        moveTarget = this.wanderTarget;
        aimAngle = Math.atan2(moveTarget.y - me.y, moveTarget.x - me.x);
      }
    }

    // 6. Smooth rotation
    const angleDiff = Math.atan2(Math.sin(aimAngle - me.angle), Math.cos(aimAngle - me.angle));
    me.angle += angleDiff * Math.min(1, dt * 10);

    // 7. Movement & Collision
    if (moveTarget) {
      const dx = moveTarget.x - me.x;
      const dy = moveTarget.y - me.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 15) {
        const wDef = WEAPON_REGISTRY[me.currentWeapon];
        const speed = BASE_SPEED * 0.9 * wDef.speedModifier;
        const moveDist = speed * dt;
        let nextPos = {
          x: me.x + (dx / dist) * moveDist,
          y: me.y + (dy / dist) * moveDist,
        };

        // Resolve collisions with nearby obstacles
        const nearby = spatialHash.getNearby(nextPos, PLAYER_RADIUS * 2);
        for (const obs of nearby) {
          nextPos = resolveCirclePolygonCollision(nextPos, PLAYER_RADIUS, obs.points);
        }

        me.walkCycle += moveDist * 0.1;
        me.x = nextPos.x;
        me.y = nextPos.y;
      }
    }

    // 8. Fire if allowed
    if (shouldShoot) {
      onShoot(me, me.angle);
    }
  }
}
