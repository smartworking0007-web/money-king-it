// File Name: ContainmentFlowGrid.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const CONTAINMENT_STEPS = [
  {
    number: "01",
    title: "Detection",
    description:
      "Identify and flag anomalies or potential security breaches instantly.",
  },
  {
    number: "02",
    title: "Classification",
    description:
      "Categorize the threat type, severity level, and affected systems.",
  },
  {
    number: "03",
    title: "Investigation",
    description: "Analyze root causes and trace the attack vector path.",
  },
  {
    number: "04",
    title: "Isolation",
    description: "Quarantine compromised hosts to stop lateral movement.",
  },
  {
    number: "05",
    title: "Recovery",
    description:
      "Restore services securely and patch vulnerability entry points.",
  },
  {
    number: "06",
    title: "Continuous Monitoring",
    description: "Maintain live surveillance and guard against recurrence.",
  },
];

export default function ContainmentFlowGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container with fixed explicit styling to ensure visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/incident/2.png"
          alt="containment flow background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Balanced Dark Gradient Overlay so image shows through clearly */}
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/80 to-black/95 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          >
            Containment Flow
          </Text>
        </div>

        {/* 2x3 Grid layout with small compact boxes matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {CONTAINMENT_STEPS.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center p-5 sm:p-6 rounded-2xl bg-[#121212]/85 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-xl hover:-translate-y-1"
            >
              {/* Step Number */}
              <span className="text-xs font-mono font-bold text-[#00D094] mb-1.5 sm:mb-2 tracking-wider">
                {step.number}
              </span>

              {/* Step Title (H3) */}
              <Text
                variant="h3"
                className="text-white! text-base sm:text-lg font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
              >
                {step.title}
              </Text>

              {/* Description */}
              <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed">
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
