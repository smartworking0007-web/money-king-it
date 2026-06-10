import React from "react";
import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import ServicesSection from "./ServicesSection";
import DevelopmentProcess from "./DevelopmentProcess";
import WebsiteTypesSection from "./WebsiteTypesSection";
import TechnologyStack from "./TechnologyStack";
import IndustriesSection from "./IndustriesSection";
import FeaturesSection from "./FeaturesSection";
import PortfolioSection from "./PortfolioSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import ContactSection from "./ContactSection";

export const metadata = {
  title: "Enterprise Website Development Services | Money King IT",
  description:
    "Build fast, scalable, SEO-friendly, and conversion-focused enterprise websites with Money King IT using Next.js 15, TypeScript, and modern stacks.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="w-full bg-[#E5EBEB] text-zinc-900 flex flex-col pb-20 overflow-x-hidden antialiased selection:bg-[#00E5A0]/30">
      <HeroSection />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-20 sm:gap-28 md:gap-36">
        <div className="-mt-10 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <OverviewSection />
        </div>

        <div className="-mt-30 sm:-mt-10 md:-mt-35 relative z-20 w-full">
          <ServicesSection />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-35 relative z-20 w-full">
          <DevelopmentProcess />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <WebsiteTypesSection />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <TechnologyStack />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <IndustriesSection />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <FeaturesSection />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <PortfolioSection />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <DevelopmentProcess />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <FAQSection />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <CTASection />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
