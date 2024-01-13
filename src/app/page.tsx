import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stats from "./sections/Stats";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="flex bg-base-100 min-h-screen flex-col items-center justify-between [&>*]:px-36 gap-96">
      <div className="m-0 w-screen h-screen relative flex flex-col">
        <Nav />
        <Hero />
      </div>
      <Projects />
      <Stats />
      <Experiences />
      <Skills />
      <Footer />
    </main>
  );
}
