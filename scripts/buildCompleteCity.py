import csv
import json
import math
import os
import re

IMG_CX = 596.0
IMG_CY = 466.0
SCALE = 22.5
WORLD_CX = 18000
WORLD_CY = 18000

def img_to_world(ix, iy):
    return round(WORLD_CX + (ix - IMG_CX) * SCALE), round(WORLD_CY + (iy - IMG_CY) * SCALE)

def get_district_name(gx, gy):
    if gy < 12500:
        return 'Stary Kleparz', 'ul. Warszawska / Długa'
    elif gy > 25500:
        if gx < 16000:
            return 'Zakole Wisły / Dębniki', 'Bulwary Wiślane'
        else:
            return 'Kazimierz / Podgórze', 'ul. Krakowska / Józefa'
    elif gx < 13500:
        return 'Piasek / Nowy Świat', 'ul. Karmelicka / Piłsudskiego'
    elif gx > 22500:
        return 'Wesoła / Grzegórzki', 'ul. Lubicz / Kopernika'
    else:
        if 15500 <= gx <= 20500 and 15500 <= gy <= 20500:
            return 'Stare Miasto — Rynek Główny', 'Trakt Królewski'
        else:
            return 'Stare Miasto — Planty', 'Pas Ochronny Plant'

# =========================================================================
# 1. GENERATE KRAKOW PARKS DATA WITH FENCE GATES (OGRODZENIA I WEJŚCIA)
# =========================================================================
print('[*] Processing parks with perimeter fence gates from CSV...')
with open('public/assets/aistudio/krakow_ulice_alejki_parki_id_86d89c03.csv', encoding='utf-8') as f:
    parks_raw = [r for r in csv.DictReader(f) if r['warstwa'] == 'P']

parks_list = []

# Include major landmark parks first
parks_list.append({
    'id': 'blonia_krakowskie',
    'name': 'Błonia Krakowskie (Wielkie Łąki Miejskie — 48 ha)',
    'polygon': [
        {'x': WORLD_CX - 17500, 'y': WORLD_CY - 3000},
        {'x': WORLD_CX - 13200, 'y': WORLD_CY - 3000},
        {'x': WORLD_CX - 13200, 'y': WORLD_CY + 5500},
        {'x': WORLD_CX - 17500, 'y': WORLD_CY + 5500},
    ],
    'gates': [
        {'id': 'blonia_gate_n', 'x': WORLD_CX - 15350, 'y': WORLD_CY - 3000, 'width': 160, 'side': 'top'},
        {'id': 'blonia_gate_s', 'x': WORLD_CX - 15350, 'y': WORLD_CY + 5500, 'width': 160, 'side': 'bottom'},
        {'id': 'blonia_gate_e', 'x': WORLD_CX - 13200, 'y': WORLD_CY + 1250, 'width': 160, 'side': 'right'},
    ]
})
parks_list.append({
    'id': 'ogrod_botaniczny_uj',
    'name': 'Ogród Botaniczny Uniwersytetu Jagiellońskiego (Zabytkowe Arboreta)',
    'polygon': [
        {'x': WORLD_CX + 12500, 'y': WORLD_CY - 2800},
        {'x': WORLD_CX + 17200, 'y': WORLD_CY - 2800},
        {'x': WORLD_CX + 17200, 'y': WORLD_CY + 1500},
        {'x': WORLD_CX + 12500, 'y': WORLD_CY + 1500},
    ],
    'gates': [
        {'id': 'botaniczny_gate_w', 'x': WORLD_CX + 12500, 'y': WORLD_CY - 650, 'width': 120, 'side': 'left'},
        {'id': 'botaniczny_gate_s', 'x': WORLD_CX + 14850, 'y': WORLD_CY + 1500, 'width': 120, 'side': 'bottom'},
    ]
})
parks_list.append({
    'id': 'wzgorze_wawelskie_ogrody',
    'name': 'Wzgórze Wawelskie — Ogrody Królewskie i Zbocza Zamkowe',
    'polygon': [
        {'x': WORLD_CX - 3200, 'y': WORLD_CY + 7800},
        {'x': WORLD_CX + 2800, 'y': WORLD_CY + 7800},
        {'x': WORLD_CX + 2800, 'y': WORLD_CY + 11500},
        {'x': WORLD_CX - 3200, 'y': WORLD_CY + 11500},
    ],
    'gates': [
        {'id': 'wawel_ogrody_gate_n', 'x': WORLD_CX - 200, 'y': WORLD_CY + 7800, 'width': 140, 'side': 'top'},
        {'id': 'wawel_ogrody_gate_s', 'x': WORLD_CX - 200, 'y': WORLD_CY + 11500, 'width': 140, 'side': 'bottom'},
        {'id': 'wawel_ogrody_gate_w', 'x': WORLD_CX - 3200, 'y': WORLD_CY + 9650, 'width': 120, 'side': 'left'},
        {'id': 'wawel_ogrody_gate_e', 'x': WORLD_CX + 2800, 'y': WORLD_CY + 9650, 'width': 120, 'side': 'right'},
    ]
})

# Add all 298 authentic parks from the user's cartography dataset
for p in parks_raw:
    pid = p['id'].lower()
    bx = float(p['bbox_x'])
    by = float(p['bbox_y'])
    bw = float(p['bbox_width'])
    bh = float(p['bbox_height'])

    gx, gy = img_to_world(bx, by)
    gw = max(55, round(bw * SCALE))
    gh = max(55, round(bh * SCALE))

    district, street = get_district_name(gx + gw // 2, gy + gh // 2)

    poly = [
        {'x': gx, 'y': gy},
        {'x': gx + gw, 'y': gy},
        {'x': gx + gw, 'y': gy + gh},
        {'x': gx, 'y': gy + gh},
    ]

    # Calculate multiple entrances/gates along the perimeter fence
    gate_w = 90
    gates = []
    # North gate
    gates.append({
        'id': f'{pid}_g_n',
        'x': round(gx + gw * 0.5),
        'y': gy,
        'width': min(gate_w, round(gw * 0.45)),
        'side': 'top'
    })
    # South gate
    gates.append({
        'id': f'{pid}_g_s',
        'x': round(gx + gw * 0.5),
        'y': gy + gh,
        'width': min(gate_w, round(gw * 0.45)),
        'side': 'bottom'
    })
    # For wider parks, also add West and East gates
    if gw >= 260 or gh >= 260:
        gates.append({
            'id': f'{pid}_g_w',
            'x': gx,
            'y': round(gy + gh * 0.5),
            'width': min(gate_w, round(gh * 0.45)),
            'side': 'left'
        })
        gates.append({
            'id': f'{pid}_g_e',
            'x': gx + gw,
            'y': round(gy + gh * 0.5),
            'width': min(gate_w, round(gh * 0.45)),
            'side': 'right'
        })

    parks_list.append({
        'id': f'park_{pid}',
        'name': f'Park / Skwer {p["id"]} ({district})',
        'polygon': poly,
        'gates': gates,
    })

print(f'[+] Generated {len(parks_list)} total park areas with perimeter fence gates.')

parks_ts = f"""import {{ ParkData }} from '../types/game';

/**
 * KOMPLETNA BAZA PARKÓW I ZIELEŃCÓW KRAKOWA
 * Obejmuje 301 obszarów parkowych z załączonej bazy kartograficznej z ogrodzeniami i wejściami bramnymi.
 */
export const KRAKOW_PARKS: ParkData[] = {json.dumps(parks_list, indent=2)};
"""

with open('src/data/krakowParksData.ts', 'w', encoding='utf-8') as f:
    f.write(parks_ts)
print('[+] Successfully written src/data/krakowParksData.ts')

# =========================================================================
# 2. GENERATE COMPREHENSIVE KRAKOW STREETS & ALLEYS DATA
# =========================================================================
print('[*] Extracting curated streets from krakowMap.ts...')
with open('src/data/krakowMap.ts', 'r', encoding='utf-8') as f:
    map_code = f.read()

# Extract existing curated streets
curated_streets = []
street_blocks = re.findall(r'\{\s*id:\s*\'([^\']+)\',\s*name:\s*\'([^\']+)\',\s*width:\s*(\d+),\s*sidewalkWidth:\s*(\d+),\s*path:\s*\[(.*?)\]\s*\},', map_code, re.DOTALL)
print(f'[+] Found {len(street_blocks)} curated base streets in krakowMap.ts')

for sb in street_blocks:
    sid, sname, width, sw, path_str = sb
    pts = re.findall(r'\{\s*x:\s*([^,]+),\s*y:\s*([^\s\}]+)\s*\}', path_str)
    path = []
    for px, py in pts:
        # evaluate CX + ..., CY - ...
        x_val = eval(px.replace('CX', str(WORLD_CX)).replace('CY', str(WORLD_CY)))
        y_val = eval(py.replace('CX', str(WORLD_CX)).replace('CY', str(WORLD_CY)))
        path.append({'x': round(x_val), 'y': round(y_val)})
    curated_streets.append({
        'id': sid,
        'name': sname,
        'width': int(width),
        'sidewalkWidth': int(sw),
        'path': path
    })

# Add all 436 streets and alleys from the cartography CSV
print('[*] Processing 436 streets and alleys from CSV...')
with open('public/assets/aistudio/krakow_ulice_alejki_parki_id_86d89c03.csv', encoding='utf-8') as f:
    ua_raw = [r for r in csv.DictReader(f) if r['warstwa'] in ('U', 'A')]

all_streets = list(curated_streets)

for r in ua_raw:
    uid = r['id'].lower()
    warstwa = r['warstwa']
    num = r['numer']
    bx = float(r['bbox_x'])
    by = float(r['bbox_y'])
    bw = float(r['bbox_width'])
    bh = float(r['bbox_height'])

    gx = round(WORLD_CX + (bx - IMG_CX) * SCALE)
    gy = round(WORLD_CY + (by - IMG_CY) * SCALE)
    gw = max(40, round(bw * SCALE))
    gh = max(40, round(bh * SCALE))

    cx = gx + gw // 2
    cy = gy + gh // 2
    district, hint = get_district_name(cx, cy)

    if warstwa == 'A':
        name = f'Alejka Spacerowa A{num} — {district}'
        width = 30
        sw = 12
    else:
        name = f'Ulica Miejska U{num} — {district}'
        width = 48
        sw = 18

    # Street path: determine horizontal vs vertical orientation
    if bw >= bh:
        path = [
            {'x': gx, 'y': cy},
            {'x': gx + gw, 'y': cy}
        ]
    else:
        path = [
            {'x': cx, 'y': gy},
            {'x': cx, 'y': gy + gh}
        ]

    all_streets.append({
        'id': f'st_{uid}',
        'name': name,
        'width': width,
        'sidewalkWidth': sw,
        'path': path
    })

print(f'[+] Total combined streets and alleys: {len(all_streets)}')

streets_ts = f"""import {{ StreetData }} from '../types/game';

/**
 * KOMPLETNA SIATKA ULIC I ALEJEK KRAKOWA
 * Obejmuje {len(all_streets)} historycznych ulic, traktów, przecznicy i alejek spacerowych centrum Krakowa.
 */
export const KRAKOW_STREETS: StreetData[] = {json.dumps(all_streets, indent=2)};
"""

with open('src/data/krakowStreetsData.ts', 'w', encoding='utf-8') as f:
    f.write(streets_ts)
print('[+] Successfully written src/data/krakowStreetsData.ts')
