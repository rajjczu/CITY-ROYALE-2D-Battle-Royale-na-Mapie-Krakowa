import { WeaponId } from '../types/game';

export const PIXELS_PER_METER = 24; // 1 meter = 24 pixels in the 2D world
export const WORLD_SIZE_METERS = 2000; // 2.0 km square (Krakow Old Town, Planty, Wawel, Wisla)
export const WORLD_SIZE_PX = WORLD_SIZE_METERS * PIXELS_PER_METER; // 48,000 px

export const PLAYER_RADIUS = 14; // ~0.6m radius
export const BASE_SPEED = 5.2 * PIXELS_PER_METER; // ~125 px/s
export const SPRINT_MULTIPLIER = 1.38;

// GPS reference for Rynek Główny (Main Market Square) in Kraków
export const KRAKOW_GPS = {
  lat: 50.0614,
  lon: 19.9366,
};

// Center of the game map corresponding to Rynek Główny
export const WORLD_CENTER = {
  x: WORLD_SIZE_PX / 2, // 18,000 px
  y: WORLD_SIZE_PX / 2, // 18,000 px
};

export const DEFAULT_MAGAZINES: Record<WeaponId, number> = {
  fists: 0,
  glock17: 17,
  deagle: 7,
  mp5: 30,
  ump45: 25,
  ak47: 30,
  m4a1: 30,
  scarl: 30,
  m16: 30,
  sks: 20,
  awp: 5,
};

export const TOTAL_MATCH_PLAYERS = 20;
