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
    <Parallax className='flex min-h-screen flex-col items-center justify-between gap-96 relative overflow-hidden' 
      pages={4.3} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="flex flex-col items-center justify-between min-h-screen">
          <div className="w-screen h-screen relative flex flex-col">
            <Nav />
            <Hero />
          </div>
        </div>
      </ParallaxLayer>

      {/* <ParallaxLayer offset={0.99} speed={0.8}> 
        <div className='bg-none w-full h-[20vh]'></div>
        <div className='bg-[#805E73] w-full h-[100vh]'></div>
      </ParallaxLayer> */}
      <ParallaxLayer offset={0.99} speed={1}>
        <div className='bg-none w-full h-[34vh]'></div>
        <Projects />
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={1.2}>
        <Experiences />
      </ParallaxLayer>

      <ParallaxLayer offset={2.99} speed={1}>
        <Stats />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.8}>
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer offset={3.6} speed={1.2}>
        <Footer />
      </ParallaxLayer>

      {/* Parallax Circles */}
      <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
  <div className="absolute w-64 h-64 bg-purple-300 rounded-full blur-3xl" style={{ top: '0vh', left: '10%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.25} style={{ opacity: 0.2 }}>
  <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl" style={{ top: '100vh', left: '5%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.3} style={{ opacity: 0.2 }}>
  <div className="absolute w-52 h-52 bg-yellow-300 rounded-full blur-3xl" style={{ top: '200vh', left: '60%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.35} style={{ opacity: 0.2 }}>
  <div className="absolute w-48 h-48 bg-blue-300 rounded-full blur-3xl" style={{ top: '300vh', right: '15%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.4} style={{ opacity: 0.2 }}>
  <div className="absolute w-56 h-56 bg-green-300 rounded-full blur-3xl" style={{ top: '400vh', left: '20%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.45} style={{ opacity: 0.2 }}>
  <div className="absolute w-60 h-60 bg-red-300 rounded-full blur-3xl" style={{ top: '500vh', left: '15%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.5} style={{ opacity: 0.2 }}>
  <div className="absolute w-40 h-40 bg-indigo-300 rounded-full blur-3xl" style={{ top: '600vh', left: '60%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.55} style={{ opacity: 0.2 }}>
  <div className="absolute w-64 h-64 bg-pink-300 rounded-full blur-3xl" style={{ top: '420vh', right: '10%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.6} style={{ opacity: 0.2 }}>
  <div className="absolute w-48 h-48 bg-purple-300 rounded-full blur-3xl" style={{ top: '450vh', left: '20%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.65} style={{ opacity: 0.2 }}>
  <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl" style={{ top: '350vh', left: '25%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.7} style={{ opacity: 0.2 }}>
  <div className="absolute w-56 h-56 bg-yellow-300 rounded-full blur-3xl" style={{ top: '850vh', right: '15%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.75} style={{ opacity: 0.2 }}>
  <div className="absolute w-60 h-60 bg-green-300 rounded-full blur-3xl" style={{ top: '10vh', right: '5%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.2 }}>
  <div className="absolute w-40 h-40 bg-red-300 rounded-full blur-3xl" style={{ top: '160vh', left: '50%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.85} style={{ opacity: 0.2 }}>
  <div className="absolute w-64 h-64 bg-indigo-300 rounded-full blur-3xl" style={{ top: '290vh', left: '70%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.9} style={{ opacity: 0.2 }}>
  <div className="absolute w-48 h-48 bg-green-300 rounded-full blur-3xl" style={{ top: '320vh', left: '15%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={0.95} style={{ opacity: 0.2 }}>
  <div className="absolute w-72 h-72 bg-red-300 rounded-full blur-3xl" style={{ top: '680vh', right: '20%' }}></div>
</ParallaxLayer>
<ParallaxLayer offset={0} speed={1} style={{ opacity: 0.2 }}>
  <div className="absolute w-56 h-56 bg-pink-300 rounded-full blur-3xl" style={{ top: '230vh', left: '30%' }}></div>
</ParallaxLayer>



      {/* <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
        <div className="absolute w-64 h-64 bg-purple-300 rounded-full blur-3xl" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl" style={{ bottom: '15%', left: '5%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.3} style={{ opacity: 0.2 }}>
        <div className="absolute w-52 h-52 bg-yellow-300 rounded-full blur-3xl" style={{ bottom: '-30%', left: '60%' }}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3} style={{ opacity: 0.2 }}>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full blur-3xl" style={{ top: '20%', right: '15%' }}></div>
      </ParallaxLayer>

<ParallaxLayer speed={0.2} style={{ opacity: 0.2 }}>
  <div className="absolute w-64 h-64 bg-purple-300 rounded-full blur-3xl" style={{ top: '0vh', left: '10%' }}></div>
  <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl" style={{ top: '100vh', left: '5%' }}></div>
  <div className="absolute w-52 h-52 bg-yellow-300 rounded-full blur-3xl" style={{ top: '200vh', left: '60%' }}></div>
  <div className="absolute w-48 h-48 bg-blue-300 rounded-full blur-3xl" style={{ top: '300vh', right: '15%' }}></div>
  <div className="absolute w-56 h-56 bg-green-300 rounded-full blur-3xl" style={{ top: '400vh', left: '20%' }}></div>
  <div className="absolute w-60 h-60 bg-red-300 rounded-full blur-3xl" style={{ top: '500vh', left: '15%' }}></div>
  <div className="absolute w-40 h-40 bg-indigo-300 rounded-full blur-3xl" style={{ top: '600vh', left: '60%' }}></div>
  <div className="absolute w-64 h-64 bg-pink-300 rounded-full blur-3xl" style={{ top: '420vh', right: '10%' }}></div>
  <div className="absolute w-48 h-48 bg-purple-300 rounded-full blur-3xl" style={{ top: '450vh', left: '20%' }}></div>
  <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl" style={{ top: '350vh', left: '25%' }}></div>
  <div className="absolute w-56 h-56 bg-yellow-300 rounded-full blur-3xl" style={{ top: '850vh', right: '15%' }}></div>
  <div className="absolute w-60 h-60 bg-green-300 rounded-full blur-3xl" style={{ top: '10vh', right: '5%' }}></div>
  <div className="absolute w-40 h-40 bg-red-300 rounded-full blur-3xl" style={{ top: '160vh', left: '50%' }}></div>
  <div className="absolute w-64 h-64 bg-indigo-300 rounded-full blur-3xl" style={{ top: '290vh', left: '70%' }}></div>
  <div className="absolute w-48 h-48 bg-green-300 rounded-full blur-3xl" style={{ top: '320vh', left: '15%' }}></div>
  <div className="absolute w-72 h-72 bg-red-300 rounded-full blur-3xl" style={{ top: '680vh', right: '20%' }}></div>
  <div className="absolute w-56 h-56 bg-pink-300 rounded-full blur-3xl" style={{ top: '230vh', left: '30%' }}></div>
  
  
  <div className="absolute w-40 h-40 bg-blue-300 rounded-full blur-3xl" style={{ top: '1800vh', left: '20%' }}></div>
  <div className="absolute w-60 h-60 bg-purple-300 rounded-full blur-3xl" style={{ top: '1900vh', right: '50%' }}></div>
  <div className="absolute w-52 h-52 bg-indigo-300 rounded-full blur-3xl" style={{ top: '2000vh', left: '10%' }}></div>

  <div className="absolute w-40 h-40 bg-yellow-300 rounded-full blur-3xl" style={{ top: '2100vh', left: '75%' }}></div>
  <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl" style={{ top: '2200vh', right: '5%' }}></div>
  <div className="absolute w-64 h-64 bg-blue-300 rounded-full blur-3xl" style={{ top: '2300vh', left: '15%' }}></div>
  <div className="absolute w-56 h-56 bg-green-300 rounded-full blur-3xl" style={{ top: '2400vh', right: '25%' }}></div>
  <div className="absolute w-60 h-60 bg-red-300 rounded-full blur-3xl" style={{ top: '2500vh', left: '35%' }}></div>
  <div className="absolute w-48 h-48 bg-purple-300 rounded-full blur-3xl" style={{ top: '2600vh', right: '45%' }}></div>
  <div className="absolute w-52 h-52 bg-indigo-300 rounded-full blur-3xl" style={{ top: '2700vh', left: '55%' }}></div>
  <div className="absolute w-64 h-64 bg-yellow-300 rounded-full blur-3xl" style={{ top: '2800vh', right: '65%' }}></div>
  <div className="absolute w-40 h-40 bg-pink-300 rounded-full blur-3xl" style={{ top: '2900vh', left: '75%' }}></div>
</ParallaxLayer> */}




    </Parallax>
  );
}
