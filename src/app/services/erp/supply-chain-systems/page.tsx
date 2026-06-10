import Hero from "./Hero";
import SupplyChainSolutions from "./SupplyChainSolutions";
import ProcurementManagement from "./ProcurementManagement";
import InventoryControl from "./InventoryControl";
import LogisticsDashboard from "./LogisticsDashboard";
import VendorManagement from "./VendorManagement";
import AutomationWorkflow from "./AutomationWorkflow";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function SupplyChainPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <LogisticsDashboard />
      <SupplyChainSolutions />
      <ProcurementManagement />
      <InventoryControl />
      <VendorManagement />
      <AutomationWorkflow />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}