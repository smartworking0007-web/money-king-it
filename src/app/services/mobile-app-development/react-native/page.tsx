// File Name: page.tsx
"use client";
import Image from "next/image";
import EnterpriseReactNativeSolutions from "./EnterpriseReactNativeSolutions";
import ReactNativeArchitecture from "./ReactNativeArchitecture";
import EssentialReactNativeFeatures from "./EssentialReactNativeFeatures";
import CoreReactNativeTechStack from "./CoreReactNativeTechStack";
import CateredIndustries from "../../application-programming/shopify-development/CateredIndustries";
import StatsCircularSection from "@/app/industries/StatsCircularSection";
import WebsiteDevelopmentHeroSection from "../flutter-apps/WebsiteDevelopmentHeroSection";
import FaqSection from "@/app/industries/FaqSection";

export default function Hero() {
  return (
    <>
      <section className="relative w-full min-h-[75vh] md:min-h-screen bg-black overflow-x-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Native/1.png"
            alt="Skky Loom Digital Technology Pvt. Ltd."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-110 contrast-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[75vh] md:min-h-screen flex-col items-center justify-center text-center px-6 py-16">
          <div className="max-w-5xl"></div>
        </div>
      </section>
      <EnterpriseReactNativeSolutions />
      <ReactNativeArchitecture />
      <EssentialReactNativeFeatures />
      <CoreReactNativeTechStack />
      <CateredIndustries />
      <StatsCircularSection />
      <WebsiteDevelopmentHeroSection />
      <FaqSection />
    </>
  );
}