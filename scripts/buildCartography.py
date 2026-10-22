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

COLOR_1 = {'roof': '#9e3b2b', 'wall': '#7a2d1f'} # Terracotta Brick
COLOR_2 = {'roof': '#d8a359', 'wall': '#8f7856'} # Warm Limestone
COLOR_SPECIAL = {'roof': '#52667a', 'wall': '#3a4a59'} # Slate / Monument

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
# 1. GENERATE KRAKOW PARKS DATA
# =========================================================================
print('[*] Processing parks from CSV...')
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
    ]
})

# Add all 298 authentic parks from the user's cartography dataset
for p in parks_raw:
    pid = p['id'].lower()
    bx = float(p['bbox_x'])
    by = float(p['bbox_y'])
    bw = float(p['bbox_width'])
    bh = float(p['bbox_height'])
    area = float(p['powierzchnia_px2'])

    gx, gy = img_to_world(bx, by)
    gw = max(45, round(bw * SCALE))
    gh = max(45, round(bh * SCALE))

    district, street = get_district_name(gx + gw // 2, gy + gh // 2)

    poly = [
        {'x': gx, 'y': gy},
        {'x': gx + gw, 'y': gy},
        {'x': gx + gw, 'y': gy + gh},
        {'x': gx, 'y': gy + gh},
    ]

    parks_list.append({
        'id': f'park_{pid}',
        'name': f'Park / Skwer {p["id"]} ({district})',
        'polygon': poly
    })

print(f'[+] Generated {len(parks_list)} total park areas.')

# Write krakowParksData.ts
parks_ts = f"""import {{ ParkData }} from '../types/game';

/**
 * KOMPLETNA BAZA PARKÓW I ZIELEŃCÓW KRAKOWA
 * Obejmuje 298 obszarów parkowych z załączonej bazy kartograficznej oraz zabytkowe parki miejskie.
 */
export const KRAKOW_PARKS: ParkData[] = {json.dumps(parks_list, indent=2)};
"""

with open('src/data/krakowParksData.ts', 'w', encoding='utf-8') as f:
    f.write(parks_ts)
print('[+] Successfully written src/data/krakowParksData.ts')

# =========================================================================
# 2. GENERATE AND MERGE KRAKOW BUILDINGS DATA
# =========================================================================
print('[*] Reading existing buildings...')
with open('src/data/krakowBuildings.ts', 'r', encoding='utf-8') as f:
    existing_content = f.read()

# Load existing JSON array
pos = existing_content.find(' = [')
prefix_idx = pos + 3 if pos != -1 else -1
suffix_idx = existing_content.rfind(']')
if prefix_idx != -1 and suffix_idx != -1:
    raw_buildings = json.loads(existing_content[prefix_idx:suffix_idx + 1])
    existing_buildings = [b for b in raw_buildings if not b['id'].startswith('budynek_dach_')]
    print(f'[+] Loaded {len(existing_buildings)} base existing buildings (filtered {len(raw_buildings) - len(existing_buildings)} previous roof buildings).')
else:
    raise ValueError("Could not parse existing buildings array!")

# Compute centers of existing buildings for overlap avoidance
existing_centers = []
for eb in existing_buildings:
    poly = eb['polygon']
    min_x = min(pt['x'] for pt in poly)
    max_x = max(pt['x'] for pt in poly)
    min_y = min(pt['y'] for pt in poly)
    max_y = max(pt['y'] for pt in poly)
    existing_centers.append({
        'cx': (min_x + max_x) / 2,
        'cy': (min_y + max_y) / 2,
        'half_w': (max_x - min_x) / 2,
        'half_h': (max_y - min_y) / 2,
    })

# Read roof areas from CSV
with open('public/assets/aistudio/krakow_ponumerowane_obszary_dachow_f128f780.csv', encoding='utf-8-sig') as f:
    roofs_raw = list(csv.DictReader(f))

new_buildings = []
skipped_overlap = 0

for idx, r in enumerate(roofs_raw):
    rid = r['ID']
    ix_c = float(r['x_srodka_px'])
    iy_c = float(r['y_srodka_px'])
    ix_l = float(r['x_lewy'])
    iy_t = float(r['y_gorny'])
    iw = float(r['szerokosc_px'])
    ih = float(r['wysokosc_px'])
    area_px = float(r['pole_pixeli'])

    gx, gy = img_to_world(ix_l, iy_t)
    gw = max(90, round(iw * SCALE))
    gh = max(90, round(ih * SCALE))
    cx = gx + gw // 2
    cy = gy + gh // 2

    # Check for direct overlap with curated existing buildings
    overlaps = False
    for ec in existing_centers:
        dist_x = abs(cx - ec['cx'])
        dist_y = abs(cy - ec['cy'])
        min_clear_x = (gw / 2 + ec['half_w']) * 0.75
        min_clear_y = (gh / 2 + ec['half_h']) * 0.75
        if dist_x < min_clear_x and dist_y < min_clear_y:
            overlaps = True
            break

    # Also avoid blocking key horizontal street corridors
    horizontal_streets = [
        {'y': WORLD_CY - 3600, 'minX': WORLD_CX - 3800, 'maxX': WORLD_CX + 4000},
        {'y': WORLD_CY - 4800, 'minX': WORLD_CX - 3800, 'maxX': WORLD_CX + 4000},
        {'y': WORLD_CY - 5800, 'minX': WORLD_CX - 3200, 'maxX': WORLD_CX + 3400},
    ]
    for st in horizontal_streets:
        if gx < st['maxX'] and (gx + gw) > st['minX'] and gy < st['y'] and (gy + gh) > st['y']:
            overlaps = True
            break

    if overlaps:
        skipped_overlap += 1
        continue

    district, street_hint = get_district_name(cx, cy)
    building_id = f'budynek_dach_{rid}'
    address = f'{street_hint} (Sektor {rid})'
    b_name = f'Kamienica / Gmach {rid} — {district}'

    # Strictly 2 historical architectural colors
    colors = COLOR_1 if idx % 2 == 0 else COLOR_2

    # 50% enterable ratio
    can_enter = (idx % 2 == 0)

    # Building polygon
    poly = [
        {'x': gx, 'y': gy},
        {'x': gx + gw, 'y': gy},
        {'x': gx + gw, 'y': gy + gh},
        {'x': gx, 'y': gy + gh},
    ]

    # Door setup: place door on south or north facing edge
    door_side = 'bottom' if idx % 2 == 0 else 'top'
    door_w = min(80, max(40, round(gw * 0.28)))
    door_x = cx
    door_y = (gy + gh) if door_side == 'bottom' else gy
    door_angle = math.pi if door_side == 'bottom' else 0

    doors = []
    windows = []
    interior_rooms = []

    if can_enter:
        doors.append({
            'id': f'd_roof_{rid}',
            'x': door_x,
            'y': door_y,
            'width': door_w,
            'angle': door_angle,
            'isOpen': False,
            'isLocked': False
        })

        # Windows
        windows.append({'x': round(gx + gw * 0.25), 'y': gy + 8 if door_side == 'top' else gy + gh - 8})
        windows.append({'x': round(gx + gw * 0.75), 'y': gy + 8 if door_side == 'top' else gy + gh - 8})

        # Interior room with wall margin
        margin = 16
        room_poly = [
            {'x': gx + margin, 'y': gy + margin},
            {'x': gx + gw - margin, 'y': gy + margin},
            {'x': gx + gw - margin, 'y': gy + gh - margin},
            {'x': gx + margin, 'y': gy + gh - margin},
        ]

        interior_rooms.append({
            'id': f'r_roof_{rid}',
            'name': f'{b_name} — Sala Główna',
            'polygon': room_poly,
            'furniture': [
                {
                    'type': 'table' if idx % 2 == 0 else 'desk',
                    'x': cx,
                    'y': cy,
                    'w': min(50, round(gw * 0.3)),
                    'h': min(50, round(gh * 0.3)),
                }
            ]
        })
    else:
        # Non-enterable still has illuminated facade windows
        windows.append({'x': round(gx + gw * 0.3), 'y': gy + 8})
        windows.append({'x': round(gx + gw * 0.7), 'y': gy + 8})

    new_building = {
        'id': building_id,
        'name': b_name,
        'address': address,
        'polygon': poly,
        'doors': doors,
        'interiorRooms': interior_rooms,
        'roofColor': colors['roof'],
        'wallColor': colors['wall'],
        'canEnter': can_enter,
        'windows': windows,
    }

    new_buildings.append(new_building)
    # Add to centers for subsequent check
    existing_centers.append({
        'cx': cx,
        'cy': cy,
        'half_w': gw / 2,
        'half_h': gh / 2,
    })

print(f'[+] Created {len(new_buildings)} new buildings from roof dataset (skipped {skipped_overlap} overlapping core monuments).')

# Merge all buildings
all_merged_buildings = existing_buildings + new_buildings
print(f'[+] Total combined buildings: {len(all_merged_buildings)}')

# Write updated krakowBuildings.ts
b_ts = f"""// AUTOGENERATED KRAKOW TENEMENTS AND MONUMENTS (FULL HISTORICAL CARTOGRAPHY)
// Total {len(all_merged_buildings)} authentic Krakow buildings across 1.5 km square map
import {{ BuildingData }} from '../types/game';

export const KRAKOW_BUILDINGS: BuildingData[] = {json.dumps(all_merged_buildings, indent=2)};
"""

with open('src/data/krakowBuildings.ts', 'w', encoding='utf-8') as f:
    f.write(b_ts)
print('[+] Successfully written src/data/krakowBuildings.ts')
