import React, { useState } from "react";
import Navbar from "./components/NavbarMui";
import Hero from "./components/HeroMui";
import About from "./components/About";
import LiveStats from "./components/LiveStats";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import AIExpertise from "./components/AIExpertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

export default function App() {
  const [messageSentTrigger, setMessageSentTrigger] = useState(false);

  const handleMessageSent = () => setMessageSentTrigger(true);

  return (
    <div>
      <BackgroundAnimation />

      <Navbar />
      <main>
        <Hero />
        <About />
        <LiveStats messageSentTrigger={messageSentTrigger} />
        <Experience />
        <Skills />
        <AIExpertise />
        <Projects />
        <Contact onMessageSent={handleMessageSent} />
      </main>
      <Footer />
    </div>
  );
}
