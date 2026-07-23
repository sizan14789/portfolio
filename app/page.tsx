"use client";

import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 h-svh w-svw mocha hidden" />
      {/* hidden for now */}
      <Hero />
      <Projects />
    </>
  );
}
