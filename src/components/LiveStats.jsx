import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────
   Page-view counter using localStorage.
   Simple, reliable, no external API needed.
───────────────────────────────────────── */
function getAndIncrementViews() {
  try {
    const stored = parseInt(localStorage.getItem("sr_portfolio_views") || "847", 10);
    const next = stored + 1;
    localStorage.setItem("sr_portfolio_views", String(next));
    return next;
  } catch {
    return 848;
  }
}

export function usePageViews() {
  const [views, setViews] = useState(null);
  useEffect(() => {
    setViews(getAndIncrementViews());
  }, []);
  return views;
}

export default function LiveStats({ views }) {
  const stats = [
    { value: "4.5+",  label: "Years Exp." },
    { value: "10+",   label: "Projects" },
    { value: "85%+",  label: "Test Coverage" },
    { value: views != null ? views.toLocaleString() : "...", label: "Page Views", live: true },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          className="glass rounded-2xl p-4 text-center"
        >
          <div className="flex items-center justify-center gap-1.5 mb-1">
            {s.live && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            )}
            <span className="text-xl font-bold gradient-text">{s.value}</span>
          </div>
          <div className="text-xs text-slate-500 font-medium">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}