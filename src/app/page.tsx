import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import Stats from "./sections/Stats";

export default function Home() {
  return (
    <main className="flex bg-base-100 min-h-screen flex-col items-center justify-between">
      <Nav />
      <Hero />
    </main>
  );
}
