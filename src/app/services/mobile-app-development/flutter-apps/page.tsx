// File Name: page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import Text from "@/components/ui/Text";
import EnterpriseFlutterSolutions from "./EnterpriseFlutterSolutions";
import ModernFlutterArchitecture from "./ModernFlutterArchitecture";
import EnterpriseFlutterCapabilities from "./EnterpriseFlutterCapabilities";
import CateredIndustriesGrid from "../../performance-marketing/seo-optimization/CateredIndustriesGrid";
import ImpactStatsCircularSection from "./ImpactStatsCircularSection";
import WebsiteDevelopmentHeroSection from "./WebsiteDevelopmentHeroSection";
import FaqSection from "@/app/industries/FaqSection";

export default function WebsiteDevelopmentHero() {
  return (
    <>
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-black text-white overflow-hidden flex items-center py-10 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image Container with object-cover and dark gradient for mobile readability */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/flutter/1.png"
            alt="Flutter cross-platform application development"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Stronger background overlay on mobile so text remains 100% readable */}
          <div className="absolute inset-0 bg-black/75 sm:bg-black/50 pointer-events-none" />
        </div>

        {/* Main Content Container - Fully centered/stacked on mobile, right-aligned on desktop */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex justify-center lg:justify-end">
          <div className="max-w-2xl w-full flex flex-col space-y-6 text-left items-start">
            <Text
              variant="h3"
              className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md text-left"
            >
              Build High-fidelity cross-platform applications
            </Text>

            <Text
              variant="h4"
              className="text-zinc-200! text-sm sm:text-base md:text-lg font-normal leading-relaxed drop-shadow text-left"
            >
              Deliver high-performance apps for Android, iOS, Web, and Desktop
              from a single codebase using Flutter and Dart. Book a consultation
              with expert Flutter developers today.
            </Text>

            {/* Action Buttons - Full width on mobile, auto on desktop */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto py-3.5 px-8 text-base justify-center bg-[#00D094] hover:bg-[#00b07d] text-black font-bold rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Book Consultation →
                </Button>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-white font-medium hover:text-[#00D094] transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer py-3.5 px-6 rounded-xl border border-white/20 bg-black/60 backdrop-blur-md hover:border-[#00D094]/40"
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
      <EnterpriseFlutterSolutions />
      <ModernFlutterArchitecture />
      <EnterpriseFlutterCapabilities />
      <CateredIndustriesGrid />
      <ImpactStatsCircularSection />
      <WebsiteDevelopmentHeroSection />
      <FaqSection /> 
    </>
  );
}
