import test from 'node:test';
import assert from 'node:assert/strict';
import {
  geoToGameCoords,
  gameCoordsToGeo,
  getCalibrationReport,
  KRAKOW_BENCHMARK_POINTS,
} from './krakowCartography';
import { KRAKOW_GPS, PIXELS_PER_METER, WORLD_CENTER, WORLD_SIZE_PX } from '../game/constants';

test('geoToGameCoords projects Kraków reference center accurately to WORLD_CENTER', () => {
  const centerCoords = geoToGameCoords(KRAKOW_GPS.lat, KRAKOW_GPS.lon);
  assert.equal(centerCoords.x, WORLD_CENTER.x);
  assert.equal(centerCoords.y, WORLD_CENTER.y);
});

test('gameCoordsToGeo accurately reverses local coordinates to WGS84 GPS', () => {
  const geo = gameCoordsToGeo(WORLD_CENTER.x, WORLD_CENTER.y);
  assert.ok(Math.abs(geo.lat - KRAKOW_GPS.lat) < 0.0001);
  assert.ok(Math.abs(geo.lon - KRAKOW_GPS.lon) < 0.0001);
});

test('Geodetic calibration report confirms high accuracy against OpenStreetMap & Google Maps', () => {
  const report = getCalibrationReport();
  assert.ok(report.pointsTested >= 10, 'Should test at least 10 historical landmarks');
  assert.ok(report.overallAccuracyPercent >= 95, 'Accuracy score should be >= 95%');
  assert.ok(report.averageErrorMeters < 50, 'Average deviation should be well under 50m');
});

test('All benchmark points have valid coordinates and non-empty descriptions', () => {
  for (const bp of KRAKOW_BENCHMARK_POINTS) {
    assert.ok(bp.name.length > 3, `Benchmark point ${bp.id} has valid name`);
    assert.ok(bp.realGeo.lat > 50.04 && bp.realGeo.lat < 50.08, 'Latitude within Kraków center bounds');
    assert.ok(bp.realGeo.lon > 19.91 && bp.realGeo.lon < 19.96, 'Longitude within Kraków center bounds');
    assert.ok(bp.gameCoords.x > 0 && bp.gameCoords.x < WORLD_SIZE_PX, 'Game X within map pixel bounds');
    assert.ok(bp.gameCoords.y > 0 && bp.gameCoords.y < WORLD_SIZE_PX, 'Game Y within map pixel bounds');
  }
});
