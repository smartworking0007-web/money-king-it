// File Name: AutomatedIncidentResponseOrchestration.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const INCIDENT_RESPONSE_STEPS = [
  {
    number: "01",
    title: "Playbooks",
    description: "Pre-Configured Incident Response Workflows & SOAR Actions",
  },
  {
    number: "02",
    title: "Threat Engine",
    description: "Real-Time Heuristic Threat Detection & Correlation Rules",
  },
  {
    number: "03",
    title: "Automation",
    description: "Hands-Free Event Remediation & Policy Execution",
  },
  {
    number: "04",
    title: "Endpoint Isolation",
    description: "Automated Network Containment of Compromised Hosts",
  },
  {
    number: "05",
    title: "Prioritization",
    description: "Dynamic Alert Triage & Risk-Based Scoring Engine",
  },
  {
    number: "06",
    title: "AI Analysis",
    description:
      "Machine Learning Incident Pattern Recognition & Root Cause Analysis",
  },
];

export default function AutomatedIncidentResponseOrchestration() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/incident/2.png"
          alt="automated incident response background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Dark Overlay Gradient for text and box clarity */}
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/80 to-black/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          >
            Automated Incident Response & Orchestration
          </Text>
        </div>

        {/* 2x3 Grid layout with compact boxes matching reference style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {INCIDENT_RESPONSE_STEPS.map((step, index) => (
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
