import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#support" }
];

export default function NavbarMui() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  /* --------------------------
     Scroll Detection (Improved)
  --------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let current = "#hero";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --------------------------
     Smooth Scroll
  --------------------------- */
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-950/70 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavClick("#hero")}
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Satyam.dev
        </motion.button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`relative text-sm font-medium transition-colors ${
                active === item.href
                  ? "text-sky-300"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}

              {/* Animated underline */}
              {active === item.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full"
                />
              )}
            </button>
          ))}

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-sm font-semibold px-5 py-2 shadow-lg hover:shadow-sky-500/40 transition"
          >
            Hire Me
          </motion.a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-slate-900/70"
          onClick={() => setIsOpen((o) => !o)}
        >
          <div className="space-y-1.5">
            <span className="block w-4 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left py-2 text-sm ${
                    active === item.href
                      ? "text-sky-300 font-semibold"
                      : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-sm font-semibold px-4 py-2"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}