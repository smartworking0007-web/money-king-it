import Hero from "./Hero";
import DevOpsSolutions from "./DevOpsSolutions";
import PipelineFramework from "./PipelineFramework";
import DeploymentDashboard from "./DeploymentDashboard";
import AutomationWorkflow from "./AutomationWorkflow";
import CloudIntegrations from "./CloudIntegrations";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function CICDPipelinePage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <DeploymentDashboard />
      <DevOpsSolutions />
      <PipelineFramework />
      <AutomationWorkflow />
      <CloudIntegrations />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}