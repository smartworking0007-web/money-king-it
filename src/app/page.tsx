import Hero from "@/components/layout/Hero";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import GrowthSection from "@/components/sections/GrowthSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import WhiteLabelSection from "@/components/sections/WhiteLabelSection";
import OurProcessSection from "@/components/sections/OurProcessSection";
import CateredIndustries from "@/components/sections/CateredIndustries";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden w-full relative min-h-screen bg-[#040809]">
      <Hero />
      <StatsSection />
      <GrowthSection />
      <ServicesSection />
      <WhatWeDoSection />
      <IndustriesSection />
      <WhiteLabelSection />
      <OurProcessSection />
      <CateredIndustries />
      <FAQSection />
    </main>
  );
}