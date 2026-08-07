import React from "react";
import Text from "@/components/ui/Text";
import {
  CheckCircle2,
  Target,
  Megaphone,
  LineChart,
  Sliders,
  Layout,
} from "lucide-react";

const PPC_SERVICES = [
  {
    title: "PPC Audit",
    icon: Target,
    points: [
      "Full account and performance audit",
      "Dedicated account management",
      "Data-backed optimization recommendations",
    ],
  },
  {
    title: "Keyword Research",
    icon: LineChart,
    points: [
      "High-intent keyword discovery",
      "Campaign-level keyword mapping",
      "Ongoing performance-based refinement",
    ],
  },
  {
    title: "Ad Creatives",
    icon: Megaphone,
    points: [
      "Intent-aligned creative development",
      "Performance-driven ad copywriting",
      "Ongoing message testing",
    ],
  },
  {
    title: "Conversion Tracking",
    icon: Layout,
    points: [
      "Full-funnel tracking setup",
      "Accurate data validation",
      "Insight-led performance reporting",
    ],
  },
  {
    title: "Bid Management",
    icon: Sliders,
    points: [
      "ROI-focused budget allocation",
      "Real-time bid optimization",
      "Cost-efficient bidding strategies",
    ],
  },
  {
    title: "Landing Page Optimization",
    icon: Target,
    points: [
      "Conversion-focused page design",
      "Behavior-led iterative improvements",
      "Structured A/B testing",
    ],
  },
];

export default function FullSuitePpcServices() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-16 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Text
            variant="h2"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3"
          >
            Full-Suite PPC Management Services
          </Text>
          <Text
            variant="body"
            className="text-gray-400! text-xs sm:text-sm leading-relaxed"
          >
            Our end-to-end PPC execution focuses on improving campaign
            performance, scaling acquisition, and maintaining consistent results
            across accounts. Here&apos;s what we deliver:
          </Text>
          <div className="w-12 h-1 bg-[#00D094] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Responsive Grid layout with compact boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PPC_SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl bg-[#121212] border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group gap-5"
              >
                {/* Left Side: Title & Feature Checklist */}
                <div className="flex flex-col flex-1">
                  <Text
                    variant="h3"
                    className="text-white! text-lg md:text-xl font-bold tracking-tight mb-3 group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {service.title}
                  </Text>

                  <ul className="space-y-1.5">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00D094] shrink-0" />
                        <Text variant="body" className="text-gray-400! text-xs">
                          {point}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Icon / Visual Badge */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300 self-center">
                  <IconComponent
                    className="h-6 w-6 text-[#00D094]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
