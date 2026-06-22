import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function NavbarMui({ onPlayClick }) {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "#hero";
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = `#${section.id}`;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "border-b border-violet-500/10" : "bg-transparent"
      }`}
      style={scrolled ? { background:"rgba(7,8,15,0.88)", backdropFilter:"blur(24px)" } : {}}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button whileHover={{ scale:1.03 }}
          onClick={() => handleNavClick("#hero")}
          className="text-base font-bold tracking-tight gradient-text">
          SR.dev
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map(item => (
            <button key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                active === item.href ? "text-violet-300" : "text-slate-400 hover:text-slate-100"
              }`}>
              {item.label}
              {active === item.href && (
                <motion.span layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                  style={{ background:"linear-gradient(90deg,#7c3aed,#c084fc)" }} />
              )}
            </button>
          ))}

          {/* PLAY button */}
          <motion.button
            whileHover={{ scale:1.05 }}
            whileTap={{ scale:0.97 }}
            onClick={onPlayClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border border-pink-500/30 text-pink-300 bg-pink-500/8 hover:bg-pink-500/15 hover:border-pink-400/50 transition-all"
          >
            <span className="text-base">🎮</span>
            Play
          </motion.button>

          <motion.a whileHover={{ scale:1.03 }}
            href="#contact"
            onClick={e => { e.preventDefault(); handleNavClick("#contact"); }}
            className="btn-primary ml-1">
            Hire Me
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-950/40"
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:"auto" }}
            exit={{ opacity:0, height:0 }} transition={{ duration:0.25 }}
            className="md:hidden overflow-hidden border-t border-violet-500/10"
            style={{ background:"rgba(7,8,15,0.97)", backdropFilter:"blur(24px)" }}>
            <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
              {NAV_ITEMS.map(item => (
                <button key={item.href} onClick={() => handleNavClick(item.href)}
                  className={`text-left py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    active === item.href ? "text-violet-300 bg-violet-500/10" : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                  }`}>
                  {item.label}
                </button>
              ))}
              {/* Mobile PLAY */}
              <button onClick={() => { setIsOpen(false); onPlayClick(); }}
                className="text-left py-3 px-4 rounded-xl text-sm font-medium text-pink-300 hover:bg-pink-500/10 transition-all flex items-center gap-2">
                🎮 Play Games
              </button>
              <div className="pt-3 border-t border-violet-500/10 mt-2">
                <a href="#contact"
                  onClick={e => { e.preventDefault(); handleNavClick("#contact"); }}
                  className="btn-primary w-full text-center block">
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}