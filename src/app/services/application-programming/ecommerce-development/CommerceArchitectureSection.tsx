// File Name: CommerceArchitectureSection.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Layers, ShieldCheck, Zap, Smartphone, Search, Target } from "lucide-react";

const ARCHITECTURE_ITEMS = [
  {
    title: "Scalable Architecture",
    description: "Sustain structural volume transitions without database load constraints.",
    icon: Layers,
  },
  {
    title: "Secure Payments",
    description: "Isolating end-to-end token handshakes under rigid modern protocols.",
    icon: ShieldCheck,
  },
  {
    title: "High Performance",
    description: "Compile edge-rendered payloads optimized to deliver sub-second conversion events.",
    icon: Zap,
  },
  {
    title: "Mobile Optimized",
    description: "Engineered entirely using responsive priority configurations across devices.",
    icon: Smartphone,
  },
  {
    title: "SEO Friendly",
    description: "Structured semantic schemas built directly to clean Google search indexing loops.",
    icon: Search,
  },
  {
    title: "Conversion Focused",
    description: "Streamlining friction points to turn operational traffic spikes into product data results.",
    icon: Target,
  },
];

export default function CommerceArchitectureSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Text
            variant="h3"
            className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Commerce Architecture Logic
          </Text>
          <Text
            variant="body"
            className="text-gray-300! text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Skky Loom Digital Technology Pvt. Ltd. builds decoupled sales frameworks designed specifically to maximize checkout retention and clean cloud pipeline scaling.
          </Text>
         
        </div>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ARCHITECTURE_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-8 rounded-2xl bg-[#121212]/90 backdrop-blur-sm border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group shadow-xl hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300">
                  <IconComponent className="h-7 w-7 text-[#00D094]" strokeWidth={1.5} />
                </div>

                {/* Card Title */}
                <Text
                  variant="h3"
                  className="text-white! text-xl font-bold tracking-tight mb-3 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {item.title}
                </Text>

                {/* Description */}
                <Text
                  variant="body"
                  className="text-gray-400! text-sm sm:text-base leading-relaxed"
                >
                  {item.description}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}