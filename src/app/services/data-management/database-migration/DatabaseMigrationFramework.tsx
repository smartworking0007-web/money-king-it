"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const topRowSteps = [
  { id: "01.", title: "DISCOVERY" },
  { id: "02.", title: "PLANNING" },
  { id: "03.", title: "DESIGN" },
  { id: "04.", title: "REPLICATION" },
  { id: "05.", title: "VALIDATION" },
  { id: "06.", title: "CUTOVER" },
];

const bottomRowSteps = [
  { id: "07.", title: "MONITORING" },
  { id: "08.", title: "OPTIMIZATION" },
];

export default function DatabaseMigrationFramework() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex items-center justify-center bg-black min-h-87.5">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/migration/2.png" 
          alt="Migration Framework Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle dark overlay for high contrast readability */}
        <div className="absolute inset-0 bg-black/75 sm:bg-black/60 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading */}
        <Text
          variant="h3"
          className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8 sm:mb-12 drop-shadow-md"
        >
          Migration Framework
        </Text>

        {/* Pill Buttons Container (Staggered Layout like screenshot) */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full max-w-5xl">
          {/* Top Row: Steps 01 to 06 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
            {topRowSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white/95 hover:bg-white text-black font-bold rounded-full px-5 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group border border-zinc-200"
              >
                {/* Green Numbering Badge */}
                <span className="text-[#00D094] font-extrabold text-xs sm:text-sm font-mono tracking-wide">
                  {step.id}
                </span>

                {/* Title */}
                <span className="text-[#0f172a] text-xs sm:text-sm font-extrabold tracking-wider uppercase group-hover:text-black">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row: Steps 07 to 08 (Centered) */}
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
                <span className="text-[#0f172a] text-xs sm:text-sm font-extrabold tracking-wider uppercase group-hover:text-black">
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
