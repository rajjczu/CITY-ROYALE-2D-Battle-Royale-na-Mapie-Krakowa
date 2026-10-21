import React, { useEffect, useRef } from 'react';
import { GameEngine } from '../game/gameEngine';
import { EntityState, Point, WeaponId } from '../types/game';
import {
  KRAKOW_BUILDINGS,
  KRAKOW_PARKS,
  KRAKOW_PLAZAS,
  KRAKOW_PROPS,
  KRAKOW_RIVER,
  KRAKOW_STREETS,
} from '../data/krakowMap';
import { gameCoordsToGeo, KRAKOW_BENCHMARK_POINTS } from '../data/krakowCartography';
import { PIXELS_PER_METER, PLAYER_RADIUS, WORLD_CENTER, WORLD_SIZE_PX } from '../game/constants';
import { WEAPON_REGISTRY } from '../game/weapons';

// Create procedural cobblestone canvas pattern (Bruk krakowski)
function createCobblestoneCanvas(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 24;
  canvas.height = 24;
  const c = canvas.getContext('2d');
  if (c) {
    c.fillStyle = '#9c958a';
    c.fillRect(0, 0, 24, 24);

    // Cobblestone mortar joints
    c.strokeStyle = '#544e45';
    c.lineWidth = 1.4;

    // Interlocking paving stone courses
    c.strokeRect(0.5, 0.5, 12, 12);
    c.strokeRect(12.5, 0.5, 12, 12);
    c.strokeRect(-5.5, 12.5, 12, 12);
    c.strokeRect(6.5, 12.5, 12, 12);
    c.strokeRect(18.5, 12.5, 12, 12);

    // Stone highlights
    c.fillStyle = 'rgba(255, 255, 255, 0.22)';
    c.fillRect(2, 2, 9, 3);
    c.fillRect(14, 2, 9, 3);
    c.fillRect(8, 14, 9, 3);

    // Stone bottom bevel
    c.fillStyle = 'rgba(0, 0, 0, 0.16)';
    c.fillRect(2, 9, 9, 2);
    c.fillRect(14, 9, 9, 2);
    c.fillRect(8, 21, 9, 2);
  }
  return canvas;
}

const cobbleCanvasCached = typeof document !== 'undefined' ? createCobblestoneCanvas() : null;

interface GameCanvasProps {
  engine: GameEngine;
  onScreenToWorld?: (screenX: number, screenY: number) => Point;
  mapOverlayOpacity?: number; // 0 to 1 for live cartographic overlay
  showGpsGrid?: boolean;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  engine,
  mapOverlayOpacity = 0,
  showGpsGrid = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const player = engine.player;
      const now = performance.now();

      // 1. Camera offset: centered on player with small aim lead
      const aimLeadX = Math.cos(player.angle) * 70;
      const aimLeadY = Math.sin(player.angle) * 70;
      const camX = player.x + aimLeadX;
      const camY = player.y + aimLeadY;

      // Clear screen with Krakow historic terrain background
      ctx.fillStyle = '#b3a897';
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      // Center camera
      ctx.translate(width / 2 - camX, height / 2 - camY);

      // A. World Boundary outline
      ctx.strokeStyle = '#2d241e';
      ctx.lineWidth = 20;
      ctx.strokeRect(0, 0, WORLD_SIZE_PX, WORLD_SIZE_PX);

      // B. Rzeka Wisła (Vistula River)
      ctx.fillStyle = '#2b5270';
      ctx.beginPath();
      KRAKOW_RIVER.polygon.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();
      ctx.fill();

      // River shorelines / water waves
      ctx.strokeStyle = '#3e7099';
      ctx.lineWidth = 14;
      ctx.stroke();

      // C. Place i Rynki (Plazas & Squares - granite flagstones)
      for (const plaza of KRAKOW_PLAZAS) {
        ctx.fillStyle = '#c7bcab';
        ctx.beginPath();
        plaza.polygon.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#aba08f';
        ctx.lineWidth = 6;
        ctx.stroke();

        // Plaza name label
        const midX = (plaza.polygon[0].x + plaza.polygon[1].x) / 2;
        const midY = (plaza.polygon[0].y + plaza.polygon[2].y) / 2;
        ctx.fillStyle = 'rgba(90, 80, 70, 0.45)';
        ctx.font = 'bold 36px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(plaza.name, midX, midY);
      }

      // D. Parki (Planty Krakowskie w pełnym obwodzie)
      for (const park of KRAKOW_PARKS) {
        ctx.fillStyle = '#5c854b';
        ctx.beginPath();
        park.polygon.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();
        ctx.fill();

        // Park border line
        ctx.strokeStyle = '#436634';
        ctx.lineWidth = 8;
        ctx.stroke();
      }

      // E. Ulice i Chodniki (Streets, Roadways & Sidewalks)
      const cobblePattern = cobbleCanvasCached ? ctx.createPattern(cobbleCanvasCached, 'repeat') : null;

      for (const st of KRAKOW_STREETS) {
        const sw = st.sidewalkWidth || 18;

        // 1. Chodnik brukowany po lewej i prawej stronie (ma widać że jest brukowany!)
        ctx.strokeStyle = cobblePattern || '#a39c91';
        ctx.lineWidth = st.width + sw * 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        st.path.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // Krawężnik chodnika (Ciemna linia graniczna bruku)
        ctx.strokeStyle = '#3e3831';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // 2. Ulice mają być szare i z boków mają mieć ciemniejsze szare paski
        // A. Ciemniejsze szare paski z boków (zewnętrzne krawędzie jezdni / rynsztok)
        ctx.strokeStyle = '#272a2e';
        ctx.lineWidth = st.width;
        ctx.beginPath();
        st.path.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // B. Szara jezdnia środkowa (widać że to ulica)
        ctx.strokeStyle = '#50565e';
        ctx.lineWidth = Math.max(8, st.width - 10);
        ctx.beginPath();
        st.path.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // 3. Eleganckie plakietki z nazwami ulic
        if (st.path.length >= 2) {
          const midX = (st.path[0].x + st.path[st.path.length - 1].x) / 2;
          const midY = (st.path[0].y + st.path[st.path.length - 1].y) / 2;

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 15px Inter, system-ui, sans-serif';
          ctx.textAlign = 'center';
          ctx.shadowColor = 'rgba(0,0,0,0.9)';
          ctx.shadowBlur = 5;
          ctx.fillText(st.name, midX, midY + 5);
          ctx.shadowBlur = 0;
        }
      }

      // F. Budynki i Proceduralne Wnętrza (All Old Town Buildings)
      const viewMargin = 250;
      const vLeft = camX - width / 2 - viewMargin;
      const vRight = camX + width / 2 + viewMargin;
      const vTop = camY - height / 2 - viewMargin;
      const vBottom = camY + height / 2 + viewMargin;

      for (const b of KRAKOW_BUILDINGS) {
        // Fast bounding box culling for 60+ FPS with 500+ buildings
        let bMinX = Infinity, bMaxX = -Infinity, bMinY = Infinity, bMaxY = -Infinity;
        for (const pt of b.polygon) {
          if (pt.x < bMinX) bMinX = pt.x;
          if (pt.x > bMaxX) bMaxX = pt.x;
          if (pt.y < bMinY) bMinY = pt.y;
          if (pt.y > bMaxY) bMaxY = pt.y;
        }
        if (bMaxX < vLeft || bMinX > vRight || bMaxY < vTop || bMinY > vBottom) {
          continue;
        }

        const isPlayerInside = engine.player.insideBuildingId === b.id;
        const roofOpacity = isPlayerInside ? engine.player.insideBuildingOpacity : 1.0;

        // 1. Building Drop Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.26)';
        ctx.beginPath();
        b.polygon.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x + 24, pt.y + 24);
          else ctx.lineTo(pt.x + 24, pt.y + 24);
        });
        ctx.closePath();
        ctx.fill();

        // 2. Interior Floor (Podłoga wnętrza - drewno dębowe lub posadzka kamienna)
        ctx.fillStyle = '#cfbeaa';
        ctx.beginPath();
        b.polygon.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();
        ctx.fill();

        // 3. Interior Rooms & Furniture
        for (const room of b.interiorRooms) {
          ctx.strokeStyle = 'rgba(110, 90, 70, 0.4)';
          ctx.lineWidth = 4;
          ctx.strokeRect(
            room.polygon[0].x,
            room.polygon[0].y,
            room.polygon[1].x - room.polygon[0].x,
            room.polygon[2].y - room.polygon[1].y
          );

          if (room.furniture) {
            for (const f of room.furniture) {
              if (f.type === 'stall') {
                ctx.fillStyle = '#9c6644';
                ctx.fillRect(f.x - f.w / 2, f.y - f.h / 2, f.w, f.h);
                ctx.strokeStyle = '#5a3824';
                ctx.lineWidth = 2;
                ctx.strokeRect(f.x - f.w / 2, f.y - f.h / 2, f.w, f.h);
              } else if (f.type === 'altar') {
                ctx.fillStyle = '#d4af37';
                ctx.fillRect(f.x - f.w / 2, f.y - f.h / 2, f.w, f.h);
                ctx.strokeStyle = '#aa8517';
                ctx.lineWidth = 3;
                ctx.strokeRect(f.x - f.w / 2, f.y - f.h / 2, f.w, f.h);
              } else if (f.type === 'pew') {
                ctx.fillStyle = '#6f4e37';
                ctx.fillRect(f.x - f.w / 2, f.y - f.h / 2, f.w, f.h);
              } else if (f.type === 'throne') {
                ctx.fillStyle = '#b91c1c';
                ctx.fillRect(f.x - f.w / 2, f.y - f.h / 2, f.w, f.h);
                ctx.strokeStyle = '#fbbf24';
                ctx.lineWidth = 4;
                ctx.strokeRect(f.x - f.w / 2, f.y - f.h / 2, f.w, f.h);
              } else {
                ctx.fillStyle = '#8a5a36';
                ctx.fillRect(f.x - f.w / 2, f.y - f.h / 2, f.w, f.h);
              }
            }
          }

          // Room label when player is inside
          if (isPlayerInside) {
            ctx.fillStyle = '#654c33';
            ctx.font = 'bold 16px Inter, sans-serif';
            ctx.textAlign = 'center';
            const rx = (room.polygon[0].x + room.polygon[1].x) / 2;
            const ry = (room.polygon[0].y + room.polygon[2].y) / 2;
            ctx.fillText(room.name, rx, ry);
          }
        }

        // 4. Outer Wall Obrysy (Budynki w 2 kolorach)
        ctx.strokeStyle = b.wallColor || '#7a2d1f';
        ctx.lineWidth = 14;
        ctx.lineJoin = 'miter';
        ctx.beginPath();
        b.polygon.forEach((pt, i) => {
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();
        ctx.stroke();

        // 5. Ruchome drzwi w budynkach (widać kiedy są otwarte a kiedy zamknięte)
        for (const door of b.doors) {
          ctx.save();
          ctx.translate(door.x, door.y);
          ctx.rotate(door.angle);

          // Otwór wejściowy w murze
          ctx.fillStyle = '#cfbeaa';
          ctx.fillRect(-door.width / 2, -14, door.width, 28);

          if (door.isOpen) {
            // DRZWI OTWARTE: skrzydło odchylone pod kątem 85 stopni, widać wejście!
            ctx.save();
            ctx.translate(-door.width / 2, 0);
            ctx.rotate(1.48);
            // Cień otwartych drzwi
            ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
            ctx.fillRect(2, 2, door.width, 7);
            // Skrzydło drewniane
            ctx.fillStyle = '#5c3317';
            ctx.fillRect(0, -3.5, door.width, 7);
            ctx.strokeStyle = '#261307';
            ctx.lineWidth = 1;
            ctx.strokeRect(0, -3.5, door.width, 7);
            // Mosiężna klamka
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath();
            ctx.arc(door.width - 6, 0, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Delikatne zielone podświetlenie otwartego przejścia
            ctx.fillStyle = 'rgba(74, 222, 128, 0.18)';
            ctx.fillRect(-door.width / 2, -12, door.width, 24);
          } else {
            // DRZWI ZAMKNIĘTE: skrzydło blokuje otwór w murze
            ctx.fillStyle = '#4a2511';
            ctx.fillRect(-door.width / 2, -4.5, door.width, 9);
            ctx.strokeStyle = '#261207';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(-door.width / 2, -4.5, door.width, 9);
            // Kasetony płycinowe
            ctx.fillStyle = '#5c2f16';
            ctx.fillRect(-door.width / 2 + 3, -3, door.width / 2 - 5, 6);
            ctx.fillRect(2, -3, door.width / 2 - 5, 6);
            // Mosiężna klamka / zamek
            ctx.fillStyle = '#eab308';
            ctx.beginPath();
            ctx.arc(door.width / 4, 0, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        // 6. Okna w budynkach: "każdy budynek do którego można wejść ma okno"
        if (b.canEnter && b.windows && b.windows.length > 0) {
          for (const win of b.windows) {
            // Kamienna opaska okna
            ctx.fillStyle = '#261e16';
            ctx.fillRect(win.x - 7, win.y - 7, 14, 14);
            // Podświetlona szyba okienna (ciepłe światło z wnętrza)
            ctx.fillStyle = '#fef08a';
            ctx.fillRect(win.x - 5, win.y - 5, 10, 10);
            // Szprosy okienne (krzyżyk)
            ctx.strokeStyle = '#4e3f31';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(win.x, win.y - 5);
            ctx.lineTo(win.x, win.y + 5);
            ctx.moveTo(win.x - 5, win.y);
            ctx.lineTo(win.x + 5, win.y);
            ctx.stroke();
            // Blask światła z okna
            const winGrad = ctx.createRadialGradient(win.x, win.y, 2, win.x, win.y, 16);
            winGrad.addColorStop(0, 'rgba(254, 240, 138, 0.4)');
            winGrad.addColorStop(1, 'rgba(254, 240, 138, 0)');
            ctx.fillStyle = winGrad;
            ctx.beginPath();
            ctx.arc(win.x, win.y, 16, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // 7. Dynamic Roof: Budynki tylko w 2 kolorach z małym napisem adresu
        if (roofOpacity > 0.05) {
          ctx.save();
          ctx.globalAlpha = roofOpacity;
          ctx.fillStyle = b.roofColor || '#9e3b2b';
          ctx.beginPath();
          b.polygon.forEach((pt, i) => {
            if (i === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          });
          ctx.closePath();
          ctx.fill();

          // Krawędzie dachu
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
          ctx.lineWidth = 2.5;
          ctx.stroke();

          // Mały napis jaki jest to adres na dachu budynku
          const midX = b.polygon.reduce((acc, p) => acc + p.x, 0) / b.polygon.length;
          const midY = b.polygon.reduce((acc, p) => acc + p.y, 0) / b.polygon.length;
          const addressText = b.address || b.name;

          ctx.font = 'bold 11px Inter, system-ui, monospace';
          ctx.textAlign = 'center';
          const textMetrics = ctx.measureText(addressText);
          const badgeW = textMetrics.width + 12;

          // Elegancka mała tabliczka adresowa
          ctx.fillStyle = 'rgba(20, 18, 16, 0.85)';
          ctx.fillRect(midX - badgeW / 2, midY - 8, badgeW, 16);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          ctx.lineWidth = 1;
          ctx.strokeRect(midX - badgeW / 2, midY - 8, badgeW, 16);

          ctx.fillStyle = '#f8fafc';
          ctx.fillText(addressText, midX, midY + 4);
          ctx.restore();
        }
      }

      // G. Elementy Otoczenia (Drzewa, Latarnie emitujące światło, Ławki, Fontanny)
      for (const prop of KRAKOW_PROPS) {
        // Culling outside screen
        if (
          prop.x < camX - width / 2 - 160 ||
          prop.x > camX + width / 2 + 160 ||
          prop.y < camY - height / 2 - 160 ||
          prop.y > camY + height / 2 + 160
        ) {
          continue;
        }

        if (prop.type === 'lamp') {
          // Na ulicach latarnie, które emitują światło!
          // Ciepła radialna łuna światła rozlewająca się na bruk i ulicę
          const rad = ctx.createRadialGradient(prop.x, prop.y, 4, prop.x, prop.y, 140);
          rad.addColorStop(0, 'rgba(255, 240, 150, 0.75)');
          rad.addColorStop(0.3, 'rgba(253, 215, 90, 0.38)');
          rad.addColorStop(0.65, 'rgba(245, 158, 11, 0.12)');
          rad.addColorStop(1, 'rgba(245, 158, 11, 0)');
          ctx.fillStyle = rad;
          ctx.beginPath();
          ctx.arc(prop.x, prop.y, 140, 0, Math.PI * 2);
          ctx.fill();

          // Żeliwny słup latarni krakowskiej
          ctx.fillStyle = '#1c1917';
          ctx.beginPath();
          ctx.arc(prop.x, prop.y, prop.radius || 7, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#44403c';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Świecące żarniki w szklanym kloszu
          ctx.fillStyle = '#fef08a';
          ctx.beginPath();
          ctx.arc(prop.x, prop.y, 4, 0, Math.PI * 2);
          ctx.fill();
        } else if (prop.type === 'tree') {
          const r = prop.radius || 38;

          // Shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
          ctx.beginPath();
          ctx.arc(prop.x + 8, prop.y + 10, r, 0, Math.PI * 2);
          ctx.fill();

          // Outer dark crown
          ctx.fillStyle = '#2d4a22';
          ctx.beginPath();
          ctx.arc(prop.x, prop.y, r, 0, Math.PI * 2);
          ctx.fill();

          // Middle crown
          ctx.fillStyle = '#416b32';
          ctx.beginPath();
          ctx.arc(prop.x - 3, prop.y - 4, r * 0.78, 0, Math.PI * 2);
          ctx.fill();

          // Highlight canopy
          ctx.fillStyle = '#558b42';
          ctx.beginPath();
          ctx.arc(prop.x - 7, prop.y - 8, r * 0.52, 0, Math.PI * 2);
          ctx.fill();
        } else if (prop.type === 'bench') {
          // Ławki parkowe i miejskie na których można usiąść i regenerować zdrowie
          const bw = prop.w || 46;
          const bh = prop.h || 18;

          // Cień ławki
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          ctx.fillRect(prop.x - bw / 2 + 2, prop.y - bh / 2 + 2, bw, bh);

          // Drewniane deski z ciemnym wykończeniem
          ctx.fillStyle = '#78350f';
          ctx.fillRect(prop.x - bw / 2, prop.y - bh / 2, bw, bh);
          ctx.strokeStyle = '#451a03';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(prop.x - bw / 2, prop.y - bh / 2, bw, bh);

          // Żeliwne podłokietniki i mocowania
          ctx.fillStyle = '#1e293b';
          if (bw > bh) {
            ctx.fillRect(prop.x - bw / 2 - 2, prop.y - bh / 2 - 2, 4, bh + 4);
            ctx.fillRect(prop.x + bw / 2 - 2, prop.y - bh / 2 - 2, 4, bh + 4);
          } else {
            ctx.fillRect(prop.x - bw / 2 - 2, prop.y - bh / 2 - 2, bw + 4, 4);
            ctx.fillRect(prop.x - bw / 2 - 2, prop.y + bh / 2 - 2, bw + 4, 4);
          }

          // Wskaźnik odpoczynku (zielony liść/plusik gdy blisko)
          if (Math.hypot(engine.player.x - prop.x, engine.player.y - prop.y) < 65) {
            ctx.fillStyle = '#22c55e';
            ctx.font = 'bold 12px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('🌿 [E]', prop.x, prop.y - bh / 2 - 6);
          }
        } else if (prop.type === 'stall') {
          // Colorful market flower stalls
          ctx.fillStyle = '#b45309';
          ctx.fillRect(prop.x - (prop.w || 80) / 2, prop.y - (prop.h || 50) / 2, prop.w || 80, prop.h || 50);
          ctx.fillStyle = '#f59e0b';
          ctx.fillRect(prop.x - (prop.w || 80) / 2 + 5, prop.y - (prop.h || 50) / 2 + 5, (prop.w || 80) - 10, (prop.h || 50) - 10);
        } else if (prop.type === 'monument') {
          // Monument plinth and bronze statue
          const w = prop.w || 70;
          const h = prop.h || 70;
          ctx.fillStyle = '#78716c';
          ctx.fillRect(prop.x - w / 2, prop.y - h / 2, w, h);
          ctx.strokeStyle = '#44403c';
          ctx.lineWidth = 4;
          ctx.strokeRect(prop.x - w / 2, prop.y - h / 2, w, h);

          // Bronze statue figure
          ctx.fillStyle = '#065f46';
          ctx.beginPath();
          ctx.arc(prop.x, prop.y, w / 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 12px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(prop.id === 'pomnik_mickiewicza' ? 'MICKIEWICZ' : 'POMNIK', prop.x, prop.y + h / 2 + 14);
        } else if (prop.type === 'fountain') {
          const r = prop.radius || 35;
          ctx.fillStyle = '#94a3b8';
          ctx.beginPath();
          ctx.arc(prop.x, prop.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#0284c7';
          ctx.beginPath();
          ctx.arc(prop.x, prop.y, r - 6, 0, Math.PI * 2);
          ctx.fill();

          // Water jet spray
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.beginPath();
          ctx.arc(prop.x, prop.y, 6 + Math.sin(now * 0.005) * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // H. Rzeczywista Nakładka Kartograficzna Google Maps & OpenStreetMap (Gdy aktywna)
      if (mapOverlayOpacity > 0.01) {
        ctx.save();
        ctx.globalAlpha = mapOverlayOpacity;

        // 1. Cadastre Grid & Metric Overlay
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.setLineDash([12, 12]);

        const step = 2400; // 100 meters
        for (let gx = 0; gx <= WORLD_SIZE_PX; gx += step) {
          ctx.beginPath();
          ctx.moveTo(gx, 0);
          ctx.lineTo(gx, WORLD_SIZE_PX);
          ctx.stroke();
        }
        for (let gy = 0; gy <= WORLD_SIZE_PX; gy += step) {
          ctx.beginPath();
          ctx.moveTo(0, gy);
          ctx.lineTo(WORLD_SIZE_PX, gy);
          ctx.stroke();
        }
        ctx.setLineDash([]);

        // 2. Geodetic Benchmark Calibration Points
        for (const bp of KRAKOW_BENCHMARK_POINTS) {
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(bp.gameCoords.x, bp.gameCoords.y, 14, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 3;
          ctx.stroke();

          // GPS coordinate pin card
          ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
          ctx.fillRect(bp.gameCoords.x - 140, bp.gameCoords.y - 50, 280, 36);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.strokeRect(bp.gameCoords.x - 140, bp.gameCoords.y - 50, 280, 36);

          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 12px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`GPS: ${bp.realGeo.lat.toFixed(5)}°N, ${bp.realGeo.lon.toFixed(5)}°E`, bp.gameCoords.x, bp.gameCoords.y - 32);
          ctx.fillStyle = '#ffffff';
          ctx.fillText(bp.name.substring(0, 28), bp.gameCoords.x, bp.gameCoords.y - 18);
        }

        ctx.restore();
      }

      // I. Siatka Geodezyjna GPS (Gdy włączona)
      if (showGpsGrid) {
        ctx.save();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1;
        const gridStep = 1200; // 50m
        for (let gx = 0; gx <= WORLD_SIZE_PX; gx += gridStep) {
          ctx.beginPath();
          ctx.moveTo(gx, 0);
          ctx.lineTo(gx, WORLD_SIZE_PX);
          ctx.stroke();

          const geo = gameCoordsToGeo(gx, camY);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
          ctx.font = '10px monospace';
          ctx.fillText(`${geo.lon.toFixed(4)}°E`, gx + 6, camY + 20);
        }
        for (let gy = 0; gy <= WORLD_SIZE_PX; gy += gridStep) {
          ctx.beginPath();
          ctx.moveTo(0, gy);
          ctx.lineTo(WORLD_SIZE_PX, gy);
          ctx.stroke();

          const geo = gameCoordsToGeo(camX, gy);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
          ctx.font = '10px monospace';
          ctx.fillText(`${geo.lat.toFixed(4)}°N`, camX + 20, gy - 6);
        }
        ctx.restore();
      }

      // J. Przedmioty na Ziemi (Loot: Bronie, Amunicja, Kamizelki, Apteczki)
      for (const item of engine.groundItems) {
        if (
          item.x < camX - width / 2 - 80 ||
          item.x > camX + width / 2 + 80 ||
          item.y < camY - height / 2 - 80 ||
          item.y > camY + height / 2 + 80
        ) {
          continue;
        }

        const isGun = item.type in WEAPON_REGISTRY;
        const pulse = 1 + Math.sin(now * 0.006 + item.x) * 0.12;

        // Glowing circle under item
        ctx.fillStyle = isGun ? 'rgba(234, 179, 8, 0.3)' : 'rgba(59, 130, 246, 0.3)';
        ctx.beginPath();
        ctx.arc(item.x, item.y, 22 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Border badge
        ctx.fillStyle = isGun ? '#ca8a04' : '#2563eb';
        ctx.beginPath();
        ctx.arc(item.x, item.y, 14, 0, Math.PI * 2);
        ctx.fill();

        // Label
        const label = isGun ? WEAPON_REGISTRY[item.type as WeaponId].name : item.type.toUpperCase();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 4;
        ctx.fillText(label, item.x, item.y + 26);
        ctx.shadowBlur = 0;
      }

      // K. Pociski (Bullets & Tracers)
      for (const b of engine.bullets) {
        ctx.save();
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(b.x - b.vx * 0.025, b.y - b.vy * 0.025);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // L. Cząsteczki (Dym, krew, błyski)
      for (const p of engine.particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // M. Postacie (Gracz oraz Boty)
      const renderCharacter = (ent: EntityState) => {
        if (!ent.isAlive) return;

        ctx.save();
        ctx.translate(ent.x, ent.y);
        ctx.rotate(ent.angle);

        // Flash red on hit
        const isHit = ent.hitFlashTimer > 0;
        const bodyColor = isHit ? '#ffffff' : ent.color;

        // Recoil kickback on weapon & hands
        const kick = ent.recoilKick * 8;

        // Held Weapon Graphic
        const weaponDef = WEAPON_REGISTRY[ent.currentWeapon];
        if (weaponDef && weaponDef.id !== 'fists') {
          ctx.fillStyle = '#1e293b';
          ctx.strokeStyle = '#475569';
          ctx.lineWidth = 1.5;

          const gunLen = weaponDef.category === 'sniper' ? 38 : weaponDef.category === 'rifle' ? 28 : 18;
          const gunWidth = weaponDef.category === 'sniper' ? 6 : 5;

          // Gun Barrel
          ctx.fillRect(PLAYER_RADIUS - 4 - kick, -gunWidth / 2, gunLen, gunWidth);
          ctx.strokeRect(PLAYER_RADIUS - 4 - kick, -gunWidth / 2, gunLen, gunWidth);
        }

        // Hands (Dwie małe okrągłe dłonie trzymające broń)
        ctx.fillStyle = '#fbcfe8'; // Skin tone
        ctx.strokeStyle = '#831843';
        ctx.lineWidth = 1.5;

        // Left hand
        ctx.beginPath();
        ctx.arc(PLAYER_RADIUS - 2 - kick, -11, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Right hand
        ctx.beginPath();
        ctx.arc(PLAYER_RADIUS + 4 - kick, 10, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Main Circular Body (Główne ciało)
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.arc(0, 0, PLAYER_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        // Armor Vest Ring
        if (ent.armor > 0) {
          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.arc(0, 0, PLAYER_RADIUS - 1, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Helmet Core
        if (ent.helmet > 0) {
          ctx.fillStyle = '#1e3a5f';
          ctx.beginPath();
          ctx.arc(0, 0, PLAYER_RADIUS * 0.58, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // Overhead HUD (Nazwa gracza/bota i Pasek Zdrowia HP)
        ctx.save();
        ctx.translate(ent.x, ent.y - PLAYER_RADIUS - 18);

        // Name Tag
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 4;
        ctx.fillText(ent.name, 0, -4);
        ctx.shadowBlur = 0;

        // HP Bar
        const barW = 38;
        const barH = 5;
        const hpPct = Math.max(0, ent.hp / ent.maxHp);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(-barW / 2, 0, barW, barH);
        ctx.fillStyle = hpPct > 0.5 ? '#22c55e' : hpPct > 0.25 ? '#eab308' : '#ef4444';
        ctx.fillRect(-barW / 2, 0, barW * hpPct, barH);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1;
        ctx.strokeRect(-barW / 2, 0, barW, barH);

        ctx.restore();
      };

      // Render bots first, then local player
      for (const ent of engine.entities) {
        if (ent.isBot) renderCharacter(ent);
      }
      renderCharacter(engine.player);

      // Sitting healing aura on player when resting on bench
      if (engine.player.isSitting) {
        ctx.save();
        ctx.translate(engine.player.x, engine.player.y);
        const pulse = 1 + Math.sin(now * 0.008) * 0.15;
        const aura = ctx.createRadialGradient(0, 0, 5, 0, 0, 32 * pulse);
        aura.addColorStop(0, 'rgba(74, 222, 128, 0.6)');
        aura.addColorStop(0.6, 'rgba(34, 197, 94, 0.25)');
        aura.addColorStop(1, 'rgba(34, 197, 94, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(0, 0, 32 * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#22c55e';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('+', 0, -PLAYER_RADIUS - 30 + Math.sin(now * 0.006) * 4);
        ctx.restore();
      }

      // N. Battle Royale Danger Zone Circle & Shrink Circle
      const zone = engine.zoneManager.zone;

      // 1. Safe Zone Target Outline (White dashed ring)
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 10;
      ctx.setLineDash([30, 20]);
      ctx.beginPath();
      ctx.arc(zone.targetX, zone.targetY, zone.targetRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Active Danger Zone Perimeter (Thick red electric wall)
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2);
      ctx.stroke();

      // Outside Storm Shade
      ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
      ctx.beginPath();
      ctx.rect(0, 0, WORLD_SIZE_PX, WORLD_SIZE_PX);
      ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.restore(); // Restore world camera transform

      // O. Ekranowy Pasek Interakcji (Floating Interaction Banner in Screen Space)
      const prompt = engine.getInteractionPrompt();
      if (prompt) {
        ctx.save();
        const pX = width / 2;
        const pY = height - 120;

        ctx.font = 'bold 16px Inter, system-ui, sans-serif';
        const tWidth = Math.max(260, ctx.measureText(prompt.text).width + 50);
        const bHeight = prompt.subText ? 52 : 38;

        // Dark rounded pill
        ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
        ctx.beginPath();
        ctx.roundRect(pX - tWidth / 2, pY - bHeight / 2, tWidth, bHeight, 10);
        ctx.fill();

        // Accent border (green if bench sitting/health, gold if door/loot)
        ctx.strokeStyle = engine.player.isSitting ? '#22c55e' : '#f59e0b';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Primary text
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(prompt.text, pX, prompt.subText ? pY - 6 : pY + 5);

        // Subtext / instructions
        if (prompt.subText) {
          ctx.font = '12px Inter, sans-serif';
          ctx.fillStyle = engine.player.isSitting ? '#4ade80' : '#cbd5e1';
          ctx.fillText(prompt.subText, pX, pY + 14);
        }
        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [engine, mapOverlayOpacity, showGpsGrid]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full block bg-stone-900 cursor-crosshair touch-none select-none"
    />
  );
};
