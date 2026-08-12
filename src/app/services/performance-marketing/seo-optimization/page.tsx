// File Name: page.tsx

"use client";
import Link from "next/link";
import Image from "next/image";
import Text from "@/components/ui/Text";
import ComprehensiveSeoSolutions from "./ComprehensiveSeoSolutions";
import StatsCircularSection from "@/app/industries/StatsCircularSection";
import SeoGrowthFramework from "./SeoGrowthFramework";
import EnterpriseSeoSolutions from "./EnterpriseSeoSolutions";
import CateredIndustriesGrid from "./CateredIndustriesGrid";
import TrustedWebsiteDesignHero from "../../application-programming/project-implementation/TrustedWebsiteDesignHero";
import FaqSection from "@/app/industries/FaqSection";

export default function Page() {
  return (
    <>
      <section className="relative w-full min-h-[75vh] md:min-h-screen bg-black overflow-x-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/seo/1.png"
            alt="seo with money king"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-110 contrast-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        {/* Content Positioned Left */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="max-w-2xl text-left">
            <Text
              variant="h3"
              className="text-[#00D094]! text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-3"
            >
              ROI-Focused SEO Optimization That Drives Revenue
            </Text>

            <Text
              variant="body"
              className="text-gray-300! text-sm sm:text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl"
            >
              Increase search visibility, dominate rankings, generate qualified
              leads, and transform organic traffic into measurable business
              growth through enterprise-grade SEO strategies.
            </Text>

            <div>
              <Link href="/contact">
                <button className="bg-[#00D094] text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#00b07d] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#00D094]/20 cursor-pointer">
                  Start Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ComprehensiveSeoSolutions />
      <StatsCircularSection />
      <SeoGrowthFramework />
      <EnterpriseSeoSolutions />
      <CateredIndustriesGrid />
      <TrustedWebsiteDesignHero />
      <FaqSection />
    </>
  );
}
