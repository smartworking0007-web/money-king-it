import React from "react";
import HeroSection from "./HeroSection";
import TrustedCompanies from "./TrustedCompanies";
import TestingServicesSection from "./TestingServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import TestingProcessTimeline from "./TestingProcessTimeline";
import TestingTypesSection from "./TestingTypesSection";
import AutomationTools from "./AutomationTools";
import IndustriesServed from "./IndustriesServed";
import TestingBenefits from "./TestingBenefits";
import TestingStats from "./TestingStats";
import TestingFAQ from "./TestingFAQ";
import TestingCTA from "./TestingCTA";

export const metadata = {
  title:
    "Enterprise Software Quality Assurance & Testing Services | Money King Software",
  description:
    "Deliver bug-free, highly secure, and performance-optimized digital platforms. Money King Software offers enterprise-grade manual and automated testing solutions.",
};

export default function SoftwareTestingServicesPage() {
  return (
    <div className="w-full bg-[#E5EBEB] text-zinc-900 flex flex-col pb-20 overflow-x-hidden antialiased selection:bg-teal-500/20">
      <HeroSection />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-20 sm:gap-28 md:gap-36">
        <div className="-mt-10 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <TrustedCompanies />
        </div>
        <div className="-mt-10 sm:-mt-24 md:-mt-25 relative z-20 w-full">
          <TestingServicesSection />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <WhyChooseUs />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <TestingProcessTimeline />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <TestingTypesSection />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <AutomationTools />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <IndustriesServed />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <TestingBenefits />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <TestingStats />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <TestingFAQ />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <TestingCTA />
        </div>
      </div>
    </div>
  );
}
