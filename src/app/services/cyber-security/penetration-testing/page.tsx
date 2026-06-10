import Hero from "./Hero";
import PenTestingServices from "./PenTestingServices";
import AttackSimulationFramework from "./AttackSimulationFramework";
import SecurityDashboard from "./SecurityDashboard";
import ComplianceSolutions from "./ComplianceSolutions";
import ThreatAnalysis from "./ThreatAnalysis";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function PenTestingPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <SecurityDashboard />
      <PenTestingServices />
      <AttackSimulationFramework />
      <ThreatAnalysis />
      <ComplianceSolutions />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}