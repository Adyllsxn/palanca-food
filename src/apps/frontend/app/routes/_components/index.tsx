import Hero from "./hero";
import Features from "./features";
import HowItWorks from "./how-it-works";
import Stats from "./stats";
import CTA from "./cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <div id="features"><Features /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="stats"><Stats /></div>
      <CTA />
    </div>
  );
}