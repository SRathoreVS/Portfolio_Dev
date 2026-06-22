import React, { useEffect, useRef, useState, useCallback } from "react";

const COLS = 20, ROWS = 20, CELL = 24;
const W = COLS * CELL, H = ROWS * CELL;
const SPEED = 120;

const DIR = { UP: [0,-1], DOWN: [0,1], LEFT: [-1,0], RIGHT: [1,0] };

function randFood(snake) {
  let pos;
  do {
    pos = [Math.floor(Math.random() * COLS), Math.floor(Math.random() * ROWS)];
  } while (snake.some(s => s[0] === pos[0] && s[1] === pos[1]));
  return pos;
}

export default function SnakeGame({ onScore }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    snake: [[10,10],[9,10],[8,10]],
    dir: DIR.RIGHT, nextDir: DIR.RIGHT,
    food: [15,10],
    score: 0, dead: false, started: false,
  });
  const intervalRef = useRef(null);
  const [display, setDisplay] = useState({ score: 0, dead: false, started: false });

  const start = useCallback(() => {
    const s = stateRef.current;
    if (s.dead || !s.started) {
      stateRef.current = {
        snake: [[10,10],[9,10],[8,10]],
        dir: DIR.RIGHT, nextDir: DIR.RIGHT,
        food: [15,10],
        score: 0, dead: false, started: true,
      };
      setDisplay({ score: 0, dead: false, started: true });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      const s = stateRef.current;
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "rgba(139,92,246,0.06)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= COLS; x++) { ctx.beginPath(); ctx.moveTo(x*CELL,0); ctx.lineTo(x*CELL,H); ctx.stroke(); }
      for (let y = 0; y <= ROWS; y++) { ctx.beginPath(); ctx.moveTo(0,y*CELL); ctx.lineTo(W,y*CELL); ctx.stroke(); }

      if (!s.started) {
        ctx.fillStyle = "#a78bfa";
        ctx.font = "bold 18px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Click START or press ENTER", W/2, H/2 - 10);
        ctx.fillStyle = "#64748b";
        ctx.font = "13px Inter, sans-serif";
        ctx.fillText("Use Arrow Keys or WASD", W/2, H/2 + 16);
        return;
      }

      // Snake
      s.snake.forEach(([x,y], i) => {
        const t = i / s.snake.length;
        ctx.fillStyle = i === 0 ? "#a78bfa" : `rgba(124,58,237,${0.85 - t * 0.45})`;
        const pad = i === 0 ? 1 : 3;
        ctx.beginPath();
        ctx.roundRect(x*CELL+pad, y*CELL+pad, CELL-pad*2, CELL-pad*2, 4);
        ctx.fill();
        if (i === 0) {
          ctx.fillStyle = "#07080f";
          ctx.fillRect(x*CELL + (s.dir===DIR.RIGHT?14:s.dir===DIR.LEFT?4:8), y*CELL + (s.dir===DIR.DOWN?14:s.dir===DIR.UP?4:6), 4, 4);
        }
      });

      // Food
      ctx.fillStyle = "#ec4899";
      ctx.shadowColor = "#ec4899";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(s.food[0]*CELL+CELL/2, s.food[1]*CELL+CELL/2, CELL/2 - 3, 0, Math.PI*2);
      ctx.fill();
      ctx.shadowBlur = 0;

      if (s.dead) {
        ctx.fillStyle = "rgba(7,8,15,0.75)";
        ctx.fillRect(0,0,W,H);
        ctx.fillStyle = "#ec4899";
        ctx.font = "bold 26px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", W/2, H/2-12);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "13px Inter, sans-serif";
        ctx.fillText("Click START to restart", W/2, H/2+16);
      }
    };

    const tick = () => {
      const s = stateRef.current;
      if (!s.started || s.dead) { draw(); return; }

      s.dir = s.nextDir;
      const head = [s.snake[0][0]+s.dir[0], s.snake[0][1]+s.dir[1]];

      if (head[0]<0||head[0]>=COLS||head[1]<0||head[1]>=ROWS||s.snake.some(([x,y])=>x===head[0]&&y===head[1])) {
        s.dead = true;
        setDisplay(d=>({...d, dead:true}));
        draw(); return;
      }

      const newSnake = [head, ...s.snake];
      if (head[0]===s.food[0]&&head[1]===s.food[1]) {
        s.food = randFood(newSnake);
        s.score += 10;
        setDisplay(d=>({...d, score:s.score}));
        if(onScore) onScore(s.score);
      } else {
        newSnake.pop();
      }
      s.snake = newSnake;
      draw();
    };

    draw();
    intervalRef.current = setInterval(tick, SPEED);

    const onKey = (e) => {
      const s = stateRef.current;
      if (!s.started) return;
      if (e.key==="ArrowUp"    ||e.key==="w") { if(s.dir!==DIR.DOWN)  s.nextDir=DIR.UP; }
      if (e.key==="ArrowDown"  ||e.key==="s") { if(s.dir!==DIR.UP)    s.nextDir=DIR.DOWN; }
      if (e.key==="ArrowLeft"  ||e.key==="a") { if(s.dir!==DIR.RIGHT) s.nextDir=DIR.LEFT; }
      if (e.key==="ArrowRight" ||e.key==="d") { if(s.dir!==DIR.LEFT)  s.nextDir=DIR.RIGHT; }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("keydown", onKey);
    };
  }, [onScore]);

  // Mobile swipe
  const touchStart = useRef(null);
  const onTouchStart = (e) => { touchStart.current = [e.touches[0].clientX, e.touches[0].clientY]; };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current[0];
    const dy = e.changedTouches[0].clientY - touchStart.current[1];
    const s = stateRef.current;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 20 && s.dir!==DIR.LEFT)  s.nextDir=DIR.RIGHT;
      if (dx <-20 && s.dir!==DIR.RIGHT) s.nextDir=DIR.LEFT;
    } else {
      if (dy > 20 && s.dir!==DIR.UP)   s.nextDir=DIR.DOWN;
      if (dy <-20 && s.dir!==DIR.DOWN) s.nextDir=DIR.UP;
    }
    touchStart.current = null;
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="flex items-center justify-between w-full max-w-[480px] px-1">
        <button onClick={start} className="btn-primary text-xs py-1.5 px-4">
          {display.started && !display.dead ? "Restart" : "START"}
        </button>
        <span className="text-sm font-bold text-violet-300">Score: {display.score}</span>
      </div>
      <canvas
        ref={canvasRef}
        width={W} height={H}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="rounded-xl border border-violet-500/20 w-full max-w-[480px]"
        style={{ background: "rgba(13,15,28,0.85)", touchAction: "none" }}
      />
      <div className="text-xs text-slate-500">Arrow keys / WASD · Swipe on mobile</div>
    </div>
  );
}