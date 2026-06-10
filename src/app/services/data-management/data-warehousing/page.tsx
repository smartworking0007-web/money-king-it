import Hero from "./Hero";
import WarehousingSolutions from "./WarehousingSolutions";
import DataArchitecture from "./DataArchitecture";
import AnalyticsDashboard from "./AnalyticsDashboard";
import DataPipelines from "./DataPipelines";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Data Warehousing Architecture | Money King Software",
  description: "High-performance, scalable data warehouse architectures for modern enterprise intelligence.",
};

export default function DataWarehousingPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <AnalyticsDashboard />
      <WarehousingSolutions />
      <DataArchitecture />
      <DataPipelines />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}