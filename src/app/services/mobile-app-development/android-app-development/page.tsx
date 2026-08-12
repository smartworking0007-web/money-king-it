// File Name: page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import Text from "@/components/ui/Text";
import AndroidDevelopmentSolutions from "./androidDevelopmentSolutions";
import AndroidSystemArchitecture from "./androidSystemArchitecture";
import AdvancedAndroidAppFeatures from "./AdvancedAndroidAppFeatures";
import CateredIndustries from "../../application-programming/shopify-development/CateredIndustries";
import TrustedWebsiteDesignHero from "../../application-programming/project-implementation/TrustedWebsiteDesignHero";
import FaqSection from "@/app/industries/FaqSection";


export default function WebsiteDevelopmentHero() {
  return (
    <>
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-black text-white overflow-hidden flex items-center py-16 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image Container with object-cover and dark gradient for mobile readability */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/andriod/1.png"
            alt="app application with money king"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Stronger background overlay on mobile so text remains 100% readable */}
          <div className="absolute inset-0 bg-black/75 sm:bg-black/60 pointer-events-none" />
        </div>

        {/* Main Content Container - Left aligned */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex justify-start">
          <div className="max-w-2xl w-full flex flex-col space-y-6 text-left items-start">
            <Text
              variant="h3"
              className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md text-left"
            >
              Custom Android Application <br />
              Development Company
            </Text>

            <Text
              variant="h4"
              className="text-zinc-200! text-sm sm:text-base md:text-lg font-normal leading-relaxed drop-shadow text-left"
            >
              Build secure, high-performance Android applications with expert
              Kotlin and Jetpack Compose developers. Engineered for enterprise
              scale with 99.9% crash-free stability.
            </Text>

            {/* Action Buttons */}
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
      <AndroidDevelopmentSolutions />
      <AndroidSystemArchitecture />
      <AdvancedAndroidAppFeatures />
      <CateredIndustries />
      <TrustedWebsiteDesignHero />
      <FaqSection />
    </>
  );
}