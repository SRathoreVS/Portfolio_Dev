import React, { useEffect, useRef, useState, useCallback } from "react";

const W = 800, H = 300;
const GROUND = 240;
const DINO_W = 44, DINO_H = 52;
const DINO_X = 80;
const GRAVITY = 0.6;
const JUMP_V = -13;

export default function DinoGame({ onScore }) {
  const canvasRef = useRef(null);
  const state = useRef({
    running: false, started: false, dead: false,
    dy: 0, y: GROUND, onGround: true,
    obstacles: [], clouds: [],
    score: 0, speed: 5, frame: 0, tick: 0,
  });
  const rafRef = useRef(null);
  const [display, setDisplay] = useState({ score: 0, dead: false, started: false });

  const jump = useCallback(() => {
    const s = state.current;
    if (s.dead) { restart(); return; }
    if (!s.started) { s.started = true; s.running = true; setDisplay(d => ({ ...d, started: true })); }
    if (s.onGround) { s.dy = JUMP_V; s.onGround = false; }
  }, []);

  const restart = () => {
    const s = state.current;
    s.running = true; s.started = true; s.dead = false;
    s.dy = 0; s.y = GROUND; s.onGround = true;
    s.obstacles = []; s.score = 0; s.speed = 5; s.frame = 0; s.tick = 0;
    setDisplay({ score: 0, dead: false, started: true });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawDino = (y, frame) => {
      // Body
      ctx.fillStyle = "#a78bfa";
      ctx.fillRect(DINO_X, y - DINO_H, DINO_W - 10, DINO_H - 10);
      // Head
      ctx.fillRect(DINO_X + 14, y - DINO_H - 14, 22, 18);
      // Eye
      ctx.fillStyle = "#07080f";
      ctx.fillRect(DINO_X + 28, y - DINO_H - 10, 5, 5);
      // Legs (animated)
      ctx.fillStyle = "#a78bfa";
      const legOff = frame % 2 === 0 ? 0 : 8;
      ctx.fillRect(DINO_X + 2,  y - 10, 10, 10 + legOff);
      ctx.fillRect(DINO_X + 18, y - 10, 10, 10 + (8 - legOff));
    };

    const drawCactus = (x) => {
      ctx.fillStyle = "#ec4899";
      ctx.fillRect(x + 10, GROUND - 55, 14, 55);
      ctx.fillRect(x,      GROUND - 35, 10, 20);
      ctx.fillRect(x + 24, GROUND - 40, 10, 25);
      ctx.fillRect(x,      GROUND - 45, 30, 10);
    };

    const drawCloud = (x, y) => {
      ctx.fillStyle = "rgba(139,92,246,0.12)";
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.arc(x + 22, y - 6, 22, 0, Math.PI * 2);
      ctx.arc(x + 44, y, 16, 0, Math.PI * 2);
      ctx.fill();
    };

    const loop = () => {
      const s = state.current;
      ctx.clearRect(0, 0, W, H);

      // Sky gradient
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, "rgba(7,8,15,0)");
      grad.addColorStop(1, "rgba(7,8,15,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Ground line
      ctx.strokeStyle = "rgba(139,92,246,0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, GROUND + 2); ctx.lineTo(W, GROUND + 2); ctx.stroke();

      // Clouds
      s.clouds.forEach(c => { drawCloud(c.x, c.y); });

      if (!s.started) {
        ctx.fillStyle = "#a78bfa";
        ctx.font = "bold 18px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Press SPACE or TAP to start", W / 2, H / 2 - 10);
        ctx.fillStyle = "#64748b";
        ctx.font = "13px Inter, sans-serif";
        ctx.fillText("Jump over the cacti!", W / 2, H / 2 + 16);
        drawDino(GROUND, 0);
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      if (s.running) {
        s.tick++;
        s.frame = Math.floor(s.tick / 8);

        // Physics
        s.dy += GRAVITY;
        s.y += s.dy;
        if (s.y >= GROUND) { s.y = GROUND; s.dy = 0; s.onGround = true; }

        // Speed up
        s.speed = 5 + Math.floor(s.score / 300) * 0.7;

        // Spawn obstacles
        const minGap = Math.max(55, 85 - s.score / 200);
        if (s.obstacles.length === 0 || s.obstacles[s.obstacles.length - 1].x < W - (200 + Math.random() * 250)) {
          if (s.tick > 60) s.obstacles.push({ x: W + 20 });
        }

        // Spawn clouds
        if (Math.random() < 0.005) s.clouds.push({ x: W + 50, y: 60 + Math.random() * 80 });

        s.obstacles.forEach(o => { o.x -= s.speed; });
        s.clouds.forEach(c => { c.x -= 0.6; });
        s.obstacles = s.obstacles.filter(o => o.x > -60);
        s.clouds    = s.clouds.filter(c => c.x > -80);

        s.score++;
        if (s.score % 30 === 0) {
          setDisplay(d => ({ ...d, score: Math.floor(s.score / 10) }));
          if (onScore) onScore(Math.floor(s.score / 10));
        }

        // Collision
        const dinoBox = { x: DINO_X + 6, y: s.y - DINO_H, w: DINO_W - 16, h: DINO_H - 8 };
        for (const o of s.obstacles) {
          if (o.x < dinoBox.x + dinoBox.w && o.x + 34 > dinoBox.x &&
              GROUND - 55 < dinoBox.y + dinoBox.h) {
            s.running = false; s.dead = true;
            setDisplay(d => ({ ...d, dead: true }));
            break;
          }
        }
      }

      // Draw
      s.clouds.forEach(c => drawCloud(c.x, c.y));
      s.obstacles.forEach(o => drawCactus(o.x));
      drawDino(s.y, s.running ? s.frame : 0);

      if (s.dead) {
        ctx.fillStyle = "rgba(236,72,153,0.85)";
        ctx.font = "bold 26px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", W / 2, H / 2 - 10);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "14px Inter, sans-serif";
        ctx.fillText("Press SPACE or TAP to restart", W / 2, H / 2 + 20);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const onKey = (e) => { if (e.code === "Space" || e.code === "ArrowUp") { e.preventDefault(); jump(); } };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKey);
    };
  }, [jump, onScore]);

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="flex items-center justify-between w-full max-w-[800px] px-1">
        <span className="text-xs text-slate-500">SPACE / TAP to jump</span>
        <span className="text-sm font-bold text-violet-300">Score: {display.score}</span>
      </div>
      <canvas
        ref={canvasRef}
        width={W} height={H}
        onClick={jump}
        className="rounded-xl border border-violet-500/20 cursor-pointer w-full max-w-[800px]"
        style={{ background: "rgba(13,15,28,0.8)", touchAction: "none" }}
      />
    </div>
  );
}