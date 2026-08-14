"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const topRowSteps = [
  { id: "01.", title: "Analysis" },
  { id: "02.", title: "Architecture" },
  { id: "03.", title: "Configuration" },
  { id: "04.", title: "Automation" },
  { id: "05.", title: "Integration" },
  { id: "06.", title: "Validation" },
];

const bottomRowSteps = [
  { id: "07.", title: "Deployment" },
  { id: "08.", title: "Optimization" },
];

export default function AutomationFramework() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex items-center justify-center bg-black min-h-87.5">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/salesforce/2.png" // Apni background image ka path yahan dein
          alt="Automation Framework Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle dark overlay so white pills and text stand out clearly */}
        <div className="absolute inset-0 bg-black/75 sm:bg-black/60 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading */}
        <Text
          variant="h3"
          className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8 sm:mb-12 drop-shadow-md"
        >
          Automation Framework
        </Text>

        {/* Pill Buttons Container */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full max-w-6xl">
          {/* Top Row: Steps 01 to 06 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 w-full">
            {topRowSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white/95 hover:bg-white text-black font-bold rounded-full px-4 py-2 sm:px-5 sm:py-2.5 flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group border border-zinc-200"
              >
                {/* Green Numbering Badge */}
                <span className="text-[#00D094] font-extrabold text-xs sm:text-sm font-mono tracking-wide">
                  {step.id}
                </span>

                {/* Title */}
                <span className="text-[#0f172a] text-xs sm:text-sm font-extrabold tracking-wide group-hover:text-black">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row: Steps 07 & 08 (Centered) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full mt-1 sm:mt-2">
            {bottomRowSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white/95 hover:bg-white text-black font-bold rounded-full px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group border border-zinc-200"
              >
                {/* Green Numbering Badge */}
                <span className="text-[#00D094] font-extrabold text-xs sm:text-sm font-mono tracking-wide">
                  {step.id}
                </span>

                {/* Title */}
                <span className="text-[#0f172a] text-xs sm:text-sm font-extrabold tracking-wide group-hover:text-black">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
