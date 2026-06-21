import React, { useState, lazy, Suspense } from "react";
import Navbar from "./components/NavbarMui";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

const Hero       = lazy(() => import("./components/HeroMui"));
const About      = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills     = lazy(() => import("./components/Skills"));
const Projects   = lazy(() => import("./components/Projects"));
const Contact    = lazy(() => import("./components/Contact"));

export default function App() {
  const [messageSentTrigger, setMessageSentTrigger] = useState(false);

  return (
    <div className="relative bg-[#07080f] text-white overflow-x-hidden min-h-screen">
      <BackgroundAnimation />
      <Navbar />

      <main>
        <Suspense fallback={<SectionLoader />}>
          <SectionWrapper id="hero">    <Hero /> </SectionWrapper>
          <SectionWrapper id="about">   <About /> </SectionWrapper>
          <SectionWrapper id="experience"> <Experience /> </SectionWrapper>
          <SectionWrapper id="skills">  <Skills /> </SectionWrapper>
          <SectionWrapper id="projects"><Projects /> </SectionWrapper>
          <SectionWrapper id="contact">
            <Contact onMessageSent={() => setMessageSentTrigger((p) => !p)} />
          </SectionWrapper>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

function SectionWrapper({ children, id }) {
  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="w-full">{children}</div>
    </section>
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