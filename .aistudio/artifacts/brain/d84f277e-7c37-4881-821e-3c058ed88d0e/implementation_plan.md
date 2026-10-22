# CITY ROYALE — Uzupełnienie Mapy o Budynki i Parki z Kartografii Krakowa

Kompleksowy plan rozbudowy i synchronizacji geometrii mapy Krakowa o brakujące kwartały budynków, kamienic oraz zieleńców i parków widocznych na załączonej mapie kartograficznej (`Historyczne_centrum_Krakowa_z_Wis___3e06f1e0.png`) z zachowaniem fizyki kolizji, dynamicznego dachu i wydajności 60 FPS.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Zgodnie z dyspozycją użytkownika, priorytetem jest natychmiastowe odwzorowanie budynków i parków, które znajdują się na załączonym obrazie kartograficznym, a dotychczas nie były uwzględnione w wektorowej geometrii gry.

- **Potwierdzona decyzja**: Uzupełnienie struktur budowlanych o wszystkie brakujące obrysy dachów z katalogu `krakow_ponumerowane_obszary_dachow_f128f780.csv` oraz rozbudowa bazy parków i zieleńców (`KRAKOW_PARKS`) w oparciu o warstwę zieleni `P1`–`P298` z `krakow_ulice_alejki_parki_id_86d89c03.csv`.
- **Stylistyka i spójność architektoniczna**: Nowe budynki otrzymają spójną paletę historyczną Krakowa (ceglana czerwień i wapienny piaskowiec), z procedurą wchodzenia do wnętrz dla budynków z wejściami, oświetleniem okien oraz generowaniem lootu wewnątrz i na zewnątrz.
- **Wydajność renderowania na Canvas 2D**: Przy kilkuset nowych obiektach zastosowany zostanie buforowany frustum culling (odrzucanie obiektów poza ekranem kamery gracza) oraz przestrzenne partycjonowanie kolizji (Spatial Hash Grid), gwarantując stabilne 60 FPS na każdym urządzeniu.

---

## 1. Overview & Core Concept

- **Cel**: Przekształcenie centrum Krakowa w grze w wierne, gęste i tętniące detalami pole bitwy Battle Royale, gdzie każda przecznica, dziedziniec, kwartał kamienic i skwer z załączonego planu miasta staje się grywalnym elementem taktycznym (osłony, punkty zasadzek, korytarze ucieczki).
- **Odbiorca**: Gracze poszukujący dynamicznego, taktycznego 2D Battle Royale osadzonego w rzeczywistej, rozpoznawalnej topografii europejskiego miasta historycznego.
- **Główna wartość**: Likwidacja pustych przestrzeni pomiędzy dotychczasowymi kamienicami i plantami; każdy park, skwer wokół Wawelu, Kleparza, Wesołej i Piasku otrzymuje indywidualną geometrię, roślinność i właściwości terenu.

---

## 2. User Experience & Visual Design

- **Warstwy wizualne terenu**:
  1. *Podłoże*: Bruk krakowski (`#9c958a`) na ulicach i placach z ciemniejszymi rynsztokami krawężnikowymi oraz trawniki parkowe (`#5c854b`) z miękką obwódką krawędzi (`#436634`).
  2. *Nowe parki i skwery*: Dokładne wieloboki trawników (Planty, ogrody klasztorne, zieleńce przy Stradomiu, skwery Kleparza i zbocza Wawelu) wzbogacone o proceduralne drzewa, żywopłoty i ławki parkowe generujące osłonę balistyczną.
  3. *Kamienice i gmachy*: Bryły o wyrazistych gzymsach, zróżnicowanej wysokości dachów, kominach oraz oknach; po zbliżeniu się gracza dach staje się półprzezroczysty, odsłaniając wnętrza z meblami i skrzyniami z bronią.
- **Klimat i paleta barw (Reguła 60-30-10)**:
  - 60% neutralny miejski canvas: historyczny krakowski bruk, jasny kamień wapienny i soczysta zieleń plantowa.
  - 30% struktury architektoniczne: ceglana gotycka terakota (`#9e3b2b`), szlachetny tynk krakowski (`#d8a359`) i grafitowe dachy świątyń (`#475569`).
  - 10% akcenty i HUD: złocisty celownik, rubinowa kurcząca się strefa i szafirowe wskaźniki pancerza.

---

## 3. Key Product Decisions & Trade-Offs

- **Konwersja układu pikseli obrazu (1254 × 1254) na współrzędne gry (36000 × 36000)**:
  - *Podejście*: Wyznaczenie precyzyjnej macierzy transformacji afinicznej (przesunięcie środka Sukiennic na `[18000, 18000]`, skala proporcjonalna ~14.35 px gry na 1 px obrazu referencyjnego).
  - *Dlaczego*: Zapewnia to matematyczną zgodność co do metra z załączonym obrazem `Historyczne_centrum_Krakowa_z_Wis___3e06f1e0.png`, bazą dachów i warstwami zieleni.
- **Automatyczna generacja wnętrz i drzwi dla nowych budynków**:
  - *Podejście*: Budynki o powierzchni powyżej progu taktycznego otrzymują wejścia od strony ulicy, korytarze i punkty spawnu przedmiotów. Mniejsze oficyny i dobudówki pełnią funkcję stałych bloków kolizyjnych.
  - *Dlaczego*: Zachowuje balans rozgrywki — zbyt duża liczba pustych mikro-pomieszczeń spowalniałaby tempo meczu, podczas gdy zrównoważony układ 50% budynków otwartych tworzy czytelne strefy walki.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│             KARTOGRAFIA KRAKOWA (1254 x 1254)               │
│  - krakow_ponumerowane_obszary_dachow_f128f780.csv (330)    │
│  - krakow_ulice_alejki_parki_id_86d89c03.csv (298 parków)   │
└──────────────────────────────┬──────────────────────────────┘
                               │
                [Transformator Współrzędnych]
           (Offset CX=18000, CY=18000, Skala Metryczna)
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 DANE GEOMETRYCZNE ŚWIATA                    │
│  ┌────────────────────────┐    ┌─────────────────────────┐  │
│  │   KRAKOW_BUILDINGS     │    │      KRAKOW_PARKS       │  │
│  │ (Obrysy, dachy, drzwi) │    │ (Wieloboki, roślinność) │  │
│  └───────────┬────────────┘    └────────────┬────────────┘  │
└──────────────┼──────────────────────────────┼───────────────┘
               │                              │
               ▼                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 SILNIK GRY (GameEngine 2D)                  │
│  - Spatial Hash Grid (Kolizje pocisków i postaci)           │
│  - Raycasting linii wzroku i detekcja wejścia pod dach      │
│  - Generator punktów spawnu lootu w nowych budynkach        │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                RENDERER (GameCanvas HTML5 2D)               │
│  - Frustum Culling (odrzucanie niewidocznych elementów)     │
│  - Rysowanie trawników, alejek i bruku                      │
│  - Dynamiczny Roof-Fade (przenikanie dachów kamienic)       │
└─────────────────────────────────────────────────────────────┘
```

- **Plan wdrożenia krok po kroku**:
  1. **Konwerter i generator geometrii**:
     - Przygotowanie skryptu importującego dane z obu plików CSV i generującego kompletne definicje parków (`KRAKOW_PARKS`) oraz brakujących budynków do `src/data/krakowBuildings.ts` i `src/data/krakowMap.ts`.
  2. **Wzbogacenie parków**:
     - Dodanie wieloboków wszystkich 298 obszarów parkowych, wewnętrznych ogrodów kamienic i skwerów wzdłuż Plant i Wawelu.
     - Automatyczne rozmieszczenie krakowskich rekwizytów (drzewa, ławki, latarnie) w nowo dodanych parkach.
  3. **Wzbogacenie budynków**:
     - Dodanie brakujących kamienic z obrysami, ścianami kolizyjnymi, drzwiami i wnętrzami.
     - Weryfikacja braku konfliktów kolizyjnych na skrzyżowaniach i ciągach komunikacyjnych.
  4. **Weryfikacja i kompilacja**:
     - Uruchomienie testów kolizji i weryfikacja poprawności kompilacji projektu (`compile_applet`).
