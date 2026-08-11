import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import StatsCircularSection from "../website-development/StatsCircularSection";
import CommerceArchitectureSection from "./CommerceArchitectureSection";
import CommerceTechStackSection from "./CommerceTechStackSection";
import OurEngagementModels from "../website-development/OurEngagementModels";
import ProjectWorkflowSection from "../project-implementation/ProjectWorkflowSection";
import EcommercePlatformsGrid from "./EcommercePlatformsGrid";
import FullSuitePpcServices from "../software-testing/FullSuitePpcServices";
import PredictiveAnalyticsFeatures from "./PredictiveAnalyticsFeatures";
import EmergingTechnologiesSection from "./EmergingTechnologiesSection";
import FeatureOverviewSection from "../custom-software-development/FeatureOverviewSection";
import FaqSection from "@/app/industries/FaqSection";

export default function EcommerceDevelopmentPage() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white flex flex-col min-h-screen overflow-x-hidden antialiased selection:bg-[#00D094]/20">
      <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/10">
        {/* Background Image with increased visibility and softer gradient overlay */}
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
          <Image
            src="/eCommerce/1.png"
            alt="eCommerce Website Development services"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]/90"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
          <Text
            variant="h2"
            className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md"
          >
            eCommerce Website Development services
          </Text>

          <Text
            variant="h3"
            className="text-gray-200! text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow"
          >
            Build high-converting digital storefronts with our eCommerce
            development services. We engineer fast, secure, and scalable
            headless commerce platforms.
          </Text>

          <div className="w-16 h-1.5  rounded-full shadow-md"></div>
        </div>
      </section>
      <StatsCircularSection />
      <CommerceArchitectureSection />
      <CommerceTechStackSection />
      <OurEngagementModels />
      <ProjectWorkflowSection />
      <EcommercePlatformsGrid />
      <FullSuitePpcServices />
      <PredictiveAnalyticsFeatures />
      <EmergingTechnologiesSection />
      <FeatureOverviewSection />
      <FaqSection />
    </div>
  );
}
