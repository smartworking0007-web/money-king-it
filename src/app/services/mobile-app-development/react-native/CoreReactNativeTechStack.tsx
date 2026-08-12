// File Name: CoreReactNativeTechStack.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Code, FileCode, Layers, Cpu } from "lucide-react";

const TECH_STACK_ITEMS = [
  {
    title: "React Native",
    description: "Core JavaScript Mobile Framework for iOS & Android",
    keywords:
      "React Native Framework, Cross-Platform Mobile Engine, Meta Open-Source Mobile SDK",
    icon: Code,
  },
  {
    title: "TypeScript",
    description: "Strongly Typed Codebase for Scalable Architecture",
    keywords:
      "TypeScript React Native, Type-Safe JavaScript Development, Enterprise Code Reliability",
    icon: FileCode,
  },
  {
    title: "Expo",
    description: "Modern Ecosystem & EAS Build Deployment Pipeline",
    keywords:
      "Expo Application Services, EAS Build Pipeline, Rapid Mobile Prototyping",
    icon: Layers,
  },
  {
    title: "Redux",
    description: "Predictable Global State Management via Redux Toolkit",
    keywords:
      "Redux Toolkit React Native, Global State Management, Predictable Application Data Flow",
    icon: Cpu,
  },
];

export default function CoreReactNativeTechStack() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-[#00D094]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Core React Native Tech Stack
          </Text>

          <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed max-w-md mx-auto">
            Powered by modern open-source engines, type-safe development tools,
            and robust deployment pipelines.
          </p>
        </div>

        {/* Responsive Compact Grid Layout (4 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TECH_STACK_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
              >
                <div>
                  {/* Card Top Icon & Indicator */}
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00D094] group-hover:bg-[#00D094]/10 transition-all">
                      <IconComponent className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:rotate-45">
                      <span className="text-[8px] font-bold">↗</span>
                    </div>
                  </div>

                  {/* Card Title (H3) */}
                  <Text
                    variant="h3"
                    className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1.5 group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>

                  {/* Subtext / Short Description */}
                  <Text
                    variant="body"
                    className="text-zinc-300 text-[11px] sm:text-xs font-normal leading-relaxed mb-3"
                  >
                    {item.description}
                  </Text>
                </div>

                {/* GEO Keywords Tag */}
                <div className="text-[10px] text-[#00D094]/80 font-mono bg-black/40 px-2 py-1 rounded border border-white/5 leading-snug">
                  {item.keywords}
                </div>

                {/* Ambient Motion Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
