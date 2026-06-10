import Hero from "./Hero";
import ReactNativeSolutions from "./ReactNativeSolutions";
import ModuleArchitecture from "./ModuleArchitecture";
import PerformanceDashboard from "./PerformanceDashboard";
import EnterpriseFeatures from "./EnterpriseFeatures";
import TechnologyStack from "./TechnologyStack";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function ReactNativePage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <PerformanceDashboard />
      <ReactNativeSolutions />
      <ModuleArchitecture />
      <EnterpriseFeatures />
      <TechnologyStack />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}