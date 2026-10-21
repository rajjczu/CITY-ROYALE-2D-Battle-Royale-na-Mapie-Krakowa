# PROGRESS — CITY ROYALE

## Faza 1: Minimalna grywalna wersja
- [x] Rzeczywisty fragment centrum Krakowa (Rynek Główny, Sukiennice, Bazylika Mariacka, Wieża Ratuszowa, Planty, Wawel) z konwersją współrzędnych WGS84 na metry
- [x] Sterowanie WASD i sprint (Shift)
- [x] Celowanie myszką 360 stopni i obrót postaci
- [x] Silnik fizyki 2D (kolizje koło-wielokąt, raycasting pocisków na przeszkodach)
- [x] Dynamiczna kamera podążająca za graczem
- [x] Pistolet Glock 17 z amunicją 9mm i mechaniką wystrzałów

## Faza 2: System broni, wyposażenia i wnętrza budynków
- [x] 10 zbalansowanych rodzajów broni palnej + pięści / nóż (Glock 17, Desert Eagle, MP5, UMP-45, AK-47, M4A1, SCAR-L, M16 3-round burst, SKS, AWP)
- [x] System kalibrów amunicji (9mm, .45 ACP, 5.56mm, 7.62mm, .300 Magnum)
- [x] Pancerz balistyczny (kamizelki) absorbujący 60% obrażeń
- [x] Przedmioty leczące (Apteczki, klawisz [H])
- [x] Proceduralny loot na krakowskich ulicach i w budynkach
- [x] Znikające / przezroczyste dachy (roof fade) po wejściu gracza do Sukiennic, wież i kamienic
- [x] Pokoje, korytarze i kramy sukiennicze widoczne we wnętrzach

## Faza 3: Sztuczna inteligencja botów i strefa Battle Royale
- [x] 19 botów AI o zróżnicowanych strategiach (patrol, zbieranie lootu, pościg, walka taktyczna, unikanie ognia, leczenie się)
- [x] 5-fazowa kurcząca się Czerwona Strefa z obrażeniami poza okręgiem
- [x] Autonomiczna ucieczka botów przed zacieśniającą się strefą
- [x] System eliminacji i upuszczania wyposażenia w miejscu zgonu
- [x] Dynamiczny Kill Feed z ikonami broni i nazwami graczy

## Faza 4: Interfejs, Dźwięk i Optymalizacja
- [x] Ekran startowy (Title Screen) z wyborem miasta, kustomizacją koloru postaci i klawiszologią
- [x] HUD w grze (paski życia i pancerza z opóźnionym ghost barem, karta aktywnej broni, licznik żywych, licznik zabójstw, timer strefy)
- [x] Interaktywna mini-mapa w narożniku oraz pełna mapa taktyczna [M]
- [x] Panel ekwipunku [Tab] z podziałem na sloty i kalibry
- [x] Syntetyzator dźwięku proceduralnego Web Audio API (strzały, przeładowania, uderzenia, syreny, fanfara)
- [x] Testy jednostkowe czystej logiki (`src/game/physics.test.ts`, `src/game/weapons.test.ts`)
- [x] Ekran końcowy z podsumowaniem statystyk (pozycja, zabójstwa, obrażenia, czas) i opcją restartu
