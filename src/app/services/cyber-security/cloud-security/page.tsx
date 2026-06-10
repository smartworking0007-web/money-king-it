import Hero from "./Hero";
import CloudSecurityServices from "./CloudSecurityServices";
import ComplianceFramework from "./ComplianceFramework";
import SecurityDashboard from "./SecurityDashboard";
import GovernanceControls from "./GovernanceControls";
import ThreatAnalysis from "./ThreatAnalysis";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function CloudSecurityPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <SecurityDashboard />
      <CloudSecurityServices />
      <ComplianceFramework />
      <GovernanceControls />
      <ThreatAnalysis />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}