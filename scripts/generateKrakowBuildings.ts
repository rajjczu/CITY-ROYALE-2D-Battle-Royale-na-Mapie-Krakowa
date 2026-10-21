import fs from 'node:fs';
import path from 'node:path';
import { BuildingData, BuildingDoor, InteriorRoom, Point } from '../src/types/game';
import { WORLD_CENTER } from '../src/game/constants';

const CX = WORLD_CENTER.x; // 24000
const CY = WORLD_CENTER.y; // 24000

function makeRect(x: number, y: number, w: number, h: number): Point[] {
  return [
    { x: Math.round(x), y: Math.round(y) },
    { x: Math.round(x + w), y: Math.round(y) },
    { x: Math.round(x + w), y: Math.round(y + h) },
    { x: Math.round(x), y: Math.round(y + h) },
  ];
}

// Exactly TWO colors for all buildings as requested by the user:
// Color 1: Authentic historic terracotta red
// Color 2: Authentic historic warm sandstone ochre
const COLOR_1 = {
  roof: '#9e3b2b',
  wall: '#7a2d1f',
};
const COLOR_2 = {
  roof: '#d8a359',
  wall: '#ad7a35',
};

const allBuildings: BuildingData[] = [];

// Helper to create a tenement / building with authentic parameters
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
  const poly = makeRect(x, y, w, h);
  const color = index % 2 === 0 ? COLOR_1 : COLOR_2;

  // Exact rule: 50% of buildings have entry blocked, 50% can be entered
  const canEnter = index % 2 === 0;

  let doorX = x + w / 2;
  let doorY = y;
  let doorAngle = 0;

  if (doorSide === 'top') {
    doorX = x + w / 2;
    doorY = y;
    doorAngle = 0;
  } else if (doorSide === 'bottom') {
    doorX = x + w / 2;
    doorY = y + h;
    doorAngle = Math.PI;
  } else if (doorSide === 'left') {
    doorX = x;
    doorY = y + h / 2;
    doorAngle = -Math.PI / 2;
  } else if (doorSide === 'right') {
    doorX = x + w;
    doorY = y + h / 2;
    doorAngle = Math.PI / 2;
  }

  const doorWidth = Math.min(65, Math.max(42, Math.floor((doorSide === 'top' || doorSide === 'bottom' ? w : h) * 0.38)));

  const doors: BuildingDoor[] = [];
  if (canEnter) {
    doors.push({
      id: `d_${id}`,
      x: Math.round(doorX),
      y: Math.round(doorY),
      width: doorWidth,
      angle: doorAngle,
      isOpen: false, // Starts closed, player must open it!
      isLocked: false,
    });
  }

  // Windows: "każdy budynek do którego można wejść ma okno"
  // Generate windows along the facade of enterable buildings
  const windows: Point[] = [];
  if (canEnter) {
    if (doorSide === 'top' || doorSide === 'bottom') {
      const winY = doorSide === 'top' ? y + 8 : y + h - 8;
      windows.push({ x: Math.round(x + w * 0.22), y: Math.round(winY) });
      windows.push({ x: Math.round(x + w * 0.78), y: Math.round(winY) });
      if (w > 260) {
        windows.push({ x: Math.round(x + w * 0.5), y: Math.round(winY) });
      }
    } else {
      const winX = doorSide === 'left' ? x + 8 : x + w - 8;
      windows.push({ x: Math.round(winX), y: Math.round(y + h * 0.22) });
      windows.push({ x: Math.round(winX), y: Math.round(y + h * 0.78) });
      if (h > 260) {
        windows.push({ x: Math.round(winX), y: Math.round(y + h * 0.5) });
      }
    }
  }

  const roomMargin = 12;
  const roomPoly = makeRect(x + roomMargin, y + roomMargin, w - roomMargin * 2, h - roomMargin * 2);

  const roomTypes = [
    'Sień Kupiecka i Sklepienie Gotyckie',
    'Renesansowa Izba z Belkowanym Stropem',
    'Zabytkowa Apteka i Zielarnia',
    'Antykwariat Książkowy i Rycin',
    'Kawiarnia Literacka i Salonik',
    'Warsztat Złotniczy i Szlifierski',
    'Piwnica Win Małopolskich',
    'Kolekcja Gobelinów i Zegarów',
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
              w: Math.min(48, Math.floor(w * 0.32)),
              h: Math.min(48, Math.floor(h * 0.32)),
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
allBuildings.push({
  id: 'sukiennice',
  name: 'Sukiennice (Kramy Sukiennicze)',
  address: 'Rynek Główny 1/3',
  polygon: makeRect(CX - 380, CY - 1700, 760, 3400),
  doors: [
    { id: 'suk_d_north', x: CX, y: CY - 1700, width: 100, angle: 0, isOpen: false, isLocked: false },
    { id: 'suk_d_south', x: CX, y: CY + 1700, width: 100, angle: Math.PI, isOpen: false, isLocked: false },
    { id: 'suk_d_east', x: CX + 380, y: CY, width: 100, angle: Math.PI / 2, isOpen: false, isLocked: false },
    { id: 'suk_d_west', x: CX - 380, y: CY, width: 100, angle: -Math.PI / 2, isOpen: false, isLocked: false },
  ],
  interiorRooms: [
    {
      id: 'suk_hala_n',
      name: 'Kramy Sukiennicze — Galeria Sztuki Polskiej XIX w.',
      polygon: makeRect(CX - 340, CY - 1650, 680, 1550),
      furniture: [
        { type: 'stall', x: CX - 160, y: CY - 1100, w: 85, h: 180 },
        { type: 'stall', x: CX + 160, y: CY - 1100, w: 85, h: 180 },
        { type: 'stall', x: CX - 160, y: CY - 500, w: 85, h: 180 },
        { type: 'stall', x: CX + 160, y: CY - 500, w: 85, h: 180 },
      ],
    },
    {
      id: 'suk_hala_s',
      name: 'Kramy Sukiennicze — Podziemia Rynku',
      polygon: makeRect(CX - 340, CY + 100, 680, 1550),
      furniture: [
        { type: 'stall', x: CX - 160, y: CY + 500, w: 85, h: 180 },
        { type: 'stall', x: CX + 160, y: CY + 500, w: 85, h: 180 },
        { type: 'stall', x: CX - 160, y: CY + 1100, w: 85, h: 180 },
        { type: 'stall', x: CX + 160, y: CY + 1100, w: 85, h: 180 },
      ],
    },
  ],
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  windows: [
    { x: CX - 370, y: CY - 800 },
    { x: CX - 370, y: CY + 800 },
    { x: CX + 370, y: CY - 800 },
    { x: CX + 370, y: CY + 800 },
  ],
});

allBuildings.push({
  id: 'bazylika_mariacka',
  name: 'Bazylika Mariacka (Kościół Wniebowzięcia NMP)',
  address: 'Plac Mariacki 5',
  polygon: makeRect(CX + 1650, CY - 2100, 1000, 1200),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [
    { id: 'mar_d1', x: CX + 1650, y: CY - 1500, width: 90, angle: -Math.PI / 2, isOpen: false, isLocked: false },
  ],
  windows: [
    { x: CX + 1660, y: CY - 1800 },
    { x: CX + 1660, y: CY - 1200 },
    { x: CX + 2150, y: CY - 2090 },
  ],
  interiorRooms: [
    {
      id: 'mar_nawa',
      name: 'Gotycka Nawa Główna — Ołtarz Wita Stwosza',
      polygon: makeRect(CX + 1700, CY - 2050, 900, 1100),
      furniture: [
        { type: 'altar', x: CX + 2450, y: CY - 1500, w: 85, h: 260 },
        { type: 'pew', x: CX + 2050, y: CY - 1800, w: 240, h: 65 },
        { type: 'pew', x: CX + 2050, y: CY - 1200, w: 240, h: 65 },
      ],
    },
  ],
});

allBuildings.push({
  id: 'wieza_ratuszowa',
  name: 'Wieża Ratuszowa (Gotyk XIV w.)',
  address: 'Rynek Główny 1',
  polygon: makeRect(CX - 1500, CY - 400, 480, 480),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'rat_d', x: CX - 1020, y: CY - 160, width: 70, angle: 0, isOpen: false, isLocked: false }],
  windows: [
    { x: CX - 1260, y: CY - 390 },
    { x: CX - 1490, y: CY - 160 },
  ],
  interiorRooms: [
    { id: 'rat_hall', name: 'Gotycka Sala Rady Miasta i Skarbiec Ratuszowy', polygon: makeRect(CX - 1460, CY - 360, 400, 400) },
  ],
});

allBuildings.push({
  id: 'odwach_ratuszowy',
  name: 'Dawny Odwach Garnizonu Miejskiego',
  address: 'Rynek Główny 1A',
  polygon: makeRect(CX - 1500, CY + 180, 480, 300),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: false, // 50% locked
  doors: [],
  windows: [],
  interiorRooms: [],
});

allBuildings.push({
  id: 'kosciol_wojciecha',
  name: 'Kościół św. Wojciecha (X w. Romański)',
  address: 'Rynek Główny 2',
  polygon: makeRect(CX + 1300, CY + 1400, 400, 400),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'woj_d', x: CX + 1300, y: CY + 1600, width: 65, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [
    { x: CX + 1500, y: CY + 1410 },
    { x: CX + 1500, y: CY + 1790 },
  ],
  interiorRooms: [
    { id: 'woj_roma', name: 'Przedlokacyjna Świątynia Romańska św. Wojciecha', polygon: makeRect(CX + 1330, CY + 1430, 340, 340) },
  ],
});

allBuildings.push({
  id: 'kosciol_barbary',
  name: 'Kościół św. Barbary',
  address: 'Plac Mariacki 8',
  polygon: makeRect(CX + 2800, CY - 2100, 580, 700),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: false,
  doors: [],
  windows: [],
  interiorRooms: [],
});

// =========================================================================
// 2. CZTERY PIERZEJE RYNKU GŁÓWNEGO (KAMIENICE MIESZCZAŃSKIE)
// Streets leaving Rynek:
// - Północ: Sławkowska (CX-820), św. Jana (CX), Floriańska (CX+820)
//   Rynek North Pierzeja is broken into 4 authentic segments between these streets!
// - Zachód: Szczepańska (CY-1800), Szewska (CY-820), św. Anny (CY+820)
// - Południe: Wiślna (CX-820), Bracka (CX), Grodzka (CX+820)
// - Wschód: Sienna (CY+820), Mikołajska (CY-820)
// =========================================================================

// Pierzeja Północna (Linia A-B): y = CY - 2800 do CY - 2260
// Segment 1: West of Sławkowska (x = CX - 2200 do CX - 900)
generateRow('kam_ryn_n1', 'Rynek Główny', CX - 2160, CY - 2800, 3, 400, 0, 380, 540, 'bottom', 38, 1, 10);
// Segment 2: Between Sławkowska and św. Jana (x = CX - 740 do CX - 80)
generateRow('kam_ryn_n2', 'Rynek Główny', CX - 730, CY - 2800, 2, 310, 0, 300, 540, 'bottom', 41, 1, 13);
// Segment 3: Between św. Jana and Floriańska (x = CX + 80 do CX + 740)
generateRow('kam_ryn_n3', 'Rynek Główny', CX + 90, CY - 2800, 2, 310, 0, 300, 540, 'bottom', 43, 1, 15);
// Segment 4: East of Floriańska (x = CX + 900 do CX + 1600)
generateRow('kam_ryn_n4', 'Rynek Główny', CX + 920, CY - 2800, 2, 320, 0, 310, 540, 'bottom', 45, 1, 17);

// Pierzeja Zachodnia (Linia G-H): x = CX - 2800 do CX - 2260
// Segment 1: North of Szczepańska (y = CY - 2200 do CY - 1880)
generateRow('kam_ryn_w1', 'Rynek Główny', CX - 2800, CY - 2180, 1, 0, 280, 540, 270, 'right', 28, 1, 20);
// Segment 2: Between Szczepańska and Szewska (y = CY - 1720 do CY - 900)
generateRow('kam_ryn_w2', 'Rynek Główny', CX - 2800, CY - 1700, 3, 0, 260, 540, 250, 'right', 29, 1, 22);
// Segment 3: Between Szewska and św. Anny (y = CY - 740 do CY + 740)
generateRow('kam_ryn_w3', 'Rynek Główny', CX - 2800, CY - 720, 5, 0, 280, 540, 270, 'right', 32, 1, 25);
// Segment 4: South of św. Anny (y = CY + 900 do CY + 2200)
generateRow('kam_ryn_w4', 'Rynek Główny', CX - 2800, CY + 920, 4, 0, 300, 540, 290, 'right', 37, 1, 30);

// Pierzeja Południowa (Linia E-F): y = CY + 2260 do CY + 2800
// Segment 1: West of Wiślna (x = CX - 2200 do CX - 900)
generateRow('kam_ryn_s1', 'Rynek Główny', CX - 2160, CY + 2260, 3, 400, 0, 380, 540, 'top', 11, 1, 35);
// Segment 2: Between Wiślna and Bracka (x = CX - 740 do CX - 80)
generateRow('kam_ryn_s2', 'Rynek Główny', CX - 730, CY + 2260, 2, 310, 0, 300, 540, 'top', 14, 1, 38);
// Segment 3: Between Bracka and Grodzka (x = CX + 80 do CX + 740)
generateRow('kam_ryn_s3', 'Rynek Główny', CX + 90, CY + 2260, 2, 310, 0, 300, 540, 'top', 16, 1, 40);
// Segment 4: East of Grodzka (x = CX + 900 do CX + 2200)
generateRow('kam_ryn_s4', 'Rynek Główny', CX + 920, CY + 2260, 3, 410, 0, 390, 540, 'top', 18, 1, 42);

// Pierzeja Wschodnia (Linia C-D): x = CX + 2260 do CX + 2800
// Segment 1: North of Mikołajska (y = CY - 2100 do CY - 900)
generateRow('kam_ryn_e1', 'Rynek Główny', CX + 2260, CY - 2050, 4, 0, 280, 540, 270, 'left', 1, 1, 45);
// Segment 2: Between Mikołajska and Sienna (y = CY - 740 do CY + 740)
generateRow('kam_ryn_e2', 'Rynek Główny', CX + 2260, CY - 720, 5, 0, 280, 540, 270, 'left', 5, 1, 50);
// Segment 3: South of Sienna (y = CY + 900 do CY + 2200)
generateRow('kam_ryn_e3', 'Rynek Główny', CX + 2260, CY + 920, 4, 0, 310, 540, 300, 'left', 10, 1, 55);

// =========================================================================
// 3. KWARTAŁY PÓŁNOCNE — ŚW. TOMASZA, ŚW. MARKA, PIJARSKA
// Corridors strictly respected:
// - Horizontal: św. Tomasza (CY - 3600), św. Marka (CY - 4800), Pijarska (CY - 5800)
// - Vertical: Sławkowska (CX - 820), św. Jana (CX), Floriańska (CX + 820), Szpitalna (CX + 2400)
// =========================================================================

// --- BLOCK ROW 1: Between Rynek Pierzeja (CY - 2800) and św. Tomasza (CY - 3650) ---
// y ∈ [CY - 3550, CY - 2850] (height 700 px)

// A. Sławkowska (West side): x = CX - 1380 do CX - 900
generateRow('kam_slaw_w1', 'ul. Sławkowska', CX - 1360, CY - 3520, 3, 0, 210, 440, 195, 'right', 1, 2, 60);
// B. Sławkowska (East) & św. Jana (West): x = CX - 740 do CX - 80
generateRow('kam_slaw_e1', 'ul. Sławkowska', CX - 730, CY - 3520, 3, 0, 210, 290, 195, 'left', 2, 2, 65);
generateRow('kam_jana_w1', 'ul. św. Jana', CX - 400, CY - 3520, 3, 0, 210, 310, 195, 'right', 1, 2, 70);
// C. św. Jana (East) & Floriańska (West): x = CX + 80 do CX + 740
generateRow('kam_jana_e1', 'ul. św. Jana', CX + 90, CY - 3520, 3, 0, 210, 310, 195, 'left', 2, 2, 75);
generateRow('kam_flor_w1', 'ul. Floriańska', CX + 430, CY - 3520, 3, 0, 210, 300, 195, 'right', 1, 2, 80);
// D. Floriańska (East) & Szpitalna (West): x = CX + 900 do CX + 2320
generateRow('kam_flor_e1', 'ul. Floriańska', CX + 910, CY - 3520, 3, 0, 210, 380, 195, 'left', 2, 2, 85);
generateRow('kam_szpit_w1', 'ul. Szpitalna', CX + 1850, CY - 3520, 3, 0, 210, 460, 195, 'right', 1, 2, 90);
// E. Szpitalna (East) & św. Krzyża (West): x = CX + 2480 do CX + 3520
generateRow('kam_szpit_e1', 'ul. Szpitalna', CX + 2490, CY - 3520, 3, 0, 210, 480, 195, 'left', 2, 2, 95);
generateRow('kam_krzyz_w1', 'ul. św. Krzyża', CX + 3020, CY - 3520, 3, 0, 210, 490, 195, 'right', 1, 2, 100);

// --- BLOCK ROW 2: Between św. Tomasza (CY - 3550) and św. Marka (CY - 4850) ---
// y ∈ [CY - 4750, CY - 3650] (height 1100 px)

// A. Sławkowska West: x = CX - 1380 do CX - 900
generateRow('kam_slaw_w2', 'ul. Sławkowska', CX - 1360, CY - 4720, 5, 0, 210, 440, 195, 'right', 7, 2, 105);
// B. Sławkowska East & św. Jana West: x = CX - 740 do CX - 80
generateRow('kam_slaw_e2', 'ul. Sławkowska', CX - 730, CY - 4720, 5, 0, 210, 290, 195, 'left', 8, 2, 110);
generateRow('kam_jana_w2', 'ul. św. Jana', CX - 400, CY - 4720, 5, 0, 210, 310, 195, 'right', 7, 2, 115);
// C. św. Jana East & Floriańska West: x = CX + 80 do CX + 740
generateRow('kam_jana_e2', 'ul. św. Jana', CX + 90, CY - 4720, 5, 0, 210, 310, 195, 'left', 8, 2, 120);
generateRow('kam_flor_w2', 'ul. Floriańska', CX + 430, CY - 4720, 5, 0, 210, 300, 195, 'right', 7, 2, 125);
// D. Floriańska East & Szpitalna West: x = CX + 900 do CX + 2320
generateRow('kam_flor_e2', 'ul. Floriańska', CX + 910, CY - 4720, 5, 0, 210, 380, 195, 'left', 8, 2, 130);
generateRow('kam_szpit_w2', 'ul. Szpitalna', CX + 1850, CY - 4720, 5, 0, 210, 460, 195, 'right', 7, 2, 135);
// E. Szpitalna East & św. Krzyża West: x = CX + 2480 do CX + 3520
generateRow('kam_szpit_e2', 'ul. Szpitalna', CX + 2490, CY - 4720, 5, 0, 210, 480, 195, 'left', 8, 2, 140);
generateRow('kam_krzyz_w2', 'ul. św. Krzyża', CX + 3020, CY - 4720, 5, 0, 210, 490, 195, 'right', 7, 2, 145);

// --- BLOCK ROW 3: Between św. Marka (CY - 4750) and Pijarska (CY - 5850) ---
// y ∈ [CY - 5750, CY - 4850] (height 900 px)

// A. Sławkowska West: x = CX - 1380 do CX - 900
generateRow('kam_slaw_w3', 'ul. Sławkowska', CX - 1360, CY - 5720, 4, 0, 210, 440, 195, 'right', 17, 2, 150);
// B. Sławkowska East & św. Jana West: x = CX - 740 do CX - 80
generateRow('kam_slaw_e3', 'ul. Sławkowska', CX - 730, CY - 5720, 4, 0, 210, 290, 195, 'left', 18, 2, 155);
generateRow('kam_jana_w3', 'ul. św. Jana', CX - 400, CY - 5720, 4, 0, 210, 310, 195, 'right', 17, 2, 160);
// C. św. Jana East & Floriańska West: x = CX + 80 do CX + 740
generateRow('kam_jana_e3', 'ul. św. Jana', CX + 90, CY - 5720, 4, 0, 210, 310, 195, 'left', 18, 2, 165);
generateRow('kam_flor_w3', 'ul. Floriańska', CX + 430, CY - 5720, 4, 0, 210, 300, 195, 'right', 17, 2, 170);
// D. Floriańska East & Szpitalna West: x = CX + 900 do CX + 2320
generateRow('kam_flor_e3', 'ul. Floriańska', CX + 910, CY - 5720, 4, 0, 210, 380, 195, 'left', 18, 2, 175);
generateRow('kam_szpit_w3', 'ul. Szpitalna', CX + 1850, CY - 5720, 4, 0, 210, 460, 195, 'right', 17, 2, 180);
// E. Szpitalna East & św. Krzyża West: x = CX + 2480 do CX + 3520
generateRow('kam_szpit_e3', 'ul. Szpitalna', CX + 2490, CY - 5720, 4, 0, 210, 480, 195, 'left', 18, 2, 185);
generateRow('kam_krzyz_w3', 'ul. św. Krzyża', CX + 3020, CY - 5720, 4, 0, 210, 490, 195, 'right', 17, 2, 190);

// --- BLOCK ROW 4: North of Pijarska (y = CY - 6400 do CY - 5880) along city walls ---
generateRow('kam_pijar_n', 'ul. Pijarska', CX - 2200, CY - 6400, 12, 360, 0, 340, 480, 'bottom', 1, 1, 195);

// =========================================================================
// 4. BRAMA FLORIAŃSKA I BARBAKAN (TRAKT KRÓLEWSKI - FLORIAŃSKA NIE JEST ŚLEPA!)
// Brama Floriańska allows straight passage through the central archway (width 160px)
// =========================================================================
allBuildings.push({
  id: 'brama_flor_west_wing',
  name: 'Brama Floriańska (Baszta Zachodnia & Mury Obronne)',
  address: 'ul. Floriańska 45',
  polygon: makeRect(CX + 480, CY - 6120, 260, 340),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'bram_w_d', x: CX + 740, y: CY - 5950, width: 60, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 610, y: CY - 6110 }],
  interiorRooms: [
    { id: 'bram_r_w', name: 'Zabytkowa Izba Straży Bramy Floriańskiej', polygon: makeRect(CX + 500, CY - 6100, 220, 300) },
  ],
});

allBuildings.push({
  id: 'brama_flor_east_wing',
  name: 'Brama Floriańska (Baszta Wschodnia)',
  address: 'ul. Floriańska 46',
  polygon: makeRect(CX + 900, CY - 6120, 260, 340),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: false,
  doors: [],
  windows: [],
  interiorRooms: [],
});

allBuildings.push({
  id: 'barbakan_krakowski',
  name: 'Barbakan Krakowski (Rondel Gotycki)',
  address: 'Planty Krakowskie 1',
  polygon: makeRect(CX + 520, CY - 7200, 600, 600),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [
    { id: 'barb_d_s', x: CX + 820, y: CY - 6600, width: 85, angle: Math.PI, isOpen: false, isLocked: false },
    { id: 'barb_d_n', x: CX + 820, y: CY - 7200, width: 85, angle: 0, isOpen: false, isLocked: false },
  ],
  windows: [
    { x: CX + 600, y: CY - 6900 },
    { x: CX + 1040, y: CY - 6900 },
  ],
  interiorRooms: [
    { id: 'barb_room', name: 'Dziedziniec Strzelniczy Barbakanu', polygon: makeRect(CX + 560, CY - 7150, 520, 500) },
  ],
});

// Teatr Słowackiego (Plac św. Ducha)
allBuildings.push({
  id: 'teatr_slowackiego',
  name: 'Teatr im. Juliusza Słowackiego',
  address: 'Plac św. Ducha 1',
  polygon: makeRect(CX + 3800, CY - 5300, 1100, 950),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'slow_d', x: CX + 4350, y: CY - 4350, width: 100, angle: Math.PI, isOpen: false, isLocked: false }],
  windows: [
    { x: CX + 4000, y: CY - 4360 },
    { x: CX + 4700, y: CY - 4360 },
  ],
  interiorRooms: [
    { id: 'slow_sala', name: 'Złocista Widownia i Kurtyna Siemiradzkiego', polygon: makeRect(CX + 3850, CY - 5250, 1000, 850) },
  ],
});

// =========================================================================
// 5. KWARTAŁY ZACHODNIE — SZCZEPAŃSKA, SZEWSKA, ŚW. ANNY, GOŁĘBIA, JAGIELLOŃSKA
// Streets strictly respected:
// - Szczepańska (CY - 1800), Szewska (CY - 820), św. Anny (CY + 820), Gołębia (CY + 1800)
// - Jagiellońska (CX - 3600), Straszewskiego (CX - 6000)
// =========================================================================

// A. Ul. Szczepańska & Plac Szczepański: y ∈ [CY - 2250, CY - 1880]
generateRow('kam_szczep_s', 'ul. Szczepańska', CX - 3500, CY - 2250, 5, 260, 0, 240, 370, 'bottom', 1, 1, 200);

// B. Ul. Szewska — Północ (y ∈ [CY - 1720, CY - 900]):
generateRow('kam_szew_n', 'ul. Szewska', CX - 5800, CY - 1500, 15, 210, 0, 195, 600, 'bottom', 1, 2, 210);
// Ul. Szewska — Południe (y ∈ [CY - 740, CY - 100]):
generateRow('kam_szew_s', 'ul. Szewska', CX - 5800, CY - 740, 15, 210, 0, 195, 600, 'top', 2, 2, 220);

// C. Ul. św. Anny — Północ (y ∈ [CY + 100, CY + 740]):
generateRow('kam_anna_n', 'ul. św. Anny', CX - 5800, CY + 140, 15, 210, 0, 195, 600, 'bottom', 1, 2, 230);
// Ul. św. Anny — Południe (y ∈ [CY + 900, CY + 1720]):
generateRow('kam_anna_s', 'ul. św. Anny', CX - 5800, CY + 900, 15, 210, 0, 195, 600, 'top', 2, 2, 240);

// Collegium Maius UJ
allBuildings.push({
  id: 'collegium_maius',
  name: 'Collegium Maius UJ (Najstarszy Budynek Uniwersytetu)',
  address: 'ul. Jagiellońska 15',
  polygon: makeRect(CX - 4600, CY + 200, 850, 550),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'maius_d', x: CX - 3750, y: CY + 475, width: 85, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 4200, y: CY + 210 }, { x: CX - 4200, y: CY + 740 }],
  interiorRooms: [
    { id: 'maius_aula', name: 'Libraria i Aula Jagiellońska', polygon: makeRect(CX - 4550, CY + 250, 750, 450) },
  ],
});

// D. Ul. Gołębia — Północ (y ∈ [CY + 1100, CY + 1720]) & Południe (y ∈ [CY + 1880, CY + 2500]):
generateRow('kam_goleb_n', 'ul. Gołębia', CX - 5600, CY + 1250, 13, 220, 0, 205, 470, 'bottom', 1, 2, 250);
generateRow('kam_goleb_s', 'ul. Gołębia', CX - 5600, CY + 1880, 13, 220, 0, 205, 470, 'top', 2, 2, 260);

// Collegium Novum UJ
allBuildings.push({
  id: 'collegium_novum',
  name: 'Collegium Novum UJ (Rektorat)',
  address: 'ul. Gołębia 24',
  polygon: makeRect(CX - 5800, CY + 2450, 950, 650),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'novum_d', x: CX - 4850, y: CY + 2775, width: 90, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 5300, y: CY + 2460 }, { x: CX - 5300, y: CY + 3090 }],
  interiorRooms: [
    { id: 'novum_aula', name: 'Aula Główna Collegium Novum', polygon: makeRect(CX - 5750, CY + 2500, 850, 550) },
  ],
});

// =========================================================================
// 6. KWARTAŁY WSCHODNIE — MIKOŁAJSKA, MAŁY RYNEK, SIENNA, STOLARSKA
// Streets strictly respected:
// - Mikołajska (CY - 820), Sienna (CY + 820), Stolarska (CX + 1800)
// =========================================================================

// Ul. Mikołajska — Północ (y ∈ [CY - 1600, CY - 900]):
generateRow('kam_miko_n', 'ul. Mikołajska', CX + 2850, CY - 1550, 12, 220, 0, 205, 630, 'bottom', 1, 2, 270);
// Ul. Mikołajska — Południe (y ∈ [CY - 740, CY - 100]):
generateRow('kam_miko_s', 'ul. Mikołajska', CX + 2850, CY - 740, 12, 220, 0, 205, 630, 'top', 2, 2, 280);

// Mały Rynek Pierzeja Wschodnia:
generateRow('kam_maly_ryn', 'Mały Rynek', CX + 3820, CY - 720, 5, 0, 280, 540, 260, 'left', 1, 1, 290);

// Ul. Sienna — Północ (y ∈ [CY + 100, CY + 740]):
generateRow('kam_sien_n', 'ul. Sienna', CX + 2850, CY + 140, 12, 220, 0, 205, 600, 'bottom', 1, 2, 300);
// Ul. Sienna — Południe (y ∈ [CY + 900, CY + 1600]):
generateRow('kam_sien_s', 'ul. Sienna', CX + 2850, CY + 900, 12, 220, 0, 205, 600, 'top', 2, 2, 310);

// Ul. Stolarska (oś x = CX + 1800): y od CY + 900 do CY + 3500
generateRow('kam_stol_w', 'ul. Stolarska', CX + 1250, CY + 950, 9, 0, 270, 480, 250, 'right', 1, 2, 320);
generateRow('kam_stol_e', 'ul. Stolarska', CX + 1880, CY + 950, 9, 0, 270, 480, 250, 'left', 2, 2, 330);

// =========================================================================
// 7. KWARTAŁY POŁUDNIOWE — GRODZKA, WIŚLNA, BRACKA, FRANCISZKAŃSKA, POSELSKA, WAWEL
// Horizontal corridors respected:
// - Franciszkańska & Dominikańska (CY + 3600)
// - Poselska (CY + 4600)
// - Senacka (CY + 5500)
// - Podzamcze (CY + 7800)
// =========================================================================

// Ul. Wiślna: y ∈ [CY + 2300, CY + 3500]
generateRow('kam_wisl_w', 'ul. Wiślna', CX - 1380, CY + 2320, 4, 0, 280, 480, 260, 'right', 1, 2, 340);
generateRow('kam_wisl_e', 'ul. Wiślna', CX - 740, CY + 2320, 4, 0, 280, 500, 260, 'left', 2, 2, 350);

// Ul. Bracka: y ∈ [CY + 2300, CY + 3500]
generateRow('kam_brac_w', 'ul. Bracka', CX - 650, CY + 2320, 4, 0, 280, 500, 260, 'right', 1, 2, 360);
generateRow('kam_brac_e', 'ul. Bracka', CX + 80, CY + 2320, 4, 0, 280, 500, 260, 'left', 2, 2, 370);

// Pałac Biskupi (Franciszkańska 3)
allBuildings.push({
  id: 'palac_biskupi',
  name: 'Pałac Biskupi i Kuria Metropolitalna',
  address: 'ul. Franciszkańska 3',
  polygon: makeRect(CX - 1500, CY + 2750, 700, 750),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'bisk_d', x: CX - 1150, y: CY + 3500, width: 85, angle: Math.PI, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 1300, y: CY + 3490 }],
  interiorRooms: [
    { id: 'bisk_dziedz', name: 'Dziedziniec Kurii i Słynne Okno Papieskie', polygon: makeRect(CX - 1450, CY + 2800, 600, 650) },
  ],
});

// Bazylika Franciszkanów
allBuildings.push({
  id: 'bazylika_franciszkanow',
  name: 'Bazylika św. Franciszka z Asyżu',
  address: 'Plac Wszystkich Świętych 5',
  polygon: makeRect(CX - 750, CY + 2750, 680, 750),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: false,
  doors: [],
  windows: [],
  interiorRooms: [],
});

// Bazylika Dominikanów
allBuildings.push({
  id: 'bazylika_dominikanow',
  name: 'Bazylika Świętej Trójcy i Klasztor Dominikanów',
  address: 'ul. Stolarska 12',
  polygon: makeRect(CX + 1950, CY + 2750, 950, 750),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'dom_d', x: CX + 1950, y: CY + 3125, width: 85, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 2400, y: CY + 2760 }],
  interiorRooms: [
    { id: 'dom_nawa', name: 'Gotycka Bazylika Dominikanów i Krużganki', polygon: makeRect(CX + 2000, CY + 2800, 850, 650) },
  ],
});

// Pałac Wielopolskich (Urząd Miasta Krakowa)
allBuildings.push({
  id: 'palac_wielopolskich',
  name: 'Pałac Wielopolskich (Magistrat)',
  address: 'Plac Wszystkich Świętych 3/4',
  polygon: makeRect(CX + 100, CY + 3750, 620, 700),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'mag_d', x: CX + 410, y: CY + 3750, width: 85, angle: 0, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 250, y: CY + 3760 }, { x: CX + 570, y: CY + 3760 }],
  interiorRooms: [
    { id: 'mag_sala', name: 'Sala Obrad Rady Miasta Krakowa', polygon: makeRect(CX + 150, CY + 3800, 520, 600) },
  ],
});

// ULICA GRODZKA (TRAKT KRÓLEWSKI DO WAWELU)
// Block Row G1: Between Franciszkańska (CY + 3650) and Poselska (CY + 4550)
generateRow('kam_grodz_w1', 'ul. Grodzka', CX + 100, CY + 3750, 4, 0, 195, 620, 180, 'right', 2, 2, 380);
generateRow('kam_grodz_e1', 'ul. Grodzka', CX + 900, CY + 3750, 4, 0, 195, 620, 180, 'left', 1, 2, 385);

// Block Row G2: Between Poselska (CY + 4650) and Senacka (CY + 5450)
generateRow('kam_grodz_w2', 'ul. Grodzka', CX + 100, CY + 4700, 3, 0, 210, 620, 195, 'right', 10, 2, 390);
generateRow('kam_grodz_e2', 'ul. Grodzka', CX + 900, CY + 4700, 3, 0, 210, 620, 195, 'left', 9, 2, 395);

// Kościół św. Piotra i Pawła
allBuildings.push({
  id: 'kosciol_piotra_pawla',
  name: 'Kościół św. Piotra i Pawła',
  address: 'ul. Grodzka 52A',
  polygon: makeRect(CX + 1000, CY + 5400, 750, 850),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [{ id: 'pp_d', x: CX + 1000, y: CY + 5825, width: 85, angle: -Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX + 1375, y: CY + 5410 }],
  interiorRooms: [
    { id: 'pp_nawa', name: 'Barokowa Nawa i Krypta ks. Piotra Skargi', polygon: makeRect(CX + 1050, CY + 5450, 650, 750) },
  ],
});

// Kościół św. Andrzeja
allBuildings.push({
  id: 'kosciol_andrzeja',
  name: 'Kościół św. Andrzeja (Romański XI w.)',
  address: 'ul. Grodzka 54',
  polygon: makeRect(CX + 1000, CY + 6300, 700, 700),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: false,
  doors: [],
  windows: [],
  interiorRooms: [],
});

// Block Row G3: Between Senacka (CY + 5550) and Podzamcze (CY + 7750)
generateRow('kam_grodz_w3', 'ul. Grodzka', CX + 100, CY + 5600, 9, 0, 220, 620, 205, 'right', 16, 2, 400);
generateRow('kam_grodz_e3', 'ul. Grodzka', CX + 900, CY + 7050, 3, 0, 220, 620, 205, 'left', 17, 2, 405);

// ULICA KANONICZA: x = CX + 240 od CY + 4800 do CY + 7700
generateRow('kam_kanon_w', 'ul. Kanonicza', CX - 380, CY + 4800, 12, 0, 230, 520, 215, 'right', 2, 2, 410);
generateRow('kam_kanon_e', 'ul. Kanonicza', CX + 320, CY + 4800, 12, 0, 230, 480, 215, 'left', 1, 2, 420);

// Ul. Poselska: x od CX - 2200 do CX + 1600 (y = CY + 4600 corridor respected)
generateRow('kam_posel_n', 'ul. Poselska', CX - 2200, CY + 4150, 6, 280, 0, 260, 380, 'bottom', 1, 2, 430);
generateRow('kam_posel_s', 'ul. Poselska', CX - 2200, CY + 4680, 6, 280, 0, 260, 380, 'top', 2, 2, 440);

// Ul. Senacka:
generateRow('kam_senac_s', 'ul. Senacka', CX - 1000, CY + 5550, 5, 260, 0, 240, 360, 'top', 2, 2, 450);

// Ul. Podzamcze i Planty pod Wawelem:
generateRow('kam_podzam_n', 'ul. Podzamcze', CX - 2800, CY + 7250, 8, 320, 0, 300, 480, 'bottom', 1, 1, 460);

// =========================================================================
// 8. WAWEL — ZAMEK KRÓLEWSKI I KATEDRA WAWELSKA
// =========================================================================
allBuildings.push({
  id: 'zamek_wawelski',
  name: 'Zamek Królewski na Wawelu',
  address: 'Wawel 5',
  polygon: makeRect(CX - 1200, CY + 8400, 2400, 1800),
  roofColor: COLOR_1.roof,
  wallColor: COLOR_1.wall,
  canEnter: true,
  doors: [
    { id: 'waw_d_gate', x: CX, y: CY + 8400, width: 120, angle: 0, isOpen: false, isLocked: false },
    { id: 'waw_d_arc', x: CX, y: CY + 10200, width: 120, angle: Math.PI, isOpen: false, isLocked: false },
  ],
  windows: [
    { x: CX - 600, y: CY + 8410 },
    { x: CX + 600, y: CY + 8410 },
    { x: CX - 600, y: CY + 10190 },
    { x: CX + 600, y: CY + 10190 },
  ],
  interiorRooms: [
    {
      id: 'waw_dziedz',
      name: 'Renesansowy Dziedziniec Arkadowy i Sale Królewskie',
      polygon: makeRect(CX - 1100, CY + 8500, 2200, 1600),
      furniture: [
        { type: 'throne', x: CX, y: CY + 9300, w: 90, h: 90 },
        { type: 'desk', x: CX - 400, y: CY + 9100, w: 120, h: 70 },
        { type: 'desk', x: CX + 400, y: CY + 9100, w: 120, h: 70 },
      ],
    },
  ],
});

allBuildings.push({
  id: 'katedra_wawelska',
  name: 'Katedra Wawelska św. Stanisława i Wacława',
  address: 'Wawel 3',
  polygon: makeRect(CX - 2200, CY + 8400, 900, 1100),
  roofColor: COLOR_2.roof,
  wallColor: COLOR_2.wall,
  canEnter: true,
  doors: [{ id: 'kat_d', x: CX - 1300, y: CY + 8950, width: 85, angle: Math.PI / 2, isOpen: false, isLocked: false }],
  windows: [{ x: CX - 1750, y: CY + 8410 }, { x: CX - 1750, y: CY + 9490 }],
  interiorRooms: [
    { id: 'kat_nawa', name: 'Nawa Główna Katedry — Konfesja św. Stanisława', polygon: makeRect(CX - 2150, CY + 8450, 800, 1000) },
  ],
});

// =========================================================================
// 9. EXPANSION: KLEPARZ & PLAC MATEJKI (PÓŁNOC) & STRASZEWSKIEGO (ZACHÓD)
// Further enlarged area as requested ("powieksz obszar i dodaj kolejne budynki")
// =========================================================================
// Plac Matejki & Kleparz (North of Basztowa: y ∈ [CY - 7800, CY - 6900]):
generateRow('kam_mat_w', 'Plac Matejki', CX - 400, CY - 7750, 4, 0, 200, 360, 185, 'right', 2, 2, 470);
generateRow('kam_mat_e', 'Plac Matejki', CX + 820, CY - 7750, 4, 0, 200, 360, 185, 'left', 1, 2, 475);
generateRow('kam_baszt_n', 'ul. Basztowa', CX - 3200, CY - 7450, 16, 260, 0, 240, 500, 'bottom', 1, 1, 480);

// Straszewskiego (Zachód): x ∈ [CX - 6700, CX - 6100]
generateRow('kam_strasz_w', 'ul. Straszewskiego', CX - 6700, CY - 2400, 18, 0, 260, 540, 240, 'right', 1, 2, 490);

// Westerplatte (Wschód): x ∈ [CX + 6650, CX + 7250]
generateRow('kam_west_e', 'ul. Westerplatte', CX + 6650, CY - 3000, 16, 0, 260, 540, 240, 'left', 2, 2, 500);

console.log(`Generated total Krakow buildings: ${allBuildings.length}`);

const fileHeader = `// AUTO-GENERATED COMPLETE KRAKOW BUILDINGS DATASET (${allBuildings.length} BUILDINGS)
// Authentic Krakow Cadastral Map - Stare Miasto, Rynek, Wawel, Kleparz
// Exactly two colors, small address labels, 50% locked entrances, operable doors, and visible windows.

import { BuildingData } from '../types/game';

export const KRAKOW_BUILDINGS: BuildingData[] = ${JSON.stringify(allBuildings, null, 2)};
`;

fs.writeFileSync(path.resolve(process.cwd(), 'src/data/krakowBuildings.ts'), fileHeader, 'utf8');
console.log('Saved to src/data/krakowBuildings.ts');
