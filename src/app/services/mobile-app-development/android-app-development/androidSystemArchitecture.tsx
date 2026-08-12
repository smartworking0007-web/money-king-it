// File Name: androidSystemArchitecture.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { Layers, Database, Cpu, Network, ShieldCheck, Zap } from "lucide-react";

const ARCHITECTURE_SOLUTIONS = [
  {
    title: "MVVM",
    description: "Model-View-ViewModel Pattern",
    keywords: "MVVM Android Architecture, Reactive Data Binding",
    icon: Layers,
  },
  {
    title: "Clean Arch",
    description: "Decoupled Business Logic & Layers",
    keywords: "Clean Architecture Android, Domain-Driven Design",
    icon: ShieldCheck,
  },
  {
    title: "Modular",
    description: "Multi-Module Dynamic Feature Delivery",
    keywords: "Modular Android Architecture, Feature Modules",
    icon: Cpu,
  },
  {
    title: "Hilt/DI",
    description: "Dependency Injection Framework",
    keywords: "Dagger Hilt Dependency Injection, Inversion of Control",
    icon: Network,
  },
  {
    title: "Offline-First",
    description: "Room DB & Local Data Sync Engine",
    keywords: "Offline-First Android App, Room Database Caching",
    icon: Database,
  },
  {
    title: "Scalable",
    description: "Enterprise-Ready App Infrastructure",
    keywords: "Scalable Mobile Systems, Enterprise Infrastructure",
    icon: Zap,
  },
];

export default function AndroidSystemArchitecture() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/andriod/1.png"
          alt="roadmap of app application"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <Text
            variant="h3"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Android System Architecture
          </Text>
        </div>

        {/* Responsive Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {ARCHITECTURE_SOLUTIONS.map((item, index) => {
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

                  {/* GEO Keywords Tag */}
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
