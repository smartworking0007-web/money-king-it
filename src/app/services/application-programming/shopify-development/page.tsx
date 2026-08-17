// File Name: page.tsx

"use client";
import Link from "next/link";
import Image from "next/image";
import ShopifyServicesGrid from "./ShopifyServicesGrid";
import FullSuitePpcManagementServices from "./FullSuitePpcManagementServices";
import WhyEcommerceRunsOnShopify from "./WhyEcommerceRunsOnShopify";
import HowWeDriveRevenue from "../cross-platform-application-development/HowWeDriveRevenue";
import ShopifyIndustriesSection from "./ShopifyIndustriesSection";
import TargetedShopifyEngineering from "./TargetedShopifyEngineering";

import CateredIndustries from "./CateredIndustries";
import ClientSuccessStories from "../api-development/ClientSuccessStories";
import FaqSection from "@/app/industries/FaqSection";

export default function Page() {
  return (
    <>
      <section className="relative w-full min-h-[75vh] md:min-h-screen bg-black overflow-x-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/shopify/1.png"
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
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16">
          <div className="max-w-5xl">
            <h1 className="text-white text-4xl md:text-7xl font-extrabold mb-4 leading-[1.1]">
              Build High-Converting <br className="hidden md:block" />
              Shopify Stores
            </h1>

            <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-8">
              Scale your e-commerce brand worldwide with custom solutions and
              high-speed architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="bg-[#00D094] text-black px-8 py-3 md:px-12 md:py-5 rounded-full font-bold text-sm md:text-lg hover:bg-[#00b07d] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#00D094]/20 cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>Industries We Cater to
      </section>

      {/* Shopify Services Grid Component */}
      <ShopifyServicesGrid />
      <FullSuitePpcManagementServices />
      <WhyEcommerceRunsOnShopify />
      <HowWeDriveRevenue />
      <ShopifyIndustriesSection />
      <TargetedShopifyEngineering />
      <CateredIndustries />
      <ClientSuccessStories />
      <FaqSection />
    </>
  );
}
