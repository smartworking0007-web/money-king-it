import React from "react";
// import HeroSection from '@/components/custom-software-development/HeroSection';
// import OverviewSection from '@/components/custom-software-development/OverviewSection';
// import ServicesSection from '@/components/custom-software-development/ServicesSection';
// import DevelopmentProcess from '@/components/custom-software-development/DevelopmentProcess';
// import TechnologyStack from '@/components/custom-software-development/TechnologyStack';
// import IndustriesSection from '@/components/custom-software-development/IndustriesSection';
// import BenefitsSection from '@/components/custom-software-development/BenefitsSection';
// import CaseStudiesSection from '@/components/custom-software-development/CaseStudiesSection';
// import FAQSection from '@/components/custom-software-development/FAQSection';
// import CTASection from '@/components/custom-software-development/CTASection';

import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import ServicesSection from "./ServicesSection";
import DevelopmentProcess from "./DevelopmentProcess";
import TechnologyStack from "./TechnologyStack";
import IndustriesSection from "./IndustriesSection";
import BenefitsSection from "./BenefitsSection";
import CaseStudiesSection from "./CaseStudiesSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

// Structural deployment fallback mock layers
const MethodologySection = () => null;
const Testimonials = () => null;
const ContactSection = () => null;

export const metadata = {
  title: "Custom Software Development Services | Enterprise Grade Platforms",
  description:
    "We construct secure, modular, highly-scalable custom software tools engineered dynamically around your precise enterprise operational architecture.",
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <div className="w-full bg-[#E5EBEB] text-zinc-900 flex flex-col pb-20 overflow-x-hidden antialiased selection:bg-[#00E5A0]/30">
      <HeroSection />
      
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col gap-20 sm:gap-28 md:gap-36">
        <div className="-mt-10 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <OverviewSection />
        </div>

        <div className=" -mt-30 sm:-mt-24 md:-mt-50 relative z-20 w-full">
          <ServicesSection />
        </div>

        <div className=" -mt-30 sm:-mt-24 md:-mt-40 relative z-20 w-full">
          <DevelopmentProcess />
        </div>

        <div className="-mt-30 sm:-mt-24 md:-mt-70 relative z-20 w-full">
          <MethodologySection />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <IndustriesSection />
        </div>

        <div className="-mt-30 sm:-mt-24 md:-mt-50 relative z-20 w-full">
          <TechnologyStack />
        </div>

        <div className="-mt-30 sm:-mt-24 md:-mt-50 relative z-20 w-full">
          <BenefitsSection />
        </div>

        <div className="-mt-30 sm:-mt-24 md:-mt-50 relative z-20 w-full">
          <CaseStudiesSection />
        </div>

        <div className="-mt-30 sm:-mt-24 md:-mt-50  relative z-20 w-full">
          <Testimonials />
        </div>

        <div className="-mt-30 sm:-mt-24 md:-mt-35 relative z-20 w-full">
          <FAQSection />
        </div>

        <div className="-mt-30 sm:-mt-24 md:-mt-50 relative z-20 w-full">
          <CTASection />
        </div>

        <div className="-mt-30 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
