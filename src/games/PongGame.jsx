import React, { useEffect, useRef, useState, useCallback } from "react";

const W = 600, H = 360;
const PAD_W = 12, PAD_H = 70, BALL_R = 8;
const CPU_SPEED = 3.2;

export default function PongGame({ onScore }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    ball: { x: W/2, y: H/2, vx: 4, vy: 3 },
    player: { y: H/2 - PAD_H/2 },
    cpu:    { y: H/2 - PAD_H/2 },
    scores: { player: 0, cpu: 0 },
    running: false, started: false,
  });
  const rafRef = useRef(null);
  const mouseY = useRef(H/2);
  const [display, setDisplay] = useState({ player: 0, cpu: 0, started: false });

  const startGame = useCallback(() => {
    const s = stateRef.current;
    s.ball = { x:W/2, y:H/2, vx: (Math.random()>0.5?1:-1)*4, vy: (Math.random()>0.5?1:-1)*3 };
    s.player.y = H/2 - PAD_H/2;
    s.cpu.y    = H/2 - PAD_H/2;
    s.scores   = { player:0, cpu:0 };
    s.running  = true;
    s.started  = true;
    setDisplay({ player:0, cpu:0, started:true });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resetBall = (dir) => {
      const s = stateRef.current;
      s.ball = { x:W/2, y:H/2, vx:dir*4, vy:(Math.random()>0.5?1:-1)*3 };
    };

    const drawPad = (x, y, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(x, y, PAD_W, PAD_H, 4);
      ctx.fill();
    };

    const loop = () => {
      const s = stateRef.current;
      ctx.clearRect(0,0,W,H);

      // Center line
      ctx.setLineDash([8,8]);
      ctx.strokeStyle = "rgba(139,92,246,0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(W/2,0); ctx.lineTo(W/2,H); ctx.stroke();
      ctx.setLineDash([]);

      if (!s.started) {
        ctx.fillStyle = "#a78bfa";
        ctx.font = "bold 18px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Click START to play", W/2, H/2-10);
        ctx.fillStyle = "#64748b";
        ctx.font = "13px Inter, sans-serif";
        ctx.fillText("Move mouse / touch to control your paddle", W/2, H/2+16);
        drawPad(20, H/2-PAD_H/2, "#7c3aed");
        drawPad(W-20-PAD_W, H/2-PAD_H/2, "#ec4899");
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      if (s.running) {
        // Player paddle follows mouse
        const targetY = mouseY.current - PAD_H/2;
        s.player.y = Math.max(0, Math.min(H-PAD_H, targetY));

        // CPU AI
        const cpuCenter = s.cpu.y + PAD_H/2;
        if (cpuCenter < s.ball.y - 4) s.cpu.y = Math.min(H-PAD_H, s.cpu.y + CPU_SPEED);
        else if (cpuCenter > s.ball.y + 4) s.cpu.y = Math.max(0, s.cpu.y - CPU_SPEED);

        // Move ball
        s.ball.x += s.ball.vx;
        s.ball.y += s.ball.vy;

        // Wall bounce
        if (s.ball.y - BALL_R <= 0 || s.ball.y + BALL_R >= H) s.ball.vy *= -1;

        // Player paddle collision (left)
        if (s.ball.x - BALL_R <= 32 && s.ball.y >= s.player.y && s.ball.y <= s.player.y + PAD_H && s.ball.vx < 0) {
          s.ball.vx = Math.abs(s.ball.vx) * 1.05;
          const rel = (s.ball.y - (s.player.y + PAD_H/2)) / (PAD_H/2);
          s.ball.vy = rel * 5;
        }

        // CPU paddle collision (right)
        if (s.ball.x + BALL_R >= W-32 && s.ball.y >= s.cpu.y && s.ball.y <= s.cpu.y+PAD_H && s.ball.vx > 0) {
          s.ball.vx = -Math.abs(s.ball.vx) * 1.05;
          const rel = (s.ball.y - (s.cpu.y + PAD_H/2)) / (PAD_H/2);
          s.ball.vy = rel * 5;
        }

        // Cap speed
        const spd = Math.sqrt(s.ball.vx**2 + s.ball.vy**2);
        if (spd > 12) { s.ball.vx *= 12/spd; s.ball.vy *= 12/spd; }

        // Score
        if (s.ball.x < 0) {
          s.scores.cpu++;
          setDisplay(d => ({ ...d, cpu: s.scores.cpu }));
          resetBall(1);
        }
        if (s.ball.x > W) {
          s.scores.player++;
          setDisplay(d => ({ ...d, player: s.scores.player }));
          if (onScore) onScore(s.scores.player);
          resetBall(-1);
        }
      }

      // Draw
      drawPad(20, s.player.y, "#7c3aed");
      drawPad(W-20-PAD_W, s.cpu.y, "#ec4899");

      // Ball
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#a78bfa";
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(s.ball.x, s.ball.y, BALL_R, 0, Math.PI*2);
      ctx.fill();
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const onMouseMove = (e) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) mouseY.current = (e.clientY - rect.top) * (H / rect.height);
    };
    const onTouch = (e) => {
      e.preventDefault();
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) mouseY.current = (e.touches[0].clientY - rect.top) * (H / rect.height);
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouch, { passive: false });

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouch);
    };
  }, [onScore]);

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="flex items-center justify-between w-full max-w-[600px] px-1">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-violet-300">You: {display.player}</span>
          <span className="text-slate-600 text-xs">vs</span>
          <span className="text-sm font-bold text-pink-400">CPU: {display.cpu}</span>
        </div>
        <button onClick={startGame} className="btn-primary text-xs py-1.5 px-4">
          {display.started ? "Restart" : "START"}
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={W} height={H}
        className="rounded-xl border border-violet-500/20 w-full max-w-[600px] cursor-none"
        style={{ background: "rgba(13,15,28,0.85)", touchAction: "none" }}
      />
      <div className="text-xs text-slate-500">Move mouse / touch to control <span className="text-violet-400">■ purple</span> paddle</div>
    </div>
  );
}