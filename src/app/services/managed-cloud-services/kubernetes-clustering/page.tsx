import Hero from "./Hero";
import KubernetesSolutions from "./KubernetesSolutions";
import ClusterArchitecture from "./ClusterArchitecture";
import ServiceMeshFramework from "./ServiceMeshFramework";
import ContainerDashboard from "./ContainerDashboard";
import CloudNativeInfrastructure from "./CloudNativeInfrastructure";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function K8sPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <ContainerDashboard />
      <KubernetesSolutions />
      <ClusterArchitecture />
      <ServiceMeshFramework />
      <CloudNativeInfrastructure />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}