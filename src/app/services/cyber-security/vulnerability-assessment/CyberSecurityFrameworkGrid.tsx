// File Name: CyberSecurityFrameworkGrid.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const FRAMEWORK_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Identify and catalog all assets, entry points, and network perimeters.",
  },
  {
    number: "02",
    title: "Scanning",
    description:
      "Automated vulnerability detection and continuous threat probing.",
  },
  {
    number: "03",
    title: "Analysis",
    description:
      "Deep security audits, code reviews, and risk intelligence evaluation.",
  },
  {
    number: "04",
    title: "Validation",
    description:
      "Penetration testing and exploit confirmation by security experts.",
  },
  {
    number: "05",
    title: "Remediation",
    description:
      "Actionable patch recommendations and defense hardening strategies.",
  },
  {
    number: "06",
    title: "Monitoring",
    description:
      "Real-time surveillance, logging, and incident response tracking.",
  },
];

export default function CyberSecurityFrameworkGrid() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container with optimized mobile scaling */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vulnerability/2.png"
          alt="cyber security framework"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/90 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
          >
            Framework
          </Text>
        </div>

        {/* 2x3 Grid layout optimized for mobile screens (stacked single column on extra small screens, 2-col on sm, 3-col on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {FRAMEWORK_STEPS.map((step, index) => (
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
