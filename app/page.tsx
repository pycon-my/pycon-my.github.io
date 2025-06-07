import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Intro />

      
    </div>
  );
}
