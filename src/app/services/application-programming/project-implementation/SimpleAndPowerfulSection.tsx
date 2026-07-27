import React from "react";
import { Shield, Cpu, Users, BarChart2, Bot, Headphones } from "lucide-react";
import Text from "@/components/ui/Text";

/**
 * SimpleAndPowerfulSection.tsx
 * A pixel-perfect implementation of the provided design reference,
 * built with your custom typography component, responsive layouts, and dark styling.
 */

const FEATURES = [
  {
    icon: Shield,
    title: "Top tier protection",
    desc: "Smarter Search. Sharper Ads. Powered by AI and the best minds in machine learning.",
  },
  {
    icon: Cpu,
    title: "Integrated smoothly",
    desc: "Connect all your tools effortlessly, ensuring seamless workflows and improved productivity.",
  },
  {
    icon: Users,
    title: "Better collaboration",
    desc: "Work together efficiently, improving communication, teamwork, and overall project success.",
  },
  {
    icon: BarChart2,
    title: "Analytics at the core",
    desc: "Data-driven insights powering decisions, strategies, and growth at every level.",
  },
  {
    icon: Bot,
    title: "Powered by AI",
    desc: "Leverage AI technology to automate tasks, enhance efficiency, and drive results.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Reliable assistance anytime, ensuring your questions are answered and issues resolved.",
  },
];

export default function SimpleAndPowerfulSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-15 md:py-25 px-6 md:px-12 lg:px-30">
      {/* Main Container */}
      <div className="mx-auto max-w-350">
        {/* Top Header Row: Heading on left, description on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="w-full lg:max-w-2xl">
            <Text
              variant="h2"
              className="text-white! text-[36px] md:text-[56px] font-extrabold tracking-tight leading-[1.1]"
            >
              Simple by design and powerful in action.
            </Text>
          </div>
          <div className="w-full lg:max-w-sm text-gray-400 text-[15px] md:text-[16px] leading-[1.6]">
            We see randomness not as noise, but as a source of insight unlocking
            paths to originality that structured thinking often overlooks.
          </div>
        </div>

        {/* Bento Grid: 3 columns layout on desktop, responsive for mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-[#121212] p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#161616]"
            >
              {/* Icon Container with lime/emerald accent matching the visual */}
              <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                <item.icon className="h-5 w-5 text-[#a3e635]" strokeWidth={2} />
              </div>

              {/* Text Content */}
              <div>
                <Text
                  variant="h5"
                  className="text-white! text-[20px] font-semibold tracking-tight mb-3"
                >
                  {item.title}
                </Text>
                <Text
                  variant="body"
                  className="text-gray-400! text-[15px] leading-[1.7]"
                >
                  {item.desc}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
