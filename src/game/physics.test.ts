import test from 'node:test';
import assert from 'node:assert/strict';
import {
  pointInPolygon,
  closestPointOnSegment,
  resolveCirclePolygonCollision,
  lineSegmentIntersection,
  rayIntersectsPolygon,
} from './physics';

const testSquare = [
  { x: 0, y: 0 },
  { x: 100, y: 0 },
  { x: 100, y: 100 },
  { x: 0, y: 100 },
];

test('pointInPolygon correctly identifies interior and exterior points', () => {
  assert.equal(pointInPolygon({ x: 50, y: 50 }, testSquare), true);
  assert.equal(pointInPolygon({ x: 150, y: 50 }, testSquare), false);
  assert.equal(pointInPolygon({ x: -10, y: 50 }, testSquare), false);
  assert.equal(pointInPolygon({ x: 50, y: 150 }, testSquare), false);
});

test('closestPointOnSegment clamps to segment endpoints', () => {
  const a = { x: 0, y: 0 };
  const b = { x: 100, y: 0 };

  const closeMid = closestPointOnSegment({ x: 50, y: 25 }, a, b);
  assert.equal(closeMid.x, 50);
  assert.equal(closeMid.y, 0);

  const closeLeft = closestPointOnSegment({ x: -20, y: 10 }, a, b);
  assert.equal(closeLeft.x, 0);
  assert.equal(closeLeft.y, 0);

  const closeRight = closestPointOnSegment({ x: 130, y: -10 }, a, b);
  assert.equal(closeRight.x, 100);
  assert.equal(closeRight.y, 0);
});

test('resolveCirclePolygonCollision pushes entity out of wall', () => {
  const insidePos = { x: 50, y: 50 };
  const radius = 15;
  const resolved = resolveCirclePolygonCollision(insidePos, radius, testSquare);

  // After resolution, entity must not be inside the obstacle
  assert.equal(pointInPolygon(resolved, testSquare), false);
});

test('lineSegmentIntersection calculates accurate crossing points', () => {
  const p1 = { x: 0, y: 50 };
  const p2 = { x: 100, y: 50 };
  const p3 = { x: 50, y: 0 };
  const p4 = { x: 50, y: 100 };

  const hit = lineSegmentIntersection(p1, p2, p3, p4);
  assert.notEqual(hit, null);
  assert.equal(hit?.x, 50);
  assert.equal(hit?.y, 50);
});

test('rayIntersectsPolygon detects bullet collision with obstacle', () => {
  const bulletStart = { x: -20, y: 50 };
  const bulletEnd = { x: 80, y: 50 };

  const hit = rayIntersectsPolygon(bulletStart, bulletEnd, testSquare);
  assert.notEqual(hit, null);
  assert.equal(Math.round(hit!.x), 0);
  assert.equal(Math.round(hit!.y), 50);
});
