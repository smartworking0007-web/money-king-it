// Suggested File Name: TestingTaxonomyMatrix.tsx

import React from "react";
import {
  Code,
  Layers,
  Server,
  CheckCircle,
  Activity,
  Zap,
} from "lucide-react";
import Text from "@/components/ui/Text";

const WORKFLOW_STEPS = [
  {
    icon: Code,
    title: "Unit Testing",
    desc: "Isolating granular code functions to increase processing logic fidelity.",
  },
  {
    icon: Layers,
    title: "Integration Testing",
    desc: "Validating specific subsystem interactions across microservice connections.",
  },
  {
    icon: Server,
    title: "System Testing",
    desc: "Verifying complete software build against functional parameters.",
  },
  {
    icon: CheckCircle,
    title: "Acceptance Testing",
    desc: "Matching technical deliverables accurately against baseline product goals.",
  },
  {
    icon: Activity,
    title: "Smoke Testing",
    desc: "Rapid spot diagnostics checking core independence and safe validate.",
  },
  {
    icon: Zap,
    title: "Sanity Testing",
    desc: "Targeted component sweeps validating specific update patches directly.",
  },
];

export default function TestingTaxonomyMatrix() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 sm:py-20 lg:py-16 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Text variant="label" className="mb-4 inline-block text-emerald-400">
            EXECUTION PIPELINE
          </Text>
          <Text
            variant="h2"
            className="text-white! tracking-tight text-2xl sm:text-3xl md:text-4xl"
          >
            Testing Taxonomy Matrix
          </Text>
        </div>

        {/* Timeline Grid Container */}
        <div className="relative">
          {/* Steps Grid: Responsive layout for 6 items matching design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {WORKFLOW_STEPS.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Card Box */}
                <div className="w-full flex flex-col rounded-[24px] border border-white/10 bg-[#121212] p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:bg-[#161616] shadow-xl h-full justify-between">
                  <div>
                    {/* Step Icon */}
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <item.icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>

                    <Text
                      variant="h5"
                      className="text-white! mb-3 tracking-tight leading-snug text-base sm:text-lg"
                    >
                      {item.title}
                    </Text>
                  </div>

                  <Text
                    variant="body"
                    className="text-gray-400! text-[14px] leading-[1.7]"
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