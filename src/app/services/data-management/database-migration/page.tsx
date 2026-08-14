import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import Text from "@/components/ui/Text";
import EnterpriseDatabaseMigration from "./EnterpriseDatabaseMigration";
import DatabaseMigrationFramework from "./DatabaseMigrationFramework";
import CloudStrategySolutions from "./CloudStrategySolutions";
import CateredIndustries from "../data-warehousing/EnterpriseIndustrySolutions";
import WebsiteDevelopmentHeroSection from "../../mobile-app-development/flutter-apps/WebsiteDevelopmentHeroSection";
import StatsCircularSection from "@/app/industries/StatsCircularSection";
import FaqSection from "@/app/industries/FaqSection";

export default function DataWarehousingPage() {
  return (
    <main className="w-full bg-black min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] md:min-h-[90vh] bg-black text-white overflow-hidden flex items-center py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/datawarehousing/1.png"
            alt="database"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Responsive background overlay for mobile readability */}
          <div className="absolute inset-0 bg-black/80 sm:bg-black/50 backdrop-blur-[1px] sm:backdrop-blur-none pointer-events-none" />
        </div>

        {/* Main Content Container - Fully Left-Aligned */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex justify-start">
          <div className="max-w-2xl w-full flex flex-col space-y-4 sm:space-y-6 text-left items-start">
            {/* Main Title (H3) */}
            <Text
              variant="h3"
              className="text-white! text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight drop-shadow-md text-left"
            >
              Zero-Downtime Database Migration Engine | Enterprise Cloud
              Migration
            </Text>

            {/* Subtext Description */}
            <Text
              variant="h3"
              className="text-zinc-200! text-xs sm:text-base md:text-lg font-normal leading-relaxed drop-shadow text-left"
            >
              Seamlessly migrate enterprise databases across cloud and
              on-premise environments with zero downtime. Schedule your
              migration assessment today!
            </Text>

            {/* Action Buttons - Full width stacked on mobile */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto py-3 sm:py-3.5 px-6 sm:px-8 text-sm sm:text-base justify-center bg-[#00D094] hover:bg-[#00b07d] text-black font-bold rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Book Consultation →
                </Button>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-white text-sm sm:text-base font-medium hover:text-[#00D094] transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer py-3 sm:py-3.5 px-6 rounded-xl border border-white/20 bg-black/60 backdrop-blur-md hover:border-[#00D094]/40"
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

      {/* Migration Grid Section */}
      <EnterpriseDatabaseMigration />
      <DatabaseMigrationFramework />
      <CloudStrategySolutions />
      <CateredIndustries />
      <WebsiteDevelopmentHeroSection />
      <StatsCircularSection />
      <FaqSection />
    </main>
  );
}
