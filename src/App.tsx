import React, { useEffect, useRef, useState } from 'react';
import { GameEngine, PlayerInputState } from './game/gameEngine';
import { MatchStats } from './types/game';
import { GameCanvas } from './components/GameCanvas';
import { HUD } from './components/HUD';
import { TitleScreen } from './components/TitleScreen';
import { InventoryModal, MapModal, MatchEndModal, PauseModal } from './components/Modals';

type GameScreenState = 'title' | 'playing' | 'paused' | 'gameover';

export default function App() {
  const [screenState, setScreenState] = useState<GameScreenState>('title');
  const [playerColor, setPlayerColor] = useState('#3b82f6');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [inGameMapOverlay, setInGameMapOverlay] = useState(false);
  const [matchEndStats, setMatchEndStats] = useState<MatchStats | null>(null);

  // Engine instance stored in ref so it is never recreated during renders
  const engineRef = useRef<GameEngine>(new GameEngine(playerColor));
  const engine = engineRef.current;

  // Active inputs
  const keysRef = useRef<Record<string, boolean>>({});
  const mousePosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const isMouseDownRef = useRef(false);

  // Synchronize document.body.dataset.state with current screen
  useEffect(() => {
    document.body.dataset.state = screenState;
  }, [screenState]);

  // Autostart query parameter support (?autostart=1)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      startGame();
    }
  }, []);

  // Match end callback wiring
  useEffect(() => {
    engine.onMatchEnd = (stats: MatchStats) => {
      setMatchEndStats(stats);
      setScreenState('gameover');
      setIsMapOpen(false);
      setIsInventoryOpen(false);
    };
  }, [engine]);

  const startGame = () => {
    engine.initMatch(playerColor);
    setScreenState('playing');
    setIsMapOpen(false);
    setIsInventoryOpen(false);
    setMatchEndStats(null);
    keysRef.current = {};
    isMouseDownRef.current = false;
  };

  const resumeGame = () => {
    setScreenState('playing');
    keysRef.current = {};
    isMouseDownRef.current = false;
  };

  const pauseGame = () => {
    if (screenState === 'playing') {
      setScreenState('paused');
    }
  };

  // Keyboard and Window Listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Space or Enter on Title / GameOver starts the game
      if ((e.code === 'Space' || e.code === 'Enter') && (screenState === 'title' || screenState === 'gameover')) {
        e.preventDefault();
        startGame();
        return;
      }

      if (e.code === 'Escape') {
        if (isMapOpen) {
          setIsMapOpen(false);
          return;
        }
        if (isInventoryOpen) {
          setIsInventoryOpen(false);
          return;
        }
        if (screenState === 'playing') {
          pauseGame();
          return;
        }
        if (screenState === 'paused') {
          resumeGame();
          return;
        }
      }

      // Map toggle [M]
      if (e.code === 'KeyM' && (screenState === 'playing' || isMapOpen)) {
        setIsMapOpen(prev => !prev);
        return;
      }

      // In-Game Cartographic Overlay Toggle [O]
      if (e.code === 'KeyO' && screenState === 'playing') {
        setInGameMapOverlay(prev => !prev);
        return;
      }

      // Inventory toggle [Tab]
      if (e.code === 'Tab' && (screenState === 'playing' || isInventoryOpen)) {
        e.preventDefault();
        setIsInventoryOpen(prev => !prev);
        return;
      }

      // Track key held down
      keysRef.current[e.code] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.code] = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0 && screenState === 'playing' && !isMapOpen && !isInventoryOpen) {
        isMouseDownRef.current = true;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 0) {
        isMouseDownRef.current = false;
      }
    };

    const handleBlur = () => {
      keysRef.current = {};
      isMouseDownRef.current = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, [screenState, isMapOpen, isInventoryOpen]);

  // 60 Hz Physics & Simulation Loop
  useEffect(() => {
    let lastTime = performance.now();
    let animId: number;

    const tick = (now: number) => {
      const rawDt = (now - lastTime) / 1000;
      lastTime = now;
      const dt = Math.min(rawDt, 0.05); // Clamp dt to max 50ms

      if (screenState === 'playing' && !isMapOpen && !isInventoryOpen) {
        // Compute aim angle from screen center to mouse
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const aimAngle = Math.atan2(
          mousePosRef.current.y - centerY,
          mousePosRef.current.x - centerX
        );

        const keys = keysRef.current;
        const inputState: PlayerInputState = {
          up: !!(keys['KeyW'] || keys['ArrowUp']),
          down: !!(keys['KeyS'] || keys['ArrowDown']),
          left: !!(keys['KeyA'] || keys['ArrowLeft']),
          right: !!(keys['KeyD'] || keys['ArrowRight']),
          sprint: !!keys['ShiftLeft'] || !!keys['ShiftRight'],
          aimAngle,
          shooting: isMouseDownRef.current,
          reload: !!keys['KeyR'],
          interact: !!keys['KeyE'],
          switchSlot: keys['Digit1']
            ? 'primary'
            : keys['Digit2']
              ? 'secondary'
              : keys['Digit3']
                ? 'melee'
                : null,
          useMed: !!keys['KeyH'],
        };

        engine.update(dt, inputState);
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [screenState, isMapOpen, isInventoryOpen, engine]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-stone-900 select-none">
      {/* 2D Canvas Surface (rendered at all times, frozen during pauses/modals) */}
      <GameCanvas
        engine={engine}
        mapOverlayOpacity={inGameMapOverlay ? 0.45 : 0}
        showGpsGrid={inGameMapOverlay}
      />

      {/* Title Screen Overlay */}
      {screenState === 'title' && (
        <TitleScreen
          onStartGame={startGame}
          selectedColor={playerColor}
          onSelectColor={color => {
            setPlayerColor(color);
            engine.player.color = color;
          }}
        />
      )}

      {/* In-Game HUD */}
      {screenState === 'playing' && (
        <HUD
          engine={engine}
          onOpenMap={() => setIsMapOpen(true)}
          onOpenInventory={() => setIsInventoryOpen(true)}
          onPause={pauseGame}
        />
      )}

      {/* Full Strategic Map Overlay [M] */}
      {isMapOpen && (
        <MapModal engine={engine} onClose={() => setIsMapOpen(false)} />
      )}

      {/* Inventory Panel Overlay [Tab] */}
      {isInventoryOpen && (
        <InventoryModal engine={engine} onClose={() => setIsInventoryOpen(false)} />
      )}

      {/* Pause Menu Modal [Esc / P] */}
      {screenState === 'paused' && (
        <PauseModal
          onResume={resumeGame}
          onRestart={startGame}
          onQuitToMenu={() => setScreenState('title')}
        />
      )}

      {/* Victory / Game Over Modal */}
      {screenState === 'gameover' && matchEndStats && (
        <MatchEndModal
          stats={matchEndStats}
          onPlayAgain={startGame}
          onReturnToMenu={() => setScreenState('title')}
        />
      )}
    </div>
  );
}
