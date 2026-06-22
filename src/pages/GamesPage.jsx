import React, { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DinoGame  = lazy(() => import("../games/DinoGame"));
const SnakeGame = lazy(() => import("../games/SnakeGame"));
const PongGame  = lazy(() => import("../games/PongGame"));

const GAMES = [
  { id:"dino",  name:"Dino Runner", emoji:"🦕", desc:"Classic Chrome dino jump — avoid the cacti!", tag:"Infinite runner", color:"violet", component:DinoGame },
  { id:"snake", name:"Snake",       emoji:"🐍", desc:"Eat the food, grow longer, don't bite yourself.", tag:"Classic arcade", color:"pink",   component:SnakeGame },
  { id:"pong",  name:"Pong",        emoji:"🏓", desc:"Play against the CPU — first to score wins.", tag:"2-player vs CPU", color:"cyan",   component:PongGame },
];

const COLOR = {
  violet: { border:"border-violet-500/30", badge:"bg-violet-500/10 text-violet-300" },
  pink:   { border:"border-pink-500/30",   badge:"bg-pink-500/10 text-pink-300" },
  cyan:   { border:"border-cyan-500/30",   badge:"bg-cyan-500/10 text-cyan-300" },
};

export default function GamesPage({ onClose }) {
  const [active, setActive] = useState(null);
  const [scores, setScores] = useState({ dino:0, snake:0, pong:0 });

  const activeGame = GAMES.find(g => g.id === active);
  const GameComp   = activeGame?.component;

  return (
    <motion.div
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background:"rgba(7,8,15,0.97)", backdropFilter:"blur(24px)" }}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-violet-500/10 bg-[#07080f]/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {active && (
              <button onClick={() => setActive(null)}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-violet-500/20 text-slate-400 hover:text-violet-300 transition-colors">
                ←
              </button>
            )}
            <div>
              <h1 className="text-base font-bold gradient-text">{active ? activeGame.name : "🎮 Arcade"}</h1>
              {active && <p className="text-xs text-slate-500">{activeGame.desc}</p>}
            </div>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-violet-500/20 text-slate-400 hover:text-red-400 transition-colors text-lg">
            ✕
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {!active ? (
            <motion.div key="picker"
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:0.3 }}>
              <p className="text-center text-slate-500 text-sm mb-8">Take a break from the portfolio — pick a game 🕹️</p>
              <div className="grid sm:grid-cols-3 gap-5">
                {GAMES.map((game, i) => {
                  const c = COLOR[game.color];
                  return (
                    <motion.button key={game.id}
                      initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.1 }}
                      onClick={() => setActive(game.id)}
                      className={`glass rounded-2xl p-6 text-left hover:-translate-y-1 transition-all duration-300 border ${c.border} group`}>
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{game.emoji}</div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${c.badge}`}>{game.tag}</span>
                      <h3 className="text-base font-bold text-slate-100 mt-3 mb-1">{game.name}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{game.desc}</p>
                      {scores[game.id] > 0 && (
                        <div className="mt-3 text-xs text-slate-500">Best: <span className="text-violet-300 font-semibold">{scores[game.id]}</span></div>
                      )}
                      <div className="mt-4 btn-primary text-xs py-2 text-center rounded-full">Play Now →</div>
                    </motion.button>
                  );
                })}
              </div>
              <div className="mt-12 text-center">
                <p className="text-slate-600 text-xs">Built with Canvas API · No libraries · Pure JS game loops 🎯</p>
              </div>
            </motion.div>
          ) : (
            <motion.div key={active}
              initial={{ opacity:0, scale:0.97 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.97 }} transition={{ duration:0.3 }}
              className="flex flex-col items-center gap-6">
              <Suspense fallback={
                <div className="h-64 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
                </div>
              }>
                {GameComp && <GameComp onScore={(s) => setScores(prev => ({ ...prev, [active]: Math.max(prev[active], s) }))} />}
              </Suspense>
              {scores[active] > 0 && (
                <div className="glass rounded-xl px-6 py-3 text-sm">
                  Best this session: <span className="text-violet-300 font-bold">{scores[active]}</span>
                </div>
              )}
              <button onClick={() => setActive(null)} className="btn-outline text-sm">← Back to games</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}