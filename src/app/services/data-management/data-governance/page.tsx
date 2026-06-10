import Hero from "./Hero";
import GovernanceSolutions from "./GovernanceSolutions";
import ComplianceFramework from "./ComplianceFramework";
import SecurityDashboard from "./SecurityDashboard";
import DataProtection from "./DataProtection";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Data Governance & Security | Money King Software",
  description: "Strict data governance, compliance management, and structural security frameworks for enterprise data.",
};

export default function DataGovernancePage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <SecurityDashboard />
      <GovernanceSolutions />
      <ComplianceFramework />
      <DataProtection />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}