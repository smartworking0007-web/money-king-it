import Hero from "./Hero";
import AnalyticsSolutions from "./AnalyticsSolutions";
import StreamingArchitecture from "./StreamingArchitecture";
import RealtimeDashboard from "./RealtimeDashboard";
import AIInsights from "./AIInsights";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function BigDataAnalyticsPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <RealtimeDashboard />
      <AnalyticsSolutions />
      <StreamingArchitecture />
      <AIInsights />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}