import test from 'node:test';
import assert from 'node:assert/strict';
import { WEAPON_REGISTRY } from './weapons';
import { WeaponId } from '../types/game';

test('WEAPON_REGISTRY includes all 10 distinct firearms plus melee', () => {
  const expectedWeapons: WeaponId[] = [
    'fists',
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

  for (const id of expectedWeapons) {
    const w = WEAPON_REGISTRY[id];
    assert.notEqual(w, undefined, `Weapon ${id} must exist in registry`);
    assert.equal(w.id, id);
    assert.ok(w.damage > 0, `Weapon ${id} must deal positive damage`);
    assert.ok(w.bulletSpeed > 0, `Weapon ${id} must have bullet speed`);
    assert.ok(w.range > 0, `Weapon ${id} must have range`);
  }
});

test('M16 has 3-round burst mode configured', () => {
  const m16 = WEAPON_REGISTRY.m16;
  assert.equal(m16.burstCount, 3);
  assert.equal(m16.isAutomatic, false);
});

test('AWP delivers one-hit lethal damage on unarmored target (>= 100 dmg)', () => {
  const awp = WEAPON_REGISTRY.awp;
  assert.ok(awp.damage >= 100);
  assert.equal(awp.ammoType, '300mag');
  assert.equal(awp.rarity, 'legendary');
});

test('Automatic weapons have isAutomatic flag set true', () => {
  assert.equal(WEAPON_REGISTRY.ak47.isAutomatic, true);
  assert.equal(WEAPON_REGISTRY.m4a1.isAutomatic, true);
  assert.equal(WEAPON_REGISTRY.mp5.isAutomatic, true);
  assert.equal(WEAPON_REGISTRY.ump45.isAutomatic, true);
  assert.equal(WEAPON_REGISTRY.scarl.isAutomatic, true);
});
