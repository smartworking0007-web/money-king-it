import React from "react";
import Image from "next/image";
import LeadDriveRevenue from "./leadDriveRevenue";
import SeoGrowthFramework from "../seo-optimization/SeoGrowthFramework";
import FeatureOverviewSection from "../../application-programming/custom-software-development/FeatureOverviewSection";
import IndustriesWeCaterTo from "../../application-programming/cross-platform-application-development/IndustriesWeCaterTo";
import LeadGrowthMarquee from "./leadGrowthMarquee";
import StatsCircularSection from "@/app/industries/StatsCircularSection";
import TrustedWebsiteDesignHero from "../../application-programming/project-implementation/TrustedWebsiteDesignHero";
import FaqSection from "@/app/industries/FaqSection";

export default function Page() {
  return (
    <>
      <section className="relative w-full bg-black overflow-hidden">
        {/* Responsive wrapper with max-width and clean layout to prevent cutting */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative w-full aspect-video sm:aspect-21/9 overflow-hidden rounded-2xl">
            <Image
              src="/lead/1.png"
              alt="social media ads with money king"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>
      <LeadDriveRevenue />
      <SeoGrowthFramework />
      <FeatureOverviewSection />
      <LeadGrowthMarquee />
      <IndustriesWeCaterTo />
      <StatsCircularSection />
      <TrustedWebsiteDesignHero />
      <FaqSection />
    </>
  );
}
