// File Name: ppcSuccessStoriesGrid.tsx

import React from "react";
import Text from "@/components/ui/Text";

const STORIES_DATA = [
  {
    title: "Fintech Leader",
    challenge: "High CPA in market.",
    strategy: "AI segmentation.",
    growth: "240%",
    growthLabel: "GROWTH",
    roas: "9.2x",
    roasLabel: "ROAS",
  },
  {
    title: "E-Commerce Giant",
    challenge: "Low conversion rates.",
    strategy: "Dynamic remarketing.",
    growth: "310%",
    growthLabel: "GROWTH",
    roas: "12.5x",
    roasLabel: "ROAS",
  },
  {
    title: "SaaS Enterprise",
    challenge: "Stagnant lead volume.",
    strategy: "Intent retargeting.",
    growth: "180%",
    growthLabel: "GROWTH",
    roas: "7.8x",
    roasLabel: "ROAS",
  },
];

export default function PpcSuccessStoriesGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-125 h-80 sm:h-125 bg-[#00D094]/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Inline CSS for Continuous Subtle Floating Motion Effect */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatSlow 7s ease-in-out 2s infinite;
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <Text
            variant="h2"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2.5"
          >
            Success Stories
          </Text>
        </div>

        {/* Responsive Grid Layout with Motion Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {STORIES_DATA.map((story, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-500 ease-out group shadow-xl hover:-translate-y-2 hover:shadow-[#00D094]/10 ${
                index % 2 === 1 ? "animate-float-delayed" : "animate-float-slow"
              }`}
            >
              <div>
                {/* Card Title */}
                <Text
                  variant="h3"
                  className="text-white! text-base sm:text-lg font-bold tracking-tight mb-5 pb-3 border-b border-white/10 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {story.title}
                </Text>

                {/* Challenge & Strategy Stack */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="font-mono font-bold text-[#00D094] bg-[#00D094]/10 px-1.5 py-0.5 rounded text-[10px]">
                      CH
                    </span>
                    <span className="text-gray-300">{story.challenge}</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="font-mono font-bold text-zinc-400 bg-white/5 px-1.5 py-0.5 rounded text-[10px]">
                      ST
                    </span>
                    <span className="text-gray-300">{story.strategy}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Metric Cards */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-[#00D094]/20 transition-all">
                  <div className="text-white text-base sm:text-lg font-extrabold tracking-tight">
                    {story.growth}
                  </div>
                  <div className="text-[9px] font-mono tracking-widest text-[#00D094] uppercase mt-0.5">
                    {story.growthLabel}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-[#00D094]/20 transition-all">
                  <div className="text-white text-base sm:text-lg font-extrabold tracking-tight">
                    {story.roas}
                  </div>
                  <div className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase mt-0.5">
                    {story.roasLabel}
                  </div>
                </div>
              </div>

              {/* Ambient Motion Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
