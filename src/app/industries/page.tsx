import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Text";
import CampusesPage from "./CampusesPage";
import InternshipProgramsSection from "./InternshipProgramsSection";
import HiringPipelineSection from "./HiringPipelineSection";
import UniversityPartnershipsSection from "./UniversityPartnershipsSection";
import LearningAcademySection from "./LearningAcademySection";
import IndustryProjectsSection from "./IndustryProjectsSection.tsx";
import StatsCircularSection from "./StatsCircularSection";
import StudentTestimonialsSection from "./StudentTestimonialsSection";
import FaqSection from "./FaqSection";

export default function Page() {
  return (
    <main className="bg-black min-h-screen pt-10 sm:pt-16 pb-0 px-4 sm:px-6 lg:px-12 overflow-hidden text-white flex flex-col">
      <div className="mx-auto max-w-7xl w-full mb-12 sm:mb-16">
        {/* Header / Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <Text
              variant="h3"
              className="text-white! text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Campus Programs & Industry Partnerships
            </Text>

            <Text
              variant="h4"
              className="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300!"
            >
              Bridging the gap between academic excellence and industry
              innovation through internships, recruitment and university
              collaborations.
            </Text>

            <div className="pt-2 flex justify-center lg:justify-start">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto py-3.5 px-6 text-base justify-center"
                >
                  Explore Partnerships →
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image Container - Fixed mobile view cutting/cropping */}
          <div className="relative w-full h-70 xs:h-[320px] sm:h-96 md:h-112.5 lg:h-120 rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-2xl  order-1 lg:order-2">
            <Image
              src="/industries/1.png"
              alt="girl with frame"
              fill
              priority
              className="object-contain object-center w-full h-full p-2 sm:p-4"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
            />
          </div>
        </div>
      </div>

      <CampusesPage />
      <InternshipProgramsSection />
      <HiringPipelineSection />
      <UniversityPartnershipsSection />
      <LearningAcademySection />
      <IndustryProjectsSection />
      <StatsCircularSection />
      <StudentTestimonialsSection />
      <FaqSection />
    </main>
  );
}