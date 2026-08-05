import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import KeepProjectOnBrandSection from "./KeepProjectOnBrandSection";
import CustomSoftwareHeroWithCards from "./CustomSoftwareHeroWithCards";
import InternshipProgramsSection from "./InternshipProgramsSection";
import DomainExpertiseAndLifecycle from "./DomainExpertiseAndLifecycle";
import CustomSoftwareWorkflow from "./CustomSoftwareWorkflow";
import MeasurableOperationalImpact from "./MeasurableOperationalImpact";
import FeatureOverviewSection from "./FeatureOverviewSection";
import CustomSoftwareFAQ from "./CustomSoftwareFAQ";

export default function FundraisingHero() {
  return (
    <div className="w-full bg-black text-white overflow-hidden m-0 p-0">
      <section className="relative w-full bg-black text-white overflow-hidden py-12 sm:py-16 md:py-24 px-0">
        <div className="w-full px-4 sm:px-6 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            {/* Left Text Content */}
            <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1 z-10">
              <h3 className="font-mono uppercase tracking-[0.2em] text-[#00D094] text-xs sm:text-sm font-bold cursor-pointer">
                Custom Software Development
              </h3>

              <h1 className="text-zinc-100 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-snug tracking-tight font-sans">
                We build scalable, secure, and business-focused software solutions tailored to your unique requirements.
              </h1>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto py-3.5 px-8 text-base justify-center bg-[#8b00ff] hover:bg-[#7500db] text-white rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    Book Consultation →
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto text-white font-medium hover:text-[#00D094] transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer">
                  Start Project 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative w-full h-75 sm:h-95 md:h-112.5 lg:h-125 flex items-center justify-center order-1 lg:order-2">
              <Image
                src="/custom/1.png" 
                alt="Custom Software Development Solutions"
                fill
                priority
                className="object-contain object-center w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      <KeepProjectOnBrandSection />
      <CustomSoftwareHeroWithCards />
      <InternshipProgramsSection />
      <DomainExpertiseAndLifecycle />
      <CustomSoftwareWorkflow />
      <MeasurableOperationalImpact />
      <FeatureOverviewSection />
      <CustomSoftwareFAQ />
    </div>
  );
}