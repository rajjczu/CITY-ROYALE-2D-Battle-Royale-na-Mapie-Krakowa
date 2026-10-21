import React from 'react';
import { Play, Shield, Crosshair, MapPin, Zap } from 'lucide-react';

interface TitleScreenProps {
  onStartGame: () => void;
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const PLAYER_COLORS = [
  { name: 'Królewski Błękit', hex: '#3b82f6' },
  { name: 'Szmaragdowy', hex: '#10b981' },
  { name: 'Złoty Krakowski', hex: '#f59e0b' },
  { name: 'Fioletowy', hex: '#8b5cf6' },
  { name: 'Cynobrowy', hex: '#ef4444' },
];

export const TitleScreen: React.FC<TitleScreenProps> = ({
  onStartGame,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <div className="fixed inset-0 z-30 flex flex-col justify-between p-6 sm:p-12 overflow-y-auto bg-gradient-to-b from-slate-950 via-slate-900 to-stone-950 text-slate-100 font-sans select-none">
      {/* Background Graphic Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      {/* TOP HEADER: Branding & City Selector */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          {/* Custom SVG Emblem */}
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-lg">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 4a3 3 0 110 6 3 3 0 010-6zm5 11.5c-1.33-1.67-3.33-2.5-5-2.5s-3.67.83-5 2.5V13c1.33-1.33 3.33-2 5-2s3.67.67 5 2v4.5z" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              POLSKA GRA BATTLE ROYALE 2D
            </div>
            <div className="text-xl font-black tracking-tight text-white">
              CITY ROYALE
            </div>
          </div>
        </div>

        {/* City Selector */}
        <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 rounded-xl p-1.5 shadow-md">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-black text-xs">
            <MapPin className="w-3.5 h-3.5" />
            KRAKÓW (Stare Miasto)
          </div>
          <div className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 cursor-not-allowed">
            Warszawa (Wkrótce)
          </div>
        </div>
      </div>

      {/* HERO SECTION: Title Lockup & Start CTA */}
      <div className="relative z-10 my-auto max-w-2xl py-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Zap className="w-3.5 h-3.5" />
          Autentyczna siatka ulic OpenStreetMap · Rynek, Sukiennice, Wawel, Planty
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase leading-none drop-shadow-md">
          CITY <span className="text-amber-400">ROYALE</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Zstąp na krakowski Rynek Główny, przeszukaj zabytkowe Sukiennice i kamienice Floriańskiej w poszukiwaniu 10 rodzajów broni, omijaj ściany i przetrwaj zacieśniającą się strefę śmierci pośród 20 zawodników.
        </p>

        {/* Character Color Customizer */}
        <div className="mt-6 flex flex-col gap-2">
          <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">
            Kolor Twojego Bohatera:
          </label>
          <div className="flex items-center gap-3">
            {PLAYER_COLORS.map(c => (
              <button
                key={c.hex}
                onClick={() => onSelectColor(c.hex)}
                title={c.name}
                aria-label={`Wybierz kolor ${c.name}`}
                className={`w-9 h-9 rounded-full border-2 transition-transform cursor-pointer ${
                  selectedColor === c.hex
                    ? 'border-white scale-110 shadow-lg shadow-amber-500/20 ring-2 ring-amber-400'
                    : 'border-transparent hover:scale-105 opacity-80'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        {/* Big Start Match CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={onStartGame}
            data-start="true"
            aria-label="Rozpocznij Mecz"
            className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black text-xl shadow-2xl shadow-amber-500/30 transition-all cursor-pointer group"
          >
            <Play className="w-6 h-6 fill-current group-hover:translate-x-0.5 transition-transform" />
            DOŁĄCZ DO MECZU [SPACJA / ENTER]
          </button>
        </div>
      </div>

      {/* FOOTER: Controls & Attribution */}
      <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-medium">
          <span className="text-slate-200 font-bold">STEROWANIE:</span>
          <span><strong className="text-amber-400 font-mono">WASD</strong> Ruch</span>
          <span>·</span>
          <span><strong className="text-amber-400 font-mono">Myszka</strong> Celowanie</span>
          <span>·</span>
          <span><strong className="text-amber-400 font-mono">LPM</strong> Strzał</span>
          <span>·</span>
          <span><strong className="text-amber-400 font-mono">R</strong> Przeładuj</span>
          <span>·</span>
          <span><strong className="text-amber-400 font-mono">E</strong> Podnieś loot</span>
          <span>·</span>
          <span><strong className="text-amber-400 font-mono">1/2/3</strong> Zmiana broni</span>
          <span>·</span>
          <span><strong className="text-amber-400 font-mono">H</strong> Ulecz się</span>
          <span>·</span>
          <span><strong className="text-amber-400 font-mono">M</strong> Mapa i Porównanie z Google Maps/OSM</span>
          <span>·</span>
          <span><strong className="text-sky-400 font-mono">O</strong> Nakładka Kartograficzna w Grze</span>
          <span>·</span>
          <span><strong className="text-amber-400 font-mono">Tab</strong> Ekwipunek</span>
        </div>

        <div className="text-[11px] text-slate-400">
          Dane przestrzenne: © Autorzy OpenStreetMap (ODbL) · Kraków Stare Miasto
        </div>
      </div>
    </div>
  );
};
