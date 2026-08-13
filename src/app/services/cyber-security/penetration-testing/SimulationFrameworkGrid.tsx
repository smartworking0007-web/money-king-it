// File Name: SimulationFrameworkGrid.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const SIMULATION_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Reconnaissance and initial scoping of target systems and infrastructure.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Structuring attack vectors, rules of engagement, and simulation goals.",
  },
  {
    number: "03",
    title: "Identification",
    description:
      "Pinpointing specific threat surfaces, access points, and control flaws.",
  },
  {
    number: "04",
    title: "Validation",
    description:
      "Executing controlled exploits to confirm risk and impact severity.",
  },
  {
    number: "05",
    title: "Analysis",
    description:
      "Deep-dive evaluation into security posture and defensive response capabilities.",
  },
  {
    number: "06",
    title: "Remediation",
    description:
      "Providing actionable patches, mitigation steps, and resilience hardening.",
  },
];

export default function SimulationFrameworkGrid() {
  return (
    <section className="relative w-full  text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container with Guaranteed Visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/testing/2.png"
          alt="simulation framework background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        {/* Dark Overlay Gradient so text and boxes remain clearly readable */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/90 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
          >
            Simulation Framework
          </Text>
        </div>

        {/* 2x3 Grid layout perfectly responsive for mobile, tablet, and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {SIMULATION_STEPS.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center p-5 sm:p-6 md:p-7 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-lg hover:-translate-y-1"
            >
              {/* Step Number */}
              <span className="text-xs font-mono font-bold text-[#00D094] mb-1.5 sm:mb-2 tracking-wider">
                {step.number}
              </span>

              {/* Step Title */}
              <Text
                variant="h3"
                className="text-white! text-base sm:text-lg md:text-xl font-bold tracking-tight mb-1.5 sm:mb-2 group-hover:text-[#00D094] transition-colors duration-300"
              >
                {step.title}
              </Text>

              {/* Description */}
              <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                {step.description}
              </p>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}