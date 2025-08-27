import Navbar from "./components/NavbarMui";
import Hero from "./components/HeroMui";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation"; // 🔹 new
import AIExpertise from "./components/AIExpertise";

export default function App() {
  return (
    <div>
      <BackgroundAnimation />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <AIExpertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
