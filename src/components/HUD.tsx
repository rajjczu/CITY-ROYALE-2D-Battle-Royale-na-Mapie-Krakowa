import React, { useEffect, useState } from 'react';
import { GameEngine } from '../game/gameEngine';
import { WEAPON_REGISTRY } from '../game/weapons';
import { Volume2, VolumeX, Map as MapIcon, Pause, Package, Compass } from 'lucide-react';
import { soundManager } from '../game/audio';
import { WORLD_SIZE_PX } from '../game/constants';
import { KRAKOW_BUILDINGS, KRAKOW_PARKS, KRAKOW_PLAZAS } from '../data/krakowMap';

interface HUDProps {
  engine: GameEngine;
  onOpenMap: () => void;
  onOpenInventory: () => void;
  onPause: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  engine,
  onOpenMap,
  onOpenInventory,
  onPause,
}) => {
  const [, setTick] = useState(0);
  const [ghostHp, setGhostHp] = useState(100);
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());

  const player = engine.player;
  const zone = engine.zoneManager.zone;
  const aliveCount = engine.entities.filter(e => e.isAlive).length;
  const currentWeaponDef = WEAPON_REGISTRY[player.currentWeapon] || WEAPON_REGISTRY.glock17;

  // Sync HUD at 30fps
  useEffect(() => {
    const timer = setInterval(() => {
      setTick(t => t + 1);
    }, 1000 / 30);
    return () => clearInterval(timer);
  }, []);

  // Delayed trailing ghost health bar
  useEffect(() => {
    const timer = setTimeout(() => {
      setGhostHp(prev => {
        if (player.hp < prev) {
          return prev - (prev - player.hp) * 0.25;
        }
        return player.hp;
      });
    }, 80);
    return () => clearTimeout(timer);
  }, [player.hp, ghostHp]);

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const currentMag = player.magAmmo[player.currentWeapon] ?? currentWeaponDef.magSize;
  const reserveAmmo = currentWeaponDef.ammoType
    ? player.inventoryAmmo[currentWeaponDef.ammoType] || 0
    : '∞';

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-10 flex flex-col justify-between p-4 sm:p-6 font-sans">
      {/* Critical Low Health Red Vignette */}
      {player.hp < 32 && player.isAlive && (
        <div
          className="fixed inset-0 pointer-events-none animate-pulse bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(220,38,38,0.35)_100%)] z-0"
          aria-hidden="true"
        />
      )}

      {/* TOP PERIMETER: Match Stats & Utility Badges */}
      <div className="flex justify-between items-start z-10 gap-2">
        {/* Left: Alive & Kills Cluster */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="bg-slate-900/95 border border-slate-700/80 rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-lg backdrop-blur-sm flex items-center gap-2 sm:gap-4">
            <div>
              <div className="text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Żywi
              </div>
              <div className="text-lg sm:text-2xl font-black text-amber-400 tabular-nums leading-none mt-0.5">
                {aliveCount} <span className="text-[10px] sm:text-xs text-slate-400 font-semibold">/ 20</span>
              </div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-slate-700" />
            <div>
              <div className="text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Kills
              </div>
              <div className="text-lg sm:text-2xl font-black text-red-400 tabular-nums leading-none mt-0.5">
                {player.kills}
              </div>
            </div>
          </div>

          {/* Zone Countdown Badge */}
          <div
            className={`border rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-lg backdrop-blur-sm transition-colors ${
              zone.shrinkTimer <= 10
                ? 'bg-red-950/95 border-red-500/80 animate-pulse'
                : 'bg-slate-900/95 border-slate-700/80'
            }`}
          >
            <div className="text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              {zone.isShrinking ? 'Zacieśnianie' : `Faza ${zone.phase}`}
            </div>
            <div
              className={`text-lg sm:text-2xl font-black tabular-nums leading-none mt-0.5 ${
                zone.shrinkTimer <= 10 ? 'text-red-400' : 'text-slate-100'
              }`}
            >
              {zone.shrinkTimer}s
            </div>
          </div>
        </div>

        {/* Right: Controls & Mini-Map */}
        <div className="flex flex-col items-end gap-2 pointer-events-auto">
          {/* Top Quick Utility Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={onOpenMap}
              aria-label="Porównaj z Mapą Google & OSM (M)"
              title="Porównaj z Mapą Google & OSM [M]"
              className="bg-sky-950/90 hover:bg-sky-900 text-sky-300 px-2.5 py-1.5 sm:py-2 rounded-lg border border-sky-500/50 shadow-md cursor-pointer transition-colors active:scale-95 flex items-center gap-1.5 font-bold text-xs"
            >
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Google Maps & OSM</span>
            </button>
            <button
              onClick={onOpenInventory}
              aria-label="Otwórz Ekwipunek (Tab)"
              title="Ekwipunek [Tab]"
              className="bg-slate-900/95 hover:bg-slate-800 text-slate-200 p-2 sm:p-2.5 rounded-lg border border-slate-700/80 shadow-md cursor-pointer transition-colors active:scale-95"
            >
              <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={onOpenMap}
              aria-label="Otwórz Pełną Mapę (M)"
              title="Pełna Mapa [M]"
              className="bg-slate-900/95 hover:bg-slate-800 text-slate-200 p-2 sm:p-2.5 rounded-lg border border-slate-700/80 shadow-md cursor-pointer transition-colors active:scale-95"
            >
              <MapIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Włącz Dźwięk' : 'Wycisz Dźwięk'}
              title="Dźwięk"
              className="bg-slate-900/95 hover:bg-slate-800 text-slate-200 p-2 sm:p-2.5 rounded-lg border border-slate-700/80 shadow-md cursor-pointer transition-colors active:scale-95"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              )}
            </button>
            <button
              onClick={onPause}
              aria-label="Pauza (Esc)"
              title="Pauza [Esc]"
              className="bg-slate-900/95 hover:bg-slate-800 text-slate-200 p-2 sm:p-2.5 rounded-lg border border-slate-700/80 shadow-md cursor-pointer transition-colors active:scale-95"
            >
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Mini-Map Radar (responsive 28x28 on mobile, 36x36 on desktop) */}
          <div
            onClick={onOpenMap}
            title="Kliknij, aby otworzyć dużą mapę [M]"
            className="w-24 h-24 sm:w-36 sm:h-36 bg-slate-950/95 border-2 border-slate-700/80 rounded-xl overflow-hidden relative shadow-2xl cursor-pointer pointer-events-auto hover:border-amber-500/80 transition-colors"
          >
            {/* World Canvas Representation on Minimap */}
            <svg viewBox={`0 0 ${WORLD_SIZE_PX} ${WORLD_SIZE_PX}`} className="w-full h-full">
              {/* Background */}
              <rect x="0" y="0" width={WORLD_SIZE_PX} height={WORLD_SIZE_PX} fill="#27272a" />

              {/* Plazas */}
              {KRAKOW_PLAZAS.map(pl => {
                const pointsStr = pl.polygon.map(p => `${p.x},${p.y}`).join(' ');
                return <polygon key={pl.id} points={pointsStr} fill="#3f3f46" />;
              })}

              {/* Planty (Parks) */}
              {KRAKOW_PARKS.map(pk => {
                const pointsStr = pk.polygon.map(p => `${p.x},${p.y}`).join(' ');
                return <polygon key={pk.id} points={pointsStr} fill="#365314" opacity="0.75" />;
              })}

              {/* Buildings */}
              {KRAKOW_BUILDINGS.map(b => {
                const pointsStr = b.polygon.map(p => `${p.x},${p.y}`).join(' ');
                return (
                  <polygon
                    key={b.id}
                    points={pointsStr}
                    fill="#a1a1aa"
                    stroke="#71717a"
                    strokeWidth="30"
                  />
                );
              })}

              {/* Danger Zone Circle */}
              <circle
                cx={zone.x}
                cy={zone.y}
                r={zone.radius}
                fill="none"
                stroke="#ef4444"
                strokeWidth="120"
              />

              {/* Target Next Circle */}
              <circle
                cx={zone.targetX}
                cy={zone.targetY}
                r={zone.targetRadius}
                fill="none"
                stroke="#ffffff"
                strokeWidth="70"
                strokeDasharray="180 120"
              />

              {/* Other entities */}
              {engine.entities.map(e => {
                if (!e.isAlive || e.id === 'player_local') return null;
                return (
                  <circle
                    key={e.id}
                    cx={e.x}
                    cy={e.y}
                    r="140"
                    fill="#ef4444"
                  />
                );
              })}

              {/* Local Player Arrow */}
              <circle
                cx={player.x}
                cy={player.y}
                r="220"
                fill="#38bdf8"
                stroke="#ffffff"
                strokeWidth="60"
              />
            </svg>

            {/* Radar Center Crosshair Hint */}
            <div className="absolute bottom-1 right-2 text-[9px] font-bold text-slate-400 bg-slate-900/80 px-1.5 py-0.5 rounded">
              KRAKÓW [M]
            </div>
          </div>
        </div>
      </div>

      {/* KILL FEED: Floating on upper-left */}
      <div className="absolute top-20 left-4 sm:left-6 flex flex-col gap-1.5 max-w-sm pointer-events-none">
        {engine.killFeed.slice(0, 4).map(event => (
          <div
            key={event.id}
            className="bg-slate-950/85 border-l-4 border-amber-500 rounded-r-lg px-3 py-1.5 text-xs shadow-md flex items-center gap-2 backdrop-blur-sm"
          >
            <span
              className={`font-bold ${
                event.killerId === 'player_local' ? 'text-amber-400' : 'text-slate-300'
              }`}
            >
              {event.killerName}
            </span>
            <span className="text-[10px] font-mono uppercase bg-slate-800 px-1.5 py-0.5 rounded text-amber-300">
              {event.weapon}
            </span>
            <span
              className={`font-bold ${
                event.victimId === 'player_local' ? 'text-red-400' : 'text-slate-400'
              }`}
            >
              {event.victimName}
            </span>
          </div>
        ))}
      </div>

      {/* BOTTOM CLUSTER: Vitality, Armor & Active Weapon Card */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-end z-10 gap-2.5">
        {/* Vitality & Armor Bars (Left) */}
        <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-sm w-full sm:w-80 flex flex-col gap-2">
          {/* Health Bar with Trailing Ghost Bar */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-emerald-400 flex items-center gap-1">
                ZDROWIE (HP)
              </span>
              <span className="tabular-nums font-black text-slate-200">
                {Math.max(0, Math.round(player.hp))} / 100
              </span>
            </div>
            <div className="h-4 bg-slate-950 rounded-full overflow-hidden p-0.5 relative">
              {/* Trailing damage ghost bar */}
              <div
                className="absolute top-0.5 bottom-0.5 left-0.5 rounded-full bg-red-400/60 transition-all duration-300"
                style={{ width: `${Math.max(0, ghostHp)}%` }}
              />
              {/* Live HP bar */}
              <div
                className="h-full rounded-full transition-all duration-75 relative z-10"
                style={{
                  width: `${Math.max(0, player.hp)}%`,
                  backgroundColor:
                    player.hp > 50 ? '#10b981' : player.hp > 25 ? '#f59e0b' : '#ef4444',
                }}
              />
            </div>
          </div>

          {/* Armor Bar */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-sky-400">KAMIZELKA KULODPORNA</span>
              <span className="tabular-nums font-black text-slate-200">
                {Math.round(player.armor)} / 100
              </span>
            </div>
            <div className="h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-sky-500 rounded-full transition-all duration-75"
                style={{ width: `${Math.max(0, player.armor)}%` }}
              />
            </div>
          </div>

          {/* Quick Item Slots (Medkit & Bandages) and Bench Sitting Status */}
          <div className="flex items-center gap-2 pt-1 border-t border-slate-800 text-[11px] text-slate-300 flex-wrap">
            <span className="bg-slate-800 px-2 py-0.5 rounded font-bold text-emerald-400">
              [H] Apteczka: {player.medkits}
            </span>
            {player.isSitting ? (
              <span className="bg-emerald-900/70 border border-emerald-500/50 px-2 py-0.5 rounded text-emerald-300 font-bold animate-pulse">
                🌿 Siedzisz na ławce (+20 HP/s) • [WASD/E aby wstać]
              </span>
            ) : (
              <span className="text-slate-400">
                [E] Otwórz drzwi / Usiądź na ławce
              </span>
            )}
          </div>
        </div>

        {/* Active Weapon Card (Right) */}
        <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-sm w-full sm:w-auto sm:min-w-[220px] flex flex-col gap-1.5 sm:gap-2">
          <div className="flex justify-between items-baseline">
            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              {currentWeaponDef.category}
            </div>
            {currentWeaponDef.ammoType && (
              <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                {currentWeaponDef.ammoType}
              </span>
            )}
          </div>

          <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight leading-none">
            {currentWeaponDef.name}
          </div>

          {/* Ammo in Mag / Reserve Counter */}
          <div className="flex items-baseline justify-between pt-1">
            <div className="flex items-baseline gap-1.5 tabular-nums">
              <span
                className={`text-3xl font-black ${
                  currentMag === 0 ? 'text-red-500 animate-pulse' : 'text-slate-100'
                }`}
              >
                {currentWeaponDef.magSize > 0 ? currentMag : '—'}
              </span>
              {currentWeaponDef.magSize > 0 && (
                <span className="text-sm font-semibold text-slate-400">
                  / {reserveAmmo}
                </span>
              )}
            </div>

            <div className="text-[11px] text-slate-400 font-medium">
              {player.isReloading ? (
                <span className="text-amber-400 font-bold animate-pulse">
                  PRZEŁADOWYWANIE...
                </span>
              ) : currentMag === 0 && currentWeaponDef.magSize > 0 ? (
                <span className="text-red-400 font-bold">[R] PRZEŁADUJ</span>
              ) : (
                <span>[R] Przeładuj</span>
              )}
            </div>
          </div>

          {/* Reload Progress bar */}
          {player.isReloading && (
            <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-75"
                style={{ width: `${Math.round(player.reloadProgress * 100)}%` }}
              />
            </div>
          )}

          {/* Slot switch hints */}
          <div className="flex gap-2 pt-1.5 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
            <span className={player.currentSlot === 'primary' ? 'text-amber-400 font-bold' : ''}>
              [1] Główna
            </span>
            <span>·</span>
            <span className={player.currentSlot === 'secondary' ? 'text-amber-400 font-bold' : ''}>
              [2] Zapasowa
            </span>
            <span>·</span>
            <span className={player.currentSlot === 'melee' ? 'text-amber-400 font-bold' : ''}>
              [3] Walka wręcz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
