// File Name: EnterpriseSeoSolutions.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { Globe, MapPin, Cpu, Layers, Zap } from "lucide-react";

const ENTERPRISE_ITEMS = [
  { title: "Multi-Location SEO", icon: MapPin },
  { title: "International SEO", icon: Globe },
  { title: "Automation", icon: Zap },
  { title: "Content Scaling", icon: Layers },
  { title: "Tech Infrastructure", icon: Cpu },
];

export default function EnterpriseSeoSolutions() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/seo/3.png"
          alt="enterprise solutions background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#00D094]/5 blur-[120px] rounded-full pointer-events-none z-1" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <Text
            variant="h3"
            className="text-white! text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight mb-2 uppercase"
          >
            Enterprise Solutions
          </Text>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 justify-center">
          {ENTERPRISE_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00D094] group-hover:bg-[#00D094]/10 transition-all">
                    <IconComponent className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <Text
                    variant="h3"
                    className="text-white! text-xs sm:text-sm font-bold tracking-tight group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>
                </div>

                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#00D094] group-hover:text-black group-hover:border-[#00D094] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:rotate-45">
                  <span className="text-[9px] font-bold">↗</span>
                </div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
