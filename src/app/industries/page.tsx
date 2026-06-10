import Hero from "./Hero";
import CampusRecruitment from "./CampusRecruitment";
import InternshipPrograms from "./InternshipPrograms";
import GraduateHiring from "./GraduateHiring";
import UniversityPartnerships from "./UniversityPartnerships";
import LearningAcademy from "./LearningAcademy";
import IndustryProjects from "./IndustryProjects";
import SuccessMetrics from "./SuccessMetrics";
import StudentSuccessStories from "./StudentSuccessStories";
import PremiumFAQ from "./PremiumFAQ";
import LuxuryCTA from "./LuxuryCTA";

export default function CampusesPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen pb-20">
      <Hero />
      <CampusRecruitment />
      <InternshipPrograms />
      <GraduateHiring />
      <UniversityPartnerships />
      <LearningAcademy />
      <IndustryProjects />
      <SuccessMetrics />
      <StudentSuccessStories />
      <PremiumFAQ />
      <LuxuryCTA />
    </main>
  );
}