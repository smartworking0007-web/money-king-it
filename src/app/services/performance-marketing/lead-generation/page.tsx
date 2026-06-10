import Hero from "./Hero";
import AnalyticsDashboard from "./AnalyticsDashboard";
import LeadSolutions from "./LeadSolutions";
import FunnelFramework from "./FunnelFramework";
import LeadGenerationImpact from "./LeadGenerationImpact";
import CRMIntegrations from "./CRMIntegrations";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import IndustrySolutions from "./IndustrySolutions";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function ScalableLeadGenPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <AnalyticsDashboard />
      <LeadSolutions />
      <FunnelFramework />
      <LeadGenerationImpact />
      <CRMIntegrations />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}