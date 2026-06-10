import Hero from "./Hero";
import NLPSolutions from "./NLPSolutions";
import ClassificationFramework from "./ClassificationFramework";
import LanguageDashboard from "./LanguageDashboard";
import TextProcessingEngine from "./TextProcessingEngine";
import AIModels from "./AIModels";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function NLPPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <LanguageDashboard />
      <NLPSolutions />
      <ClassificationFramework />
      <TextProcessingEngine />
      <AIModels />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}