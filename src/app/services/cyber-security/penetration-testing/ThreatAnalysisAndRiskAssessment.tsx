// File Name: ThreatAnalysisAndRiskAssessment.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const THREAT_STEPS = [
  {
    number: "01",
    title: "Surface Analysis",
    description: "External & Internal Attack Surface Mapping",
  },
  {
    number: "02",
    title: "Weakness ID",
    description: "Automated Flaw Detection & Vulnerability Categorization",
  },
  {
    number: "03",
    title: "Configuration",
    description: "Security Hardening & Misconfiguration Detection",
  },
  {
    number: "04",
    title: "Auth Review",
    description: "Authentication Mechanism & Token Security Inspection",
  },
  {
    number: "05",
    title: "Access Control",
    description: "Privilege Escalation & RBAC Policy Audit",
  },
  {
    number: "06",
    title: "Risk Priority",
    description: "CVSS Scoring & Threat Severity Remediation Roadmap",
  },
];

export default function ThreatAnalysisAndRiskAssessment() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/testing/3.png"
          alt="threat analysis background"
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
            Threat Analysis & Risk Assessment
          </Text>

          <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed max-w-md mx-auto">
            Systematic mapping, flaw identification, and severity scoring to fortify your digital architecture.
          </p>
        </div>

        {/* 2x3 Grid layout with small compact boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {THREAT_STEPS.map((step, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/10 shadow-md"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}