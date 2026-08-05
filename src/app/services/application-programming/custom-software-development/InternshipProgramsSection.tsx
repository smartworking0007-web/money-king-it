// src/app/industries/InternshipProgramsSection.tsx

import React from "react";
import Image from "next/image";
import {
  Code,
  Cpu,
  Cloud,
  BarChart3,
  ShieldCheck,
  Layout,
  Terminal,
  Layers,
} from "lucide-react";

const INTERNSHIP_VALUES = [
  {
    icon: Code,
    title: "Software Dev",
    desc: "Build robust, high-performance software solutions tailored to modern enterprise requirements with clean architecture.",
  },
  {
    icon: Cpu,
    title: "AI & ML",
    desc: "Leverage advanced artificial intelligence and machine learning algorithms to automate complex systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    desc: "Migrate, scale, and manage cloud infrastructures securely to ensure high availability and optimal performance.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Transform raw data into actionable business intelligence through comprehensive analysis and metric tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Protect sensitive corporate assets and digital infrastructure with multi-layered security protocols.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Craft intuitive, engaging, and user-centric digital experiences that elevate brand identity.",
  },
  {
    icon: Terminal,
    title: "DevOps",
    desc: "Streamline development lifecycles with automated CI/CD pipelines and containerization.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "Develop comprehensive end-to-end web applications combining dynamic front-end interfaces with secure back-ends.",
  },
];

export default function InternshipProgramsSection() {
  return (
    <section className="relative z-20 -mt-10 md:-mt-20 w-full bg-[#0a0a0a] text-white overflow-hidden py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Internship Programs
            </h3>
          </div>
          <div className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed">
            We see randomness not as noise, but as a source of insight unlocking
            paths that structured thinking often overlooks.
          </div>
        </div>

        {/* Bento/Grid Section: Cards grid + portrait image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left Side: Grid of Cards (Takes 2 columns on large screens) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {INTERNSHIP_VALUES.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161616]"
              >
                {/* Icon Container */}
                <div className="mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <item.icon
                    className="h-5 w-5 text-[#a3e635]"
                    strokeWidth={2}
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="mb-2 text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Feature Image Card matched perfectly to grid height */}
          <div className="relative lg:col-span-1 h-95 sm:h-112.5 lg:h-auto w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121212]">
            <Image
              src="/industries/2.png"
              alt="college cute girl"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            {/* Subtle canonical gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}