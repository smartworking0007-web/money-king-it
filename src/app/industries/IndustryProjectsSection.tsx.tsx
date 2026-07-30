// src/app/industries/IndustryProjectsSection.tsx

"use client";

import React from "react";
import Image from "next/image";
import { Server, Cpu, Cloud, ShieldCheck, Lock, Database } from "lucide-react";

/**
 * IndustryProjectsSection.tsx
 * Fully responsive component with compact card sizing and optimized mobile/desktop views.
 */

const INDUSTRY_PROJECTS = [
  {
    icon: Server,
    title: "Enterprise Software",
    desc: "Scalable cloud-based SaaS platforms.",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    desc: "Custom ML-powered predictive engines.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "High-availability multi-cloud architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Fintech Apps",
    desc: "Secure, real-time financial systems.",
  },
  {
    icon: Lock,
    title: "Cyber Security",
    desc: "Advanced threat detection protocols.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Real-time large-scale data pipelines.",
  },
];

export default function IndustryProjectsSection() {
  return (
    <section className="relative z-20 w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-350">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight text-white leading-[1.1]">
              Industry Projects
            </h3>
          </div>
          <div className="max-w-md text-gray-400 text-sm md:text-[15px] leading-[1.6]">
            We build robust, cutting-edge digital solutions tailored to solve
            complex challenges across diverse modern industries.
          </div>
        </div>

        {/* Bento/Grid Section: 3 Columns on desktop (2 for cards grid, 1 for compact portrait image) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left Side: 2x3 Grid of Compact Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {INDUSTRY_PROJECTS.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121212] p-5 sm:p-7 transition-all duration-300 hover:border-[#00D094]/40 hover:bg-[#161616] group shadow-lg"
              >
                {/* Icon Container - Smaller & Cleaner */}
                <div className="mb-4 sm:mb-6 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00D094]/50 group-hover:bg-[#00D094]/10 transition-all duration-300">
                  <item.icon
                    className="h-4 w-4 sm:h-5 sm:w-5 text-[#00D094] transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={2}
                  />
                </div>

                {/* Text Content - Responsive Typography */}
                <div>
                  <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold text-white tracking-tight group-hover:text-[#00D094] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-[1.6] text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Compact Feature Image Card */}
          <div className="relative lg:col-span-1 h-full min-h-65 sm:min-h-80 lg:min-h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121212] shadow-lg">
            <Image
              src="/implementation/3.png"
              alt="Industry Projects Galaxy Theme"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
