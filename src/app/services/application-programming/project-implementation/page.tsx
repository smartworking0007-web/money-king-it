import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Text";
import WhyCustomSection from "./WhyCustomSection";
import CoreValuesSection from "./CoreValuesSection";
import ProjectWorkflowSection from "./ProjectWorkflowSection";
import FeatureOverviewSection from "./FeatureOverviewSection";
import SimpleAndPowerfulSection from "./SimpleAndPowerfulSection";
import EngagementModelsSection from "./EngagementModelsSection";
import RealRevenueImpactSection from "./RealRevenueImpactSection";
import FAQSection from "./FAQSection";
import TrustedWebsiteDesignHero from "./TrustedWebsiteDesignHero";

export default function FundraisingPage() {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-black min-h-auto lg:min-h-screen flex items-center py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Column */}
          <div className="space-y-6 text-center md:text-left z-10">
            <Text variant="h2" className="text-white! text-[32px] sm:text-[40px] md:text-[48px] leading-tight font-extrabold">
              Seamless Project Implementation & Deployment
            </Text>

            <Text
              variant="h4"
              className="text-gray-300! font-normal text-[15px] md:text-[18px] leading-relaxed"
            >
              Looking for expert IT project implementation? We manage complex
              technical dependencies and infrastructure risks for seamless
              deployment. Book a consultation today!
            </Text>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Link href="/contact-us" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto py-3 px-6 text-white"
                >
                  Book a Consultation →
                </Button>
              </Link>
              <Link href="/contact-us" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="text-white! border-white! hover:bg-white/10 w-full sm:w-auto py-3 px-6"
                >
                  Start Project →
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column / Hero Graphic Image */}
          <div className="relative w-full h-80 sm:h-100 md:h-120 flex items-center justify-center">
            <Image
              src="/implementation/hero-graphic.png"
              alt="Project Implementation Graphic"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />

            <div className="absolute top-[5%] right-[2%] sm:right-[5%] bg-zinc-900 border border-white/10 p-3 sm:p-4 rounded-xl shadow-xl w-38 sm:w-48 z-20">
              <Text variant="h5" className="text-xs! sm:text-sm! text-zinc-400 mb-1">
                Need Attention
              </Text>
              <p className="text-white font-bold text-xs! sm:text-sm! leading-tight">
                23 undergiving major gift prospects
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Subsequent Sections */}
      <div className="space-y-0">
        <WhyCustomSection />
        <CoreValuesSection />
        <ProjectWorkflowSection />
        <SimpleAndPowerfulSection />
        <FeatureOverviewSection />
        <EngagementModelsSection />
        <RealRevenueImpactSection />
        <FAQSection />
        <TrustedWebsiteDesignHero />
      </div>
    </div>
  );
}