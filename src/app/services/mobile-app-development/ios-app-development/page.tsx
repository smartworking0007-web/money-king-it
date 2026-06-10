import Hero from "./Hero";
import PerformanceDashboard from "./PerformanceDashboard";
import IOSSolutions from "./IOSSolutions";
import AppArchitecture from "./AppArchitecture";
import EnterpriseFeatures from "./EnterpriseFeatures";
import TechnologyStack from "./TechnologyStack";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function IOSDevelopmentPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <PerformanceDashboard />
      <IOSSolutions />
      <AppArchitecture />
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