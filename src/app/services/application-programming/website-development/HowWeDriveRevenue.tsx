import React from "react";
import Text from "@/components/ui/Text";
import { CheckCircle2 } from "lucide-react";

/**
 * HowWeDriveRevenue.tsx
 * A responsive, full-width section featuring four structured cards with check icons,
 * adapted to your dark theme and custom typography.
 */

const REVENUE_CARDS = [
  {
    title: "Targeted Lead Generation",
    items: ["Precise Targeting", "High-Quality Leads", "Tailored Techniques"],
  },
  {
    title: "Complete Ad Management",
    items: [
      "Comprehensive Ad Management",
      "Performance Tracking",
      "Optimal Impact",
    ],
  },
  {
    title: "Data-driven Insights",
    items: [
      "Audience Behavior Analysis",
      "Refined Strategies",
      "Improved Engagement",
    ],
  },
  {
    title: "Better ROI on Ad Spend",
    items: [
      "Data-Driven Ads",
      "Remarketing Campaigns",
      "Audience Segmentation",
    ],
  },
];

export default function HowWeDriveRevenue() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Section Header & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Text
            variant="h2"
            className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            How We Drive Revenue
          </Text>
          <div className="w-16 h-1 bg-[#00D094] mx-auto rounded-full mb-2" />
          <Text
            variant="body"
            className="text-zinc-400! text-sm sm:text-base md:text-lg font-normal leading-relaxed"
          >
            At Money King IT, we turn challenges into opportunities for success.
            Here&apos;s how we help boost revenue with our custom marketing and
            tech solutions:
          </Text>
        </div>

        {/* Four Cards Grid (Responsive: 1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVENUE_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl p-6 bg-zinc-900/85 border border-white/10 hover:border-[#00D094]/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <Text
                  variant="h5"
                  className="text-white! text-lg font-bold mb-4 pb-4 border-b border-white/10 tracking-tight"
                >
                  {card.title}
                </Text>

                <ul className="space-y-3">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00D094] shrink-0 mt-0.5" />
                      <Text
                        variant="body"
                        className="text-zinc-300! text-xs sm:text-sm leading-relaxed"
                      >
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
