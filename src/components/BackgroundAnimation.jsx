import React from "react";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Hero radial gradient */}
      <div className="absolute inset-0 bg-[#07080f]" />

      {/* Large violet orb top-center */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)' }} />

      {/* Pink orb top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.10) 0%, transparent 70%)' }} />

      {/* Cyan orb bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
    </div>
  );
}