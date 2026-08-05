import React from "react";
import { RefreshCw, Smile, TrendingUp } from "lucide-react";
import Text from "@/components/ui/Text";

/**
 * FeatureOverviewSection.tsx
 * Replicating the exact minimalist 3-column feature section,
 * using your custom Text component typography system, dark background theme,
 * lime icons, and sleek vertical border lines between columns.
 */

const ITEMS = [
  {
    icon: RefreshCw,
    title: "Business Productivity",
    desc: "Smarter Search. Powered by AI and the best minds machine learning.",
  },
  {
    icon: Smile,
    title: "Business Productivity",
    desc: "Deliver exceptional service, ensuring clients are happy consistently.",
  },
  {
    icon: TrendingUp,
    title: "Business Productivity",
    desc: "Easily expand operations to keep pace with growth.",
  },
];

export default function FeatureOverviewSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 px-6 md:px-12 lg:px-20">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* 3 Columns Grid with vertical separators on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-6 relative ${
                index !== 0 ? "md:border-l md:border-white/10" : ""
              }`}
            >
              {/* Icon Container with Lime color */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <item.icon className="h-6 w-6 text-[#a3e635]" strokeWidth={2} />
              </div>

              {/* Title using your custom Text component */}
              <Text
                variant="h4"
                className="text-white! text-[20px] md:text-[24px] font-bold tracking-tight mb-3"
              >
                {item.title}
              </Text>

              {/* Description using your custom Text component */}
              <Text
                variant="body"
                className="text-gray-400! text-[15px] leading-[1.6] max-w-sm"
              >
                {item.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}