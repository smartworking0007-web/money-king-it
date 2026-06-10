import Hero from "./Hero";
import AISolutions from "./AISolutions";
import IntegrationFramework from "./IntegrationFramework";
import AIDashboard from "./AIDashboard";
import EnterpriseAutomation from "./EnterpriseAutomation";
import ModelIntegrations from "./ModelIntegrations";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function GenAIPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <AIDashboard />
      <AISolutions />
      <IntegrationFramework />
      <EnterpriseAutomation />
      <ModelIntegrations />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}