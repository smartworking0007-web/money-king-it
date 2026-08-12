// File Name: ReactNativeArchitecture.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { GitBranch, Cpu, Layout, Box, Settings, Database } from "lucide-react";

const ARCHITECTURE_SOLUTIONS = [
  {
    title: "Monorepo",
    description: "Unified Repository Management via Turborepo & Nx",
    keywords:
      "React Native Monorepo Architecture, Turborepo Workspace, Shared Codebase Management",
    icon: GitBranch,
  },
  {
    title: "Native Bridge",
    description: "High-Performance JSI & TurboModules Integration",
    keywords:
      "React Native JSI Bridge, TurboModules Framework, Native C++ Layer Access",
    icon: Cpu,
  },
  {
    title: "Component Lib",
    description: "Reusable Cross-Platform UI Design System",
    keywords:
      "React Native Design System, Custom Component Library, Atomic UI Design",
    icon: Layout,
  },
  {
    title: "Modular Core",
    description: "Decoupled Feature Architecture & Scalable Packages",
    keywords:
      "Modular React Native Architecture, Decoupled Mobile Codebase, Feature-Based Folder Structure",
    icon: Box,
  },
  {
    title: "Dependency Inj.",
    description: "Inversion of Control & InversifyJS Service Locators",
    keywords:
      "React Native Dependency Injection, InversifyJS Service Locator, Clean Architecture IoC",
    icon: Settings,
  },
  {
    title: "Offline-First",
    description: "WatermelonDB & MMKV Local Caching Engine",
    keywords:
      "Offline-First React Native, WatermelonDB Caching, Fast MMKV Storage",
    icon: Database,
  },
];

export default function ReactNativeArchitecture() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container - Note: Folder name is capitalized as 'Native' in public/Native/2.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Native/2.png"
          alt="application with money king"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Lighter gradient overlay so the background image remains clearly visible */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-black/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <Text
            variant="h3"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            React Native Application Architecture
          </Text>

          <p className="text-zinc-300 text-[11px] sm:text-xs font-normal leading-relaxed max-w-md mx-auto">
            Engineered with monorepo structures, high-performance JSI bridges,
            and local-first caching engines.
          </p>
        </div>

        {/* Responsive Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {ARCHITECTURE_SOLUTIONS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/85 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-lg hover:-translate-y-1"
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

                  {/* Card Title */}
                  <Text
                    variant="h3"
                    className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1.5 group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>

                  {/* Description Paragraph */}
                  <Text
                    variant="body"
                    className="text-zinc-200 text-[11px] sm:text-xs font-normal leading-relaxed mb-3"
                  >
                    {item.description}
                  </Text>
                </div>

                {/* GEO Keywords Tag */}
                <div className="text-[10px] text-[#00D094]/90 font-mono bg-black/60 px-2 py-1 rounded border border-white/10 leading-snug">
                  {item.keywords}
                </div>

                {/* Ambient Subtle Motion Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
