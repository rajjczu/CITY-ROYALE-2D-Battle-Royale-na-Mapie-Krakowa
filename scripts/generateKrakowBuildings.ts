import fs from 'node:fs';
import path from 'node:path';
import { BuildingData, BuildingDoor, InteriorRoom, Point } from '../src/types/game';
import { WORLD_CENTER } from '../src/game/constants';

const CX = WORLD_CENTER.x; // 18,000 px
const CY = WORLD_CENTER.y; // 18,000 px

// ONLY 2 CURATED HISTORICAL ARCHITECTURAL COLORS
const COLOR_1 = {
  roof: '#9e3b2b', // Krakow Gothic/Renaissance Terracotta Red
  wall: '#7a2d1f', // Krakow Deep Brick
};

const COLOR_2 = {
  roof: '#d8a359', // Krakow Historic Limestone / Sandstone Warm Ochre
  wall: '#8f7856', // Warm Stone Wall
};

function makeRect(x: number, y: number, w: number, h: number): Point[] {
  return [
    { x, y },
    { x: x + w, y },
    { x: x + w, y: y + h },
    { x, y: y + h },
  ];
}

const allBuildings: BuildingData[] = [];

// Helper to create a single tenement (kamienica)
function createKamienica(
  id: string,
  name: string,
  address: string,
  x: number,
  y: number,
  w: number,
  h: number,
  doorSide: 'top' | 'bottom' | 'left' | 'right',
  index: number
): BuildingData {
  // Exactly 2 alternating colors across the entire map
  const color = index % 2 === 0 ? COLOR_1 : COLOR_2;

  // 50% enterable ratio: even index = enterable, odd index = locked/blocked
  const canEnter = index % 2 === 0;

  const poly = makeRect(x, y, w, h);

  let doorX = Math.round(x + w / 2);
  let doorY = Math.round(y + h / 2);
  let doorAngle = 0;
  const doorWidth = Math.min(50, Math.max(34, Math.floor((doorSide === 'top' || doorSide === 'bottom' ? w : h) * 0.28)));

  if (doorSide === 'top') {
    doorY = y;
    doorAngle = 0;
  } else if (doorSide === 'bottom') {
    doorY = y + h;
    doorAngle = Math.PI;
  } else if (doorSide === 'left') {
    doorX = x;
    doorAngle = -Math.PI / 2;
  } else if (doorSide === 'right') {
    doorX = x + w;
    doorAngle = Math.PI / 2;
  }

  const doors: BuildingDoor[] = canEnter
    ? [
        {
          id: `d_${id}`,
          x: doorX,
          y: doorY,
          width: doorWidth,
          angle: doorAngle,
          isOpen: false,
          isLocked: false,
        },
      ]
    : [];

  // Every enterable building has illuminated windows!
  const windows: Point[] = canEnter
    ? [
        doorSide === 'top' || doorSide === 'bottom'
          ? { x: Math.round(x + w * 0.25), y: doorSide === 'top' ? y + 8 : y + h - 8 }
          : { x: doorSide === 'left' ? x + 8 : x + w - 8, y: Math.round(y + h * 0.25) },
        doorSide === 'top' || doorSide === 'bottom'
          ? { x: Math.round(x + w * 0.75), y: doorSide === 'top' ? y + 8 : y + h - 8 }
          : { x: doorSide === 'left' ? x + 8 : x + w - 8, y: Math.round(y + h * 0.75) },
      ]
    : [];

  const wallMargin = 16;
  const roomPoly = [
    { x: x + wallMargin, y: y + wallMargin },
    { x: x + w - wallMargin, y: y + wallMargin },
    { x: x + w - wallMargin, y: y + h - wallMargin },
    { x: x + wallMargin, y: y + h - wallMargin },
  ];

  const roomTypes = [
    'Sień Kupiecka i Sklepik z Pamiątkami',
    'Zabytkowa Kawiarnia Mieszczańska',
    'Dawna Apteka Pod Złotym Orłem',
    'Pracownia Zegarmistrzowska',
    'Księgarnia Naukowa',
    'Kantor Wymiany Walut i Kruszców',
    'Warsztat Rzemiosł Artystycznych',
    'Piekarnia Krakowska — Tradycyjne Obwarzanki',
    'Pracownia Lutnicza i Wytwórnia Skrzypiec',
    'Antykwariat Naukowy i Księgi Dawne',
  ];

  const interiorRooms: InteriorRoom[] = canEnter
    ? [
        {
          id: `r_${id}`,
          name: `${address} — ${roomTypes[index % roomTypes.length]}`,
          polygon: roomPoly,
          furniture: [
            {
              type: index % 2 === 0 ? 'table' : 'desk',
              x: Math.round(x + w / 2),
              y: Math.round(y + h / 2),
              w: Math.min(44, Math.floor(w * 0.3)),
              h: Math.min(44, Math.floor(h * 0.3)),
            },
          ],
        },
      ]
    : [];

  return {
    id,
    name,
    address,
    polygon: poly,
    doors,
    interiorRooms,
    roofColor: color.roof,
    wallColor: color.wall,
    canEnter,
    windows,
  };
}

// Helper to generate a row of tenements within an exact street-safe boundary
function generateRow(
  prefix: string,
  baseStreet: string,
  startX: number,
  startY: number,
  count: number,
  stepX: number,
  stepY: number,
  width: number,
  height: number,
  doorSide: 'top' | 'bottom' | 'left' | 'right',
  startNum = 1,
  numStep = 2,
  seedOffset = 0
) {
  for (let i = 0; i < count; i++) {
    const num = startNum + i * numStep;
    const x = startX + i * stepX;
    const y = startY + i * stepY;
    const id = `${prefix}_${num}`;
    const address = `${baseStreet} ${num}`;
    const name = `Kamienica ${address}`;
    allBuildings.push(createKamienica(id, name, address, x, y, width, height, doorSide, i + seedOffset));
  }
}

// =========================================================================
// 1. RYNEK GŁÓWNY — CENTRALNE MONUMENTY ZABYTKOWE
// =========================================================================

// Sukiennice
allBuildings.push({
  id: 'sukiennice',
  name: 'Sukiennice (Kramy Sukiennicze)',
  address: 'Rynek Główny 1/3',
  polygon: makeRect(CX - 220, CY - 850, 440, 1700),
  doors: [
    { id: 'suk_d_north', x: CX, y: CY - 850, width: 90, angle: 0, isOpen: false, isLocked: false },
    { id: 'suk_d_south', x: CX, y: CY + 850, width: 90, angle: Math.PI, isOpen: false, isLocked: false },
    { id: 'suk_d_east', x: CX + 220, y: CY, width: 90, angle: Math.PI / 2, isOpen: false, isLocked: false },
    { id: 'suk_d_west', x: CX - 220, y: CY, width: 90, angle: -Math.PI / 2, isOpen: false, isLocked: false },
  ],
  interiorRooms: [
    {
      id: 'suk_hala_n',
      name: 'Kramy Sukiennicze — Galeria Sztuki Polskiej XIX w.',
      polygon: makeRect(CX - 190, CY - 820, 380, 780),
      furniture: [
        { type: 'stall', x: CX - 80, y: CY - 500, w: 60, h: 120 },
        { type: 'stall', x: CX + 80, y: CY - 500, w: 60, h: 120 },
      ],
    },
    {
      id: 'suk_hala_s',
      name: 'Sukiennice — Historyczne Kramy Rzemiosła i Bursztynu',
      polygon: makeRect(CX - 190, CY + 40, 380, 780),
      furniture: [
        { type: 'stall', x: CX - 80, y: CY + 400, w: 60, h: 120 },
        { type: 'stall', x: CX + 80, y: CY + 400, w: 60, h: 120 },
      ],
    },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [
    { x: CX - 212, y: CY - 600 },
    { x: CX - 212, y: CY - 200 },
    { x: CX - 212, y: CY + 200 },
    { x: CX - 212, y: CY + 600 },
    { x: CX + 212, y: CY - 600 },
    { x: CX + 212, y: CY - 200 },
    { x: CX + 212, y: CY + 200 },
    { x: CX + 212, y: CY + 600 },
  ],
});

// Wieża Ratuszowa
allBuildings.push({
  id: 'wieza_ratuszowa',
  name: 'Wieża Ratuszowa (Gotyk XIV w.)',
  address: 'Rynek Główny 1',
  polygon: makeRect(CX - 1450, CY - 350, 350, 350),
  doors: [{ id: 'wr_d_e', x: CX - 1100, y: CY - 175, width: 70, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'wr_sala', name: 'Zabytkowa Sala Gotycka Wieży Ratuszowej', polygon: makeRect(CX - 1420, CY - 320, 290, 290) },
  ],
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  windows: [{ x: CX - 1275, y: CY - 342 }, { x: CX - 1275, y: CY - 8 }],
});

// Bazylika Mariacka
allBuildings.push({
  id: 'bazylika_mariacka',
  name: 'Bazylika Mariacka (Wniebowzięcia NMP)',
  address: 'Plac Mariacki 5',
  polygon: makeRect(CX + 1800, CY - 2050, 850, 1150),
  doors: [
    { id: 'bm_d_w', x: CX + 1800, y: CY - 1475, width: 85, angle: -Math.PI / 2, isOpen: false, isLocked: false },
    { id: 'bm_d_s', x: CX + 2225, y: CY - 900, width: 85, angle: Math.PI, isOpen: false, isLocked: false },
  ],
  interiorRooms: [
    {
      id: 'bm_nawa',
      name: 'Nawa Główna — Ołtarz Wita Stwosza & Sklepienie Gwiaździste',
      polygon: makeRect(CX + 1840, CY - 2010, 770, 1070),
      furniture: [
        { type: 'altar', x: CX + 2450, y: CY - 1475, w: 90, h: 50 },
        { type: 'pew', x: CX + 2150, y: CY - 1700, w: 160, h: 36 },
        { type: 'pew', x: CX + 2150, y: CY - 1250, w: 160, h: 36 },
      ],
    },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [
    { x: CX + 2000, y: CY - 2042 },
    { x: CX + 2400, y: CY - 2042 },
    { x: CX + 2000, y: CY - 908 },
    { x: CX + 2400, y: CY - 908 },
  ],
});

// Kościółek św. Wojciecha
allBuildings.push({
  id: 'kosciol_wojciecha',
  name: 'Kościół św. Wojciecha (Jeden z najstarszych w Polsce — XI w.)',
  address: 'Rynek Główny 2',
  polygon: makeRect(CX + 1350, CY + 1450, 260, 260),
  doors: [{ id: 'kw_d', x: CX + 1350, y: CY + 1580, width: 60, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'kw_wnetrze', name: 'Romańskie Wnętrze św. Wojciecha z Lapidarium', polygon: makeRect(CX + 1370, CY + 1470, 220, 220) },
  ],
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  windows: [{ x: CX + 1480, y: CY + 1458 }],
});

// =========================================================================
// 2. PIERZEJE RYNKU GŁÓWNEGO (KAMIENICE WOKÓŁ PLACU)
// =========================================================================
// Pierzeja Północna (Linia A-B): y ∈ [CY - 3050, CY - 2450]
generateRow('kam_ryn_n_w', 'Rynek Główny', CX - 2350, CY - 3050, 7, 215, 0, 200, 600, 'bottom', 38, 2, 10);
generateRow('kam_ryn_n_m', 'Rynek Główny', CX - 650, CY - 3050, 3, 210, 0, 195, 600, 'bottom', 41, 1, 17);
generateRow('kam_ryn_n_e', 'Rynek Główny', CX + 150, CY - 3050, 3, 210, 0, 195, 600, 'bottom', 44, 1, 20);

// Pierzeja Wschodnia (Linia C-D): x ∈ [CX + 2450, CX + 3050]
generateRow('kam_ryn_e1', 'Rynek Główny', CX + 2450, CY - 800, 3, 0, 210, 600, 195, 'left', 1, 2, 23);
generateRow('kam_ryn_e2', 'Rynek Główny', CX + 2450, CY + 850, 7, 0, 210, 600, 195, 'left', 10, 2, 26);

// Pierzeja Południowa (Linia E-F): y ∈ [CY + 2450, CY + 3050]
generateRow('kam_ryn_s_w', 'Rynek Główny', CX - 2350, CY + 2450, 7, 210, 0, 195, 600, 'top', 24, 2, 33);
generateRow('kam_ryn_s_m', 'Rynek Główny', CX - 650, CY + 2450, 3, 210, 0, 195, 600, 'top', 16, 2, 40);
generateRow('kam_ryn_s_e', 'Rynek Główny', CX + 150, CY + 2450, 3, 210, 0, 195, 600, 'top', 20, 2, 43);

// Pierzeja Zachodnia (Linia G-H): x ∈ [CX - 3050, CX - 2450]
// Clean openings for ul. Szczepańska (CY - 1800), ul. Szewska (CY - 820), ul. św. Anny (CY + 820), ul. Gołębia (CY + 1800)
generateRow('kam_ryn_w1_n', 'Rynek Główny', CX - 3050, CY - 2350, 2, 0, 210, 600, 195, 'right', 25, 2, 46);
generateRow('kam_ryn_w1_s', 'Rynek Główny', CX - 3050, CY - 1650, 3, 0, 210, 600, 195, 'right', 29, 2, 49);
generateRow('kam_ryn_w2', 'Rynek Główny', CX - 3050, CY - 650, 6, 0, 210, 600, 195, 'right', 35, 2, 53);
generateRow('kam_ryn_w3_a', 'Rynek Główny', CX - 3050, CY + 950, 3, 0, 210, 600, 195, 'right', 47, 2, 60);
generateRow('kam_ryn_w3_b', 'Rynek Główny', CX - 3050, CY + 1900, 2, 0, 210, 600, 195, 'right', 53, 2, 64);

// =========================================================================
// 3. KWARTAŁ PÓŁNOCNY (FLORIAŃSKA, SŁAWKOWSKA, ŚW. JANA, SZPITALNA)
// =========================================================================
// Ul. Floriańska Zachód: x ∈ [CX + 350, CX + 770]
generateRow('kam_flor_w_1', 'ul. Floriańska', CX + 350, CY - 3550, 2, 0, 260, 420, 240, 'right', 1, 2, 70);
generateRow('kam_flor_w_2', 'ul. Floriańska', CX + 350, CY - 4750, 4, 0, 260, 420, 240, 'right', 9, 2, 74);
generateRow('kam_flor_w_3', 'ul. Floriańska', CX + 350, CY - 5750, 3, 0, 260, 420, 240, 'right', 17, 2, 78);
allBuildings.push(createKamienica('kam_flor_45', 'Kamienica Floriańska 45', 'ul. Floriańska 45', CX + 350, CY - 6100, 420, 280, 'right', 81));

// Ul. Floriańska Wschód: x ∈ [CX + 870, CX + 1290]
generateRow('kam_flor_e_1', 'ul. Floriańska', CX + 870, CY - 3550, 2, 0, 260, 420, 240, 'left', 2, 2, 82);
generateRow('kam_flor_e_2', 'ul. Floriańska', CX + 870, CY - 4750, 4, 0, 260, 420, 240, 'left', 10, 2, 86);
generateRow('kam_flor_e_3', 'ul. Floriańska', CX + 870, CY - 5750, 3, 0, 260, 420, 240, 'left', 18, 2, 90);
allBuildings.push(createKamienica('kam_flor_46', 'Kamienica Floriańska 46', 'ul. Floriańska 46', CX + 870, CY - 6100, 420, 280, 'left', 93));

// Brama Floriańska & Barbakan
allBuildings.push({
  id: 'brama_florianska_west',
  name: 'Brama Floriańska (Baszta Zachodnia & Arsenał)',
  address: 'ul. Floriańska / Pijarska',
  polygon: makeRect(CX + 480, CY - 6500, 280, 320),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'bf_d_w', x: CX + 760, y: CY - 6340, width: 80, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 620, y: CY - 6492 }],
  interiorRooms: [
    { id: 'bf_r_w', name: 'Zbrojownia Bramy Floriańskiej', polygon: makeRect(CX + 500, CY - 6480, 240, 280) },
  ],
});
allBuildings.push({
  id: 'brama_florianska_east',
  name: 'Brama Floriańska (Baszta Pasamoników & Galeria)',
  address: 'ul. Floriańska / Pijarska',
  polygon: makeRect(CX + 880, CY - 6500, 280, 320),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'bf_d_e', x: CX + 880, y: CY - 6340, width: 80, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 1020, y: CY - 6492 }],
  interiorRooms: [
    { id: 'bf_r_e', name: 'Kaplica Matki Bożej Piaskowej na Bramie Floriańskiej', polygon: makeRect(CX + 900, CY - 6480, 240, 280) },
  ],
});

// Barbakan Krakowski (Rondel)
allBuildings.push({
  id: 'barbakan_krakowski',
  name: 'Barbakan Krakowski (Rondel z 1498 r.)',
  address: 'ul. Basztowa / Planty',
  polygon: makeRect(CX + 520, CY - 7380, 600, 560),
  doors: [
    { id: 'barb_d_s', x: CX + 820, y: CY - 6820, width: 90, angle: Math.PI, isOpen: false, isLocked: false },
    { id: 'barb_d_n', x: CX + 820, y: CY - 7380, width: 90, angle: 0, isOpen: false, isLocked: false },
  ],
  interiorRooms: [
    {
      id: 'barb_dziedziniec',
      name: 'Wewnętrzny Dziedziniec i Strzelnice Barbakanu',
      polygon: makeRect(CX + 560, CY - 7340, 520, 480),
      furniture: [{ type: 'cannon', x: CX + 820, y: CY - 7100, w: 60, h: 40 }],
    },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [
    { x: CX + 620, y: CY - 7372 },
    { x: CX + 1020, y: CY - 7372 },
    { x: CX + 620, y: CY - 6828 },
    { x: CX + 1020, y: CY - 6828 },
  ],
});

// Ul. Sławkowska
generateRow('kam_slawk_w_1', 'ul. Sławkowska', CX - 1300, CY - 3550, 2, 0, 260, 430, 240, 'right', 1, 2, 100);
generateRow('kam_slawk_w_2', 'ul. Sławkowska', CX - 1300, CY - 4750, 4, 0, 260, 430, 240, 'right', 9, 2, 104);
generateRow('kam_slawk_w_3', 'ul. Sławkowska', CX - 1300, CY - 5750, 3, 0, 260, 430, 240, 'right', 17, 2, 108);

generateRow('kam_slawk_e_1', 'ul. Sławkowska', CX - 770, CY - 3550, 2, 0, 260, 430, 240, 'left', 2, 2, 112);
generateRow('kam_slawk_e_2', 'ul. Sławkowska', CX - 770, CY - 4750, 4, 0, 260, 430, 240, 'left', 10, 2, 116);
generateRow('kam_slawk_e_3', 'ul. Sławkowska', CX - 770, CY - 5750, 3, 0, 260, 430, 240, 'left', 18, 2, 120);

// Ul. św. Jana
generateRow('kam_jana_w_1', 'ul. św. Jana', CX - 300, CY - 3550, 2, 0, 260, 250, 240, 'right', 1, 2, 124);
generateRow('kam_jana_w_2', 'ul. św. Jana', CX - 300, CY - 4750, 4, 0, 260, 250, 240, 'right', 9, 2, 128);
generateRow('kam_jana_w_3', 'ul. św. Jana', CX - 300, CY - 5750, 3, 0, 260, 250, 240, 'right', 17, 2, 132);

generateRow('kam_jana_e_1', 'ul. św. Jana', CX + 50, CY - 3550, 2, 0, 260, 250, 240, 'left', 2, 2, 136);
generateRow('kam_jana_e_2', 'ul. św. Jana', CX + 50, CY - 4750, 4, 0, 260, 250, 240, 'left', 10, 2, 140);
generateRow('kam_jana_e_3', 'ul. św. Jana', CX + 50, CY - 5750, 3, 0, 260, 250, 240, 'left', 18, 2, 144);

// Ul. Szpitalna
generateRow('kam_szpit_w_1', 'ul. Szpitalna', CX + 1350, CY - 3550, 2, 0, 260, 400, 240, 'right', 1, 2, 148);
generateRow('kam_szpit_w_2', 'ul. Szpitalna', CX + 1350, CY - 4750, 4, 0, 260, 400, 240, 'right', 9, 2, 152);
generateRow('kam_szpit_w_3', 'ul. Szpitalna', CX + 1350, CY - 5750, 3, 0, 260, 400, 240, 'right', 17, 2, 156);

generateRow('kam_szpit_e_1', 'ul. Szpitalna', CX + 1850, CY - 3550, 2, 0, 260, 400, 240, 'left', 2, 2, 160);
generateRow('kam_szpit_e_2', 'ul. Szpitalna', CX + 1850, CY - 4750, 4, 0, 260, 400, 240, 'left', 10, 2, 164);
generateRow('kam_szpit_e_3', 'ul. Szpitalna', CX + 1850, CY - 5750, 3, 0, 260, 400, 240, 'left', 18, 2, 168);

// Ul. Pijarska (west of Sławkowska only)
generateRow('kam_pijar_w', 'ul. Pijarska', CX - 3200, CY - 5750, 8, 230, 0, 210, 360, 'bottom', 1, 2, 172);

// Ul. św. Marka & św. Tomasza (in western quarter, west of Sławkowska)
generateRow('kam_marka_w', 'ul. św. Marka', CX - 3200, CY - 4750, 8, 230, 0, 210, 350, 'bottom', 1, 2, 186);
generateRow('kam_tomasza_w', 'ul. św. Tomasza', CX - 3200, CY - 3550, 8, 230, 0, 210, 350, 'bottom', 1, 2, 194);

// Teatr im. Juliusza Słowackiego (Plac św. Ducha)
allBuildings.push({
  id: 'teatr_slowackiego',
  name: 'Teatr im. Juliusza Słowackiego (Eklektyzm 1893 r.)',
  address: 'Plac św. Ducha 1',
  polygon: makeRect(CX + 2400, CY - 5700, 950, 750),
  doors: [
    { id: 'ts_d_w', x: CX + 2400, y: CY - 5325, width: 90, angle: -Math.PI / 2, isOpen: false, isLocked: false },
    { id: 'ts_d_s', x: CX + 2875, y: CY - 4950, width: 90, angle: Math.PI, isOpen: false, isLocked: false },
  ],
  interiorRooms: [
    { id: 'ts_widownia', name: 'Złocona Widownia z Kurtyną Henryka Siemiradzkiego', polygon: makeRect(CX + 2450, CY - 5650, 850, 650) },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [
    { x: CX + 2650, y: CY - 5690 },
    { x: CX + 3100, y: CY - 5690 },
  ],
});

// Kościół św. Krzyża
allBuildings.push({
  id: 'kosciol_sw_krzyza',
  name: 'Kościół św. Krzyża (Gotyk z Palmowym Sklepieniem)',
  address: 'ul. św. Krzyża 1',
  polygon: makeRect(CX + 2400, CY - 4700, 600, 700),
  doors: [{ id: 'krzyz_d', x: CX + 2700, y: CY - 4000, width: 75, angle: Math.PI, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'krzyz_nawa', name: 'Jednonawowe Wnętrze ze Słupem Palmowym', polygon: makeRect(CX + 2440, CY - 4660, 520, 620) },
  ],
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  windows: [{ x: CX + 2550, y: CY - 4690 }, { x: CX + 2850, y: CY - 4690 }],
});

// =========================================================================
// 4. KWARTAŁ ZACHODNI (SZEWSKA, ŚW. ANNY, GOŁĘBIA, COLLEGIUM MAIUS)
// =========================================================================
// Ul. Szewska Północ i Południe (from CX - 5800 to CX - 3100, leaving Jagiellońska at CX - 3600 free)
generateRow('kam_szewska_n_w', 'ul. Szewska', CX - 5800, CY - 1300, 9, 230, 0, 210, 430, 'bottom', 1, 2, 202);
generateRow('kam_szewska_n_e', 'ul. Szewska', CX - 3500, CY - 1300, 2, 210, 0, 195, 430, 'bottom', 19, 2, 211);

generateRow('kam_szewska_s_w', 'ul. Szewska', CX - 5800, CY - 750, 9, 230, 0, 210, 430, 'top', 2, 2, 213);
generateRow('kam_szewska_s_e', 'ul. Szewska', CX - 3500, CY - 750, 2, 210, 0, 195, 430, 'top', 20, 2, 222);

// Collegium Maius UJ (Located south of św. Anny at CY + 920, north of Gołębia at CY + 1720)
allBuildings.push({
  id: 'collegium_maius',
  name: 'Collegium Maius UJ (Najstarszy Gmach Uniwersytecki z 1400 r.)',
  address: 'ul. Jagiellońska 15',
  polygon: makeRect(CX - 4500, CY + 920, 850, 780),
  doors: [
    { id: 'cm_d_s', x: CX - 4075, y: CY + 1700, width: 85, angle: Math.PI, isOpen: false, isLocked: false },
    { id: 'cm_d_e', x: CX - 3650, y: CY + 1310, width: 85, angle: Math.PI / 2, isOpen: false, isLocked: false },
  ],
  interiorRooms: [
    { id: 'cm_aula', name: 'Libraria i Aula Jagiellońska — Globus Jagielloński', polygon: makeRect(CX - 4450, CY + 960, 750, 700) },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [{ x: CX - 4300, y: CY + 930 }, { x: CX - 3850, y: CY + 930 }],
});

// Ul. św. Anny Północ i Południe
generateRow('kam_anna_n_w', 'ul. św. Anny', CX - 5800, CY + 350, 5, 230, 0, 210, 420, 'bottom', 1, 2, 224);
generateRow('kam_anna_n_e', 'ul. św. Anny', CX - 3500, CY + 350, 2, 210, 0, 195, 420, 'bottom', 11, 2, 229);
generateRow('kam_anna_s_w', 'ul. św. Anny', CX - 5800, CY + 880, 5, 230, 0, 210, 380, 'top', 2, 2, 231);
generateRow('kam_anna_s_e', 'ul. św. Anny', CX - 3500, CY + 880, 2, 210, 0, 195, 380, 'top', 12, 2, 236);

// Collegium Novum UJ
allBuildings.push({
  id: 'collegium_novum',
  name: 'Collegium Novum UJ (Rektorat UJ — Neogotyk 1887 r.)',
  address: 'ul. Gołębia 24',
  polygon: makeRect(CX - 5600, CY + 2250, 950, 650),
  doors: [{ id: 'cn_d', x: CX - 5125, y: CY + 2250, width: 90, angle: 0, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'cn_aula', name: 'Aula Collegium Novum — Portrety Królów i Profesorów UJ', polygon: makeRect(CX - 5550, CY + 2300, 850, 550) },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [{ x: CX - 5350, y: CY + 2260 }, { x: CX - 4900, y: CY + 2260 }],
});

// Ul. Gołębia Północ i Południe (west of Collegium Maius)
generateRow('kam_goleb_n', 'ul. Gołębia', CX - 5800, CY + 1350, 5, 230, 0, 210, 380, 'bottom', 1, 2, 238);
generateRow('kam_goleb_s', 'ul. Gołębia', CX - 4600, CY + 1880, 5, 230, 0, 210, 340, 'top', 2, 2, 241);

// Pałac Biskupi (Franciszkańska 3)
allBuildings.push({
  id: 'palac_biskupi',
  name: 'Pałac Biskupi w Krakowie (Okno Papieskie)',
  address: 'ul. Franciszkańska 3',
  polygon: makeRect(CX - 4000, CY + 2900, 1100, 640),
  doors: [{ id: 'pb_d', x: CX - 3450, y: CY + 3540, width: 85, angle: Math.PI, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'pb_sala', name: 'Dziedziniec Arkadowy i Sala Biskupia', polygon: makeRect(CX - 3950, CY + 2950, 1000, 540) },
  ],
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  windows: [{ x: CX - 3700, y: CY + 2910 }, { x: CX - 3200, y: CY + 2910 }],
});

// Bazylika Franciszkanów (south of Franciszkańska at CY + 3660)
allBuildings.push({
  id: 'bazylika_franciszkanow',
  name: 'Bazylika św. Franciszka z Asyżu (Witraże Wyspiańskiego)',
  address: 'Plac Wszystkich Świętych 5',
  polygon: makeRect(CX - 750, CY + 3660, 700, 640),
  doors: [{ id: 'bf_d', x: CX - 400, y: CY + 3660, width: 85, angle: 0, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'bf_wnetrze', name: 'Nawa Franciszkańska — Witraż Bóg Ojciec „Stań się!”', polygon: makeRect(CX - 710, CY + 3700, 620, 560) },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [{ x: CX - 550, y: CY + 4290 }],
});

// =========================================================================
// 5. KWARTAŁ WSCHODNI (SIENNA, MIKOŁAJSKA, STOLARSKA, DOMINIKANIE)
// =========================================================================
// Bazylika Dominikanów (Stop at CX + 1720, west of Stolarska)
allBuildings.push({
  id: 'bazylika_dominikanow',
  name: 'Bazylika Świętej Trójcy (Klasztor Dominikanów)',
  address: 'ul. Stolarska 12',
  polygon: makeRect(CX + 1050, CY + 2900, 670, 640),
  doors: [{ id: 'dom_d', x: CX + 1400, y: CY + 3540, width: 85, angle: Math.PI, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'dom_nawa', name: 'Gotyckie Krużganki i Kaplica św. Jacka Odrowąża', polygon: makeRect(CX + 1090, CY + 2950, 590, 540) },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [{ x: CX + 1300, y: CY + 2910 }],
});

// Ul. Sienna i Mikołajska (east of Rynek east frontage and east of Mariacki)
generateRow('kam_miko_n', 'ul. Mikołajska', CX + 2700, CY - 1300, 12, 230, 0, 210, 420, 'bottom', 1, 2, 244);
generateRow('kam_miko_s', 'ul. Mikołajska', CX + 3100, CY - 750, 10, 230, 0, 210, 420, 'top', 2, 2, 258);

generateRow('kam_sien_n', 'ul. Sienna', CX + 2700, CY + 350, 12, 230, 0, 210, 420, 'bottom', 1, 2, 272);
generateRow('kam_sien_s', 'ul. Sienna', CX + 3100, CY + 880, 10, 230, 0, 210, 420, 'top', 2, 2, 286);

// =========================================================================
// 6. TRAKT GRODZKA & KANONICZA & WAWEL (POŁUDNIE STAREGO MIASTA)
// =========================================================================
// Ul. Grodzka
generateRow('kam_grodz_w1', 'ul. Grodzka', CX + 350, CY + 3700, 3, 0, 270, 420, 250, 'right', 1, 2, 300);
generateRow('kam_grodz_w2', 'ul. Grodzka', CX + 350, CY + 4650, 3, 0, 270, 420, 250, 'right', 7, 2, 303);
generateRow('kam_grodz_w3', 'ul. Grodzka', CX + 350, CY + 5550, 8, 0, 270, 420, 250, 'right', 13, 2, 306);

generateRow('kam_grodz_e1', 'ul. Grodzka', CX + 880, CY + 3700, 3, 0, 270, 420, 250, 'left', 2, 2, 314);
generateRow('kam_grodz_e2', 'ul. Grodzka', CX + 880, CY + 4650, 3, 0, 270, 420, 250, 'left', 8, 2, 317);
generateRow('kam_grodz_e3', 'ul. Grodzka', CX + 880, CY + 5550, 8, 0, 270, 420, 250, 'left', 14, 2, 320);

// Kościół św. Piotra i Pawła
allBuildings.push({
  id: 'kosciol_piotra_pawla',
  name: 'Kościół św. Piotra i Pawła (Pierwszy Barok w Polsce)',
  address: 'ul. Grodzka 52a',
  polygon: makeRect(CX + 1350, CY + 5200, 600, 800),
  doors: [{ id: 'pp_d', x: CX + 1350, y: CY + 5600, width: 85, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'pp_krypta', name: 'Krypta Piotra Skargi i Panteon Narodowy', polygon: makeRect(CX + 1400, CY + 5250, 500, 700) },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [{ x: CX + 1650, y: CY + 5210 }],
});

// Kościół św. Andrzeja
allBuildings.push({
  id: 'kosciol_sw_andrzeja',
  name: 'Kościół św. Andrzeja (Romański Kościół Obronny z 1098 r.)',
  address: 'ul. Grodzka 54',
  polygon: makeRect(CX + 1350, CY + 6100, 550, 750),
  doors: [{ id: 'and_d', x: CX + 1350, y: CY + 6475, width: 80, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'and_nawa', name: 'Romańskie Mury Obronne i Skarbiec Klarysek', polygon: makeRect(CX + 1390, CY + 6140, 470, 670) },
  ],
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  windows: [{ x: CX + 1625, y: CY + 6110 }],
});

// Ul. Kanonicza (leave opening at CY + 5450..5550 for ul. Senacka)
generateRow('kam_kanon_w1', 'ul. Kanonicza', CX - 220, CY + 4650, 3, 0, 260, 420, 240, 'right', 1, 2, 328);
generateRow('kam_kanon_w2', 'ul. Kanonicza', CX - 220, CY + 5600, 7, 0, 260, 420, 240, 'right', 7, 2, 331);

// Ul. Poselska & Senacka
generateRow('kam_posel_n', 'ul. Poselska', CX - 2200, CY + 4200, 5, 260, 0, 240, 340, 'bottom', 1, 2, 338);
generateRow('kam_senac_s', 'ul. Senacka', CX - 1000, CY + 5580, 2, 260, 0, 240, 340, 'top', 2, 2, 345);

// =========================================================================
// 7. WZGÓRZE WAWELSKIE (ZAMEK KRÓLEWSKI, KATEDRA, BASZTY)
// =========================================================================
// Zamek Królewski na Wawelu
allBuildings.push({
  id: 'zamek_wawelski',
  name: 'Zamek Królewski na Wawelu (Siedziba Królów Polski)',
  address: 'Wawel 5',
  polygon: makeRect(CX - 800, CY + 8000, 1600, 1500),
  doors: [
    { id: 'waw_d_n', x: CX, y: CY + 8000, width: 100, angle: 0, isOpen: false, isLocked: false },
    { id: 'waw_d_s', x: CX, y: CY + 9500, width: 100, angle: Math.PI, isOpen: false, isLocked: false },
    { id: 'waw_d_w', x: CX - 800, y: CY + 8750, width: 100, angle: -Math.PI / 2, isOpen: false, isLocked: false },
    { id: 'waw_d_e', x: CX + 800, y: CY + 8750, width: 100, angle: Math.PI / 2, isOpen: false, isLocked: false },
  ],
  interiorRooms: [
    { id: 'waw_senat', name: 'Sala Senatorska i Poselska z Głowami Wawelskimi', polygon: makeRect(CX - 750, CY + 8050, 1500, 1400) },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [
    { x: CX - 400, y: CY + 8010 },
    { x: CX + 400, y: CY + 8010 },
    { x: CX - 400, y: CY + 9490 },
    { x: CX + 400, y: CY + 9490 },
  ],
});

// Katedra Wawelska
allBuildings.push({
  id: 'katedra_wawelska',
  name: 'Bazylika Archikatedralna św. Stanisława i św. Wacława',
  address: 'Wawel 3',
  polygon: makeRect(CX - 1500, CY + 8100, 600, 900),
  doors: [{ id: 'kat_d', x: CX - 900, y: CY + 8550, width: 90, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  interiorRooms: [
    { id: 'kat_krypty', name: 'Królewska Katedra Koronacyjna — Dzwon Zygmunta i Groby Królewskie', polygon: makeRect(CX - 1450, CY + 8150, 500, 800) },
  ],
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  windows: [{ x: CX - 1200, y: CY + 8110 }, { x: CX - 1200, y: CY + 8990 }],
});

// Baszta Sandomierska
allBuildings.push({
  id: 'baszta_sandomierska',
  name: 'Baszta Sandomierska (Gotycka Wieża Ognista z 1460 r.)',
  address: 'Wawel 7',
  polygon: makeRect(CX + 850, CY + 9600, 350, 350),
  doors: [{ id: 'bs_d', x: CX + 850, y: CY + 9775, width: 70, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  interiorRooms: [{ id: 'bs_sala', name: 'Górna Kondygnacja Strzelecka Baszty', polygon: makeRect(CX + 880, CY + 9630, 290, 290) }],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [{ x: CX + 1025, y: CY + 9610 }],
});

// =========================================================================
// 8. SEKTOR PÓŁNOCNY (KLEPARZ, NOWY KLEPARZ, WARSZAWSKA, DŁUGA, KAMIENNA)
// =========================================================================
// Plac Matejki i Pomnik Grunwaldzki
allBuildings.push({
  id: 'asp_matejko',
  name: 'Akademia Sztuk Pięknych im. Jana Matejki',
  address: 'Plac Matejki 13',
  polygon: makeRect(CX - 500, CY - 8800, 1000, 750),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'asp_d', x: CX, y: CY - 8050, width: 90, angle: Math.PI, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 250, y: CY - 8790 }, { x: CX + 250, y: CY - 8790 }],
  interiorRooms: [
    { id: 'asp_aula', name: 'Zabytkowa Aula Rektorska i Pracownie Malarskie ASP', polygon: makeRect(CX - 450, CY - 8750, 900, 650) },
  ],
});
generateRow('kam_mat_w', 'Plac Matejki', CX - 1000, CY - 8500, 3, 0, 240, 450, 220, 'right', 2, 2, 350);
generateRow('kam_mat_e', 'Plac Matejki', CX + 550, CY - 8500, 3, 0, 240, 450, 220, 'left', 1, 2, 353);

// ul. Warszawska: korytarz CX + 1350..1450 od CY - 7400 do CY - 16500
generateRow('kam_warsz_w1', 'ul. Warszawska', CX + 900, CY - 11500, 10, 0, 260, 400, 240, 'right', 1, 2, 360);
generateRow('kam_warsz_e1', 'ul. Warszawska', CX + 1500, CY - 11500, 10, 0, 260, 400, 240, 'left', 2, 2, 370);
generateRow('kam_warsz_w2', 'ul. Warszawska', CX + 900, CY - 14100, 9, 0, 260, 400, 240, 'right', 21, 2, 380);
generateRow('kam_warsz_e2', 'ul. Warszawska', CX + 1500, CY - 14100, 9, 0, 260, 400, 240, 'left', 22, 2, 390);

// Politechnika Krakowska
allBuildings.push({
  id: 'politechnika_krakowska',
  name: 'Politechnika Krakowska — Gmach Główny',
  address: 'ul. Warszawska 24',
  polygon: makeRect(CX + 1950, CY - 13500, 1100, 800),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'pk_d', x: CX + 1950, y: CY - 13100, width: 90, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 2500, y: CY - 13490 }],
  interiorRooms: [
    { id: 'pk_aula', name: 'Sala Senacka Politechniki Krakowskiej', polygon: makeRect(CX + 2000, CY - 13450, 1000, 700) },
  ],
});

// ul. Długa: korytarz CX - 1850..-1750
generateRow('kam_dluga_w1', 'ul. Długa', CX - 2300, CY - 10500, 14, 0, 260, 400, 240, 'right', 1, 2, 400);
generateRow('kam_dluga_e1', 'ul. Długa', CX - 1650, CY - 10500, 14, 0, 260, 320, 240, 'left', 2, 2, 414);
generateRow('kam_dluga_w2_a', 'ul. Długa', CX - 2300, CY - 14100, 12, 0, 260, 400, 240, 'right', 29, 2, 428);
generateRow('kam_dluga_e2_a', 'ul. Długa', CX - 1650, CY - 14100, 12, 0, 260, 320, 240, 'left', 30, 2, 440);
generateRow('kam_dluga_w2_b', 'ul. Długa', CX - 2300, CY - 16400, 6, 0, 260, 400, 240, 'right', 53, 2, 452);
generateRow('kam_dluga_e2_b', 'ul. Długa', CX - 1650, CY - 16400, 6, 0, 260, 320, 240, 'left', 54, 2, 458);

// Stary Kleparz — Rynek Kleparski
allBuildings.push({
  id: 'stary_kleparz_hala',
  name: 'Tradycyjne Targowisko Stary Kleparz',
  address: 'Rynek Kleparski 1',
  polygon: makeRect(CX - 1250, CY - 12800, 800, 700),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'klep_d', x: CX - 850, y: CY - 12100, width: 85, angle: Math.PI, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 850, y: CY - 12790 }],
  interiorRooms: [
    { id: 'klep_targ', name: 'Zadaszone Kramy Kupieckie i Tradycyjne Wypieki', polygon: makeRect(CX - 1210, CY - 12760, 720, 620) },
  ],
});

// Nowy Kleparz — Kamienice i hala (Shift east of Długa to CX - 1200)
allBuildings.push({
  id: 'nowy_kleparz_hala',
  name: 'Plac Targowy Nowy Kleparz',
  address: 'ul. Kamienna 2',
  polygon: makeRect(CX - 1200, CY - 16600, 850, 750),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'nk_d', x: CX - 775, y: CY - 15850, width: 85, angle: Math.PI, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 775, y: CY - 16590 }],
  interiorRooms: [
    { id: 'nk_wnetrze', name: 'Pawilon Kupiecki Nowego Kleparza', polygon: makeRect(CX - 1160, CY - 16560, 770, 670) },
  ],
});
generateRow('kam_kamienna_n', 'ul. Kamienna', CX - 5500, CY - 17300, 18, 300, 0, 280, 440, 'bottom', 1, 2, 464);
generateRow('kam_slowackiego_w', 'Al. Słowackiego', CX - 5500, CY - 14400, 10, 300, 0, 280, 440, 'bottom', 1, 2, 482);
generateRow('kam_slowackiego_e', 'Al. Słowackiego', CX - 1200, CY - 14400, 7, 300, 0, 280, 440, 'bottom', 21, 2, 492);

// =========================================================================
// 9. SEKTOR ZACHODNI (PIASEK, NOWY ŚWIAT, BŁONIA, AGH)
// =========================================================================
// Teatr Bagatela (Karmelicka 1 — positioned south of Karmelicka)
allBuildings.push({
  id: 'teatr_bagatela',
  name: 'Teatr Bagatela im. Boya-Żeleńskiego',
  address: 'ul. Karmelicka 1',
  polygon: makeRect(CX - 6700, CY - 600, 650, 550),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'bag_d', x: CX - 6050, y: CY - 325, width: 85, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 6375, y: CY - 590 }],
  interiorRooms: [
    { id: 'bag_sala', name: 'Widownia i Scena Teatru Bagatela', polygon: makeRect(CX - 6650, CY - 560, 550, 470) },
  ],
});

// Kościół Karmelitów na Piasku (positioned north of Karmelicka)
allBuildings.push({
  id: 'kosciol_karmelitow',
  name: 'Kościół Nawiedzenia NMP (Karmelici na Piasku)',
  address: 'ul. Karmelicka 19',
  polygon: makeRect(CX - 9200, CY - 3100, 850, 950),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'karm_d', x: CX - 8350, y: CY - 2625, width: 85, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 8775, y: CY - 3090 }],
  interiorRooms: [
    { id: 'karm_nawa', name: 'Gotycko-Barokowa Nawa z Epitafium Królowej Jadwigi', polygon: makeRect(CX - 9150, CY - 3050, 750, 850) },
  ],
});

// Muzeum im. Emeryka Hutten-Czapskiego (positioned south of Piłsudskiego)
allBuildings.push({
  id: 'palac_czapskich',
  name: 'Muzeum im. Emeryka Hutten-Czapskiego',
  address: 'ul. Piłsudskiego 12',
  polygon: makeRect(CX - 8500, CY + 1880, 750, 650),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'czap_d', x: CX - 8125, y: CY + 1880, width: 85, angle: 0, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 8300, y: CY + 2520 }, { x: CX - 7950, y: CY + 2520 }],
  interiorRooms: [
    { id: 'czap_gab', name: 'Zabytkowy Gabinet Numizmatyczny i Medalierski', polygon: makeRect(CX - 8450, CY + 1930, 650, 550) },
  ],
});

// Gmach Główny Muzeum Narodowego w Krakowie
allBuildings.push({
  id: 'muzeum_narodowe_gmach',
  name: 'Gmach Główny Muzeum Narodowego w Krakowie',
  address: 'Al. 3 Maja 1',
  polygon: makeRect(CX - 14500, CY + 480, 1500, 1300),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [
    { id: 'mn_d_e', x: CX - 13000, y: CY + 1130, width: 100, angle: Math.PI / 2, isOpen: false, isLocked: false },
    { id: 'mn_d_w', x: CX - 14500, y: CY + 1130, width: 100, angle: -Math.PI / 2, isOpen: false, isLocked: false },
  ],
  windows: [{ x: CX - 13750, y: CY + 490 }, { x: CX - 13750, y: CY + 1770 }],
  interiorRooms: [
    { id: 'mn_hol', name: 'Monumentalny Hol Główny i Galeria Rzemiosła Artystycznego', polygon: makeRect(CX - 14400, CY + 530, 1300, 1200) },
  ],
});

// Biblioteka Jagiellońska
allBuildings.push({
  id: 'biblioteka_jagiellonska',
  name: 'Biblioteka Jagiellońska (Główna Skarbnica Piśmiennictwa Polskiego)',
  address: 'Al. Mickiewicza 22',
  polygon: makeRect(CX - 8200, CY - 800, 950, 850),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'bj_d', x: CX - 7250, y: CY - 375, width: 90, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 7725, y: CY - 790 }],
  interiorRooms: [
    { id: 'bj_czytelnia', name: 'Główna Czytelnia Profesorska i Zbiory Rękopisów', polygon: makeRect(CX - 8150, CY - 750, 850, 750) },
  ],
});

// AGH — Akademia Górniczo-Hutnicza (Gmach Główny A-0)
allBuildings.push({
  id: 'agh_gmach_glowny',
  name: 'Akademia Górniczo-Hutnicza (Gmach Główny A-0 z Figurą św. Barbary)',
  address: 'Al. Mickiewicza 30',
  polygon: makeRect(CX - 14200, CY - 4000, 1800, 1200),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'agh_d', x: CX - 13300, y: CY - 2800, width: 100, angle: Math.PI, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 13700, y: CY - 3990 }, { x: CX - 12900, y: CY - 3990 }],
  interiorRooms: [
    { id: 'agh_aula', name: 'Aula Główna AGH — Rektorat i Senat Uczelni', polygon: makeRect(CX - 14150, CY - 3950, 1700, 1100) },
  ],
});

// Tenement rows in Western Sector
generateRow('kam_pilsud_n', 'ul. Piłsudskiego', CX - 12500, CY + 700, 8, 280, 0, 260, 480, 'bottom', 1, 2, 500);
generateRow('kam_pilsud_s', 'ul. Piłsudskiego', CX - 12500, CY + 2580, 8, 280, 0, 260, 480, 'top', 2, 2, 508);
generateRow('kam_krupnicza_n', 'ul. Krupnicza', CX - 13500, CY - 1400, 6, 280, 0, 260, 480, 'bottom', 1, 2, 516);

// =========================================================================
// 10. SEKTOR WSCHODNI (WESOŁA, NOWE MIASTO, DWORZEC, GRZEGÓRZKI)
// =========================================================================
// Zabytkowy Dworzec Główny w Krakowie
allBuildings.push({
  id: 'dworzec_glowny_krakow',
  name: 'Zabytkowy Gmach Dworca Głównego w Krakowie',
  address: 'Plac Kolejowy 1',
  polygon: makeRect(CX + 7200, CY - 4600, 1300, 950),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [
    { id: 'dw_d_w', x: CX + 7200, y: CY - 4125, width: 95, angle: -Math.PI / 2, isOpen: false, isLocked: false },
    { id: 'dw_d_e', x: CX + 8500, y: CY - 4125, width: 95, angle: Math.PI / 2, isOpen: false, isLocked: false },
  ],
  windows: [{ x: CX + 7850, y: CY - 4590 }, { x: CX + 7850, y: CY - 3660 }],
  interiorRooms: [
    { id: 'dw_hala', name: 'Zabytkowa Główna Hala Odpraw Cesarsko-Królewska', polygon: makeRect(CX + 7250, CY - 4550, 1200, 850) },
  ],
});

// Galeria Krakowska
allBuildings.push({
  id: 'galeria_krakowska',
  name: 'Galeria Krakowska (Nowe Miasto)',
  address: 'ul. Pawia 5',
  polygon: makeRect(CX + 7200, CY - 7500, 1300, 1600),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'gal_d', x: CX + 7200, y: CY - 6700, width: 100, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 7850, y: CY - 7490 }, { x: CX + 7850, y: CY - 5910 }],
  interiorRooms: [
    { id: 'gal_atrium', name: 'Wielkie Atrium Handlowe i Pasaż Nowego Miasta', polygon: makeRect(CX + 7250, CY - 7450, 1200, 1500) },
  ],
});

// Browar Lubicz
allBuildings.push({
  id: 'browar_lubicz',
  name: 'Zabytkowy Browar Lubicz (Pałac Goetzów)',
  address: 'ul. Lubicz 17',
  polygon: makeRect(CX + 10200, CY - 5200, 1100, 800),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'brow_d', x: CX + 10750, y: CY - 4400, width: 85, angle: Math.PI, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 10400, y: CY - 5190 }, { x: CX + 11100, y: CY - 5190 }],
  interiorRooms: [
    { id: 'brow_slod', name: 'Zabytkowa Słodownia i Warzelnia Browaru', polygon: makeRect(CX + 10250, CY - 5150, 1000, 700) },
  ],
});

// Opera Krakowska
allBuildings.push({
  id: 'opera_krakowska',
  name: 'Opera Krakowska (Scena Operowa i Baletowa)',
  address: 'ul. Lubicz 48',
  polygon: makeRect(CX + 13000, CY - 5200, 1200, 900),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'opera_d', x: CX + 13600, y: CY - 4300, width: 95, angle: Math.PI, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 13600, y: CY - 5190 }],
  interiorRooms: [
    { id: 'opera_sala', name: 'Wielka Sala Operowa z Balkonami', polygon: makeRect(CX + 13050, CY - 5150, 1100, 800) },
  ],
});

// Ogród Botaniczny UJ — Palmiarnia
allBuildings.push({
  id: 'palmiarnia_ogrod_botaniczny',
  name: 'Palmiarnia i Instytut Botaniki UJ',
  address: 'ul. Kopernika 27',
  polygon: makeRect(CX + 12800, CY - 1500, 950, 750),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'palm_d', x: CX + 12800, y: CY - 1125, width: 85, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 13275, y: CY - 1490 }],
  interiorRooms: [
    { id: 'palm_tropik', name: 'Zabytkowa Palmiarnia Egzotyczna z 1864 r.', polygon: makeRect(CX + 12850, CY - 1450, 850, 650) },
  ],
});

// Kościół św. Mikołaja (located north of Kopernika at CY - 2550)
allBuildings.push({
  id: 'kosciol_mikolaja',
  name: 'Kościół św. Mikołaja (XI w.)',
  address: 'ul. Kopernika 9',
  polygon: makeRect(CX + 7600, CY - 2550, 650, 700),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: false,
  doors: [],
  windows: [],
  interiorRooms: [],
});

// ul. Lubicz i Kopernika Kamienice
generateRow('kam_lubicz_n', 'ul. Lubicz', CX + 8800, CY - 6600, 12, 280, 0, 260, 500, 'bottom', 1, 2, 522);
generateRow('kam_lubicz_s', 'ul. Lubicz', CX + 8800, CY - 4300, 12, 280, 0, 260, 500, 'top', 2, 2, 534);

generateRow('kam_kopernik_n', 'ul. Kopernika', CX + 8600, CY - 2500, 10, 280, 0, 260, 500, 'bottom', 1, 2, 546);
generateRow('kam_kopernik_s', 'ul. Kopernika', CX + 8600, CY - 1100, 10, 280, 0, 260, 500, 'top', 2, 2, 556);

// Grzegórzki Kamienice
generateRow('kam_grzegorz_n', 'ul. Grzegórzecka', CX + 7500, CY + 3100, 14, 280, 0, 260, 500, 'bottom', 1, 2, 566);
generateRow('kam_grzegorz_s', 'ul. Grzegórzecka', CX + 7500, CY + 4400, 14, 280, 0, 260, 500, 'top', 2, 2, 580);

// =========================================================================
// 11. SEKTOR POŁUDNIOWY (STRADOM, KAZIMIERZ, WISŁA, PODGÓRZE)
// =========================================================================
// ul. Stradomska
generateRow('kam_strad_w_1', 'ul. Stradomska', CX + 980, CY + 8100, 5, 0, 260, 300, 240, 'right', 1, 2, 594);
generateRow('kam_strad_w_2', 'ul. Stradomska', CX + 980, CY + 10100, 4, 0, 260, 300, 240, 'right', 11, 2, 599);
generateRow('kam_strad_e', 'ul. Stradomska', CX + 1520, CY + 8100, 9, 0, 260, 350, 240, 'left', 2, 2, 603);

// Kościół św. Bernardyna ze Sieny pod Wawelem
allBuildings.push({
  id: 'kosciol_bernardynow',
  name: 'Kościół św. Bernardyna ze Sieny (Bernardyni)',
  address: 'ul. Bernardyńska 2',
  polygon: makeRect(CX + 1550, CY + 10500, 750, 850),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: false,
  doors: [],
  windows: [],
  interiorRooms: [],
});

// Plac Nowy — Słynny Okrąglak (Kazimierz)
allBuildings.push({
  id: 'okraglak_plac_nowy',
  name: 'Zabytkowy Okrąglak na Placu Nowym',
  address: 'Plac Nowy 1',
  polygon: makeRect(CX + 2300, CY + 13400, 420, 420),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [
    { id: 'okr_d_n', x: CX + 2510, y: CY + 13400, width: 70, angle: 0, isOpen: false, isLocked: false },
    { id: 'okr_d_s', x: CX + 2510, y: CY + 13820, width: 70, angle: Math.PI, isOpen: false, isLocked: false },
  ],
  windows: [{ x: CX + 2310, y: CY + 13610 }, { x: CX + 2710, y: CY + 13610 }],
  interiorRooms: [
    { id: 'okr_kramy', name: 'Zabytkowa Rotunda — Legendarny Piec Zapiekanek', polygon: makeRect(CX + 2330, CY + 13430, 360, 360) },
  ],
});

// Stara Synagoga (XV w., ul. Szeroka 24)
allBuildings.push({
  id: 'stara_synagoga',
  name: 'Stara Synagoga w Krakowie (XV w. Gotyk)',
  address: 'ul. Szeroka 24',
  polygon: makeRect(CX + 3800, CY + 14800, 650, 750),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'st_syn_d', x: CX + 3800, y: CY + 15175, width: 85, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 4125, y: CY + 14810 }],
  interiorRooms: [
    { id: 'st_syn_sala', name: 'Gotycka Sala Modlitewna — Aron ha-Kodesz i Bima', polygon: makeRect(CX + 3850, CY + 14850, 550, 650) },
  ],
});

// Synagoga Remuh i Kirkut (ul. Szeroka 40)
allBuildings.push({
  id: 'synagoga_remuh',
  name: 'Synagoga Remuh i Renesansowy Kirkut',
  address: 'ul. Szeroka 40',
  polygon: makeRect(CX + 3800, CY + 13500, 550, 600),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: false,
  doors: [],
  windows: [],
  interiorRooms: [],
});

// Synagoga Tempel (ul. Miodowa 24)
allBuildings.push({
  id: 'synagoga_tempel',
  name: 'Synagoga Tempel (Postępowa)',
  address: 'ul. Miodowa 24',
  polygon: makeRect(CX + 1850, CY + 12400, 600, 650),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'temp_d', x: CX + 2150, y: CY + 12400, width: 80, angle: 0, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 2000, y: CY + 12410 }, { x: CX + 2300, y: CY + 12410 }],
  interiorRooms: [
    { id: 'temp_nawa', name: 'Złocona Sala Modlitw ze Wspaniałymi Witrażami', polygon: makeRect(CX + 1900, CY + 12450, 500, 550) },
  ],
});

// Ratusz Kazimierski (Plac Wolnica 1)
allBuildings.push({
  id: 'ratusz_kazimierski',
  name: 'Ratusz Kazimierski (Muzeum Etnograficzne)',
  address: 'Plac Wolnica 1',
  polygon: makeRect(CX + 500, CY + 15800, 700, 650),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'rat_kaz_d', x: CX + 850, y: CY + 15800, width: 85, angle: 0, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 650, y: CY + 15810 }, { x: CX + 1050, y: CY + 15810 }],
  interiorRooms: [
    { id: 'rat_kaz_sala', name: 'Renesansowa Sala Rady Miasta Kazimierza', polygon: makeRect(CX + 550, CY + 15850, 600, 550) },
  ],
});

// Bazylika Bożego Ciała
allBuildings.push({
  id: 'bazylika_bozego_ciala',
  name: 'Bazylika Bożego Ciała (Kanonicy Regularni)',
  address: 'ul. Bożego Ciała 26',
  polygon: makeRect(CX + 1800, CY + 14800, 950, 1100),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'bb_d', x: CX + 1800, y: CY + 15350, width: 90, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 2275, y: CY + 14810 }],
  interiorRooms: [
    { id: 'bb_nawa', name: 'Monumentalna Gotycka Nawa z Mauzoleum św. Stanisława Kazimierczyka', polygon: makeRect(CX + 1850, CY + 14850, 850, 1000) },
  ],
});

// Sanktuarium na Skałce
allBuildings.push({
  id: 'sanktuarium_skalka',
  name: 'Bazylika św. Michała Archanioła na Skałce (Panteon Zasłużonych)',
  address: 'ul. Skałeczna 15',
  polygon: makeRect(CX - 1200, CY + 15200, 900, 950),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'skal_d', x: CX - 750, y: CY + 15200, width: 85, angle: 0, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 1050, y: CY + 15210 }, { x: CX - 450, y: CY + 15210 }],
  interiorRooms: [
    { id: 'skal_krypta', name: 'Krypta Zasłużonych — Groby Długosza, Wyspiańskiego, Szymanowskiego', polygon: makeRect(CX - 1150, CY + 15250, 800, 850) },
  ],
});

// Kamienice na Kazimierzu (ul. Krakowska)
generateRow('kam_krakow_w', 'ul. Krakowska', CX + 1050, CY + 11800, 8, 0, 260, 280, 240, 'right', 1, 2, 612);
generateRow('kam_krakow_e', 'ul. Krakowska', CX + 1520, CY + 11800, 8, 0, 260, 280, 240, 'left', 2, 2, 620);

// Podgórze (south of Wisła)
allBuildings.push({
  id: 'kosciol_sw_jozefa_podgorze',
  name: 'Kościół św. Józefa w Podgórzu (Neogotyk — Rynek Podgórski)',
  address: 'Rynek Podgórski 1',
  polygon: makeRect(CX + 1800, CY + 17150, 850, 800),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'jz_d', x: CX + 2225, y: CY + 17150, width: 90, angle: 0, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 2000, y: CY + 17160 }, { x: CX + 2450, y: CY + 17160 }],
  interiorRooms: [
    { id: 'jz_nawa', name: 'Monumentalna Neogotycka Katedra Podgórza', polygon: makeRect(CX + 1850, CY + 17200, 750, 700) },
  ],
});

// Apteka pod Orłem (Plac Bohaterów Getta)
allBuildings.push({
  id: 'apteka_pod_orlem',
  name: 'Apteka pod Orłem Tadeusza Pankiewicza',
  address: 'Plac Bohaterów Getta 18',
  polygon: makeRect(CX + 4200, CY + 15700, 650, 600),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'apt_d', x: CX + 4200, y: CY + 16000, width: 80, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 4525, y: CY + 15710 }],
  interiorRooms: [
    { id: 'apt_sala', name: 'Zabytkowa Izba Ekspedycyjna Apteki i Receptura', polygon: makeRect(CX + 4250, CY + 15750, 550, 500) },
  ],
});

// ul. Kalwaryjska (Podgórze — running vertically along the street)
generateRow('kam_kalwaryjska_w', 'ul. Kalwaryjska', CX + 1050, CY + 16650, 4, 0, 250, 250, 230, 'right', 1, 2, 628);
generateRow('kam_kalwaryjska_e', 'ul. Kalwaryjska', CX + 1500, CY + 16650, 2, 0, 250, 250, 230, 'left', 2, 2, 636);

// Output formatted file
const code = `// AUTOGENERATED KRAKOW TENEMENTS AND MONUMENTS (1.5 KM x 1.5 KM FULL SQUARE MAP)
// Strict 2-color architectural palette, addresses, 50% enterable ratio, operable doors & illuminated windows
import { BuildingData } from '../types/game';

export const KRAKOW_BUILDINGS: BuildingData[] = ${JSON.stringify(allBuildings, null, 2)};
`;

fs.writeFileSync(path.resolve('src/data/krakowBuildings.ts'), code, 'utf-8');
console.log(`Generated ${allBuildings.length} authentic Krakow buildings across 1.5 km square.`);
