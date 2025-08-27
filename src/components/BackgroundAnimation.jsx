import React from "react";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100 via-transparent to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-gradient" />

      {/* Floating subtle circles */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-sky-300/10 dark:bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>
  );
}
