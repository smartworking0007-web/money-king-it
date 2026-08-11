// File Name: EmergingTechnologiesSection.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Cpu, Wifi, Network, Cloud, Database, Glasses } from "lucide-react";

const EMERGING_TECH_ITEMS = [
  {
    title: "Artificial Intelligence",
    icon: Cpu,
    active: false,
  },
  {
    title: "Internet of Things",
    icon: Wifi,
    active: true,
  },
  {
    title: "Blockchain",
    icon: Network,
    active: false,
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    active: false,
  },
  {
    title: "Big Data",
    icon: Database,
    active: false,
  },
  {
    title: "Augmented Reality",
    icon: Glasses,
    active: false,
  },
];

export default function EmergingTechnologiesSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-16 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <Text
            variant="h2"
            className="text-white! text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2 sm:mb-3"
          >
            Emerging Technologies We Rely On
          </Text>
          <Text
            variant="body"
            className="text-gray-300! text-[11px] sm:text-xs md:text-sm font-normal leading-relaxed max-w-lg mx-auto"
          >
            Leveraging the latest technologies, we enable businesses to attain
            360-degree business growth with reliable and scalable solutions.
          </Text>
        </div>

        {/* Responsive Grid layout optimized for mobile and desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {EMERGING_TECH_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-lg sm:rounded-xl backdrop-blur-sm transition-all duration-300 shadow-lg group ${
                  item.active
                    ? "bg-[#121212]/85 border border-white/10 hover:border-[#00D094]/50"
                    : "bg-[#121212]/85 border border-white/10 hover:border-[#00D094]/50"
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`mb-2.5 sm:mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md sm:rounded-lg transition-all duration-300 ${
                    item.active
                      ? "bg-white/5 text-gray-300 group-hover:text-[#00D094] group-hover:bg-[#00D094]/10"
                      : "bg-white/5 text-gray-300 group-hover:text-[#00D094] group-hover:bg-[#00D094]/10"
                  }`}
                >
                  <IconComponent
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Card Title using Typography Component */}
                <Text
                  variant="h3"
                  className={`text-[11px] sm:text-xs md:text-sm font-bold tracking-tight transition-colors duration-300 ${
                    item.active
                      ? "text-white! group-hover:text-[#00D094]"
                      : "text-white! group-hover:text-[#00D094]"
                  }`}
                >
                  {item.title}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
