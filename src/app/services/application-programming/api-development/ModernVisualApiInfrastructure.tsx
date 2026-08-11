// File Name: ModernVisualApiInfrastructure.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Globe, Database, Cpu } from "lucide-react";

const INFRASTRUCTURE_ITEMS = [
  {
    title: "Edge Protocol Layer",
    description:
      "Globally distributed routing network resolving tokens parameters in sub-15ms.",
    codeBadge: "GET /v4/telemetry HTTP/2",
    icon: Globe,
  },
  {
    title: "Data Mutator Engine",
    description:
      "Asynchronous event listeners scaling complex state records across shards safely.",
    codeBadge: "cluster_mutation_handler.rs",
    icon: Cpu,
  },
  {
    title: "Isolated Cache Core",
    description:
      "Distributed memory caching matrix isolating heavy programmatic database read cycles.",
    codeBadge: "redis://shards-001.aws.internal",
    icon: Database,
  },
];

export default function ModernVisualApiInfrastructure() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/10">
      {/* Background Subtle Gradient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,208,148,0.03)_0,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
          >
            Modern Visual API Infrastructure
          </Text>
          <div className="w-12 h-1 bg-[#00D094] mx-auto rounded-full mb-6"></div>
          <Text
            variant="h4"
            className="text-gray-300! text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We reject standard single-point topologies. Money King IT constructs
            isolated sandboxed transaction pipelines optimized specifically to
            eliminate execution latency.
          </Text>
        </div>

        {/* Responsive Grid Layout (1 col on mobile, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {INFRASTRUCTURE_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#121212]/95 backdrop-blur-sm border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Icon Container */}
                  <div className="mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300">
                    <IconComponent
                      className="h-6 w-6 sm:h-7 sm:w-7 text-[#00D094]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Card Title */}
                  <Text
                    variant="h3"
                    className="text-white! text-lg sm:text-xl font-bold tracking-tight mb-3 group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>

                  {/* Description */}
                  <Text
                    variant="body"
                    className="text-gray-400! text-xs sm:text-sm leading-relaxed mb-6"
                  >
                    {item.description}
                  </Text>
                </div>

                {/* Code Badge */}
                <div className="pt-4 border-t border-white/5">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-[#00D094] font-mono text-[11px] sm:text-xs tracking-tight overflow-x-auto max-w-full">
                    <span className="truncate">{item.codeBadge}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
