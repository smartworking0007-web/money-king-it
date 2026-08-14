"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const pipelineSteps = [
  { id: "01", title: "Collection" },
  { id: "02", title: "Streaming" },
  { id: "03", title: "Processing" },
  { id: "04", title: "Transformation" },
  { id: "05", title: "AI Insights" },
  { id: "06", title: "Decision" },
];

export default function PipelineArchitecture() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex items-center justify-center bg-black min-h-100">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/big/2.jpg"
          alt="Pipeline Architecture Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Responsive dark overlay for high contrast on all screens */}
        <div className="absolute inset-0 bg-black/70 sm:bg-black/50 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading */}
        <Text
          variant="h3"
          className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 sm:mb-12 drop-shadow-md"
        >
          Pipeline Architecture
        </Text>

        {/* 3x2 Grid Cards Container (Mobile Optimized) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 w-full">
          {pipelineSteps.map((step) => (
            <div
              key={step.id}
              className="bg-black/85 sm:bg-black/90 backdrop-blur-md border border-zinc-700/80 hover:border-[#00D094]/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between items-start h-auto sm:h-28 min-h-20 text-left shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
            >
              {/* Green Step Number */}
              <span className="text-[#00D094] font-bold text-xs font-mono mb-1 tracking-wider">
                {step.id}
              </span>

              {/* Title (High contrast for mobile readability) */}
              <h4 className="text-white font-bold text-base sm:text-lg group-hover:text-[#00D094] transition-colors leading-snug">
                {step.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
