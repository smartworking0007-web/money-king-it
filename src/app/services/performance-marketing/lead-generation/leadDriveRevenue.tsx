// File Name: leadDriveRevenue.tsx

import React from "react";
import Text from "@/components/ui/Text";
import {
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Users,
  DollarSign,
} from "lucide-react";

const REVENUE_CARDS = [
  {
    title: "Targeted Lead Generation",
    icon: Users,
    points: ["Precise Targeting", "High-Quality Leads", "Tailored Techniques"],
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Complete Ad Management",
    icon: BarChart3,
    points: [
      "Comprehensive Ad Management",
      "Performance Tracking",
      "Optimal Impact",
    ],
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Data-driven Insights",
    icon: TrendingUp,
    points: [
      "Audience Behavior Analysis",
      "Refined Strategies",
      "Improved Engagement",
    ],
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
  {
    title: "Better ROI on Ad Spend",
    icon: DollarSign,
    points: [
      "Data-Driven Ads",
      "Remarketing Campaigns",
      "Audience Segmentation",
    ],
    span: "col-span-1 sm:col-span-2 lg:col-span-3",
  },
];

export default function LeadDriveRevenue() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-125 h-80 sm:h-125 bg-[#00D094]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Text
            variant="h2"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2.5"
          >
            How We Drive Revenue
          </Text>
          <Text
            variant="body"
            className="text-gray-300! text-xs sm:text-sm font-normal leading-relaxed max-w-lg mx-auto"
          >
            We turn challenges into opportunities for success. Here is how we
            help boost revenue with our custom social media marketing services:
          </Text>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {REVENUE_CARDS.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`${card.span} relative flex flex-col justify-between p-6 rounded-2xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-xl hover:-translate-y-1.5`}
              >
                <div>
                  {/* Card Top Icon & Indicator */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00D094] group-hover:bg-[#00D094]/10 transition-all">
                      <IconComponent
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:rotate-45">
                      <span className="text-[9px] font-bold">↗</span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <Text
                    variant="h3"
                    className="text-white! text-base sm:text-lg font-bold tracking-tight mb-4 group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {card.title}
                  </Text>

                  {/* Feature Points List */}
                  <ul className="space-y-2.5 mb-4">
                    {card.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00D094]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ambient Subtle Motion Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
