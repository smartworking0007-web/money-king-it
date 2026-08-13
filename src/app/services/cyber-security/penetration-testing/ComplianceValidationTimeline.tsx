// File Name: ComplianceValidationTimeline.tsx

import React from "react";
import Text from "@/components/ui/Text";

const WORKFLOW_STEPS = [
  {
    title: "ISO 27001",
    desc: "Global Standard for Information Security Management Systems (ISMS)",
  },
  {
    title: "SOC 2",
    desc: "Trust Services Criteria for Security, Availability & Confidentiality",
  },
  {
    title: "PCI DSS",
    desc: "Secure Payment Card Processing & Data Security Standards",
  },
  {
    title: "HIPAA",
    desc: "Protected Health Information (PHI) Privacy & Security",
  },
  {
    title: "GDPR",
    desc: "European Union General Data Protection Regulation Rules",
  },
  {
    title: "NIST",
    desc: "Cybersecurity Framework for Risk Assessment & Mitigation",
  },
  {
    title: "CIS",
    desc: "Critical Security Controls and Benchmark Guidelines",
  },
  {
    title: "RBI",
    desc: "Regulatory Guidelines and Cyber Resilience Frameworks",
  },
];

export default function ComplianceValidationTimeline() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <Text
            variant="h2"
            className="text-white! tracking-tight text-xl sm:text-2xl md:text-3xl font-extrabold mb-3"
          >
            Compliance Validation
          </Text>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Dashed Line across steps for desktop */}
          <div className="hidden lg:block absolute top-5 left-[6%] right-[6%] h-0.5 border-t-2 border-dashed border-white/20 z-0" />

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {WORKFLOW_STEPS.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Node Indicator */}
                <div className="relative mb-4 hidden sm:flex items-center justify-center">
                  <div className="absolute h-6 w-6 rounded-full bg-[#00D094]/25 blur-sm group-hover:bg-[#00D094]/50 transition-all duration-300" />
                  <div className="relative h-4 w-4 rounded-full bg-[#0a0a0a] border-2 border-[#00D094] flex items-center justify-center shadow-md">
                    <div className="h-1 w-1 rounded-full bg-white" />
                  </div>
                </div>

                {/* Compact Card Box */}
                <div className="w-full flex flex-col rounded-xl border border-white/10 bg-[#121212] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00D094]/40 hover:bg-[#161616] shadow-md h-full justify-between">
                  <div>
                    <Text
                      variant="h5"
                      className="text-white! mb-1.5 tracking-tight leading-snug text-sm sm:text-base font-bold group-hover:text-[#00D094] transition-colors"
                    >
                      {item.title}
                    </Text>
                  </div>

                  <Text
                    variant="body"
                    className="text-zinc-400! text-[11px] sm:text-xs leading-relaxed"
                  >
                    {item.desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}