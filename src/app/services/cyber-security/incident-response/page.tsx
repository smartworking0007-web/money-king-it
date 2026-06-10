import Hero from "./Hero";
import IncidentResponseServices from "./IncidentResponseServices";
import ThreatContainmentFramework from "./ThreatContainmentFramework";
import SecurityDashboard from "./SecurityDashboard";
import ResponseAutomation from "./ResponseAutomation";
import ThreatAnalysis from "./ThreatAnalysis";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function IncidentResponsePage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <SecurityDashboard />
      <IncidentResponseServices />
      <ThreatContainmentFramework />
      <ResponseAutomation />
      <ThreatAnalysis />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}