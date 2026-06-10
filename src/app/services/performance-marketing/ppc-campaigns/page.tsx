import Hero from "./Hero";
import AnalyticsDashboard from "./AnalyticsDashboard";
import PPCSolutions from "./PPCSolutions";
import ConversionFramework from "./ConversionFramework";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function PredictivePPCPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      <Hero />
      <AnalyticsDashboard />
      <PPCSolutions />
      <ConversionFramework />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}