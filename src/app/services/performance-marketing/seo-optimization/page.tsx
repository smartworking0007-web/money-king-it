import Hero from "./Hero";
import BusinessImpact from "./BusinessImpact";
import SeoSolutions from "./SeoSolutions";
import PerformanceDashboard from "./PerformanceDashboard";
import SeoGrowthFramework from "./SeoGrowthFramework";
import EnterpriseBenefits from "./EnterpriseBenefits";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-[#E5EBEB] text-[#0F172A]">
      <Hero />
      
      <div className="-mt-15 sm:-mt-24 md:-mt-10 relative z-20 w-full">
       <BusinessImpact />
      </div>{" "}
      <div className="-mt-15 sm:-mt-24 md:-mt-10 relative z-20 w-full">
        <SeoSolutions />
      </div>{" "}
      <div className="-mt-10 sm:-mt-24 md:-mt-10 relative z-20 w-full">
       <PerformanceDashboard />
      </div>{" "}
      <div className="-mt-10 sm:-mt-24 md:-mt-10 relative z-20 w-full">
       <SeoGrowthFramework />
      </div>{" "}
      <div className="-mt-15 sm:-mt-24 md:-mt-10 relative z-20 w-full">
        <EnterpriseBenefits />
      </div>{" "}
      <div className="-mt-15 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <IndustrySolutions />
      </div>{" "}
      <div className="-mt-15 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <SuccessMetrics />
      </div>{" "}
      <div className="-mt-15 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <ClientSuccessStories />
      </div>{" "}
      <div className="-mt-15 sm:-mt-24 md:-mt-10 relative z-20 w-full">
          <PremiumFAQ />
      </div>{" "}
      <div className="-mt-15 sm:-mt-24 md:-mt-10 relative z-20 w-full">
       <LuxuryCTA />
      </div>
    </main>
  );
}
