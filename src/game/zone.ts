import { Point, ZoneCircle } from '../types/game';
import { distance } from './physics';
import { WORLD_CENTER } from './constants';

export class ZoneManager {
  public zone: ZoneCircle;
  private phaseIndex = 0;
  private state: 'waiting' | 'shrinking' = 'waiting';
  private timer = 0;
  private initialRadius = 18000;

  private phases = [
    { wait: 35, shrink: 40, radius: 9500, dps: 2.0 },
    { wait: 28, shrink: 35, radius: 4800, dps: 4.0 },
    { wait: 22, shrink: 30, radius: 2200, dps: 8.0 },
    { wait: 16, shrink: 25, radius: 850, dps: 16.0 },
    { wait: 12, shrink: 20, radius: 100, dps: 28.0 },
  ];

  constructor() {
    const firstPhase = this.phases[0];
    this.zone = {
      x: WORLD_CENTER.x,
      y: WORLD_CENTER.y,
      radius: 18000,
      targetX: WORLD_CENTER.x,
      targetY: WORLD_CENTER.y,
      targetRadius: firstPhase.radius,
      shrinkTimer: firstPhase.wait,
      phase: 1,
      damagePerSec: firstPhase.dps,
      isShrinking: false,
    };
    this.timer = firstPhase.wait;
  }

  public reset(): void {
    this.phaseIndex = 0;
    this.state = 'waiting';
    const firstPhase = this.phases[0];
    this.zone = {
      x: WORLD_CENTER.x,
      y: WORLD_CENTER.y,
      radius: 18000,
      targetX: WORLD_CENTER.x,
      targetY: WORLD_CENTER.y,
      targetRadius: firstPhase.radius,
      shrinkTimer: firstPhase.wait,
      phase: 1,
      damagePerSec: firstPhase.dps,
      isShrinking: false,
    };
    this.timer = firstPhase.wait;
  }

  public update(dt: number): void {
    if (this.phaseIndex >= this.phases.length) {
      this.zone.shrinkTimer = 0;
      return;
    }

    const currentP = this.phases[this.phaseIndex];
    this.timer -= dt;
    this.zone.shrinkTimer = Math.max(0, Math.ceil(this.timer));

    if (this.state === 'waiting') {
      this.zone.isShrinking = false;
      if (this.timer <= 0) {
        this.state = 'shrinking';
        this.timer = currentP.shrink;
        this.initialRadius = this.zone.radius;
        this.zone.isShrinking = true;

        // Pick next circle center offset safely within current radius
        const angle = Math.random() * Math.PI * 2;
        const maxOffset = Math.max(0, (this.zone.radius - currentP.radius) * 0.75);
        const offset = Math.random() * maxOffset;

        // Biased towards Krakow Center
        const toCenterX = WORLD_CENTER.x - this.zone.x;
        const toCenterY = WORLD_CENTER.y - this.zone.y;
        const biasDist = Math.hypot(toCenterX, toCenterY);
        let biasX = 0, biasY = 0;
        if (biasDist > 500) {
          biasX = (toCenterX / biasDist) * 300;
          biasY = (toCenterY / biasDist) * 300;
        }

        this.zone.targetX = Math.round(this.zone.x + Math.cos(angle) * offset + biasX);
        this.zone.targetY = Math.round(this.zone.y + Math.sin(angle) * offset + biasY);
        this.zone.targetRadius = currentP.radius;
      }
    } else if (this.state === 'shrinking') {
      this.zone.isShrinking = true;
      const progress = 1 - this.timer / currentP.shrink;

      if (progress >= 1) {
        this.zone.x = this.zone.targetX;
        this.zone.y = this.zone.targetY;
        this.zone.radius = this.zone.targetRadius;
        this.phaseIndex++;

        if (this.phaseIndex < this.phases.length) {
          this.state = 'waiting';
          this.timer = this.phases[this.phaseIndex].wait;
          this.zone.phase = this.phaseIndex + 1;
          this.zone.damagePerSec = this.phases[this.phaseIndex].dps;
          this.zone.targetRadius = this.phases[this.phaseIndex].radius;
        }
      } else {
        this.zone.radius =
          this.initialRadius + (this.zone.targetRadius - this.initialRadius) * progress;
      }
    }
  }

  public isOutside(p: Point): boolean {
    return distance(p, { x: this.zone.x, y: this.zone.y }) > this.zone.radius;
  }
}
