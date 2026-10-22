export type WeaponId =
  | 'fists'
  | 'glock17'
  | 'deagle'
  | 'mp5'
  | 'ump45'
  | 'ak47'
  | 'm4a1'
  | 'scarl'
  | 'm16'
  | 'sks'
  | 'awp';

export type AmmoType = '9mm' | '45acp' | '762mm' | '556mm' | '300mag';

export type ItemType = WeaponId | AmmoType | 'medkit' | 'bandage' | 'vest' | 'helmet' | 'backpack';

export interface WeaponDef {
  id: WeaponId;
  name: string;
  category: 'melee' | 'pistol' | 'smg' | 'rifle' | 'dmr' | 'sniper';
  ammoType: AmmoType | null;
  damage: number;
  magSize: number;
  fireRate: number; // shots per second
  reloadTime: number; // in seconds
  bulletSpeed: number; // in px/s
  range: number; // in px
  spread: number; // in radians
  recoil: number;
  burstCount: number; // 1 for semi/auto, 3 for M16
  isAutomatic: boolean;
  speedModifier: number; // movement multiplier
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  description: string;
}

export interface Point {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface BuildingDoor {
  id: string;
  x: number;
  y: number;
  width: number;
  angle: number;
  isOpen: boolean;
  isLocked?: boolean;
}

export interface InteriorRoom {
  id: string;
  name: string;
  polygon: Point[];
  furniture?: { type: string; x: number; y: number; w: number; h: number; angle?: number }[];
}

export interface BuildingData {
  id: string;
  name: string;
  address?: string;
  polygon: Point[];
  doors: BuildingDoor[];
  interiorRooms: InteriorRoom[];
  roofColor?: string;
  wallColor?: string;
  canEnter?: boolean;
  windows?: Point[];
}

export interface StreetData {
  id: string;
  name: string;
  path: Point[];
  width: number;
  sidewalkWidth?: number;
}

export interface PlazaData {
  id: string;
  name: string;
  polygon: Point[];
}

export interface ParkGate {
  id: string;
  x: number;
  y: number;
  width: number;
  side: 'top' | 'bottom' | 'left' | 'right';
}

export interface ParkData {
  id: string;
  name: string;
  polygon: Point[];
  gates?: ParkGate[];
}

export interface PropData {
  id: string;
  type: 'lamp' | 'tree' | 'bench' | 'stall' | 'fountain' | 'monument' | 'bollard';
  x: number;
  y: number;
  radius?: number;
  w?: number;
  h?: number;
  angle?: number;
  hasCollision?: boolean;
}

export interface Obstacle {
  id: string;
  points: Point[];
  isBuilding: boolean;
  buildingId?: string;
  hasRoof?: boolean;
  destructible?: boolean;
}

export interface GroundItem {
  id: string;
  type: ItemType;
  count: number;
  x: number;
  y: number;
  spawnTime: number;
}

export interface Bullet {
  id: number;
  shooterId: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  startX: number;
  startY: number;
  maxDistance: number;
  damage: number;
  weaponId: WeaponId;
  createdAt: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
}

export interface EntityState {
  id: string;
  name: string;
  x: number;
  y: number;
  angle: number;
  targetAngle: number;
  hp: number;
  maxHp: number;
  armor: number;
  helmet: number;
  primaryWeapon: WeaponId;
  secondaryWeapon: WeaponId | null;
  currentSlot: 'primary' | 'secondary' | 'melee';
  currentWeapon: WeaponId;
  magAmmo: Record<WeaponId, number>;
  inventoryAmmo: Record<AmmoType, number>;
  medkits: number;
  bandages: number;
  isReloading: boolean;
  reloadProgress: number; // 0 to 1
  shootCooldown: number;
  isAlive: boolean;
  kills: number;
  damageDealt: number;
  isBot: boolean;
  color: string;
  insideBuildingId: string | null;
  insideBuildingOpacity: number;
  walkCycle: number;
  recoilKick: number;
  hitFlashTimer: number;
  isSitting?: boolean;
  sittingBenchId?: string | null;
}

export interface ZoneCircle {
  x: number;
  y: number;
  radius: number;
  targetX: number;
  targetY: number;
  targetRadius: number;
  shrinkTimer: number;
  phase: number;
  damagePerSec: number;
  isShrinking: boolean;
}

export interface KillEvent {
  id: string;
  killerId: string;
  killerName: string;
  victimId: string;
  victimName: string;
  weapon: WeaponId;
  timestamp: number;
}

export interface MatchStats {
  placement: number;
  totalPlayers: number;
  kills: number;
  damageDealt: number;
  survivalTimeSeconds: number;
  isVictory: boolean;
}
