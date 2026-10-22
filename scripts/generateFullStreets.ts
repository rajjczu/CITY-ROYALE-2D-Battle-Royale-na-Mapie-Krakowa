import fs from 'node:fs';
import path from 'node:path';
import { KRAKOW_STREETS as baseStreets } from '../src/data/krakowMap';
import { StreetData } from '../src/types/game';

const IMG_CX = 596.0;
const IMG_CY = 466.0;
const SCALE = 22.5;
const WORLD_CX = 18000;
const WORLD_CY = 18000;

function imgToWorld(ix: number, iy: number): [number, number] {
  return [
    Math.round(WORLD_CX + (ix - IMG_CX) * SCALE),
    Math.round(WORLD_CY + (iy - IMG_CY) * SCALE),
  ];
}

function getDistrict(gx: number, gy: number): [string, string] {
  if (gy < 12500) {
    return ['Stary Kleparz', 'ul. Warszawska / Długa'];
  } else if (gy > 25500) {
    if (gx < 16000) {
      return ['Zakole Wisły / Dębniki', 'Bulwary Wiślane'];
    } else {
      return ['Kazimierz / Podgórze', 'ul. Krakowska / Józefa'];
    }
  } else if (gx < 13500) {
    return ['Piasek / Nowy Świat', 'ul. Karmelicka / Piłsudskiego'];
  } else if (gx > 22500) {
    return ['Wesoła / Grzegórzki', 'ul. Lubicz / Kopernika'];
  } else {
    if (gx >= 15500 && gx <= 20500 && gy >= 15500 && gy <= 20500) {
      return ['Stare Miasto — Rynek Główny', 'Trakt Królewski'];
    } else {
      return ['Stare Miasto — Planty', 'Pas Ochronny Plant'];
    }
  }
}

// Read CSV
const csvRaw = fs.readFileSync('public/assets/aistudio/krakow_ulice_alejki_parki_id_86d89c03.csv', 'utf-8');
const lines = csvRaw.split(/\r?\n/).filter(l => l.trim().length > 0);
const headers = lines[0].split(',');

const allStreets: StreetData[] = [...baseStreets];

for (let i = 1; i < lines.length; i++) {
  const parts = lines[i].split(',');
  if (parts.length < 10) continue;
  const id = parts[0];
  const warstwa = parts[1];
  const numer = parts[2];
  const bx = parseFloat(parts[6]);
  const by = parseFloat(parts[7]);
  const bw = parseFloat(parts[8]);
  const bh = parseFloat(parts[9]);

  if (warstwa !== 'U' && warstwa !== 'A') continue;

  const [gx, gy] = imgToWorld(bx, by);
  const gw = Math.max(40, Math.round(bw * SCALE));
  const gh = Math.max(40, Math.round(bh * SCALE));
  const cx = gx + Math.floor(gw / 2);
  const cy = gy + Math.floor(gh / 2);

  const [district] = getDistrict(cx, cy);

  const name =
    warstwa === 'A'
      ? `Alejka Spacerowa A${numer} — ${district}`
      : `Ulica Miejska U${numer} — ${district}`;

  const width = warstwa === 'A' ? 32 : 50;
  const sidewalkWidth = warstwa === 'A' ? 14 : 18;

  const path =
    bw >= bh
      ? [
          { x: gx, y: cy },
          { x: gx + gw, y: cy },
        ]
      : [
          { x: cx, y: gy },
          { x: cx, y: gy + gh },
        ];

  allStreets.push({
    id: `st_${id.toLowerCase()}`,
    name,
    width,
    sidewalkWidth,
    path,
  });
}

console.log(`Successfully generated ${allStreets.length} total streets and alleys (${baseStreets.length} base + ${allStreets.length - baseStreets.length} cartography corridors).`);

const code = `import { StreetData } from '../types/game';

/**
 * KOMPLETNA BAZA ULIC I ALEJEK KRAKOWA
 * Obejmuje ${allStreets.length} historycznych ulic, traktów, przecznicy i alejek spacerowych centrum Krakowa.
 */
export const KRAKOW_STREETS: StreetData[] = ${JSON.stringify(allStreets, null, 2)};
`;

fs.writeFileSync(path.resolve('src/data/krakowStreetsData.ts'), code, 'utf-8');
console.log('Saved to src/data/krakowStreetsData.ts');
