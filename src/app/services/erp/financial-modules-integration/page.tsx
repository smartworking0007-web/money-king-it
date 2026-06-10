import Hero from "./Hero";
import FinanceSolutions from "./FinanceSolutions";
import AccountingWorkflow from "./AccountingWorkflow";
import FinanceDashboard from "./FinanceDashboard";
import LedgerAutomation from "./LedgerAutomation";
import ComplianceManagement from "./ComplianceManagement";
import FinancialAnalytics from "./FinancialAnalytics";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function FinancePage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <FinanceDashboard />
      <FinanceSolutions />
      <AccountingWorkflow />
      <LedgerAutomation />
      <ComplianceManagement />
      <FinancialAnalytics />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}