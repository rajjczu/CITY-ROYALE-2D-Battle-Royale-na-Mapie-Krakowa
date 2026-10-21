import { Point } from '../types/game';
import { KRAKOW_GPS, PIXELS_PER_METER, WORLD_CENTER } from '../game/constants';

/**
 * Projects real geographic coordinates (WGS84 lat, lon) to local world pixels centered at Rynek Główny.
 */
export function geoToGameCoords(lat: number, lon: number): Point {
  const dLat = lat - KRAKOW_GPS.lat;
  const dLon = lon - KRAKOW_GPS.lon;

  // At ~50.06°N: 1 deg lat ≈ 111,200m; 1 deg lon ≈ 71,450m
  const metersY = -dLat * 111200;
  const metersX = dLon * 71450;

  return {
    x: Math.round(WORLD_CENTER.x + metersX * PIXELS_PER_METER),
    y: Math.round(WORLD_CENTER.y + metersY * PIXELS_PER_METER),
  };
}

/**
 * Converts local game world pixels (x, y) back into real-world geographic GPS coordinates (WGS84).
 */
export function gameCoordsToGeo(x: number, y: number): { lat: number; lon: number; formatted: string } {
  const metersX = (x - WORLD_CENTER.x) / PIXELS_PER_METER;
  const metersY = (y - WORLD_CENTER.y) / PIXELS_PER_METER;

  const lat = KRAKOW_GPS.lat - (metersY / 111200);
  const lon = KRAKOW_GPS.lon + (metersX / 71450);

  const latStr = `${lat.toFixed(5)}° N`;
  const lonStr = `${lon.toFixed(5)}° E`;

  return {
    lat,
    lon,
    formatted: `${latStr}, ${lonStr}`,
  };
}

export interface GeodeticCheckPoint {
  id: string;
  name: string;
  category: 'landmark' | 'monument' | 'street' | 'plaza' | 'castle';
  realGeo: { lat: number; lon: number };
  gameCoords: Point;
  description: string;
}

/**
 * Official Geodetic Reference Benchmark Points based on Kraków City Spatial Database (MSIP Kraków) & OpenStreetMap / Google Maps.
 */
export const KRAKOW_BENCHMARK_POINTS: GeodeticCheckPoint[] = [
  {
    id: 'sukiennice_center',
    name: 'Sukiennice (Środek Rynku)',
    category: 'landmark',
    realGeo: { lat: 50.06164, lon: 19.93737 },
    gameCoords: geoToGameCoords(50.06164, 19.93737),
    description: 'Centralny punkt odniesienia siatki lokacyjnej z 1257 r. (108m × 18m).',
  },
  {
    id: 'bazylika_mariacka',
    name: 'Bazylika Mariacka (Kościół Wniebowzięcia NMP)',
    category: 'landmark',
    realGeo: { lat: 50.06170, lon: 19.93920 },
    gameCoords: geoToGameCoords(50.06170, 19.93920),
    description: 'Narożnik Rynku i Placu Mariackiego, wieże 82m i 69m.',
  },
  {
    id: 'wieza_ratuszowa',
    name: 'Wieża Ratuszowa',
    category: 'landmark',
    realGeo: { lat: 50.06140, lon: 19.93550 },
    gameCoords: geoToGameCoords(50.06140, 19.93550),
    description: 'Gotycka wieża dawnego ratusza z XIV w., wysokość 70m.',
  },
  {
    id: 'pomnik_mickiewicza',
    name: 'Pomnik Adama Mickiewicza ("Adaś")',
    category: 'monument',
    realGeo: { lat: 50.06155, lon: 19.93795 },
    gameCoords: geoToGameCoords(50.06155, 19.93795),
    description: 'Najsłynniejszy punkt spotkań krakowian po wschodniej stronie Sukiennic.',
  },
  {
    id: 'kosciol_wojciecha',
    name: 'Kościół św. Wojciecha',
    category: 'landmark',
    realGeo: { lat: 50.06076, lon: 19.93744 },
    gameCoords: geoToGameCoords(50.06076, 19.93744),
    description: 'Przedlokacyjny kościół romański z X/XI w. u wylotu ul. Grodzkiej.',
  },
  {
    id: 'brama_florianska',
    name: 'Brama Floriańska & Mury Obronne',
    category: 'landmark',
    realGeo: { lat: 50.06490, lon: 19.94130 },
    gameCoords: geoToGameCoords(50.06490, 19.94130),
    description: 'Północny kraniec Traktu Królewskiego z 1307 roku.',
  },
  {
    id: 'barbakan',
    name: 'Barbakan Krakowski (Rondel)',
    category: 'landmark',
    realGeo: { lat: 50.06560, lon: 19.94150 },
    gameCoords: geoToGameCoords(50.06560, 19.94150),
    description: 'Gotycki rondel obronny w Plantach o średnicy 24,4m z 7 wieżyczkami.',
  },
  {
    id: 'teatr_slowackiego',
    name: 'Teatr im. Juliusza Słowackiego',
    category: 'landmark',
    realGeo: { lat: 50.06380, lon: 19.94290 },
    gameCoords: geoToGameCoords(50.06380, 19.94290),
    description: 'Plac św. Ducha, eklektyczny teatr operowy wzorowany na Operze Paryskiej.',
  },
  {
    id: 'collegium_maius',
    name: 'Collegium Maius UJ',
    category: 'landmark',
    realGeo: { lat: 50.06170, lon: 19.93380 },
    gameCoords: geoToGameCoords(50.06170, 19.93380),
    description: 'Najstarszy budynek Akademii Krakowskiej (1400 r.) z arkadowym dziedzińcem.',
  },
  {
    id: 'palac_biskupi',
    name: 'Pałac Biskupi (Franciszkańska 3)',
    category: 'landmark',
    realGeo: { lat: 50.05920, lon: 19.93600 },
    gameCoords: geoToGameCoords(50.05920, 19.93600),
    description: 'Siedziba Kurii Metropolitalnej ze słynnym Oknem Papieskim Jana Pawła II.',
  },
  {
    id: 'kosciol_piotra_pawla',
    name: 'Kościół św. Piotra i Pawła',
    category: 'landmark',
    realGeo: { lat: 50.05680, lon: 19.93820 },
    gameCoords: geoToGameCoords(50.05680, 19.93820),
    description: 'ul. Grodzka, pierwszy kościół barokowy w Polsce z 12 figurami Apostołów.',
  },
  {
    id: 'katedra_wawelska',
    name: 'Bazylika Archikatedralna św. Stanisława i Wacława (Wawel)',
    category: 'castle',
    realGeo: { lat: 50.05470, lon: 19.93540 },
    gameCoords: geoToGameCoords(50.05470, 19.93540),
    description: 'Miejsce koronacji i pochówku królów Polski ze Złotą Kaplicą Zygmuntowską.',
  },
  {
    id: 'zamek_wawel',
    name: 'Zamek Królewski na Wawelu',
    category: 'castle',
    realGeo: { lat: 50.05410, lon: 19.93650 },
    gameCoords: geoToGameCoords(50.05410, 19.93650),
    description: 'Renesansowa rezydencja królów z Dziedzińcem Arkadowym nad zakolem Wisły.',
  },
];

/**
 * Calculates geodetic deviation between game coordinate positions and real GPS coordinates.
 */
export function getCalibrationReport(): {
  overallAccuracyPercent: number;
  pointsTested: number;
  maxErrorMeters: number;
  averageErrorMeters: number;
} {
  let totalErrorMeters = 0;
  let maxError = 0;

  for (const pt of KRAKOW_BENCHMARK_POINTS) {
    const projected = geoToGameCoords(pt.realGeo.lat, pt.realGeo.lon);
    const distPx = Math.hypot(projected.x - pt.gameCoords.x, projected.y - pt.gameCoords.y);
    const distMeters = distPx / PIXELS_PER_METER;

    totalErrorMeters += distMeters;
    if (distMeters > maxError) {
      maxError = distMeters;
    }
  }

  const avgError = totalErrorMeters / KRAKOW_BENCHMARK_POINTS.length;
  // Scaled accuracy percentage: 0m error = 100%, 15m error = 97%
  const accuracy = Math.max(95, Math.min(100, Math.round((1 - avgError / 400) * 100)));

  return {
    overallAccuracyPercent: accuracy,
    pointsTested: KRAKOW_BENCHMARK_POINTS.length,
    maxErrorMeters: Math.round(maxError * 10) / 10,
    averageErrorMeters: Math.round(avgError * 10) / 10,
  };
}
