// File Name: page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import Text from "@/components/ui/Text";
import EnterpriseIndustrySolutions from "../../data-management/data-warehousing/EnterpriseIndustrySolutions";
import FaqSection from "@/app/industries/FaqSection";
import WebsiteDevelopmentHeroSection from "../../mobile-app-development/flutter-apps/WebsiteDevelopmentHeroSection";
import EnterpriseAnalyticsSolutionsGrid from "./EnterpriseAnalyticsSolutionsGrid";
import PredictiveAnalyticsFrameworkGrid from "./PredictiveAnalyticsFrameworkGrid";
import AiModellingCompactGrid from "./AiModellingCompactGrid";
import BusinessPredictionsGrid from "./BusinessPredictionsGrid";

/**
 * PredictiveAnalyticsPage.tsx
 * Fully responsive hero section optimized for mobile and desktop screens with left-aligned content.
 */

export default function PredictiveAnalyticsPage() {
  return (
    <main className="w-full bg-black min-h-screen overflow-x-hidden">
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-black text-white overflow-hidden flex items-center py-16 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image Container with object-cover and dark gradient for mobile readability */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ai/3.png"
            alt="analytics forecasting"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Stronger background overlay on mobile so text remains 100% readable */}
          <div className="absolute inset-0 bg-black/75 sm:bg-black/50 pointer-events-none" />
        </div>

        {/* Main Content Container - Strictly Left-Aligned across mobile & desktop */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex justify-start">
          <div className="max-w-2xl w-full flex flex-col space-y-6 text-left items-start">
            <Text
              variant="h3"
              className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md text-left"
            >
              Predictive Analytics & Forecasting
            </Text>

            <Text
              variant="h4"
              className="text-zinc-200! text-sm sm:text-base md:text-lg font-normal leading-relaxed drop-shadow text-left"
            >
              Transform business decisions with AI-powered forecasting,
              predictive intelligence, and real-time business insights.
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
      <EnterpriseAnalyticsSolutionsGrid />
      <PredictiveAnalyticsFrameworkGrid />
      <AiModellingCompactGrid />
      <BusinessPredictionsGrid />
      <EnterpriseIndustrySolutions />
      <WebsiteDevelopmentHeroSection />
      <FaqSection />
    </main>
  );
}
