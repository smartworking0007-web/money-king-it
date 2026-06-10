import Hero from "./Hero";
import AnalyticsDashboard from "./AnalyticsDashboard";
import SocialMediaSolutions from "./SocialMediaSolutions";
import PredictiveFramework from "./PredictiveFramework";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function PredictiveSocialAdsPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <AnalyticsDashboard />
      <SocialMediaSolutions />
      <PredictiveFramework />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}