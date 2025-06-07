import Hero from "../components/Hero";

import Intro from "@/components/Intro";
import CFPHero from "@/components/CFPHero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Intro />
      <CFPHero />
      
    </div>
  );
}
