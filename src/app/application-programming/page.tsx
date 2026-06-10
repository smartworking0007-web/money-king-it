import Hero from "./Hero";
import DevelopmentCapabilities from "./DevelopmentCapabilities";
import TechnologyStack from "./TechnologyStack";
import ArchitectureFramework from "./ArchitectureFramework";
import DevelopmentProcess from "./DevelopmentProcess";
import EnterpriseSolutions from "./EnterpriseSolutions";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function ApplicationProgrammingPage() {
  return (
    <main className="bg-[#E5EBEB]">
      <Hero />
      <DevelopmentCapabilities />
      <TechnologyStack />
      <ArchitectureFramework />
      <DevelopmentProcess />
      <EnterpriseSolutions />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}