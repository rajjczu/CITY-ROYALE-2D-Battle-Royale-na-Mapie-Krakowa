import test from 'node:test';
import assert from 'node:assert/strict';
import { KRAKOW_BUILDINGS, KRAKOW_STREETS, KRAKOW_PROPS, generateObstacles } from '../data/krakowMap';
import { GameEngine } from './gameEngine';
import { WORLD_CENTER } from './constants';

test('Floriańska connects from Rynek Główny through Brama Floriańska to Basztowa without dead ends', () => {
  const florianska = KRAKOW_STREETS.find(s => s.id === 'ul_florianska');
  assert.ok(florianska, 'ul_florianska must exist');

  // Starts at Rynek Główny (CY - 2200)
  const startPt = florianska.path[0];
  const endPt = florianska.path[florianska.path.length - 1];

  assert.equal(startPt.y, WORLD_CENTER.y - 2200, 'Floriańska connects directly to Rynek Główny perimeter');
  assert.ok(endPt.y <= WORLD_CENTER.y - 6800, 'Floriańska connects past Brama Floriańska to Basztowa/Planty');
});

test('All buildings use strictly 2 colors', () => {
  const roofColors = new Set(KRAKOW_BUILDINGS.map(b => b.roofColor));
  assert.equal(roofColors.size, 2, 'Buildings must use exactly 2 roof colors');
  assert.ok(roofColors.has('#9e3b2b'), 'Has terracotta red roof color');
  assert.ok(roofColors.has('#d8a359'), 'Has sandstone ochre roof color');
});

test('Every building has an address assigned', () => {
  for (const b of KRAKOW_BUILDINGS) {
    assert.ok(b.address && b.address.length > 0, `Building ${b.id} must have a valid address`);
  }
});

test('Approximately 50% of buildings have entry blocked', () => {
  const enterable = KRAKOW_BUILDINGS.filter(b => b.canEnter).length;
  const total = KRAKOW_BUILDINGS.length;
  const ratio = enterable / total;

  assert.ok(ratio >= 0.45 && ratio <= 0.55, `Ratio of enterable buildings should be ~50%, was ${(ratio * 100).toFixed(1)}%`);
});

test('Every building that can be entered has windows', () => {
  const enterableBuildings = KRAKOW_BUILDINGS.filter(b => b.canEnter);
  assert.ok(enterableBuildings.length > 100, 'Should have over 100 enterable buildings');

  for (const b of enterableBuildings) {
    assert.ok(b.windows && b.windows.length > 0, `Enterable building ${b.id} must have visible windows`);
  }
});

test('Benches allow player to sit and regenerate health', () => {
  const engine = new GameEngine();
  const bench = KRAKOW_PROPS.find(p => p.type === 'bench');
  assert.ok(bench, 'Map must contain benches');

  // Place player at bench
  engine.player.x = bench.x;
  engine.player.y = bench.y;
  engine.player.hp = 50;

  // Try sitting
  const sat = engine.trySitOrStandBench(engine.player);
  assert.equal(sat, true, 'Player can sit on nearby bench');
  assert.equal(engine.player.isSitting, true, 'Player is marked as sitting');

  // Update engine with no movement input to simulate resting
  engine.update(1.0, {
    up: false,
    down: false,
    left: false,
    right: false,
    sprint: false,
    aimAngle: 0,
    shooting: false,
    reload: false,
    interact: false,
    switchSlot: null,
    useMed: false,
  });

  assert.ok(engine.player.hp > 50, `Health should increase while resting on bench, was ${engine.player.hp}`);
});

test('Doors in enterable buildings are operable and toggle open/closed', () => {
  const engine = new GameEngine();
  const enterable = KRAKOW_BUILDINGS.find(b => b.canEnter && b.doors.length > 0);
  assert.ok(enterable, 'Must have enterable building with doors');

  const door = enterable.doors[0];
  assert.equal(door.isOpen, false, 'Door starts closed');

  // Place player near door
  engine.player.x = door.x;
  engine.player.y = door.y;

  const toggled = engine.tryToggleNearbyDoor(engine.player);
  assert.equal(toggled, true, 'Door toggled successfully');
  assert.equal(door.isOpen, true, 'Door is now open');

  const toggledBack = engine.tryToggleNearbyDoor(engine.player);
  assert.equal(toggledBack, true, 'Door toggled back');
  assert.equal(door.isOpen, false, 'Door is now closed');
});

test('Street lamps are placed throughout Krakow streets', () => {
  const lamps = KRAKOW_PROPS.filter(p => p.type === 'lamp');
  assert.ok(lamps.length >= 150, `Should have at least 150 street lamps, found ${lamps.length}`);
});

test('Horizontal streets have clear corridors without overlapping buildings', () => {
  const horizontalStreets = [
    { name: 'ul. św. Tomasza', y: WORLD_CENTER.y - 3600, minX: WORLD_CENTER.x - 3800, maxX: WORLD_CENTER.x + 4000 },
    { name: 'ul. św. Marka', y: WORLD_CENTER.y - 4800, minX: WORLD_CENTER.x - 3800, maxX: WORLD_CENTER.x + 4000 },
    { name: 'ul. Pijarska', y: WORLD_CENTER.y - 5800, minX: WORLD_CENTER.x - 3200, maxX: WORLD_CENTER.x + 3400 },
  ];

  for (const st of horizontalStreets) {
    for (const b of KRAKOW_BUILDINGS) {
      const minX = Math.min(...b.polygon.map(p => p.x));
      const maxX = Math.max(...b.polygon.map(p => p.x));
      const minY = Math.min(...b.polygon.map(p => p.y));
      const maxY = Math.max(...b.polygon.map(p => p.y));

      // Check if building polygon covers the street corridor
      const overlapsX = minX < st.maxX && maxX > st.minX;
      const overlapsY = minY < st.y && maxY > st.y;
      assert.ok(
        !(overlapsX && overlapsY),
        `Building ${b.id} (${b.name}) overlaps horizontal street ${st.name} at y=${st.y}`
      );
    }
  }
});
