import Hero from "./Hero";
import HRSolutions from "./HRSolutions";
import EmployeeLifecycle from "./EmployeeLifecycle";
import HRDashboard from "./HRDashboard";
import PayrollAutomation from "./PayrollAutomation";
import WorkforceAnalytics from "./WorkforceAnalytics";
import RecruitmentManagement from "./RecruitmentManagement";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function HRManagementPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <HRDashboard />
      <HRSolutions />
      <EmployeeLifecycle />
      <PayrollAutomation />
      <WorkforceAnalytics />
      <RecruitmentManagement />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}