import React from "react";
import {
  Zap,
  ShieldCheck,
  TrendingDown,
  BarChart3,
  Layers,
  RefreshCw,
} from "lucide-react";

/**
 * MeasurableOperationalImpact.tsx
 * Fully optimized, production-ready, and responsive operational impact section with a dark black background.
 */

const OPERATIONAL_IMPACTS = [
  {
    icon: Zap,
    title: "Faster Operations",
    desc: "Accelerate cycle tasks by optimizing the specific data structures directly handling execution layers.",
    highlighted: true,
  },
  {
    icon: ShieldCheck,
    title: "Better Security",
    desc: "Minimize standard system security risks by building isolated custom application logic from scratch.",
    highlighted: false,
  },
  {
    icon: TrendingDown,
    title: "Reduced Costs",
    desc: "Eliminate long-term commercial software seats overhead with complete platform ownership rights.",
    highlighted: false,
  },
  {
    icon: BarChart3,
    title: "Higher Productivity",
    desc: "Minimize multi-platform data context switching with centralized single-pane interface structures.",
    highlighted: false,
  },
  {
    icon: Layers,
    title: "Easy Scalability",
    desc: "Introduce complex cloud horizontal autoscaling modules easily without vendor blockages.",
    highlighted: false,
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    desc: "Re-align outdated analog structures into secure, high-speed digital operation systems.",
    highlighted: false,
  },
];

export default function MeasurableOperationalImpact() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono uppercase tracking-[0.2em] text-[#00D094] text-xs sm:text-sm font-semibold">
            Measurable Operational Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-3 mb-4">
            Measurable Operational Impact
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Engineering tailored software properties that unlock definitive
            efficiency benchmarks.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATIONAL_IMPACTS.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 shadow-xl ${
                item.highlighted
                  ? "bg-zinc-900 border border-white/10 hover:border-white/20"
                  : "bg-zinc-900 border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Top Row: Icon and Arrow Button */}
              <div className="flex items-center justify-between mb-8">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                    item.highlighted
                      ? "bg-white/5 border-white/10 text-zinc-300"
                      : "bg-white/5 border-white/10 text-zinc-300"
                  }`}
                >
                  <item.icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                    item.highlighted
                      ? "  bg-white/5 border-white/10 text-zinc-400"
                      : "bg-white/5 border-white/10 text-zinc-400"
                  }`}
                >
                  <svg
                    className="h-3.5 w-3.5 transform rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
