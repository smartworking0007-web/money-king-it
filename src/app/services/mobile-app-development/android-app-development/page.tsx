import Hero from "./Hero";
import AndroidSolutions from "./AndroidSolutions";
import SystemArchitecture from "./SystemArchitecture";
import PerformanceDashboard from "./PerformanceDashboard";
import EnterpriseFeatures from "./EnterpriseFeatures";
import TechnologyStack from "./TechnologyStack";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function AndroidDevelopmentPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <PerformanceDashboard />
      <AndroidSolutions />
      <SystemArchitecture />
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