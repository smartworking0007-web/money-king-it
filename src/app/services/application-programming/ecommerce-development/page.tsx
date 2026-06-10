import React from "react";
// import EcommerceHero from '@/components/ecommerce-development/EcommerceHero';
// import EcommerceTrusted from '@/components/ecommerce-development/EcommerceTrusted';
// import EcommerceServices from '@/components/ecommerce-development/EcommerceServices';
// import EcommerceWhyChooseUs from '@/components/ecommerce-development/EcommerceWhyChooseUs';
// import EcommerceProcess from '@/components/ecommerce-development/EcommerceProcess';
// import EcommerceFeatures from '@/components/ecommerce-development/EcommerceFeatures';
// import EcommercePlatforms from '@/components/ecommerce-development/EcommercePlatforms';
// import EcommerceIndustries from '@/components/ecommerce-development/EcommerceIndustries';
// import EcommerceTechStack from '@/components/ecommerce-development/EcommerceTechStack';
// import EcommerceBenefits from '@/components/ecommerce-development/EcommerceBenefits';
// import EcommerceStats from '@/components/ecommerce-development/EcommerceStats';
// import EcommerceCaseStudies from '@/components/ecommerce-development/EcommerceCaseStudies';
// import EcommerceFAQ from '@/components/ecommerce-development/EcommerceFAQ';
// import EcommerceCTA from '@/components/ecommerce-development/EcommerceCTA';

import EcommerceHero from "./EcommerceHero";
import EcommerceTrusted from "./EcommerceTrusted";
import EcommerceServices from "./EcommerceServices";
import EcommerceWhyChooseUs from "./EcommerceWhyChooseUs";
import EcommerceProcess from "./EcommerceProcess";
import EcommerceFeatures from "./EcommerceFeatures";
import EcommercePlatforms from "./EcommercePlatforms";
import EcommerceIndustries from "./EcommerceIndustries";
import EcommerceTechStack from "./EcommerceTechStack";
import EcommerceBenefits from "./EcommerceBenefits";
import EcommerceStats from "./EcommerceStats";
import EcommerceCaseStudies from "./EcommerceCaseStudies";
import EcommerceFAQ from "./EcommerceFAQ";
import EcommerceCTA from "./EcommerceCTA";

export const metadata = {
  title: "Enterprise eCommerce Development Services | Money King Software",
  description:
    "Launch high-conversion custom online storefronts, headless commerce hubs, and marketplace platforms. Scalable engineering by Money King Software.",
};

export default function EcommerceDevelopmentPage() {
  return (
    <div className="w-full bg-[#E5EBEB] text-zinc-900 flex flex-col pb-20 overflow-x-hidden antialiased selection:bg-teal-500/20">
      <EcommerceHero />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-20 sm:gap-24 md:gap-28">
        <div className="-mt-5 sm:-mt-24 md:-mt-1 relative z-20 w-full">
          <EcommerceTrusted />
        </div>

        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceServices />
        </div>

        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceWhyChooseUs />
        </div>
        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceProcess />
        </div>
        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceFeatures />
        </div>
        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommercePlatforms />
        </div>
        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceIndustries />
        </div>

        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceTechStack />
        </div>

        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceBenefits />
        </div>

        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceStats />
        </div>

        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceCaseStudies />
        </div>
        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceFAQ />
        </div>

        <div className="-mt-10 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <EcommerceCTA />
        </div>
      </div>
    </div>
  );
}
