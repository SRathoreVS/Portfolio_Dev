import React, { useState, lazy, Suspense } from "react";
import Navbar from "./components/NavbarMui";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

// Lazy loaded sections
const Hero = lazy(() => import("./components/HeroMui"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const AIExpertise = lazy(() => import("./components/AIExpertise"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Support = lazy(() => import("./components/Support")); // ✅ added

export default function App() {
  const [messageSentTrigger, setMessageSentTrigger] = useState(false);

  const handleMessageSent = () => {
    setMessageSentTrigger((prev) => !prev);
  };

  return (
    <div className="relative bg-[#0b0f19] text-white overflow-x-hidden">

      <BackgroundAnimation />

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="flex flex-col px-6 md:px-12 lg:px-20">

        <Suspense fallback={<SectionLoader />}>

          <SectionWrapper id="hero">
            <Hero />
          </SectionWrapper>

          <SectionWrapper id="about">
            <About />
          </SectionWrapper>

          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>

          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>

          <SectionWrapper id="ai">
            <AIExpertise />
          </SectionWrapper>

          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>


          <SectionWrapper id="contact">
            <Contact onMessageSent={handleMessageSent} />
          </SectionWrapper>

          {/* ✅ NEW SUPPORT SECTION */}
          <SectionWrapper id="support">
            <Support />

          </SectionWrapper>
        </Suspense>

      </main>

      <Footer />
    </div>
  );
}

/* Wrapper */
function SectionWrapper({ children, id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center "
    >
      <div className="w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}

/* Loader */
function SectionLoader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-400 text-lg">
        Loading experience...
      </div>
    </div>
  );
}