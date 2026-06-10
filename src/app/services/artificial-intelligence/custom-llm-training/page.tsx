import Hero from "./Hero";
import LLMSolutions from "./LLMSolutions";
import FineTuningPipeline from "./FineTuningPipeline";
import ModelDashboard from "./ModelDashboard";
import TrainingInfrastructure from "./TrainingInfrastructure";
import AIOptimization from "./AIOptimization";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function LLMPipelinePage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <ModelDashboard />
      <LLMSolutions />
      <FineTuningPipeline />
      <TrainingInfrastructure />
      <AIOptimization />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}