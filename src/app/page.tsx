import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import GrowthSection from "@/components/sections/GrowthSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden w-full relative min-h-screen bg-[#040809]">
      {/* Dynamic Header mounted at top level absolute context */}
      <Navbar />
      {/* Core structural sequence blocks stack */}
      <Hero />
      <StatsSection />
      <GrowthSection />
      <ServicesSection />
      <IndustriesSection />
    </main>
  );
}