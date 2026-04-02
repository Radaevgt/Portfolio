import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WaveBackground from "./components/WaveBackground";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <WaveBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
