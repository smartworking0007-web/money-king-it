import AIIntelligence from "./AIIntelligence";
import CaseStudies from "./CaseStudies";
import CoreValues from "./CoreValues";
import FAQSection from "./FAQSection";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import IndustryReports from "./IndustryReports";
import KnowledgeCenter from "./KnowledgeCenter";
import LatestArticles from "./LatestArticles";
import StatsSection from "./StatsSection";


export default function InsightsPage() {
  return (
    <main className="min-h-screen pb-20">
   <HeroSection/>
   <FeaturesSection />
   <LatestArticles />
   <CoreValues />
   <AIIntelligence />
   <IndustryReports />
   <CaseStudies />
   <KnowledgeCenter />
   <StatsSection />
   <FAQSection />
   
    </main>
  );
}