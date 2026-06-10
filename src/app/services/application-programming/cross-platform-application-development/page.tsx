import React from "react";
// import CrossHero from '@/components/cross-platform-development/CrossHero';
// import PlatformShowcase from '@/components/cross-platform-development/CrossPlatformShowcase';
// import CrossServices from '@/components/cross-platform-development/CrossServices';
// import CrossWhyLayout from '@/components/cross-platform-development/CrossWhyLayout';
// import CrossProcessTimeline from '@/components/cross-platform-development/CrossProcessTimeline';
// import CrossTechStack from '@/components/cross-platform-development/CrossTechStack';
// import CrossFeaturesGrid from '@/components/cross-platform-development/CrossFeaturesGrid';
// import CrossIndustries from '@/components/cross-platform-development/CrossIndustries';
// import CrossStats from '@/components/cross-platform-development/CrossStats';
// import CrossCaseStudies from '@/components/cross-platform-development/CrossCaseStudies';
// import CrossTestimonials from '@/components/cross-platform-development/CrossTestimonials';
// import CrossFAQ from '@/components/cross-platform-development/CrossFAQ';
// import CrossCTA from '@/components/cross-platform-development/CrossCTA';

import CrossHero from "./CrossHero";
import PlatformShowcase from "./CrossPlatformShowcase";
import CrossServices from "./CrossServices";
import CrossWhyLayout from "./CrossWhyLayout";
import CrossProcessTimeline from "./CrossProcessTimeline";
import CrossTechStack from "./CrossTechStack";
import CrossFeaturesGrid from "./CrossFeaturesGrid";
import CrossIndustries from "./CrossIndustries";
import CrossStats from "./CrossStats";
import CrossCaseStudies from "./CrossCaseStudies";
import CrossTestimonials from "./CrossTestimonials";
import CrossFAQ from "./CrossFAQ";
import CrossCTA from "./CrossCTA";

export const metadata = {
  title:
    "Enterprise Cross-Platform Application Development | Money King Software",
  description:
    "Build once, run everywhere. We engineer high-fidelity iOS, Android, and Web applications from a single codebase utilizing Flutter and React Native architectures.",
};

export default function CrossPlatformDevelopmentPage() {
  return (
    <div className="w-full bg-[#E5EBEB] text-slate-900 flex flex-col pb-24 overflow-x-hidden antialiased selection:bg-teal-500/20">
      <CrossHero />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-24 sm:gap-32 md:gap-40 relative z-10">
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <PlatformShowcase />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossServices />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossWhyLayout />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossProcessTimeline />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossTechStack />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossFeaturesGrid />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossIndustries />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossStats />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossCaseStudies />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossTestimonials />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossFAQ />
        </div>
        <div className="-mt-25 sm:-mt-24 md:-mt-20 relative z-20 w-full">
          <CrossCTA />
        </div>
      </div>
    </div>
  );
}
