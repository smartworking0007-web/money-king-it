import Hero from "./Hero";
import HubspotServices from "./HubspotServices";
import PipelineAutomation from "./PipelineAutomation";
import CRMDashboard from "./CRMDashboard";
import SalesWorkflows from "./SalesWorkflows";
import LeadNurturing from "./LeadNurturing";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function HubSpotIntegrationPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <CRMDashboard />
      <HubspotServices />
      <PipelineAutomation />
      <SalesWorkflows />
      <LeadNurturing />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}