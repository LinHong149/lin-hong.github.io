'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stats from "./sections/Stats";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <Parallax className='flex min-h-screen flex-col items-center justify-between gap-96 relative overflow-hidden' pages={5} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="flex flex-col items-center justify-between min-h-screen">
          <div className="w-screen h-screen relative flex flex-col">
            <Nav />
            <Hero />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} style={{ backgroundColor: '#805E73' }} />
      <ParallaxLayer offset={1} speed={1} style={{ opacity: 0.5 }}>
        <Projects />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.2}>
        <Experiences />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={1}>
        <Stats />
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.8}>
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer offset={4.5} speed={1}>
        <Footer />
      </ParallaxLayer>

      {/* Parallax Circles */}
      <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
        <div className="absolute w-64 h-64 bg-purple-300 rounded-full blur-3xl" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full blur-3xl" style={{ top: '20%', right: '15%' }}></div>
        <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl" style={{ bottom: '15%', left: '5%' }}></div>
      </ParallaxLayer>
    </Parallax>
  );
}
