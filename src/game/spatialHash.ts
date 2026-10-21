import { Obstacle, Point } from '../types/game';

export class SpatialHash {
  private cellSize: number;
  private grid: Map<string, Obstacle[]> = new Map();

  constructor(cellSize = 400) {
    this.cellSize = cellSize;
  }

  private getKey(cx: number, cy: number): string {
    return `${cx}:${cy}`;
  }

  public clear(): void {
    this.grid.clear();
  }

  public insert(obs: Obstacle): void {
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;

    for (const p of obs.points) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }

    const startX = Math.floor(minX / this.cellSize);
    const endX = Math.floor(maxX / this.cellSize);
    const startY = Math.floor(minY / this.cellSize);
    const endY = Math.floor(maxY / this.cellSize);

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        const key = this.getKey(x, y);
        let cell = this.grid.get(key);
        if (!cell) {
          cell = [];
          this.grid.set(key, cell);
        }
        cell.push(obs);
      }
    }
  }

  public getNearby(point: Point, radius: number): Obstacle[] {
    const startX = Math.floor((point.x - radius) / this.cellSize);
    const endX = Math.floor((point.x + radius) / this.cellSize);
    const startY = Math.floor((point.y - radius) / this.cellSize);
    const endY = Math.floor((point.y + radius) / this.cellSize);

    const resultSet = new Set<Obstacle>();

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        const cell = this.grid.get(this.getKey(x, y));
        if (cell) {
          for (let i = 0; i < cell.length; i++) {
            resultSet.add(cell[i]);
          }
        }
      }
    }

    return Array.from(resultSet);
  }
}
