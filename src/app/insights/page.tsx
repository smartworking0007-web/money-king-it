import Hero from "./Hero";
import FeaturedInsights from "./FeaturedInsights";
import LatestArticles from "./LatestArticles";
import TechnologyTrends from "./TechnologyTrends";
import AIInsights from "./AIInsights";
import IndustryReports from "./IndustryReports";
import CaseStudies from "./CaseStudies";
import KnowledgeCenter from "./KnowledgeCenter";
import SuccessMetrics from "./SuccessMetrics";
import Newsletter from "./Newsletter";
import PremiumFAQ from "./PremiumFAQ";
import CTA from "./CTA";

export default function InsightsPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <FeaturedInsights />
      <LatestArticles />
      <TechnologyTrends />
      <AIInsights />
      <IndustryReports />
      <CaseStudies />
      <KnowledgeCenter />
      <SuccessMetrics />
      <Newsletter />
      <PremiumFAQ />
      <CTA />
    </main>
  );
}