"use client";

import React from "react";
import Image from "next/image";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// 1. Reusable Card Component with Grid Lines + Star Particles Hover Effect
const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative bg-[#0b1113]/40 border border-neutral-900/80 rounded-[24px] p-8 flex flex-col justify-start min-h-[220px] overflow-hidden transition-all duration-500 hover:border-neutral-800/80 hover:bg-[#0c1416]/60">
      
      {/* BACKGROUND EFFECTS ON HOVER */}
      
      {/* A. Transparent Grid Lines (Reveals on Hover) */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* B. Subtle Background Radial Glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#a3e635]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* C. Fixed Floating Star Particles inside Card Background */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute top-4 right-12 w-[2px] h-[2px] bg-white rounded-full animate-pulse" />
        <span className="absolute top-12 right-24 w-[3px] h-[3px] bg-white/80 rounded-full animate-ping [animation-duration:3s]" />
        <span className="absolute bottom-16 right-8 w-[1.5px] h-[1.5px] bg-white rounded-full" />
        <span className="absolute top-20 right-4 w-[2px] h-[2px] bg-[#a3e635] rounded-full animate-pulse [animation-duration:2s]" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 space-y-6">
        {/* Icon Circle */}
        <div className="w-12 h-12 rounded-full bg-neutral-900/90 border border-neutral-800/50 flex items-center justify-center shadow-inner group-hover:border-[#a3e635]/30 transition-colors duration-300">
          {icon}
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-white tracking-wide group-hover:text-neutral-100 transition-colors duration-300">
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

// 2. Main Responsive Section Component
export default function CoreValues() {
  
  // Custom Raw SVGs Icons mimicking your exact layout
  const valueItems = [
    {
      id: 1,
      title: "Innovation in Action",
      description: "Smarter architectures. Faster deployment. Powered by next-gen tech integration and the best minds in custom software development.",
      icon: (
        <svg className="w-5 h-5 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Resilience with Confidence",
      description: "We design strong, adaptable tech platforms and scalable digital strategies to navigate enterprise software challenges with complete confidence.",
      icon: (
        <svg className="w-5 h-5 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.001 9.001 0 018.716 5.253M12 3a9.001 9.001 0 00-8.716 5.253" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Tailored IT Solutions",
      description: "Deliver high-performance, robust tech solutions that simplify complex business operations and drive measurable engineering results consistently.",
      icon: (
        <svg className="w-5 h-5 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Dependability & Trust",
      description: "Reliable backend performance and transparent development sprints you can trust for continuous deployment and uninterrupted tech operations.",
      icon: (
        <svg className="w-5 h-5 text-[#a3e635]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#040809] text-white py-24 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center overflow-hidden select-none antialiased">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        
        {/* UPPER TITLE HEADER BLOCK */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Main Title Tag */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#121a1c] border border-neutral-800/60 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              <span className="text-xs font-medium text-neutral-300 tracking-wide">Core Values</span>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15]">
              Our Core Values
            </h3>
          </div>

          {/* Right Concept Paragraph */}
          <div className="lg:col-span-6 lg:pt-14">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-xl lg:ml-auto">
              We view complex technical challenges not as roadblocks, but as blueprints to engineer scalable software solutions that traditional thinking misses. 
            </p>
          </div>
        </div>

        {/* LOWER SPLIT LAYOUT (4 Grid Cards + Right Standing Image Block) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Area: 2x2 Clean Responsive Grid */}
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

          {/* Right Area: Large Styled Portrait Cover Banner */}
          <div className="lg:col-span-4 relative min-h-[350px] sm:min-h-[460px] lg:min-h-full rounded-[24px] overflow-hidden group">
            <Image
              src="/about/Core_banner.jpeg" // Aap is placeholder path ko apni real image file se map karein
              alt="Team productivity and core values workflow"
              fill
              sizes="(max-w-1024px) 100vw, 33vw"
              className="object-cover object-center grayscale brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              priority
            />
            {/* Soft Ambient Vignette Overlay to merge with design theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040809]/40 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}