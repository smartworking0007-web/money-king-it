import Hero from "./Hero";
import MigrationSolutions from "./MigrationSolutions";
import MigrationFramework from "./MigrationFramework";
import MigrationDashboard from "./MigrationDashboard";
import CloudMigration from "./CloudMigration";
import IndustrySolutions from "./IndustrySolutions";
import SuccessMetrics from "./SuccessMetrics";
import ClientSuccessStories from "./ClientSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function DatabaseMigrationPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <MigrationDashboard />
      <MigrationSolutions />
      <MigrationFramework />
      <CloudMigration />
      <IndustrySolutions />
      <SuccessMetrics />
      <ClientSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}