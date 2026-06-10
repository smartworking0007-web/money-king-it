import Hero from "./Hero";
import AutoScalingSolutions from "./AutoScalingSolutions";
import ScalingArchitecture from "./ScalingArchitecture";
import InfrastructureDashboard from "./InfrastructureDashboard";
import ResourceOptimization from "./ResourceOptimization";
import CloudMonitoring from "./CloudMonitoring";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function CloudScalingPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <InfrastructureDashboard />
      <AutoScalingSolutions />
      <ScalingArchitecture />
      <ResourceOptimization />
      <CloudMonitoring />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}