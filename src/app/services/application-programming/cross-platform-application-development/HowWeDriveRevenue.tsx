import React from "react";
import Text from "@/components/ui/Text";
import {
  CheckCircle2,
  TrendingUp,
  BarChart,
  DollarSign,
  Users,
} from "lucide-react";

const REVENUE_CARDS = [
  {
    title: "Targeted Lead Generation",
    points: ["Precise Targeting", "High-Quality Leads", "Tailored Techniques"],
    icon: Users,
  },
  {
    title: "Complete Ad Management",
    points: [
      "Comprehensive Ad Management",
      "Performance Tracking",
      "Optimal Impact",
    ],
    icon: BarChart,
  },
  {
    title: "Data-driven Insights",
    points: [
      "Audience Behavior Analysis",
      "Refined Strategies",
      "Improved Engagement",
    ],
    icon: TrendingUp,
  },
  {
    title: "Better ROI on Ad Spend",
    points: [
      "Data-Driven Ads",
      "Remarketing Campaigns",
      "Audience Segmentation",
    ],
    icon: DollarSign,
  },
];

export default function HowWeDriveRevenue() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#00D094]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Text
            variant="h2"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2.5"
          >
            How We Drive Revenue
          </Text>
          <Text
            variant="body"
            className="text-gray-300! text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto"
          >
            At Skky Loom Digital Technology Pvt. Ltd., we turn challenges into opportunities for success.
            Here&apos;s how we help boost revenue with our custom solutions:
          </Text>
        </div>

        {/* Responsive Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {REVENUE_CARDS.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Card Title (H3) */}
                  <Text
                    variant="h5"
                    className="text-white! text-sm sm:text-base font-bold tracking-tight mb-3 pb-2.5 border-b border-white/10 group-hover:text-[#00D094] transition-colors duration-300 min-h-11 flex items-center"
                  >
                    {card.title}
                  </Text>

                  {/* Points List */}
                  <ul className="space-y-2.5 mb-5">
                    {card.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00D094] shrink-0 mt-0.5" />
                        <Text
                          variant="body"
                          className="text-gray-300! text-[11px] sm:text-xs leading-snug"
                        >
                          {point}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Icon / Graphic Watermark */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-end">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00D094] group-hover:bg-[#00D094]/10 transition-all">
                    <IconComponent className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Ambient Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
