import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarMui() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);

      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      let current = "#hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop - 120;
        if (offset >= top) {
          current = `#${id}`;
        }
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-slate-950/80 border-b border-white/10 shadow-lg/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Satyam • SR
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
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
              {active === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full" />
              )}
            </button>
          ))}

          <a
            href="#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-sm font-semibold px-4 py-2 shadow-lg hover:shadow-sky-500/25 transition-shadow"
          >
            Let&apos;s work together
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-slate-900/70"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span className="block w-4 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
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
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-sm font-semibold px-4 py-2"
            >
              Let&apos;s work together
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
