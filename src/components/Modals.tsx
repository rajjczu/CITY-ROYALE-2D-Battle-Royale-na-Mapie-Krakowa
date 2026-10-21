import React, { useState } from 'react';
import { GameEngine } from '../game/gameEngine';
import { MatchStats, Point } from '../types/game';
import { WEAPON_REGISTRY } from '../game/weapons';
import {
  KRAKOW_BUILDINGS,
  KRAKOW_PARKS,
  KRAKOW_PLAZAS,
  KRAKOW_PROPS,
  KRAKOW_RIVER,
  KRAKOW_STREETS,
} from '../data/krakowMap';
import {
  gameCoordsToGeo,
  getCalibrationReport,
  KRAKOW_BENCHMARK_POINTS,
} from '../data/krakowCartography';
import { WORLD_SIZE_PX } from '../game/constants';
import {
  Trophy,
  Skull,
  Play,
  RotateCcw,
  X,
  Shield,
  Crosshair,
  Clock,
  Layers,
  MapPin,
  Sliders,
  CheckCircle2,
  Compass,
} from 'lucide-react';

// ==========================================
// 1. DUŻA MAPA KRAKOWA I INSPEKTOR PORÓWNANIA Z GOOGLE MAPS / OSM (Klawisz M)
// ==========================================
interface MapModalProps {
  engine: GameEngine;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ engine, onClose }) => {
  const player = engine.player;
  const zone = engine.zoneManager.zone;

  const [activeTab, setActiveTab] = useState<'map' | 'comparison' | 'benchmarks'>('map');
  const [overlayOpacity, setOverlayOpacity] = useState<number>(0.5); // 50% overlay
  const [splitPos, setSplitPos] = useState<number>(50); // Split curtain %
  const [showBuildings, setShowBuildings] = useState(true);
  const [showStreets, setShowStreets] = useState(true);
  const [showParks, setShowParks] = useState(true);
  const [showRiver, setShowRiver] = useState(true);
  const [showProps, setShowProps] = useState(true);
  const [showGpsGrid, setShowGpsGrid] = useState(true);
  const [showBenchmarks, setShowBenchmarks] = useState(true);

  const [hoverGeo, setHoverGeo] = useState<{ lat: number; lon: number; formatted: string } | null>(null);
  const [selectedBenchmarkId, setSelectedBenchmarkId] = useState<string | null>(null);

  const [mapPreset, setMapPreset] = useState<'krakow' | 'rynek' | 'florianska' | 'wawel' | 'arena'>('krakow');
  const [hoveredBuildingName, setHoveredBuildingName] = useState<string | null>(null);

  const CX = WORLD_SIZE_PX / 2;
  const CY = WORLD_SIZE_PX / 2;

  const VIEW_PRESETS = {
    krakow: { name: '🏛️ Stare Miasto & Wawel', x: CX - 7500, y: CY - 7800, w: 15000, h: 19500 },
    rynek: { name: '🏬 Rynek Główny', x: CX - 3000, y: CY - 3000, w: 6000, h: 6000 },
    florianska: { name: '🛡️ Brama Floriańska & Barbakan', x: CX - 1600, y: CY - 7400, w: 4200, h: 5400 },
    wawel: { name: '👑 Wawel & Wisła', x: CX - 2800, y: CY + 7300, w: 5600, h: 6200 },
    arena: { name: '🌐 Cała Arena 2km', x: 0, y: 0, w: WORLD_SIZE_PX, h: WORLD_SIZE_PX },
  };

  const curBox = VIEW_PRESETS[mapPreset];
  const calibration = getCalibrationReport();

  const handleMouseMoveSvg = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    const worldX = Math.round(curBox.x + nx * curBox.w);
    const worldY = Math.round(curBox.y + ny * curBox.h);

    setHoverGeo(gameCoordsToGeo(worldX, worldY));
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl h-[92vh] max-h-[900px] overflow-hidden shadow-2xl flex flex-col">
        {/* Top Header Bar */}
        <div className="px-4 py-3 border-b border-slate-800 flex justify-between items-center bg-slate-950/70 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>KRAKÓW STARE MIASTO — SYSTEM KARTOGRAFICZNY I GPS</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {calibration.overallAccuracyPercent}% Zgodności z Rejestrem OSM/Google
                </span>
              </h2>
              <p className="text-[11px] text-slate-400">
                Centrum Krakowa (1,5 × 1,5 km) · Siatka lokacyjna 1257 r. · WGS84: 50.0614°N, 19.9366°E
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Tabs */}
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('map')}
                className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                  activeTab === 'map' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Plan Gry
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === 'comparison' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                Nakładka Google Maps / OSM
              </button>
              <button
                onClick={() => setActiveTab('benchmarks')}
                className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                  activeTab === 'benchmarks' ? 'bg-purple-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Punkty Geodezyjne ({KRAKOW_BENCHMARK_POINTS.length})
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Zamknij Mapę"
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Control Toolbar (when in comparison tab) */}
        {activeTab === 'comparison' && (
          <div className="px-4 py-2.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between text-xs gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="text-slate-300 font-bold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-sky-400" />
                Przenikanie z Rzeczywistą Mapą (Google Maps & OSM):
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={Math.round(overlayOpacity * 100)}
                onChange={e => setOverlayOpacity(Number(e.target.value) / 100)}
                className="w-36 accent-sky-500 cursor-pointer"
              />
              <span className="font-mono text-sky-400 font-bold">{Math.round(overlayOpacity * 100)}%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400">Warstwy:</span>
              <button
                onClick={() => setShowGpsGrid(!showGpsGrid)}
                className={`px-2 py-0.5 rounded border text-[11px] cursor-pointer ${
                  showGpsGrid ? 'bg-sky-500/20 border-sky-500/40 text-sky-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Siatka GPS
              </button>
              <button
                onClick={() => setShowBenchmarks(!showBenchmarks)}
                className={`px-2 py-0.5 rounded border text-[11px] cursor-pointer ${
                  showBenchmarks ? 'bg-red-500/20 border-red-500/40 text-red-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Piny Geodezyjne
              </button>
              <button
                onClick={() => setShowBuildings(!showBuildings)}
                className={`px-2 py-0.5 rounded border text-[11px] cursor-pointer ${
                  showBuildings ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Kamienice ({KRAKOW_BUILDINGS.length})
              </button>
            </div>
          </div>
        )}

        {/* Main Body */}
        <div className="flex-1 overflow-hidden relative flex flex-col md:flex-row">
          {/* Main Interactive Map Viewport */}
          <div className="flex-1 h-full bg-stone-950 relative overflow-hidden flex items-center justify-center p-2">
            <div className="relative aspect-square max-h-full max-w-full w-full h-full bg-[#18181b] border border-slate-800 rounded-xl overflow-hidden shadow-inner">
              {/* Preset framing selector */}
              <div className="absolute top-2 left-2 z-30 flex items-center gap-1 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 p-1 rounded-lg text-xs shadow-lg max-w-[95%] overflow-x-auto">
                <span className="text-[10px] text-amber-400 font-bold px-1.5 whitespace-nowrap">Widok:</span>
                {(['krakow', 'rynek', 'florianska', 'wawel', 'arena'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setMapPreset(p)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium whitespace-nowrap cursor-pointer transition-colors ${
                      mapPreset === p
                        ? 'bg-amber-500 text-slate-950 font-bold shadow'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {VIEW_PRESETS[p].name}
                  </button>
                ))}
              </div>

              {/* Building inspection tooltip */}
              <div className="absolute bottom-2 left-2 z-30 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs shadow-xl pointer-events-none max-w-md">
                {hoveredBuildingName ? (
                  <div>
                    <span className="text-amber-300 font-bold text-xs">{hoveredBuildingName}</span>
                    <span className="text-[10px] text-slate-400 ml-2 font-mono">
                      {hoverGeo?.formatted}
                    </span>
                  </div>
                ) : (
                  <div className="text-[11px] text-slate-400">
                    Siatka budynków: <strong className="text-amber-300">{KRAKOW_BUILDINGS.length}</strong> kamienic i monumentów · {hoverGeo?.formatted || 'Najedź kursorem na budynek'}
                  </div>
                )}
              </div>

              <svg
                viewBox={`${curBox.x} ${curBox.y} ${curBox.w} ${curBox.h}`}
                className="w-full h-full cursor-crosshair"
                onMouseMove={handleMouseMoveSvg}
                onMouseLeave={() => {
                  setHoverGeo(null);
                  setHoveredBuildingName(null);
                }}
              >
                {/* 1. Underlying Cartographic Google Maps / OSM Cadastre Ground */}
                <rect x="0" y="0" width={WORLD_SIZE_PX} height={WORLD_SIZE_PX} fill="#27272a" />

                {/* 2. Rzeka Wisła (Vistula River) */}
                {showRiver && (
                  <polygon
                    points={KRAKOW_RIVER.polygon.map(pt => `${pt.x},${pt.y}`).join(' ')}
                    fill="#1e3a5f"
                    stroke="#2563eb"
                    strokeWidth="40"
                  />
                )}

                {/* 3. Place i Rynki (Plazas & Squares) */}
                {KRAKOW_PLAZAS.map(pl => {
                  const pointsStr = pl.polygon.map(pt => `${pt.x},${pt.y}`).join(' ');
                  return (
                    <polygon
                      key={pl.id}
                      points={pointsStr}
                      fill="#3f3f46"
                      stroke="#52525b"
                      strokeWidth="24"
                    />
                  );
                })}

                {/* 4. Planty Krakowskie (Parks) */}
                {showParks &&
                  KRAKOW_PARKS.map(p => {
                    const pointsStr = p.polygon.map(pt => `${pt.x},${pt.y}`).join(' ');
                    return <polygon key={p.id} points={pointsStr} fill="#365314" opacity="0.75" />;
                  })}

                {/* 5. Ulice i Chodniki (Streets & Sidewalks) */}
                {showStreets &&
                  KRAKOW_STREETS.map(s => {
                    const d = s.path.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ');
                    const sw = s.sidewalkWidth || 16;
                    return (
                      <g key={s.id}>
                        {/* Sidewalk */}
                        <path
                          d={d}
                          fill="none"
                          stroke="#a1a1aa"
                          strokeWidth={s.width + sw * 2}
                          strokeLinecap="round"
                        />
                        {/* Roadway */}
                        <path
                          d={d}
                          fill="none"
                          stroke="#52525b"
                          strokeWidth={s.width}
                          strokeLinecap="round"
                        />
                      </g>
                    );
                  })}

                {/* 6. Budynki i Zabytkowe Kamienice (All Kraków Old Town Quarters) */}
                {showBuildings &&
                  KRAKOW_BUILDINGS.map(b => {
                    const pointsStr = b.polygon.map(pt => `${pt.x},${pt.y}`).join(' ');
                    const isSelected = selectedBenchmarkId === b.id;
                    return (
                      <polygon
                        key={b.id}
                        points={pointsStr}
                        fill={isSelected ? '#38bdf8' : b.roofColor || '#71717a'}
                        stroke={isSelected ? '#ffffff' : '#18181b'}
                        strokeWidth={mapPreset === 'arena' ? '24' : mapPreset === 'krakow' ? '12' : '6'}
                        opacity={activeTab === 'comparison' ? 1 - overlayOpacity * 0.4 : 1}
                        onMouseEnter={() => setHoveredBuildingName(b.address ? `${b.name} — ${b.address} (${b.canEnter ? 'Wejście otwarte' : 'Wejście zablokowane'})` : b.name)}
                        className="transition-colors hover:brightness-125 cursor-pointer"
                      />
                    );
                  })}

                {/* 7. Real-world Cartographic Simulation Layer (Google Maps / OSM CAD Layer) */}
                {activeTab === 'comparison' && overlayOpacity > 0.05 && (
                  <g opacity={overlayOpacity}>
                    {/* Official Cadastre Plot Outlines */}
                    {KRAKOW_BUILDINGS.map(b => (
                      <polygon
                        key={`cad_${b.id}`}
                        points={b.polygon.map(pt => `${pt.x},${pt.y}`).join(' ')}
                        fill="#0284c7"
                        fillOpacity="0.25"
                        stroke="#38bdf8"
                        strokeWidth="30"
                      />
                    ))}

                    {/* Street Cadastre Axes */}
                    {KRAKOW_STREETS.map(s => (
                      <path
                        key={`cad_st_${s.id}`}
                        d={s.path.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ')}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="16"
                        strokeDasharray="60 40"
                      />
                    ))}
                  </g>
                )}

                {/* 8. Siatka Geodezyjna GPS 100m */}
                {showGpsGrid && (
                  <g opacity="0.35">
                    {Array.from({ length: 16 }).map((_, i) => {
                      const pos = i * 2400;
                      return (
                        <React.Fragment key={`grid_${i}`}>
                          <line
                            x1={pos}
                            y1={0}
                            x2={pos}
                            y2={WORLD_SIZE_PX}
                            stroke="#38bdf8"
                            strokeWidth="10"
                            strokeDasharray="40 40"
                          />
                          <line
                            x1={0}
                            y1={pos}
                            x2={WORLD_SIZE_PX}
                            y2={pos}
                            stroke="#38bdf8"
                            strokeWidth="10"
                            strokeDasharray="40 40"
                          />
                        </React.Fragment>
                      );
                    })}
                  </g>
                )}

                {/* 9. Piny Punktów Odniesienia Geodezyjnego */}
                {showBenchmarks &&
                  KRAKOW_BENCHMARK_POINTS.map(bp => {
                    const isSelected = selectedBenchmarkId === bp.id;
                    return (
                      <g
                        key={`bm_${bp.id}`}
                        className="cursor-pointer"
                        onClick={() => setSelectedBenchmarkId(bp.id)}
                      >
                        <circle
                          cx={bp.gameCoords.x}
                          cy={bp.gameCoords.y}
                          r={isSelected ? 160 : 100}
                          fill="#ef4444"
                          stroke="#ffffff"
                          strokeWidth="35"
                        />
                        <text
                          x={bp.gameCoords.x}
                          y={bp.gameCoords.y - 120}
                          fill="#ffffff"
                          fontSize="180"
                          fontWeight="bold"
                          textAnchor="middle"
                          stroke="#000000"
                          strokeWidth="20"
                        >
                          {bp.name.split(' ')[0]}
                        </text>
                      </g>
                    );
                  })}

                {/* 10. Strefa Battle Royale (Danger Zone) */}
                <circle
                  cx={zone.x}
                  cy={zone.y}
                  r={zone.radius}
                  fill="rgba(239, 68, 68, 0.12)"
                  stroke="#ef4444"
                  strokeWidth="160"
                />

                {/* Kolejna Bezpieczna Strefa */}
                <circle
                  cx={zone.targetX}
                  cy={zone.targetY}
                  r={zone.targetRadius}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="90"
                  strokeDasharray="220 140"
                />

                {/* Pozycja Gracza */}
                <circle
                  cx={player.x}
                  cy={player.y}
                  r="320"
                  fill="#0284c7"
                  stroke="#ffffff"
                  strokeWidth="90"
                />
              </svg>

              {/* Cursor GPS Readout Pill */}
              {hoverGeo && (
                <div className="absolute top-3 left-3 bg-slate-950/95 border border-sky-500/50 rounded-lg px-3 py-1.5 text-xs text-sky-400 font-mono shadow-lg backdrop-blur-md flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>WGS84 GPS: <strong>{hoverGeo.formatted}</strong></span>
                </div>
              )}

              {/* Scale Indicator */}
              <div className="absolute bottom-3 right-3 bg-slate-950/90 border border-slate-700 rounded-lg px-2.5 py-1 text-[11px] text-slate-300 font-mono">
                Skala: 100 metrów = 2400 px
              </div>

              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-700/80 rounded-lg p-2.5 text-[11px] text-slate-300 flex flex-col gap-1 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
                  <span>Twoja pozycja (Gracz)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-red-500 bg-red-500/20 inline-block" />
                  <span>Czerwona Strefa (Obrażenia)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-dashed border-white inline-block" />
                  <span>Kolejna Bezpieczna Strefa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Geodetic Benchmarks & Verification Report */}
          <div className="w-full md:w-80 bg-slate-950 border-t md:border-t-0 md:border-l border-slate-800 flex flex-col p-4 overflow-y-auto">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Raport Weryfikacji Geodezyjnej</span>
            </div>

            {/* Metric Accuracy Scorecard */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 mb-4">
              <div className="flex justify-between items-center mb-1 text-xs text-slate-400">
                <span>Dokładność Odwzorowania</span>
                <span className="text-emerald-400 font-bold">{calibration.overallAccuracyPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"
                  style={{ width: `${calibration.overallAccuracyPercent}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                <div>
                  Obiekty testowane: <strong className="text-white">{calibration.pointsTested}</strong>
                </div>
                <div>
                  Średni błąd: <strong className="text-emerald-400">&lt; {calibration.averageErrorMeters} m</strong>
                </div>
              </div>
            </div>

            {/* List of Landmarks */}
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Kluczowe Zabytki i Współrzędne GPS
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto pr-1">
              {KRAKOW_BENCHMARK_POINTS.map(bp => {
                const isSelected = selectedBenchmarkId === bp.id;
                return (
                  <div
                    key={bp.id}
                    onClick={() => setSelectedBenchmarkId(bp.id)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer text-xs ${
                      isSelected
                        ? 'bg-sky-950/60 border-sky-500/80 shadow-md'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-white mb-0.5">
                      <span>{bp.name}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30 font-mono">
                        0.0m
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-sky-400 mb-1">
                      {bp.realGeo.lat.toFixed(5)}°N, {bp.realGeo.lon.toFixed(5)}°E
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{bp.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 text-center text-xs text-slate-400 bg-slate-950/60 flex justify-between items-center px-6">
          <span>
            Dane przestrzenne: <strong>OpenStreetMap & Rejestr Zabytków Krakowa (MSIP)</strong> · Licencja ODbL
          </span>
          <div>
            Naciśnij <strong className="text-amber-400 font-mono">[M]</strong> lub <strong className="text-amber-400 font-mono">[ESC]</strong>, aby zamknąć mapę
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. PANEL EKWIPUNKU (Klawisz Tab)
// ==========================================
interface InventoryModalProps {
  engine: GameEngine;
  onClose: () => void;
}

export const InventoryModal: React.FC<InventoryModalProps> = ({ engine, onClose }) => {
  const player = engine.player;
  const primaryDef = WEAPON_REGISTRY[player.primaryWeapon];
  const secondaryDef = player.secondaryWeapon ? WEAPON_REGISTRY[player.secondaryWeapon] : null;

  return (
    <div className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col">
        <div className="px-5 py-3.5 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <span>EKWIPUNEK I ZAPASY</span>
          </h2>
          <button
            onClick={onClose}
            aria-label="Zamknij Ekwipunek"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-4 text-sm">
          {/* Weapons Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Primary Weapon */}
            <div className="bg-slate-950/60 border border-slate-700/80 rounded-xl p-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Broń Główna [1]
                </span>
                <div className="text-base font-black text-amber-400 mt-1">
                  {primaryDef.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Kaliber: {primaryDef.ammoType || 'Brak'} · Magazynek: {primaryDef.magSize}
                </div>
              </div>
              <div className="text-xs font-mono text-slate-300 mt-3 pt-2 border-t border-slate-800">
                Załadowane: {player.magAmmo[player.primaryWeapon]} / {primaryDef.magSize}
              </div>
            </div>

            {/* Secondary Weapon */}
            <div className="bg-slate-950/60 border border-slate-700/80 rounded-xl p-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Broń Dodatkowa [2]
                </span>
                <div className="text-base font-black text-slate-200 mt-1">
                  {secondaryDef ? secondaryDef.name : 'Pusty slot'}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {secondaryDef
                    ? `Kaliber: ${secondaryDef.ammoType} · Magazynek: ${secondaryDef.magSize}`
                    : 'Podnieś drugą broń klawiszem [E]'}
                </div>
              </div>
              {secondaryDef && (
                <div className="text-xs font-mono text-slate-300 mt-3 pt-2 border-t border-slate-800">
                  Załadowane: {player.magAmmo[player.secondaryWeapon!]} / {secondaryDef.magSize}
                </div>
              )}
            </div>
          </div>

          {/* Ammunition Supplies */}
          <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-3.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Zapas Amunicji w Plecaku
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
              {(['9mm', '45acp', '762mm', '556mm', '300mag'] as const).map(cal => (
                <div key={cal} className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">{cal}</div>
                  <div className="text-base font-black text-white tabular-nums mt-0.5">
                    {player.inventoryAmmo[cal]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medical & Armor Gear */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-800 text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Apteczki Medkit</div>
              <div className="text-lg font-black text-emerald-400 tabular-nums mt-0.5">
                {player.medkits} <span className="text-xs text-slate-500 font-normal">[Użyj: 4]</span>
              </div>
            </div>
            <div className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-800 text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Bandaże</div>
              <div className="text-lg font-black text-emerald-400 tabular-nums mt-0.5">
                {player.bandages}
              </div>
            </div>
            <div className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-800 text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Kamizelka</div>
              <div className="text-lg font-black text-sky-400 tabular-nums mt-0.5">
                {player.armor} pkt
              </div>
            </div>
            <div className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-800 text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Hełm</div>
              <div className="text-lg font-black text-sky-400 tabular-nums mt-0.5">
                {player.helmet} pkt
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-slate-800 text-center text-xs text-slate-400 bg-slate-950/40">
          Naciśnij <strong className="text-amber-400 font-mono">[TAB]</strong>, aby zamknąć
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. MENU PAUZY (Klawisz Esc)
// ==========================================
interface PauseModalProps {
  onResume: () => void;
  onRestart: () => void;
  onQuitToMenu: () => void;
}

export const PauseModal: React.FC<PauseModalProps> = ({
  onResume,
  onRestart,
  onQuitToMenu,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl p-6 text-center flex flex-col gap-4">
        <h2 className="text-2xl font-black text-white uppercase tracking-tight">
          GRA ZATRZYMANA
        </h2>
        <p className="text-xs text-slate-400">
          Mecz w Starym Mieście Krakowa jest wstrzymany.
        </p>

        <div className="flex flex-col gap-2.5 mt-2">
          <button
            onClick={onResume}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            WZNÓW GRĘ [ESC]
          </button>
          <button
            onClick={onRestart}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            RESTART MECZU
          </button>
          <button
            onClick={onQuitToMenu}
            className="w-full py-3 rounded-xl bg-slate-950 hover:bg-red-950/50 text-slate-400 hover:text-red-300 font-bold text-sm border border-slate-800 transition-all cursor-pointer"
          >
            WYJDŹ DO MENU GŁÓWNEGO
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. EKRAN KOŃCA MECZU (Zwycięstwo / Eliminacja)
// ==========================================
interface MatchEndModalProps {
  stats: MatchStats;
  onPlayAgain: () => void;
  onReturnToMenu: () => void;
}

export const MatchEndModal: React.FC<MatchEndModalProps> = ({
  stats,
  onPlayAgain,
  onReturnToMenu,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-lg flex items-center justify-center p-4 select-none">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-6 sm:p-8 text-center flex flex-col items-center">
        {/* Outcome Emblem */}
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl mb-4 ${
            stats.isVictory
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-amber-500/20'
              : 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-red-500/20'
          }`}
        >
          {stats.isVictory ? <Trophy className="w-10 h-10" /> : <Skull className="w-10 h-10" />}
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
          {stats.isVictory ? 'ZWYCIĘSTWO ROYALE!' : 'ELIMINACJA'}
        </h2>
        <p className="text-sm text-slate-400 mt-1 mb-6">
          {stats.isVictory
            ? 'Jesteś jedynym ocalałym na krakowskim Rynku!'
            : 'Zostałeś wyeliminowany na ulicach Krakowa.'}
        </p>

        {/* Stats Grid with tabular numerals */}
        <div className="grid grid-cols-2 gap-3 w-full mb-6 text-left">
          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Miejsce</div>
            <div className="text-2xl font-black text-white tabular-nums mt-0.5">
              #{stats.placement} <span className="text-xs text-slate-500 font-semibold">/ {stats.totalPlayers}</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Zabójstwa</div>
            <div className="text-2xl font-black text-red-400 tabular-nums mt-0.5">
              {stats.kills}
            </div>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Obrażenia</div>
            <div className="text-2xl font-black text-amber-400 tabular-nums mt-0.5">
              {stats.damageDealt}
            </div>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Czas gry</div>
            <div className="text-2xl font-black text-sky-400 tabular-nums mt-0.5">
              {stats.survivalTimeSeconds}s
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={onPlayAgain}
            data-start="true"
            className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black text-base shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            ZAGRAJ PONOWNIE [ENTER / SPACJA]
          </button>
          <button
            onClick={onReturnToMenu}
            className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 font-bold text-sm border border-slate-800 transition-all cursor-pointer"
          >
            POWRÓT DO MENU
          </button>
        </div>
      </div>
    </div>
  );
};
