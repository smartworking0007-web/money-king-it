// File Name: CommerceTechStackSection.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { Layout, Server, Database, Cloud } from "lucide-react";

const STACK_ITEMS = [
  {
    title: "FRONTEND STACK",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: Layout,
  },
  {
    title: "BACKEND RAILS",
    items: ["Node.js", "Express.js", "NestJS"],
    icon: Server,
  },
  {
    title: "DATABASE LAYERS",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
    icon: Database,
  },
  {
    title: "CLOUD SYSTEMS",
    items: ["AWS Infrastructure", "Azure DevOps", "Vercel Edge"],
    icon: Cloud,
  },
];

export default function CommerceTechStackSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/eCommerce/2.png"
          alt="ecommerce service with money king"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-[#0a0a0a]/90"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
          >
            Commerce Technology Stack
          </Text>
        </div>

        {/* Stack Rows Layout with Compact Smaller Boxes & Mobile Optimization */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {STACK_ITEMS.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-5 rounded-xl bg-[#121212]/95 backdrop-blur-sm border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group shadow-lg"
              >
                {/* Left Side: Category Title & Icon */}
                <div className="flex items-center gap-3 w-full md:w-1/3 mb-3 md:mb-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300">
                    <IconComponent
                      className="h-5 w-5 text-[#00D094]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <Text
                    variant="h3"
                    className="text-white! text-sm sm:text-base font-bold tracking-tight group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {section.title}
                  </Text>
                </div>

                {/* Right Side: Technologies / Tags with Motion Effect & Alt Tag */}
                <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 w-full md:w-2/3">
                  {section.items.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      aria-label="ecommerce service with money king"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00D094]/40 hover:bg-[#00D094]/10 transition-all duration-300 transform hover:scale-105 shadow-sm cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D094]"></span>
                      <Text
                        variant="body"
                        className="text-gray-200! text-[11px] sm:text-xs font-medium tracking-wide"
                      >
                        {tech}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
