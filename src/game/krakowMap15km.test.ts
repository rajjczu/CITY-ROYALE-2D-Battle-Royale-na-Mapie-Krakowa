import test from 'node:test';
import assert from 'node:assert/strict';
import { WORLD_SIZE_PX, WORLD_SIZE_METERS, PLAYER_RADIUS } from './constants';
import { KRAKOW_BUILDINGS, KRAKOW_STREETS, KRAKOW_PROPS, generateObstacles } from '../data/krakowMap';
import { GameEngine } from './gameEngine';
import { Point } from '../types/game';

test('Map is an exact 1.5 km by 1.5 km square (36,000 px)', () => {
  assert.equal(WORLD_SIZE_METERS, 1500, 'Map size is 1500 meters');
  assert.equal(WORLD_SIZE_PX, 36000, 'Map size is 36,000 pixels (24 px/m)');
});

test('Boundary obstacles and player clamping completely block passing beyond the 1.5km map edge', () => {
  const engine = new GameEngine();
  const BORDER_PAD = PLAYER_RADIUS + 6;

  // Try to move beyond north boundary
  engine.player.x = 18000;
  engine.player.y = 50;
  engine.update(1.0, {
    up: true,
    down: false,
    left: false,
    right: false,
    sprint: true,
    aimAngle: 0,
    shooting: false,
    reload: false,
    interact: false,
    switchSlot: null,
    useMed: false,
  });
  assert.ok(engine.player.y >= BORDER_PAD, `Player cannot cross north boundary: ${engine.player.y} >= ${BORDER_PAD}`);

  // Try to move beyond south boundary
  engine.player.x = 18000;
  engine.player.y = WORLD_SIZE_PX - 50;
  engine.update(1.0, {
    up: false,
    down: true,
    left: false,
    right: false,
    sprint: true,
    aimAngle: 0,
    shooting: false,
    reload: false,
    interact: false,
    switchSlot: null,
    useMed: false,
  });
  assert.ok(engine.player.y <= WORLD_SIZE_PX - BORDER_PAD, `Player cannot cross south boundary: ${engine.player.y} <= ${WORLD_SIZE_PX - BORDER_PAD}`);

  // Try to move beyond west boundary
  engine.player.x = 50;
  engine.player.y = 18000;
  engine.update(1.0, {
    up: false,
    down: false,
    left: true,
    right: false,
    sprint: true,
    aimAngle: 0,
    shooting: false,
    reload: false,
    interact: false,
    switchSlot: null,
    useMed: false,
  });
  assert.ok(engine.player.x >= BORDER_PAD, `Player cannot cross west boundary: ${engine.player.x} >= ${BORDER_PAD}`);

  // Try to move beyond east boundary
  engine.player.x = WORLD_SIZE_PX - 50;
  engine.player.y = 18000;
  engine.update(1.0, {
    up: false,
    down: false,
    left: false,
    right: true,
    sprint: true,
    aimAngle: 0,
    shooting: false,
    reload: false,
    interact: false,
    switchSlot: null,
    useMed: false,
  });
  assert.ok(engine.player.x <= WORLD_SIZE_PX - BORDER_PAD, `Player cannot cross east boundary: ${engine.player.x} <= ${WORLD_SIZE_PX - BORDER_PAD}`);
});

test('Over 600 authentic buildings and 750 props populate the full 1.5 km map', () => {
  assert.ok(KRAKOW_BUILDINGS.length >= 600, `Has at least 600 buildings: ${KRAKOW_BUILDINGS.length}`);
  assert.ok(KRAKOW_PROPS.length >= 750, `Has at least 750 props: ${KRAKOW_PROPS.length}`);
  assert.ok(KRAKOW_STREETS.length >= 20, `Has at least 20 streets: ${KRAKOW_STREETS.length}`);
});
