import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import GrowthSection from "@/components/sections/GrowthSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import WhiteLabelSection from "@/components/sections/WhiteLabelSection";
import WhyChooseMoneyKingIT from "@/components/sections/WhyChooseUs";
import OurProcessSection from "@/components/sections/OurProcessSection";
import CateredIndustries from "@/components/sections/CateredIndustries";
import FAQSection from "@/components/sections/FAQSection";



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
      <WhatWeDoSection />
      <IndustriesSection />
      <WhiteLabelSection />
      <WhyChooseMoneyKingIT />
      <OurProcessSection />
      <CateredIndustries />
      <FAQSection />
   
    </main>
  );
}
