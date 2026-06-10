import React from "react";

import LuxuryHero from "./LuxuryHero";
import InfrastructureShowcase from "./InfrastructureShowcase";
import EnterpriseIntegrations from "./EnterpriseIntegrations";
import BentoCapabilities from "./BentoCapabilities";
import SecurityCommandCenter from "./SecurityCommandCenter";
import WorkflowTimeline from "./WorkflowTimeline";
import AnalyticsPreview from "./AnalyticsPreview";
import LuxuryStats from "./LuxuryStats";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export const metadata = {
  title:
    "Next-Gen Enterprise API Development | Money King Software Infrastructure",
  description:
    "Architecting high-frequency backend routing layers, programmatic payment engines, and sandboxed microservice infrastructures. Engineered on luxury SaaS parameters.",
};

export default function LuxuryApiDevelopmentPage() {
  return (
    <div className="w-full bg-[#E5EBEB] text-slate-900 flex flex-col pb-32 overflow-x-hidden antialiased selection:bg-teal-500/30 selection:text-teal-950">
      {/* Immersive Background Ambient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-1200px bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(20,184,166,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute top-2500px right-0 w-600px h-600px bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1000px left-0 w-800px h-800px bg-teal-500/5 blur-[160px] rounded-full pointer-events-none" />

      <LuxuryHero />

      {/* Strict Luxury Spacing System Across Linear Node Rows */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-28 sm:gap-36 md:gap-48 relative z-10">
        <div className="-mt-25 sm:-mt-24 md:-mt-15 relative z-20 w-full">
          <InfrastructureShowcase />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <EnterpriseIntegrations />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <BentoCapabilities />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <SecurityCommandCenter />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <WorkflowTimeline />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <AnalyticsPreview />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <LuxuryStats />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <ClientSuccessStories />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <PremiumFAQ />
        </div>

        <div className="-mt-25 sm:-mt-24 md:-mt-30 relative z-20 w-full">
          <LuxuryCTA />
        </div>
      </div>
    </div>
  );
}
