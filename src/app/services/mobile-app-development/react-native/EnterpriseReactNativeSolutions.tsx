// File Name: EnterpriseReactNativeSolutions.tsx

import React from "react";
import Text from "@/components/ui/Text";
import {
  Smartphone,
  Layers,
  Package,
  Building2,
  RefreshCw,
  Zap,
} from "lucide-react";

const REACT_NATIVE_SOLUTIONS = [
  {
    title: "App Dev",
    description: "Custom Native-Grade Mobile Applications",
    keywords:
      "React Native App Development, Custom Mobile Apps, JavaScript & TypeScript Mobile Software",
    icon: Smartphone,
  },
  {
    title: "Cross-Platform",
    description: "Simultaneous Deployment for iOS & Android",
    keywords:
      "Cross-Platform App Development, React Native iOS & Android, Single Codebase Mobile Apps",
    icon: Layers,
  },
  {
    title: "Module Packaging",
    description: "Native Bridge & Reusable NPM Modules",
    keywords:
      "React Native Native Modules, Custom Native Bridge, NPM Package Integration",
    icon: Package,
  },
  {
    title: "Enterprise Apps",
    description: "Scalable Corporate & Multi-Tenant Platforms",
    keywords:
      "Enterprise React Native Apps, Scalable Mobile Infrastructure, Secure Corporate Apps",
    icon: Building2,
  },
  {
    title: "Expo / Migration",
    description: "Modern Expo Application Workflow & Native Modernization",
    keywords:
      "Expo Application Development, EAS Build Pipeline, React Native Migration",
    icon: RefreshCw,
  },
  {
    title: "Performance",
    description: "Hermes Engine & Native Thread Optimization",
    keywords:
      "React Native Performance Tuning, Hermes JS Engine, 60FPS UI Rendering",
    icon: Zap,
  },
];

export default function EnterpriseReactNativeSolutions() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-[#00D094]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <Text
            variant="h3"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise React Native Solutions
          </Text>

          <div className="w-8 h-0.5 bg-[#00D094] mx-auto rounded-full"></div>
        </div>

        {/* Responsive Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {REACT_NATIVE_SOLUTIONS.map((item, index) => {
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
                    className="text-gray-300 text-[11px] sm:text-xs font-normal leading-relaxed mb-2"
                  >
                    {item.description}
                  </Text>

                  {/* GEO Keywords */}
                  <div className="text-[10px] text-[#00D094]/80 font-mono bg-black/40 px-2 py-1 rounded border border-white/5 leading-snug">
                    {item.keywords}
                  </div>
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
