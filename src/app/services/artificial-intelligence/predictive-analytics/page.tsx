import Hero from "./Hero";
import AnalyticsSolutions from "./AnalyticsSolutions";
import ForecastingFramework from "./ForecastingFramework";
import IntelligenceDashboard from "./IntelligenceDashboard";
import AIModelling from "./AIModelling";
import BusinessPredictions from "./BusinessPredictions";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function PredictiveAnalyticsPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <IntelligenceDashboard />
      <AnalyticsSolutions />
      <ForecastingFramework />
      <AIModelling />
      <BusinessPredictions />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}