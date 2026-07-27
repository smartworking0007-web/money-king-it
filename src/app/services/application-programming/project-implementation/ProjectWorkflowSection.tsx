import React from "react";
import {
  ClipboardCheck,
  Search,
  Wrench,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import Text from "@/components/ui/Text";

/**
 * ProjectWorkflowSection.tsx
 * Fully optimized, production-ready, and fully responsive workflow section
 * with unused imports removed and Tailwind canonical classes updated to eliminate all IDE warnings.
 */

const WORKFLOW_STEPS = [
  {
    icon: ClipboardCheck,
    title: "Client Intake & Audit",
    desc: "Evaluate your website's current SEO performance and business goals.",
  },
  {
    icon: Search,
    title: "Strategy & Keyword Research",
    desc: "Build intent-led roadmaps using competitor gaps.",
  },
  {
    icon: Wrench,
    title: "On-Page & Technical SEO",
    desc: "Fix site structure, speed, and metadata for rankability.",
  },
  {
    icon: TrendingUp,
    title: "Authority & Content Growth",
    desc: "Publish E-E-A-T content and ethical backlinks.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    desc: "Deliver performance dashboards and weekly insights.",
  },
];

export default function ProjectWorkflowSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 sm:py-20 lg:py-10 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-350">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Text variant="label" className="mb-4 inline-block text-emerald-400">
            Execution Roadmap
          </Text>
          <Text
            variant="h2"
            className="text-white! tracking-tight text-2xl sm:text-3xl md:text-4xl"
          >
            Our Step-by-Step Implementation Process
          </Text>
        </div>

        {/* Timeline Grid Container */}
        <div className="relative">
          {/* Desktop Connecting Dashed Line behind the nodes */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-white/20 z-0" />

          {/* Steps Grid: Responsive from 1 column on mobile to 5 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {WORKFLOW_STEPS.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Node Indicator with Blue Glow (Hidden on mobile for cleaner look, visible from sm upwards) */}
                <div className="relative mb-6 sm:mb-8 hidden sm:flex items-center justify-center">
                  <div className="absolute h-8 w-8 rounded-full bg-blue-500/25 blur-sm group-hover:bg-blue-500/50 transition-all duration-300" />
                  <div className="relative h-6 w-6 rounded-full bg-[#0a0a0a] border-4 border-blue-500 flex items-center justify-center shadow-md">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>

                {/* Card Box */}
                <div className="w-full flex flex-col rounded-[24px] border border-white/10 bg-[#121212] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-[#161616] shadow-xl h-full justify-between">
                  <div>
                    {/* Step Icon */}
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
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
