// File Name: TargetedCrossPlatformServices.tsx

"use client";
import React from "react";
import Text from "@/components/ui/Text";
import {
  Smartphone,
  Code2,
  Globe,
  Monitor,
  Building2,
  Briefcase,
  CreditCard,
  Users,
  Settings,
  Cpu,
} from "lucide-react";

const CROSS_PLATFORM_SERVICES = [
  {
    title: "Flutter Development",
    description: "Compiling performant native machine binaries.",
    icon: Smartphone,
    span: "col-span-1 md:col-span-1 lg:col-span-6",
  },
  {
    title: "React Native Development",
    description: "Flexible component bridges with native threads.",
    icon: Code2,
    span: "col-span-1 md:col-span-1 lg:col-span-6",
  },
  {
    title: "Progressive Web Apps",
    description: "High-speed cached offline-first web modules.",
    icon: Globe,
    span: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    title: "Desktop Applications",
    description: "Robust multi-window platform tools cleanly.",
    icon: Monitor,
    span: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    title: "Enterprise Applications",
    description: "Structuring micro-tenant frameworks at scale.",
    icon: Building2,
    span: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    title: "Business Applications",
    description: "Conversion priority CRM functional metrics.",
    icon: Briefcase,
    span: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    title: "Fintech Applications",
    description: "High-security transactional loop guidelines.",
    icon: CreditCard,
    span: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    title: "CRM Applications",
    description: "Centralizing customer lifecycle data feeds.",
    icon: Users,
    span: "col-span-1 md:col-span-1 lg:col-span-4",
  },
  {
    title: "ERP Applications",
    description: "Syncing complex resource tracking loops.",
    icon: Settings,
    span: "col-span-1 md:col-span-1 lg:col-span-6",
  },
  {
    title: "Custom Software Solutions",
    description: "Architectural logic pipelines built from scratch.",
    icon: Cpu,
    span: "col-span-1 md:col-span-1 lg:col-span-6",
  },
];

export default function TargetedCrossPlatformServices() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Cyber Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,208,148,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,208,148,0.02)_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-[#00D094]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <Text
            variant="h2"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2.5"
          >
            Targeted Cross-Platform Services
          </Text>
        </div>

        {/* Compact Bento Grid Layout with Smooth Motion Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {CROSS_PLATFORM_SERVICES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`${item.span} relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-lg hover:-translate-y-1 hover:shadow-[#00D094]/10`}
              >
                {/* Top Row: Icon & Arrow Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-300 group-hover:bg-[#00D094]/10 group-hover:text-[#00D094] group-hover:border-[#00D094]/30 transition-all duration-300">
                    <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5">
                    <span className="text-[10px] font-bold">↗</span>
                  </div>
                </div>

                {/* Content Box (Compact Typography) */}
                <div>
                  <Text
                    variant="h5"
                    className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1.5 group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>
                  <Text
                    variant="body"
                    className="text-zinc-400! text-[11px] sm:text-xs leading-relaxed"
                  >
                    {item.description}
                  </Text>
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
