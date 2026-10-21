import { Point } from '../types/game';

/**
 * Squared distance between two points (fast check without sqrt)
 */
export function distanceSq(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return dx * dx + dy * dy;
}

/**
 * Euclidean distance between two points
 */
export function distance(p1: Point, p2: Point): number {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

/**
 * Checks if a point lies inside a polygon using ray casting algorithm.
 */
export function pointInPolygon(point: Point, vs: Point[]): boolean {
  if (vs.length < 3) return false;
  const x = point.x;
  const y = point.y;
  let inside = false;

  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i].x;
    const yi = vs[i].y;
    const xj = vs[j].x;
    const yj = vs[j].y;

    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}

/**
 * Calculates the closest point on segment AB to point P.
 */
export function closestPointOnSegment(p: Point, a: Point, b: Point): Point {
  const abx = b.x - a.x;
  const aby = b.y - a.y;
  const apx = p.x - a.x;
  const apy = p.y - a.y;
  const abLenSq = abx * abx + aby * aby;

  if (abLenSq === 0) return { x: a.x, y: a.y };

  let t = (apx * abx + apy * aby) / abLenSq;
  t = Math.max(0, Math.min(1, t));

  return {
    x: a.x + t * abx,
    y: a.y + t * aby,
  };
}

/**
 * Resolves collision between a moving circle (entity) and an obstacle polygon.
 * If colliding, smoothly pushes the circle out along the collision normal.
 */
export function resolveCirclePolygonCollision(
  circlePos: Point,
  radius: number,
  polygon: Point[]
): Point {
  if (polygon.length < 3) return circlePos;

  let result = { x: circlePos.x, y: circlePos.y };
  const isInside = pointInPolygon(result, polygon);

  let minOverlap = Infinity;
  let pushX = 0;
  let pushY = 0;

  for (let i = 0; i < polygon.length; i++) {
    const p1 = polygon[i];
    const p2 = polygon[(i + 1) % polygon.length];
    const closest = closestPointOnSegment(result, p1, p2);

    const dx = result.x - closest.x;
    const dy = result.y - closest.y;
    const dist = Math.hypot(dx, dy);

    if (isInside) {
      if (dist < minOverlap) {
        minOverlap = dist;
        const edgeLen = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        if (edgeLen > 0.0001) {
          // Outward normal
          const nx = -(p2.y - p1.y) / edgeLen;
          const ny = (p2.x - p1.x) / edgeLen;
          pushX = nx * (dist + radius + 1);
          pushY = ny * (dist + radius + 1);
        }
      }
    } else if (dist < radius) {
      const overlap = radius - dist;
      if (dist > 0.0001) {
        result.x += (dx / dist) * overlap;
        result.y += (dy / dist) * overlap;
      } else {
        result.x += overlap;
      }
    }
  }

  if (isInside) {
    result.x += pushX;
    result.y += pushY;
  }

  return result;
}

/**
 * Line segment intersection test
 */
export function lineSegmentIntersection(
  p1: Point,
  p2: Point,
  p3: Point,
  p4: Point
): Point | null {
  const d = (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x);
  if (Math.abs(d) < 1e-8) return null;

  const u = ((p3.x - p1.x) * (p4.y - p3.y) - (p3.y - p1.y) * (p4.x - p3.x)) / d;
  const v = ((p3.x - p1.x) * (p2.y - p1.y) - (p3.y - p1.y) * (p2.x - p1.x)) / d;

  if (u >= 0 && u <= 1 && v >= 0 && v <= 1) {
    return {
      x: p1.x + u * (p2.x - p1.x),
      y: p1.y + u * (p2.y - p1.y),
    };
  }
  return null;
}

/**
 * Tests raycast intersection with a polygon. Returns closest intersection point or null.
 */
export function rayIntersectsPolygon(p1: Point, p2: Point, poly: Point[]): Point | null {
  let closestHit: Point | null = null;
  let minD = Infinity;

  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const hit = lineSegmentIntersection(p1, p2, a, b);
    if (hit) {
      const d = distanceSq(p1, hit);
      if (d < minD) {
        minD = d;
        closestHit = hit;
      }
    }
  }

  return closestHit;
}
