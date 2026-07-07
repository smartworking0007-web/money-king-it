"use client";

import React from "react";
import Image from "next/image";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// 1. Reusable Card Component
const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative bg-[#0b1113]/40 border border-neutral-900/80 rounded-[24px] p-8 flex flex-col justify-start min-h-55 overflow-hidden transition-all duration-500 hover:border-neutral-800/80 hover:bg-[#0c1416]/60">
      {/* BACKGROUND EFFECTS */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#a3e635]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* CONTENT LAYER */}
      <div className="relative z-10 space-y-6">
        <div className="w-12 h-12 rounded-full bg-neutral-900/90 border border-neutral-800/50 flex items-center justify-center shadow-inner group-hover:border-[#a3e635]/30 transition-colors duration-300">
          {icon}
        </div>
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-white tracking-wide">
            {title}
          </h4>
          <p className="text-neutral-400 text-sm leading-relaxed font-light font-sans max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function CoreValues() {
  const valueItems = [
    {
      id: 1,   
      title: "Innovation in Action",
      description: "Smarter architectures. Faster deployment.",
      icon: (
        <svg
          className="w-5 h-5 text-[#a3e635]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Resilience",
      description: "We design strong, adaptable tech platforms.",
      icon: (
        <svg
          className="w-5 h-5 text-[#a3e635]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Tailored IT",
      description: "Deliver high-performance, robust tech solutions.",
      icon: (
        <svg
          className="w-5 h-5 text-[#a3e635]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Trust",
      description: "Reliable performance you can trust.",
      icon: (
        <svg
          className="w-5 h-5 text-[#a3e635]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25"
          />
        </svg>
      ),
    },
  ];

  return (
    /* 
       CONTROLS:
       - 'select-text': Text ko copy karne ki permission deta hai.
       - '-mt-30 md:-mt-20': Section ko upar khichne (pull-up) ka control.
    */
    <section className="w-full h-auto bg-[#040809] text-white py-24 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center antialiased select-text -mt-30 md:-mt-20">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* UPPER TITLE HEADER BLOCK */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#121a1c] border border-neutral-800/60 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              <span className="text-xs font-medium text-neutral-300">
                Core Values
              </span>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Our Core Values
            </h3>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light max-w-xl lg:ml-auto">
              We view complex technical challenges as blueprints to engineer
              scalable software solutions.
            </p>
          </div>
        </div>

        {/* LOWER GRID LAYOUT */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {valueItems.map((item) => (
              <ValueCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Right Portrait Image - FIXED LCP ERROR */}
          <div className="lg:col-span-4 relative min-h-87.5 lg:min-h-full rounded-[24px] overflow-hidden group">
            <Image
              src="/about/Core_banner.jpeg"
              alt="Team banner"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={true} 
              loading="eager" 
              className="object-cover group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
