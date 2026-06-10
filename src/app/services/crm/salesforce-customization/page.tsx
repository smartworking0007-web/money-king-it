import Hero from "./Hero";
import SalesforceSolutions from "./SalesforceSolutions";
import AutomationFramework from "./AutomationFramework";
import CRMDashboard from "./CRMDashboard";
import EnterpriseWorkflows from "./EnterpriseWorkflows";
import SalesforceIntegrations from "./SalesforceIntegrations";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function SalesforcePage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <CRMDashboard />
      <SalesforceSolutions />
      <AutomationFramework />
      <EnterpriseWorkflows />
      <SalesforceIntegrations />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}