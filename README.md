# CITY ROYALE — 2D Battle Royale na Mapie Krakowa

**CITY ROYALE** to kompletna, autorska gra przeglądarkowa 2D Battle Royale w rzucie z góry (Top-Down Shooter), której pole walki oparto na autentycznym układzie przestrzennym centrum Krakowa (Rynek Główny, Sukiennice, Bazylika Mariacka, Wieża Ratuszowa, Planty Krakowskie, Wawel oraz ulice Floriańska, Grodzka, Szewska).

## Główne cechy
- **Prawdziwa mapa Krakowa (1,5 × 1,5 km)**: geometryczne odwzorowanie OpenStreetMap z zachowaniem proporcji, szerokości ulic i zieleni Plant.
- **Znikające dachy i wnętrza**: po wejściu do Sukiennic czy kamienic dach staje się przezroczysty, odsłaniając kramy, pokoje i korytarze.
- **10 zbalansowanych rodzajów broni**: Glock 17, Desert Eagle, MP5, UMP-45, AK-47, M4A1, SCAR-L, M16A4 (seria 3 pocisków), SKS, AWP oraz walka wręcz.
- **Autonomiczne boty AI**: 19 przeciwników zbierających broń, omijających przeszkody, stosujących kiting, strzelających i uciekających przed strefą.
- **Kurcząca się Strefa Śmierci**: 5 faz zacieśniającego się okręgu wymuszającego dynamiczne starcia w sercu miasta.
- **Syntetyzowany silnik Audio**: dźwięki wystrzałów, uderzeń, kroków, syreny strefy i przeładowań generowane proceduralnie przez Web Audio API bez zewnętrznych plików.

## Sterowanie
- `W, A, S, D` / Strzałki — Ruch postaci
- `Shift` — Sprint
- `Myszka` — Celowanie 360°
- `LPM` — Strzał / Atak wręcz
- `R` — Przeładowanie magazynka
- `E` — Podnoszenie wyposażenia i broni
- `1, 2, 3` — Przełączanie broni (Główna / Zapasowa / Walka wręcz)
- `H` — Użycie apteczki (+50 HP)
- `M` — Pełna mapa strategiczna Krakowa
- `Tab` — Panel ekwipunku i amunicji
- `Esc` / `P` — Menu pauzy

## Uruchomienie lokalne
```bash
npm install
npm run dev
```
Gra uruchomi się pod adresem: `http://localhost:3000`

## Uruchomienie testów
```bash
npx tsx --test src/game/physics.test.ts src/game/weapons.test.ts
```

## Uruchomienie w Dockerze
```bash
docker-compose up --build
```
Aplikacja będzie dostępna pod adresem `http://localhost:80`.
