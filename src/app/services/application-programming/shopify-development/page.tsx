import React from "react";

import ShopifyHero from "./ShopifyHero";
import ShopifyServices from "./ShopifyServices";
import ShopifyFeatures from "./ShopifyFeatures";
import ShopifyWhyChoose from "./ShopifyWhyChoose";
import ShopifyProcess from "./ShopifyProcess";
import ShopifyIntegrations from "./ShopifyIntegrations";
import ShopifyTechStack from "./ShopifyTechStack";
import ShopifyPlusSolutions from "./ShopifyPlusSolutions";
import ShopifyIndustries from "./ShopifyIndustries";
import ShopifyStats from "./ShopifyStats";
import ShopifyCaseStudies from "./ShopifyCaseStudies";
import ShopifyTestimonials from "./ShopifyTestimonials";
import ShopifyFAQ from "./ShopifyFAQ";
import ShopifyCTA from "./ShopifyCTA";

export const metadata = {
  title:
    "Enterprise Shopify Development Experts | Money King Software Infrastructure",
  description:
    "Deploy high-conversion custom online storefronts, headless Hydrogen pipelines, and enterprise-level Shopify Plus ecosystems. Scaled cleanly by Money King Software.",
};

export default function ShopifyDevelopmentPage() {
  return (
    <div className="w-full bg-[#E5EBEB] text-slate-900 flex flex-col pb-32 overflow-x-hidden antialiased selection:bg-teal-500/20">
      <ShopifyHero />

      {/* Strict Luxury Spacing Configuration Tracking 1280px Matrix Layouts */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-24 sm:gap-32 md:gap-40 relative z-10">
        <div className="-mt-25 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <ShopifyServices />
        </div>
 
        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <ShopifyFeatures />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <ShopifyWhyChoose />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <ShopifyProcess />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <ShopifyIntegrations />
        </div>


        <div className="-mt-25 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <ShopifyServices />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <ShopifyTechStack />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <ShopifyPlusSolutions />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <ShopifyIndustries />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <ShopifyStats />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <ShopifyCaseStudies />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <ShopifyTestimonials />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <ShopifyFAQ />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <ShopifyCTA />
        </div> 
      </div>
    </div>
  );
}
