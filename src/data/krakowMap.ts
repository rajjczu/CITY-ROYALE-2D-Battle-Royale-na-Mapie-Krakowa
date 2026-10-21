import {
  BuildingData,
  Obstacle,
  ParkData,
  PlazaData,
  Point,
  PropData,
  StreetData,
} from '../types/game';
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

// Center of Kraków world (Rynek Główny) in pixels: 18,000 px, 18,000 px
const CX = WORLD_CENTER.x;
const CY = WORLD_CENTER.y;

// Helper to create rectangular polygon
export function makeRect(x: number, y: number, w: number, h: number): Point[] {
  return [
    { x, y },
    { x: x + w, y },
    { x: x + w, y: y + h },
    { x, y: y + h },
  ];
}

// Helper to create a thick wall rectangle between two points
export function makeWallSegment(p1: Point, p2: Point, thickness = 14): Point[] {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy);
  if (len < 1) return [p1, p2, p2, p1];

  const nx = (-dy / len) * (thickness / 2);
  const ny = (dx / len) * (thickness / 2);

  return [
    { x: p1.x + nx, y: p1.y + ny },
    { x: p2.x + nx, y: p2.y + ny },
    { x: p2.x - nx, y: p2.y - ny },
    { x: p1.x - nx, y: p1.y - ny },
  ];
}

// ========================================================
// 1. PLACE I RYNKI (Historical Plazas & Public Squares)
// ========================================================
export const KRAKOW_PLAZAS: PlazaData[] = [
  {
    id: 'rynek_glowny',
    name: 'Rynek Główny (200m × 200m — Największy Rynek Średniowiecznej Europy)',
    polygon: makeRect(CX - 2400, CY - 2400, 4800, 4800),
  },
  {
    id: 'maly_rynek',
    name: 'Mały Rynek (Dawny Rynek Sukienniczy i Targ Mięsny)',
    polygon: makeRect(CX + 2700, CY - 1400, 1100, 2200),
  },
  {
    id: 'plac_mariacki',
    name: 'Plac Mariacki i Dawny Cmentarz Parafialny',
    polygon: makeRect(CX + 1600, CY - 2100, 1050, 1200),
  },
  {
    id: 'plac_szczepanski',
    name: 'Plac Szczepański (Stary Teatr i Pałac Sztuki)',
    polygon: makeRect(CX - 4200, CY - 3600, 1800, 1700),
  },
  {
    id: 'plac_wszystkich_swietych',
    name: 'Plac Wszystkich Świętych i Pałac Wielopolskich',
    polygon: makeRect(CX + 100, CY + 2800, 1800, 1300),
  },
  {
    id: 'plac_sw_marii_magdaleny',
    name: 'Plac św. Marii Magdaleny (Kościół św. Piotra i Pawła)',
    polygon: makeRect(CX + 200, CY + 5400, 900, 900),
  },
  {
    id: 'plac_sw_ducha',
    name: 'Plac św. Ducha (Teatr im. J. Słowackiego)',
    polygon: makeRect(CX + 3800, CY - 4900, 1800, 1600),
  },
  {
    id: 'plac_kolejowy',
    name: 'Plac Kolejowy (Zabytkowy Dworzec Główny PKP)',
    polygon: makeRect(CX + 5400, CY - 5800, 1600, 1400),
  },
  {
    id: 'dziedziniec_arkadowy_wawel',
    name: 'Wawel — Renesansowy Dziedziniec Arkadowy',
    polygon: makeRect(CX - 200, CY + 8400, 1300, 1300),
  },
  {
    id: 'dziedziniec_zewnetrzny_wawel',
    name: 'Wawel — Dziedziniec Zewnętrzny (Pod Katedrą)',
    polygon: makeRect(CX - 1900, CY + 8100, 1600, 1400),
  },
  {
    id: 'bulwary_wislane',
    name: 'Bulwary Wiślane pod Wawelem',
    polygon: [
      { x: CX - 7200, y: CY + 9200 },
      { x: CX - 4800, y: CY + 10400 },
      { x: CX - 2200, y: CY + 11800 },
      { x: CX + 2000, y: CY + 12800 },
      { x: CX + 6000, y: CY + 12600 },
      { x: CX + 6000, y: CY + 13200 },
      { x: CX - 2200, y: CY + 12400 },
      { x: CX - 7200, y: CY + 9800 },
    ],
  },
];

// ========================================================
// 2. RZEKA WISŁA (Vistula River Bend)
// ========================================================
export interface RiverData {
  id: string;
  name: string;
  polygon: Point[];
}

export const KRAKOW_RIVER: RiverData = {
  id: 'wisla_krakow',
  name: 'Wisła — Zakole pod Wawelem i Smoczą Jamą',
  polygon: [
    { x: CX - 9000, y: CY + 6500 },
    { x: CX - 6500, y: CY + 8200 },
    { x: CX - 4200, y: CY + 10200 },
    { x: CX - 2400, y: CY + 12400 },
    { x: CX + 200, y: CY + 13800 },
    { x: CX + 3200, y: CY + 14200 },
    { x: CX + 7500, y: CY + 13800 },
    { x: CX + 9000, y: CY + 13500 },
    { x: CX + 9000, y: CY + 17500 },
    { x: CX - 9000, y: CY + 17500 },
  ],
};

// ========================================================
// 3. ULICE I CHODNIKI KRAKOWA (Full Real Street Network)
// ========================================================
export const KRAKOW_STREETS: StreetData[] = [
  // --- TRAKT KRÓLEWSKI (DROGA KRÓLEWSKA) ---
  {
    id: 'ul_florianska',
    name: 'ul. Floriańska (Rynek Główny <-> Brama Floriańska <-> Planty <-> Basztowa)',
    width: 56,
    sidewalkWidth: 20,
    path: [
      { x: CX + 820, y: CY - 2200 },
      { x: CX + 820, y: CY - 3600 },
      { x: CX + 820, y: CY - 4800 },
      { x: CX + 820, y: CY - 5800 },
      { x: CX + 820, y: CY - 6120 },
      { x: CX + 820, y: CY - 6800 },
      { x: CX + 820, y: CY - 7400 },
    ],
  },
  {
    id: 'ul_grodzka',
    name: 'ul. Grodzka (Rynek -> Plac Wszystkich Świętych -> Wawel)',
    width: 60,
    sidewalkWidth: 20,
    path: [
      { x: CX + 820, y: CY + 2200 },
      { x: CX + 820, y: CY + 3600 },
      { x: CX + 820, y: CY + 4600 },
      { x: CX + 820, y: CY + 5500 },
      { x: CX + 720, y: CY + 6500 },
      { x: CX + 400, y: CY + 7800 },
    ],
  },
  {
    id: 'ul_kanonicza',
    name: 'ul. Kanonicza (Najstarsza ulica Krakowa — Kanonie i Pałace)',
    width: 46,
    sidewalkWidth: 16,
    path: [
      { x: CX + 240, y: CY + 4600 },
      { x: CX + 240, y: CY + 6200 },
      { x: CX - 80, y: CY + 7800 },
    ],
  },
  {
    id: 'ul_senacka',
    name: 'ul. Senacka (Muzeum Archeologiczne)',
    width: 40,
    sidewalkWidth: 14,
    path: [
      { x: CX - 1000, y: CY + 5500 },
      { x: CX + 1100, y: CY + 5500 },
    ],
  },
  {
    id: 'ul_poselska',
    name: 'ul. Poselska (Klasztor Franciszkanów -> Grodzka -> Stolarska)',
    width: 44,
    sidewalkWidth: 16,
    path: [
      { x: CX - 2200, y: CY + 4600 },
      { x: CX + 1600, y: CY + 4600 },
    ],
  },

  // --- ULICE PÓŁNOCNE ---
  {
    id: 'ul_slawkowska',
    name: 'ul. Sławkowska (Rynek -> Planty -> Basztowa)',
    width: 50,
    sidewalkWidth: 18,
    path: [
      { x: CX - 820, y: CY - 2200 },
      { x: CX - 820, y: CY - 3600 },
      { x: CX - 820, y: CY - 4800 },
      { x: CX - 820, y: CY - 5800 },
      { x: CX - 820, y: CY - 6800 },
    ],
  },
  {
    id: 'ul_sw_jana',
    name: 'ul. św. Jana (Rynek -> Pałac Czartoryskich -> Pijarska)',
    width: 46,
    sidewalkWidth: 16,
    path: [
      { x: CX, y: CY - 2200 },
      { x: CX, y: CY - 3600 },
      { x: CX, y: CY - 4800 },
      { x: CX, y: CY - 5800 },
    ],
  },
  {
    id: 'ul_szczepanska',
    name: 'ul. Szczepańska (Rynek -> Plac Szczepański)',
    width: 48,
    sidewalkWidth: 16,
    path: [
      { x: CX - 2200, y: CY - 1800 },
      { x: CX - 4000, y: CY - 1800 },
    ],
  },
  {
    id: 'ul_sw_tomasza',
    name: 'ul. św. Tomasza (Główna przecznica północna)',
    width: 44,
    sidewalkWidth: 16,
    path: [
      { x: CX - 3800, y: CY - 3600 },
      { x: CX + 4000, y: CY - 3600 },
    ],
  },
  {
    id: 'ul_sw_marka',
    name: 'ul. św. Marka',
    width: 44,
    sidewalkWidth: 16,
    path: [
      { x: CX - 3800, y: CY - 4800 },
      { x: CX + 4000, y: CY - 4800 },
    ],
  },
  {
    id: 'ul_pijarska',
    name: 'ul. Pijarska (Wzdłuż Murów Obronnych)',
    width: 48,
    sidewalkWidth: 16,
    path: [
      { x: CX - 3200, y: CY - 5800 },
      { x: CX + 3400, y: CY - 5800 },
    ],
  },

  // --- ULICE ZACHODNIE ---
  {
    id: 'ul_szewska',
    name: 'ul. Szewska (Rynek -> Teatr Bagatela / Planty)',
    width: 52,
    sidewalkWidth: 18,
    path: [
      { x: CX - 2200, y: CY - 820 },
      { x: CX - 4400, y: CY - 820 },
      { x: CX - 5800, y: CY - 820 },
    ],
  },
  {
    id: 'ul_sw_anny',
    name: 'ul. św. Anny (Rynek -> Collegium Maius -> Planty)',
    width: 50,
    sidewalkWidth: 18,
    path: [
      { x: CX - 2200, y: CY + 820 },
      { x: CX - 4400, y: CY + 820 },
      { x: CX - 5800, y: CY + 820 },
    ],
  },
  {
    id: 'ul_jagiellonska',
    name: 'ul. Jagiellońska (Plac Szczepański -> Collegium Maius)',
    width: 46,
    sidewalkWidth: 16,
    path: [
      { x: CX - 3600, y: CY - 2400 },
      { x: CX - 3600, y: CY + 2200 },
    ],
  },
  {
    id: 'ul_golebia',
    name: 'ul. Gołębia (Collegium Novum UJ)',
    width: 44,
    sidewalkWidth: 16,
    path: [
      { x: CX - 5800, y: CY + 1800 },
      { x: CX - 2200, y: CY + 1800 },
    ],
  },
  {
    id: 'ul_wislna',
    name: 'ul. Wiślna (Rynek -> Planty / Franciszkańska)',
    width: 50,
    sidewalkWidth: 18,
    path: [
      { x: CX - 820, y: CY + 2200 },
      { x: CX - 820, y: CY + 3600 },
      { x: CX - 2400, y: CY + 3600 },
      { x: CX - 5200, y: CY + 3600 },
    ],
  },
  {
    id: 'ul_bracka',
    name: 'ul. Bracka (Rynek -> Bazylika Franciszkanów)',
    width: 46,
    sidewalkWidth: 16,
    path: [
      { x: CX, y: CY + 2200 },
      { x: CX, y: CY + 3600 },
    ],
  },

  // --- ULICE WSCHODNIE ---
  {
    id: 'ul_szpitalna',
    name: 'ul. Szpitalna (Teatr Słowackiego -> Mały Rynek)',
    width: 48,
    sidewalkWidth: 16,
    path: [
      { x: CX + 2400, y: CY - 2200 },
      { x: CX + 2400, y: CY - 5800 },
    ],
  },
  {
    id: 'ul_mikolajska',
    name: 'ul. Mikołajska (Rynek -> Mały Rynek -> Planty)',
    width: 50,
    sidewalkWidth: 18,
    path: [
      { x: CX + 2200, y: CY - 820 },
      { x: CX + 4400, y: CY - 820 },
      { x: CX + 5800, y: CY - 820 },
    ],
  },
  {
    id: 'ul_sienna',
    name: 'ul. Sienna (Rynek -> Mały Rynek -> Planty / Poczta Główna)',
    width: 52,
    sidewalkWidth: 18,
    path: [
      { x: CX + 2200, y: CY + 820 },
      { x: CX + 4400, y: CY + 820 },
      { x: CX + 5800, y: CY + 820 },
    ],
  },
  {
    id: 'ul_stolarska',
    name: 'ul. Stolarska (Klasztor Dominikanów & Konsulaty)',
    width: 44,
    sidewalkWidth: 16,
    path: [
      { x: CX + 1800, y: CY + 820 },
      { x: CX + 1800, y: CY + 3800 },
    ],
  },
  {
    id: 'ul_franciszkanska',
    name: 'ul. Franciszkańska (Pałac Biskupi / Okno Papieskie)',
    width: 62,
    sidewalkWidth: 20,
    path: [
      { x: CX - 5800, y: CY + 3600 },
      { x: CX + 820, y: CY + 3600 },
    ],
  },
  {
    id: 'ul_dominikanska',
    name: 'ul. Dominikańska (Plac Wszystkich Świętych -> Poczta)',
    width: 60,
    sidewalkWidth: 20,
    path: [
      { x: CX + 820, y: CY + 3600 },
      { x: CX + 5800, y: CY + 3600 },
    ],
  },

  // --- ULICE OKOLIC WAWELU I OBWODNICA PLANT ---
  {
    id: 'ul_podzamcze',
    name: 'ul. Podzamcze (Dojście pod Wawel)',
    width: 62,
    sidewalkWidth: 20,
    path: [
      { x: CX - 4200, y: CY + 7800 },
      { x: CX + 2400, y: CY + 7800 },
    ],
  },
  {
    id: 'ul_straszewskiego',
    name: 'ul. Straszewskiego (Zachodnia obwodnica Plant)',
    width: 62,
    sidewalkWidth: 20,
    path: [
      { x: CX - 6000, y: CY - 2800 },
      { x: CX - 6000, y: CY + 5400 },
      { x: CX - 4200, y: CY + 7800 },
    ],
  },
  {
    id: 'ul_basztowa',
    name: 'ul. Basztowa (Północna obwodnica Plant)',
    width: 64,
    sidewalkWidth: 22,
    path: [
      { x: CX - 5400, y: CY - 6800 },
      { x: CX + 5400, y: CY - 6800 },
    ],
  },
  {
    id: 'ul_westerplatte',
    name: 'ul. Westerplatte (Wschodnia obwodnica Plant)',
    width: 64,
    sidewalkWidth: 22,
    path: [
      { x: CX + 6500, y: CY - 5600 },
      { x: CX + 6500, y: CY + 3800 },
    ],
  },
  {
    id: 'ul_sw_gertrudy',
    name: 'ul. św. Gertrudy (Południowo-wschodnia obwodnica Plant)',
    width: 60,
    sidewalkWidth: 20,
    path: [
      { x: CX + 6000, y: CY + 3600 },
      { x: CX + 4000, y: CY + 6800 },
      { x: CX + 1800, y: CY + 7800 },
    ],
  },
];

// ========================================================
// 4. PLANTY KRAKOWSKIE (Continuous Green Belt Ring)
// ========================================================
export const KRAKOW_PARKS: ParkData[] = [
  {
    id: 'planty_barbakan',
    name: 'Planty — Ogród przy Barbakanie i Bramie Floriańskiej',
    polygon: [
      { x: CX - 5000, y: CY - 6700 },
      { x: CX + 5000, y: CY - 6700 },
      { x: CX + 5000, y: CY - 5900 },
      { x: CX - 5000, y: CY - 5900 },
    ],
  },
  {
    id: 'planty_slowacki',
    name: 'Planty — Ogród przy Teatrze Słowackiego i św. Krzyżu',
    polygon: [
      { x: CX + 4800, y: CY - 6700 },
      { x: CX + 6400, y: CY - 6700 },
      { x: CX + 6400, y: CY - 2600 },
      { x: CX + 4800, y: CY - 2600 },
    ],
  },
  {
    id: 'planty_grodek',
    name: 'Planty — Ogród Na Gródku (Mikołajska / Sienna)',
    polygon: [
      { x: CX + 4800, y: CY - 2600 },
      { x: CX + 6400, y: CY - 2600 },
      { x: CX + 6400, y: CY + 2200 },
      { x: CX + 4800, y: CY + 2200 },
    ],
  },
  {
    id: 'planty_straszewski',
    name: 'Planty — Ogród Uniwersytecki (Collegium Novum & Bagatela)',
    polygon: [
      { x: CX - 6400, y: CY - 5900 },
      { x: CX - 4800, y: CY - 5900 },
      { x: CX - 4800, y: CY + 4800 },
      { x: CX - 6400, y: CY + 4800 },
    ],
  },
  {
    id: 'planty_wawel',
    name: 'Planty — Ogród Zamkowy pod Wawelem',
    polygon: [
      { x: CX - 4800, y: CY + 4800 },
      { x: CX + 3600, y: CY + 4800 },
      { x: CX + 3600, y: CY + 7600 },
      { x: CX - 4800, y: CY + 7600 },
    ],
  },
  {
    id: 'wzgorze_wawelskie_ogrody',
    name: 'Wzgórze Wawelskie — Ogrody Królewskie i Zbocza',
    polygon: [
      { x: CX - 3200, y: CY + 7800 },
      { x: CX + 2800, y: CY + 7800 },
      { x: CX + 2800, y: CY + 11500 },
      { x: CX - 3200, y: CY + 11500 },
    ],
  },
];

// ========================================================
// 5. PEŁNY KATALOG BUDYNKÓW I KAMIENIC STAREGO MIASTA
// (Kompletna siatka katastralna: 587 kamienic i monumentów)
// ========================================================
import { KRAKOW_BUILDINGS } from "./krakowBuildings";
export { KRAKOW_BUILDINGS };

// ========================================================
// 6. ELEMENTY OTOCZENIA (Drzewa, Latarnie, Ławki, Pomniki, Fontanny)
// ========================================================
export function generateKrakowProps(): PropData[] {
  const props: PropData[] = [];
  let propId = 1;

  // ------------------------------------------------------
  // A. SETKI AUTENTYCZNYCH DRZEW W PIERŚCIENIU PLANT I PARKU
  // ------------------------------------------------------
  // 1. Planty Północne (Barbakan / Floriańska / Pijarska)
  for (let x = CX - 5400; x <= CX + 5400; x += 190) {
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: x + Math.sin(x * 0.01) * 60,
      y: CY - 6300 + Math.cos(x * 0.01) * 70,
      radius: 44 + ((x % 3) * 6),
      hasCollision: true,
    });
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: x + 90,
      y: CY - 6050,
      radius: 40 + ((x % 4) * 5),
      hasCollision: true,
    });
  }

  // 2. Planty Wschodnie (Westerplatte / Teatr Słowackiego / Poczta Główna)
  for (let y = CY - 6000; y <= CY + 3800; y += 190) {
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: CX + 5700 + Math.sin(y * 0.01) * 70,
      y: y + Math.cos(y * 0.01) * 40,
      radius: 46 + ((y % 3) * 6),
      hasCollision: true,
    });
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: CX + 5350,
      y: y + 90,
      radius: 42,
      hasCollision: true,
    });
  }

  // 3. Planty Zachodnie (Straszewskiego / Bagatela / Collegium Novum)
  for (let y = CY - 6000; y <= CY + 5800; y += 190) {
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: CX - 5600 + Math.sin(y * 0.01) * 70,
      y: y + Math.cos(y * 0.01) * 40,
      radius: 46 + ((y % 3) * 6),
      hasCollision: true,
    });
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: CX - 5250,
      y: y + 90,
      radius: 42,
      hasCollision: true,
    });
  }

  // 4. Planty pod Wawelem i Zbocza Wzgórza Wawelskiego
  for (let x = CX - 3800; x <= CX + 3400; x += 220) {
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: x + Math.cos(x * 0.01) * 50,
      y: CY + 7300 + Math.sin(x * 0.01) * 60,
      radius: 48,
      hasCollision: true,
    });
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: x + 100,
      y: CY + 7600,
      radius: 42,
      hasCollision: true,
    });
  }

  // 5. Drzewa na Rynku, Placu Szczepańskim i Małym Rynku
  const squareTrees = [
    { x: CX + 1200, y: CY - 600 },
    { x: CX + 1250, y: CY - 400 },
    { x: CX + 1300, y: CY - 200 },
    { x: CX - 1300, y: CY + 600 },
    { x: CX - 1350, y: CY + 800 },
    { x: CX - 1400, y: CY + 1000 },
    { x: CX + 600, y: CY + 1800 },
    { x: CX + 500, y: CY + 1850 },
    // Plac Szczepański
    { x: CX - 3900, y: CY - 3400 },
    { x: CX - 3900, y: CY - 3100 },
    { x: CX - 3900, y: CY - 2800 },
    // Mały Rynek
    { x: CX + 3400, y: CY - 1000 },
    { x: CX + 3400, y: CY - 500 },
    { x: CX + 3400, y: CY },
  ];
  for (const t of squareTrees) {
    props.push({
      id: `tree_${propId++}`,
      type: 'tree',
      x: t.x,
      y: t.y,
      radius: 36,
      hasCollision: true,
    });
  }

  // ------------------------------------------------------
  // B. ZABYTKOWE LATARNIE KRAKOWSKIE EMITUJĄCE ŚWIATŁO (250+)
  // ------------------------------------------------------
  // Obwód Rynku Głównego
  const rynekLamps = [
    { x: -2100, y: -2100 }, { x: -1050, y: -2100 }, { x: 0, y: -2100 }, { x: 1050, y: -2100 }, { x: 2100, y: -2100 },
    { x: 2100, y: -1050 }, { x: 2100, y: 0 }, { x: 2100, y: 1050 }, { x: 2100, y: 2100 },
    { x: 1050, y: 2100 }, { x: 0, y: 2100 }, { x: -1050, y: 2100 }, { x: -2100, y: 2100 },
    { x: -2100, y: 1050 }, { x: -2100, y: 0 }, { x: -2100, y: -1050 },
    // Przy Sukiennicach
    { x: -450, y: -1200 }, { x: 450, y: -1200 }, { x: -450, y: 0 }, { x: 450, y: 0 }, { x: -450, y: 1200 }, { x: 450, y: 1200 },
  ];
  for (const l of rynekLamps) {
    props.push({
      id: `lamp_${propId++}`,
      type: 'lamp',
      x: CX + l.x,
      y: CY + l.y,
      radius: 8,
      hasCollision: true,
    });
  }

  // Wzdłuż ul. Floriańskiej (na obu chodnikach co 260px)
  for (let y = CY - 2200; y >= CY - 7200; y -= 260) {
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX + 770, y, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX + 870, y, radius: 7, hasCollision: true });
  }

  // Wzdłuż ul. Grodzkiej i Kanoniczej do Wawelu (co 280px)
  for (let y = CY + 2200; y <= CY + 7600; y += 280) {
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX + 770, y, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX + 870, y, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX + 200, y, radius: 7, hasCollision: true });
  }

  // Wzdłuż ul. Sławkowskiej i św. Jana (co 280px)
  for (let y = CY - 2200; y >= CY - 5800; y -= 280) {
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX - 870, y, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX - 770, y, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX - 50, y, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x: CX + 50, y, radius: 7, hasCollision: true });
  }

  // Wzdłuż ul. Szewskiej i św. Anny (co 280px)
  for (let x = CX - 2200; x >= CX - 5800; x -= 280) {
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY - 860, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY - 780, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY + 780, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY + 860, radius: 7, hasCollision: true });
  }

  // Wzdłuż ul. Siennej i Mikołajskiej (co 280px)
  for (let x = CX + 2200; x <= CX + 5800; x += 280) {
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY - 860, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY - 780, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY + 780, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY + 860, radius: 7, hasCollision: true });
  }

  // Wzdłuż przecznicy św. Tomasza i św. Marka
  for (let x = CX - 3600; x <= CX + 3800; x += 350) {
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY - 3640, radius: 7, hasCollision: true });
    props.push({ id: `lamp_${propId++}`, type: 'lamp', x, y: CY - 4840, radius: 7, hasCollision: true });
  }

  // ------------------------------------------------------
  // C. ŁAWKI MIEJSKIE I PARKOWE (Można usiąść, regenerują zdrowie!)
  // ------------------------------------------------------
  // 1. Ławki na Rynku Głównym
  const rynekBenches = [
    { x: -1400, y: -1900, w: 48, h: 18 },
    { x: -900, y: -1900, w: 48, h: 18 },
    { x: 900, y: -1900, w: 48, h: 18 },
    { x: 1400, y: -1900, w: 48, h: 18 },
    { x: -1400, y: 1900, w: 48, h: 18 },
    { x: -900, y: 1900, w: 48, h: 18 },
    { x: 900, y: 1900, w: 48, h: 18 },
    { x: 1400, y: 1900, w: 48, h: 18 },
    { x: -1900, y: -900, w: 18, h: 48 },
    { x: -1900, y: 900, w: 18, h: 48 },
    { x: 1900, y: -900, w: 18, h: 48 },
    { x: 1900, y: 900, w: 18, h: 48 },
    // Koło Adasia i Sukiennic
    { x: 600, y: -200, w: 48, h: 18 },
    { x: 600, y: -500, w: 48, h: 18 },
    { x: -600, y: -200, w: 48, h: 18 },
    { x: -600, y: 200, w: 48, h: 18 },
  ];
  for (const rb of rynekBenches) {
    props.push({
      id: `bench_${propId++}`,
      type: 'bench',
      x: CX + rb.x,
      y: CY + rb.y,
      w: rb.w,
      h: rb.h,
      hasCollision: false,
    });
  }

  // 2. Ławki na ul. Floriańskiej (na chodnikach)
  for (let y = CY - 2800; y >= CY - 5600; y -= 700) {
    props.push({ id: `bench_${propId++}`, type: 'bench', x: CX + 760, y, w: 18, h: 46, hasCollision: false });
    props.push({ id: `bench_${propId++}`, type: 'bench', x: CX + 880, y: y - 350, w: 18, h: 46, hasCollision: false });
  }

  // 3. Ławki na ul. Grodzkiej
  for (let y = CY + 2800; y <= CY + 7000; y += 700) {
    props.push({ id: `bench_${propId++}`, type: 'bench', x: CX + 760, y, w: 18, h: 46, hasCollision: false });
    props.push({ id: `bench_${propId++}`, type: 'bench', x: CX + 880, y: y + 350, w: 18, h: 46, hasCollision: false });
  }

  // 4. Ławki na ul. Sławkowskiej i Szewskiej
  for (let y = CY - 2800; y >= CY - 5400; y -= 800) {
    props.push({ id: `bench_${propId++}`, type: 'bench', x: CX - 880, y, w: 18, h: 46, hasCollision: false });
  }
  for (let x = CX - 2600; x >= CX - 5200; x -= 800) {
    props.push({ id: `bench_${propId++}`, type: 'bench', x, y: CY - 860, w: 46, h: 18, hasCollision: false });
  }

  // 5. Ławki w Plantach i przy Wawele
  for (let x = CX - 4800; x <= CX + 4800; x += 320) {
    props.push({ id: `bench_${propId++}`, type: 'bench', x, y: CY - 6000, w: 46, h: 18, hasCollision: false });
    props.push({ id: `bench_${propId++}`, type: 'bench', x, y: CY + 7600, w: 46, h: 18, hasCollision: false });
  }
  for (let y = CY - 4800; y <= CY + 4800; y += 360) {
    props.push({ id: `bench_${propId++}`, type: 'bench', x: CX + 5100, y, w: 18, h: 46, hasCollision: false });
    props.push({ id: `bench_${propId++}`, type: 'bench', x: CX - 5000, y, w: 18, h: 46, hasCollision: false });
  }

  // ------------------------------------------------------
  // D. KRAMY KWIATOWE NA RYNKU GŁÓWNYM
  // ------------------------------------------------------
  const stalls = [
    { x: CX + 650, y: CY - 850, w: 100, h: 60 },
    { x: CX + 650, y: CY - 650, w: 100, h: 60 },
    { x: CX + 650, y: CY - 450, w: 100, h: 60 },
    { x: CX - 650, y: CY + 450, w: 100, h: 60 },
    { x: CX - 650, y: CY + 650, w: 100, h: 60 },
    { x: CX - 650, y: CY + 850, w: 100, h: 60 },
  ];
  for (const s of stalls) {
    props.push({
      id: `stall_${propId++}`,
      type: 'stall',
      x: s.x,
      y: s.y,
      w: s.w,
      h: s.h,
      hasCollision: true,
    });
  }

  // ------------------------------------------------------
  // E. SŁYNNE KRAKOWSKIE POMNIKI I FONTANNY
  // ------------------------------------------------------
  // Pomnik Adama Mickiewicza ("Adaś" na Rynku)
  props.push({
    id: 'pomnik_mickiewicza',
    type: 'monument',
    x: CX + 720,
    y: CY - 350,
    w: 90,
    h: 90,
    hasCollision: true,
  });

  // Pomnik Tadeusza Kościuszki na Wawelu
  props.push({
    id: 'pomnik_kosciuszki_wawel',
    type: 'monument',
    x: CX - 1300,
    y: CY + 7900,
    w: 80,
    h: 80,
    hasCollision: true,
  });

  // Pomnik Mikołaja Kopernika w Plantach (przy Collegium Novum)
  props.push({
    id: 'pomnik_kopernika_planty',
    type: 'monument',
    x: CX - 4800,
    y: CY + 2400,
    w: 75,
    h: 75,
    hasCollision: true,
  });

  // Fontanna Mariacka (Plac Mariacki)
  props.push({
    id: 'fontanna_mariacka',
    type: 'fountain',
    x: CX + 1900,
    y: CY - 1300,
    radius: 40,
    hasCollision: true,
  });

  // Fontanna Kryształowa na Rynku (po zachodniej stronie Sukiennic)
  props.push({
    id: 'fontanna_krysztal_rynek',
    type: 'fountain',
    x: CX - 750,
    y: CY + 800,
    radius: 45,
    hasCollision: true,
  });

  // Fontanna na Placu Szczepańskim
  props.push({
    id: 'fontanna_szczepanski',
    type: 'fountain',
    x: CX - 3300,
    y: CY - 3200,
    radius: 50,
    hasCollision: true,
  });

  return props;
}

export const KRAKOW_PROPS: PropData[] = generateKrakowProps();

// ========================================================
// 7. PRZESZKODY FIZYCZNE (Dla kolizji postaci i kul)
// ========================================================
export function generateObstacles(): Obstacle[] {
  const obstacles: Obstacle[] = [];

  // 1. Zewnętrzne ściany budynków z przerwami na drzwi wejściowe
  for (const b of KRAKOW_BUILDINGS) {
    const pts = b.polygon;
    for (let i = 0; i < pts.length; i++) {
      const p1 = pts[i];
      const p2 = pts[(i + 1) % pts.length];

      // Znajdź drzwi leżące wzdłuż tego odcinka ściany
      const edgeDoors = b.doors.filter(d => {
        const abx = p2.x - p1.x;
        const aby = p2.y - p1.y;
        const lenSq = abx * abx + aby * aby;
        if (lenSq === 0) return false;
        const t = ((d.x - p1.x) * abx + (d.y - p1.y) * aby) / lenSq;
        if (t < 0.05 || t > 0.95) return false;
        const projX = p1.x + t * abx;
        const projY = p1.y + t * aby;
        return Math.hypot(d.x - projX, d.y - projY) < 50;
      });

      if (edgeDoors.length === 0) {
        obstacles.push({
          id: `wall_${b.id}_${i}`,
          points: makeWallSegment(p1, p2),
          isBuilding: true,
          buildingId: b.id,
          hasRoof: true,
        });
      } else {
        const door = edgeDoors[0];
        const halfDoor = (door.width || 80) / 2;
        const edgeLen = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        const dirX = (p2.x - p1.x) / edgeLen;
        const dirY = (p2.y - p1.y) / edgeLen;

        const doorLeft = {
          x: door.x - dirX * halfDoor,
          y: door.y - dirY * halfDoor,
        };
        const doorRight = {
          x: door.x + dirX * halfDoor,
          y: door.y + dirY * halfDoor,
        };

        obstacles.push({
          id: `wall_${b.id}_${i}_a`,
          points: makeWallSegment(p1, doorLeft),
          isBuilding: true,
          buildingId: b.id,
          hasRoof: true,
        });
        obstacles.push({
          id: `wall_${b.id}_${i}_b`,
          points: makeWallSegment(doorRight, p2),
          isBuilding: true,
          buildingId: b.id,
          hasRoof: true,
        });
        // Doorway segment obstacle: active when door is closed, cleared when open!
        obstacles.push({
          id: `door_obs_${door.id}`,
          points: makeWallSegment(doorLeft, doorRight),
          isBuilding: true,
          buildingId: b.id,
          hasRoof: true,
        });
      }
    }
  }

  // 2. Przeszkody z kolizją z elementów otoczenia
  for (const p of KRAKOW_PROPS) {
    if (p.hasCollision) {
      if (p.type === 'tree') {
        const tr = 14;
        obstacles.push({
          id: `obs_${p.id}`,
          points: makeRect(p.x - tr, p.y - tr, tr * 2, tr * 2),
          isBuilding: false,
        });
      } else if (p.type === 'monument' || p.type === 'stall') {
        const w = p.w || 60;
        const h = p.h || 60;
        obstacles.push({
          id: `obs_${p.id}`,
          points: makeRect(p.x - w / 2, p.y - h / 2, w, h),
          isBuilding: false,
        });
      } else if (p.type === 'fountain') {
        const r = p.radius || 35;
        obstacles.push({
          id: `obs_${p.id}`,
          points: makeRect(p.x - r, p.y - r, r * 2, r * 2),
          isBuilding: false,
        });
      } else if (p.type === 'lamp') {
        const r = p.radius || 8;
        obstacles.push({
          id: `obs_${p.id}`,
          points: makeRect(p.x - r, p.y - r, r * 2, r * 2),
          isBuilding: false,
        });
      }
    }
  }

  return obstacles;
}

// ========================================================
// 8. PUNKTY SPAWNU GRACZY I BOTÓW
// ========================================================
export const KRAKOW_SPAWN_POINTS: Point[] = [
  // Rynek Główny
  { x: CX - 1000, y: CY - 1000 },
  { x: CX + 1000, y: CY - 1000 },
  { x: CX - 1000, y: CY + 1000 },
  { x: CX + 1000, y: CY + 1000 },
  { x: CX, y: CY - 1800 },
  { x: CX, y: CY + 1800 },
  { x: CX - 1800, y: CY },
  { x: CX + 1800, y: CY },

  // Główne Ulice
  { x: CX + 820, y: CY - 3400 }, // Floriańska
  { x: CX + 820, y: CY - 5200 },
  { x: CX + 820, y: CY + 3400 }, // Grodzka
  { x: CX + 820, y: CY + 5400 },
  { x: CX - 3400, y: CY - 820 }, // Szewska
  { x: CX - 5000, y: CY - 820 },
  { x: CX - 820, y: CY - 3400 }, // Sławkowska
  { x: CX - 820, y: CY - 5200 },
  { x: CX + 3400, y: CY + 820 }, // Sienna
  { x: CX + 3400, y: CY - 820 }, // Mikołajska

  // Planty
  { x: CX - 2600, y: CY - 6100 },
  { x: CX + 2600, y: CY - 6100 },
  { x: CX + 5400, y: CY - 2600 },
  { x: CX + 5400, y: CY + 2600 },
  { x: CX - 5400, y: CY - 2600 },
  { x: CX - 5400, y: CY + 2600 },

  // Wawel
  { x: CX - 400, y: CY + 8000 },
  { x: CX + 600, y: CY + 9200 },
];

// ========================================================
// 9. ROZMIESZCZENIE LOOTU (Wnętrza, Kramy, Skrytki)
// ========================================================
export const KRAKOW_LOOT_SPAWNS: Point[] = [
  // Wewnątrz Sukiennic
  { x: CX - 150, y: CY - 1100 },
  { x: CX + 150, y: CY - 1100 },
  { x: CX - 150, y: CY - 500 },
  { x: CX + 150, y: CY - 500 },
  { x: CX - 150, y: CY + 600 },
  { x: CX + 150, y: CY + 600 },
  { x: CX - 150, y: CY + 1200 },
  { x: CX + 150, y: CY + 1200 },
  { x: CX, y: CY },

  // Wewnątrz Bazyliki Mariackiej
  { x: CX + 2100, y: CY - 1850 },
  { x: CX + 2300, y: CY - 1550 },
  { x: CX + 2500, y: CY - 1850 },
  { x: CX + 2500, y: CY - 1250 },

  // Wieża Ratuszowa & św. Wojciech
  { x: CX - 1250, y: CY - 200 },
  { x: CX + 1500, y: CY + 1600 },

  // Kamienice Rynku
  { x: CX + 3000, y: CY - 1950 },
  { x: CX + 3000, y: CY - 950 },
  { x: CX + 3000, y: CY + 150 },
  { x: CX - 1850, y: CY + 3000 },
  { x: CX - 650, y: CY + 3000 },
  { x: CX + 650, y: CY + 3000 },
  { x: CX + 1850, y: CY + 3000 },
  { x: CX - 3000, y: CY - 1900 },
  { x: CX - 3000, y: CY - 750 },
  { x: CX - 3000, y: CY + 450 },
  { x: CX - 1850, y: CY - 3000 },
  { x: CX - 650, y: CY - 3000 },
  { x: CX + 600, y: CY - 3000 },

  // Stary Teatr, Pałac Sztuki, Grand Hotel
  { x: CX - 3700, y: CY - 2800 },
  { x: CX - 3300, y: CY - 4200 },
  { x: CX - 1200, y: CY - 4400 },

  // Floriańska, Dom Matejki, Barbakan i Brama
  { x: CX + 460, y: CY - 4500 },
  { x: CX + 1150, y: CY - 4500 },
  { x: CX + 840, y: CY - 5950 },
  { x: CX + 840, y: CY - 6600 }, // W Barbakanie

  // Teatr Słowackiego & Kościół św. Krzyża
  { x: CX + 4400, y: CY - 4850 },
  { x: CX + 3200, y: CY - 4800 },

  // Collegium Maius & Collegium Novum
  { x: CX - 4200, y: CY + 1050 },
  { x: CX - 5300, y: CY + 2550 },

  // Bazylika Franciszkanów & Dominikanów
  { x: CX - 950, y: CY + 3150 },
  { x: CX + 2600, y: CY + 2200 },

  // Grodzka, św. Piotr i Paweł, św. Andrzej
  { x: CX + 1500, y: CY + 5450 },
  { x: CX + 1300, y: CY + 6575 },

  // Wawel
  { x: CX + 500, y: CY + 8800 },
  { x: CX + 900, y: CY + 9200 },
  { x: CX - 1200, y: CY + 8850 }, // W Katedrze
  { x: CX + 1850, y: CY + 9650 }, // W Baszcie Sandomierskiej
  { x: CX + 1550, y: CY + 10675 }, // W Baszcie Senatorskiej

  // Kramy kwiatowe na Rynku
  { x: CX + 650, y: CY - 850 },
  { x: CX - 650, y: CY + 650 },

  // Skrytki w Plantach
  { x: CX - 3600, y: CY - 6100 },
  { x: CX + 3600, y: CY - 6100 },
  { x: CX + 5500, y: CY - 1200 },
  { x: CX + 5500, y: CY + 1200 },
  { x: CX - 5500, y: CY - 1200 },
  { x: CX - 5500, y: CY + 1200 },
];
