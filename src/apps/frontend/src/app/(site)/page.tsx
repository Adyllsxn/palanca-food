"use client";

import Hero from "./_components/Hero";
import Features from "./_components/Features";
import HowItWorks from "./_components/How-It-Works";
import Stats from "./_components/Stats";
import Cta from "./_components/Cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <div id="features"><Features /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="stats"><Stats /></div>
      <Cta />
    </div>
  );
}