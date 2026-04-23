import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Support() {
  const upiId = "yourp6394614898@pthdfc"; 

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="support" className="max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur p-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Support My Work
        </h2>

        <p className="text-slate-400 mt-3 max-w-xl mx-auto">
          If you like my work or want to support my projects, you can contribute
          via UPI. It helps me continue building and sharing useful tools.
        </p>

        {/* QR Code */}
        <div className="mt-6 flex justify-center">
          <img
            src="/QR.jpg" 
            alt="UPI QR"
            className="w-48 h-48 rounded-xl border border-white/10"
          />
        </div>

        {/* UPI ID */}
        <div className="mt-6">
          <p className="text-slate-300 text-sm mb-2">UPI ID</p>

          <div className="flex items-center justify-center gap-3">
            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-white text-sm">
              {upiId}
            </span>

            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg bg-sky-500 text-black text-sm font-semibold hover:bg-sky-400 transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}