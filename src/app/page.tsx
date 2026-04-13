import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Ventures from "@/components/Ventures";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <WhatIDo />
      <SelectedWork />
      <Experience />
      <Ventures />
      <Skills />
      <Connect />
      <Footer />
    </main>
  );
}
