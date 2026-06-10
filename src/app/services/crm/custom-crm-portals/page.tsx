import Hero from "./Hero";
import LeadManagementSolutions from "./LeadManagementSolutions";
import WorkflowAutomation from "./WorkflowAutomation";
import AnalyticsDashboard from "./AnalyticsDashboard";
import CRMFeatures from "./CRMFeatures";
import LeadPipeline from "./LeadPipeline";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function CustomLeadManagementPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <AnalyticsDashboard />
      <LeadManagementSolutions />
      <WorkflowAutomation />
      <CRMFeatures />
      <LeadPipeline />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}