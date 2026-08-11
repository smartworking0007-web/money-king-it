// File Name: page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import Text from "@/components/ui/Text";
import EmergingTechnologiesSection from "../ecommerce-development/EmergingTechnologiesSection";
import TargetedCrossPlatformServices from "./TargetedCrossPlatformServices";
import HowWeDriveRevenue from "./HowWeDriveRevenue";
import ProjectWorkflowSection from "../project-implementation/ProjectWorkflowSection";
import ArchitectureFrameworkHub from "./ArchitectureFrameworkHub";
import PredictiveAnalyticsFeatures from "../ecommerce-development/PredictiveAnalyticsFeatures";
import FeatureOverviewSection from "../custom-software-development/FeatureOverviewSection";
import ClientSuccessStories from "../api-development/ClientSuccessStories";
import TrustedWebsiteDesignHero from "../project-implementation/TrustedWebsiteDesignHero";
import FaqSection from "@/app/industries/FaqSection";
import IndustriesWeCaterTo from "./IndustriesWeCaterTo";

export default function Page() {
  return (
    <>
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-black text-white overflow-hidden flex items-center py-16 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image Container with object-cover and dark gradient for mobile readability */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/platefrm/1.png"
            alt="eigboebgjbvlkag"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Stronger background overlay on mobile so text remains 100% readable */}
          <div className="absolute inset-0 bg-black/80 sm:bg-black/60 pointer-events-none" />
        </div>

        {/* Main Content Container - Strictly Left-Aligned across Mobile & Desktop */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex justify-start">
          <div className="max-w-2xl w-full flex flex-col space-y-5 sm:space-y-6 text-left items-start">
            <div className="w-full">
              <Text
                variant="h3"
                className="text-white! text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md text-left"
              >
                Build once, Run Everwhere
              </Text>
            </div>

            <div className="w-full">
              <Text
                variant="h4"
                className="text-zinc-300! text-xs sm:text-base md:text-lg font-normal leading-relaxed drop-shadow text-left"
              >
                Develop powerful applications for iOS, Android, Web, Desktop, and Tablets using a single codebase while reducing development costs and accelerating time-to-market.
              </Text>
            </div>

            {/* Action Buttons - Full width stacked on mobile, row on desktop */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto py-3.5 px-7 text-sm sm:text-base justify-center bg-[#00D094] hover:bg-[#00b07d] text-black font-bold rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Book Consultation →
                </Button>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-white font-medium hover:text-[#00D094] transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer py-3.5 px-6 rounded-xl border border-white/20 bg-black/60 backdrop-blur-md hover:border-[#00D094]/40 text-sm sm:text-base"
              >
                Start Project
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <EmergingTechnologiesSection />
      <TargetedCrossPlatformServices />
      <HowWeDriveRevenue />
      <ProjectWorkflowSection />
      <ArchitectureFrameworkHub />
      <PredictiveAnalyticsFeatures />
      <IndustriesWeCaterTo />
      <FeatureOverviewSection />
      <ClientSuccessStories />
      <TrustedWebsiteDesignHero />
      <FaqSection />
      
    </>
  );
}