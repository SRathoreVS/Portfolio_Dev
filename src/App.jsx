import React, { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/NavbarMui";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";
import GamesPage from "./pages/GamesPage";

const Hero       = lazy(() => import("./components/HeroMui"));
const About      = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills     = lazy(() => import("./components/Skills"));
const Projects   = lazy(() => import("./components/Projects"));
const Contact    = lazy(() => import("./components/Contact"));

export default function App() {
  const [showGames, setShowGames] = useState(false);

  return (
    <div className="relative bg-[#07080f] text-white overflow-x-hidden min-h-screen">
      <BackgroundAnimation />
      <Navbar onPlayClick={() => setShowGames(true)} />

      <main>
        <Suspense fallback={<SectionLoader />}>
          <section id="hero"       className="py-0">          <Hero /> </section>
          <section id="about"      className="py-20 sm:py-24"><About /> </section>
          <section id="experience" className="py-20 sm:py-24"><Experience /> </section>
          <section id="skills"     className="py-20 sm:py-24"><Skills /> </section>
          <section id="projects"   className="py-20 sm:py-24"><Projects /> </section>
          <section id="contact"    className="py-20 sm:py-24"><Contact /> </section>
        </Suspense>
      </main>

      <Footer />

      {/* Games overlay */}
      <AnimatePresence>
        {showGames && <GamesPage onClose={() => setShowGames(false)} />}
      </AnimatePresence>
    </div>
  );
}

function SectionLoader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
        <span className="text-slate-500 text-sm">Loading...</span>
      </div>
    </div>
  );
}