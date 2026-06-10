 import Hero from "./Hero";
import FlutterSolutions from "./FlutterSolutions";
import CrossPlatformArchitecture from "./CrossPlatformArchitecture";
import PerformanceDashboard from "./PerformanceDashboard";
import EnterpriseFeatures from "./EnterpriseFeatures";
import TechnologyStack from "./TechnologyStack";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function FlutterAppsPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <PerformanceDashboard />
      <FlutterSolutions />
      <CrossPlatformArchitecture />
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