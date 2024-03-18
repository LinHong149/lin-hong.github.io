'use client'
import { useState, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stats from "./components/Stats";
import AboutMe from "./sections/AboutMe";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

export default function Home() {
  // const parallaxRef = useRef(null);
  // const [isHorizontal, setIsHorizontal] = useState(false)

  // const changeToHorizontal = () => {
  //   setIsHorizontal(true)
  //   console.log("is true")
  // }
  // const changeToVertical = () => {
  //   setIsHorizontal(false)
  //   console.log("is false")
  // }

  return (
    <Parallax  className='flex min-h-screen flex-col items-center justify-between gap-96 relative ' 
      pages={7.1} style={{ top: '0', left: '0' }} >
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="flex flex-col items-center justify-between min-h-screen">
          <div className="w-screen h-screen relative flex flex-col">
            <Nav />
            <Hero />
          </div>
        </div>
      </ParallaxLayer>


      {/* <ParallaxLayer offset={0.99} speed={1}>
        <Projects/>
      </ParallaxLayer> */}


      <ParallaxLayer offset={0.9} speed={1.2}>
        <div className='h-[30rem]'></div>
        <Experiences />
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 1.9, end: 5}} speed={2} >
        <div className='h-[10rem]'></div>
        <AboutMe />
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 3, end: 5}}>
        <Stats number="14" stat="hackatons" rowStart={2} colStart={10}/>
      </ParallaxLayer>
      <ParallaxLayer sticky={{start: 3.5, end: 5}}>
        <Stats number="33" stat="skills" rowStart={3} colStart={1}/>
      </ParallaxLayer>
      <ParallaxLayer sticky={{start: 4, end: 5}}>
        <Stats number="18" stat="projects" rowStart={4} colStart={9}/>
      </ParallaxLayer>

      <ParallaxLayer offset={6} speed={1.2}>
        <Skills />
      </ParallaxLayer>
      <ParallaxLayer offset={6.7} speed={1.2}>
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




    </Parallax>
  );
}
