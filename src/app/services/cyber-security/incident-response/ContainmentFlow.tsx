// File Name: ContainmentFlow.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const CONTAINMENT_STEPS = [
  {
    number: "01",
    title: "Detection",
    description:
      "Real-time identification of anomalies, alerts, and potential security breaches.",
  },
  {
    number: "02",
    title: "Classification",
    description:
      "Triage and categorization of threats based on severity and impact.",
  },
  {
    number: "03",
    title: "Investigation",
    description:
      "Deep-dive forensic analysis to trace the root cause and scope of compromise.",
  },
  {
    number: "04",
    title: "Isolation",
    description:
      "Quarantining affected endpoints and networks to stop lateral movement.",
  },
  {
    number: "05",
    title: "Recovery",
    description:
      "Restoring systems safely and hardening infrastructure against re-infection.",
  },
  {
    number: "06",
    title: "Continuous Monitoring",
    description:
      "Ongoing surveillance and proactive auditing to maintain secure operations.",
  },
];

export default function ContainmentFlow() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/testing/3.png"
          alt="containment flow background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Dark Overlay Gradient for text and box clarity */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/85 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          >
            Containment Flow
          </Text>

          <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed max-w-md mx-auto">
            A structured, multi-step lifecycle designed to detect, isolate, and
            neutralize cyber threats swiftly.
          </p>
        </div>

        {/* 2x3 Grid layout with small compact boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {CONTAINMENT_STEPS.map((step, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/10 shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Step Number */}
                <span className="text-[11px] font-bold text-[#00D094] tracking-wider mb-1 block">
                  {step.number}
                </span>

                {/* Card Title (H3) */}
                <Text
                  variant="h4"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1"
                >
                  {step.title}
                </Text>

                {/* Subtext / Short Description */}
                <Text
                  variant="body"
                  className="text-zinc-300 text-[11px] sm:text-xs font-normal leading-relaxed"
                >
                  {step.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
