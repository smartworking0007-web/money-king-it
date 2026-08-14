// File Name: ArchitectureTimeline.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const timelineSteps = [
  { id: "01", title: "Collection" },
  { id: "02", title: "Integration" },
  { id: "03", title: "Transformation" },
  { id: "04", title: "Warehousing" },
  { id: "05", title: "Modeling" },
  { id: "06", title: "Processing" },
  { id: "07", title: "Visualization" },
  { id: "08", title: "BI" },
];

export default function ArchitectureTimeline() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex items-center justify-center min-h-75">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/datawarehousing/2.png" // Aapki background image ka path
          alt="Architecture Timeline Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft light overlay so pills & heading match the light background in design */}
        <div className="absolute inset-0 bg-[#e5ecee]/90 sm:bg-[#e5ecee]/85 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading */}
        <Text
          variant="h3"
          className="text-[#0f172a]! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8 sm:mb-10 drop-shadow-sm"
        >
          Architecture Timeline
        </Text>

        {/* Timeline Pills Container */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl">
          {timelineSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white/95 backdrop-blur-sm border border-white/60 shadow-md hover:shadow-lg rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {/* Green Step Number */}
              <span className="text-[#00D094] font-bold text-xs sm:text-sm font-mono">
                {step.id}
              </span>

              {/* Step Title */}
              <span className="text-[#1e293b] font-semibold text-xs sm:text-sm tracking-wide">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
