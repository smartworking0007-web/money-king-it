import React from "react";
import Text from "@/components/ui/Text";
import { ShieldCheck, Lock, Zap, Cpu, Wrench, Smile } from "lucide-react";

const IMPACT_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Zero Critical Bugs",
    description: "Comprehensive path trace scripts intercepting fatal system exceptions before deployment.",
  },
  {
    icon: Lock,
    title: "Improved Security",
    description: "Deep vulnerability scans protecting network endpoints from standard penetration attacks.",
  },
  {
    icon: Zap,
    title: "Better Performance",
    description: "Isolating server resource constraints to secure lightweight infrastructure components.",
  },
  {
    icon: Cpu,
    title: "Faster Deployment",
    description: "Integrating parallel automated build regression layers within active workflows.",
  },
  {
    icon: Wrench,
    title: "Reduced Maintenance Cost",
    description: "Preventing expensive patch operations by catching logical flaws early.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description: "Sustaining smooth navigation systems which unlock perfect app operational feedback.",
  },
];

export default function MeasurableImpactSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-20 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Text
            variant="h2"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3"
          >
            Measurable Operational Impact
          </Text>
          <div className="w-12 h-1 bg-[#00D094] mx-auto rounded-full"></div>
        </div>

        {/* Responsive Grid with compact boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-6 rounded-xl bg-[#121212] border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300">
                  <IconComponent className="h-5 w-5 text-[#00D094]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <Text
                  variant="h3"
                  className="text-white! text-lg font-bold tracking-tight mb-2 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {item.title}
                </Text>

                {/* Description */}
                <Text
                  variant="body"
                  className="text-gray-400! text-xs md:text-sm leading-relaxed"
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