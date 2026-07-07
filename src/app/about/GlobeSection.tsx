"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface StatItemProps {
  endValue: number;
  suffix?: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({
  endValue,
  suffix = "",
  label,
}) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const duration = 2000;
    const totalFrames = 60;
    const increment = (endValue - start) / totalFrames;
    const frameDuration = duration / totalFrames;

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(counterInterval);
      } else {
        setCount(Math.floor(start));
      }
    }, frameDuration);

    return () => clearInterval(counterInterval);
  }, [endValue]);

  return (
    <div className="flex flex-col items-center text-center px-4">
      <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2 md:mb-4 w-full inline-block">
        {count}
        {suffix}
      </span>
      <p className="text-gray-400 text-xs sm:text-sm max-w-50 leading-relaxed">
        {label}
      </p>
    </div>
  );
};

export default function WorldwideConnections() {
  return (
    /* 
       1. h-auto: Height auto ki hai taaki screen par stretch na ho.
       2. select-none hataya hai: Ab text copy hoga.
       3. mt-16/mt-30: Section ka gap hai, isse kam/zyada kar sakte hain.
    */
    <section className="relative w-full h-auto mt-16 md:mt-30 bg-[#040809] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center antialiased">
      {/* 1. Globe Header */}
      <div className="relative flex flex-col items-center mb-6">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center animate-bounce duration-4000">
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 bg-lime-500/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full relative overflow-hidden bg-black/40 border border-neutral-800/80 shadow-[0_0_40px_rgba(163,230,53,0.1)]">
            <Image
              src="/about/globe.jpg"
              alt="Moving Globe Structure"
              fill
              priority
              sizes="(max-width: 640px) 96px, 128px"
              className="object-cover object-center animate-spin duration-40000 opacity-90"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-black/50 via-transparent to-white/10 pointer-events-none rounded-full" />
          </div>
        </div>
      </div>

      {/* 2. Content */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-linear-to-b from-white to-neutral-400 bg-clip-text text-transparent">
          Worldwide Connections
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed px-2">
          Collaboration without borders—connecting worldwide teams with ease and
          efficiency.
        </p>
      </div>

      {/* 3. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 w-full max-w-5xl mx-auto items-center justify-center border-b border-neutral-900 pb-16">
        <StatItem
          endValue={100}
          suffix="%"
          label="Increase in Progress Tracking"
        />
        <div className="hidden md:block h-12 w-px bg-neutral-800 mx-auto" />
        <StatItem
          endValue={75}
          suffix="%"
          label="Faster Project Completion Rates"
        />
        <div className="hidden md:block h-12 w-px bg-neutral-800 mx-auto" />
        <StatItem
          endValue={90}
          suffix="%"
          label="Satisfaction Rate Among Users"
        />
      </div>

      {/* 4. Motion Boxes */}
      {/* 
          UPAR KARNE KE LIYE: 
          - Agar ye section niche lag raha hai, to is 'mt-16' ko '-mt-10' kar dein.
          - Negative margin lagate hi ye section upar khisak jayega.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mt-10 md:-mt-10 px-2">
        <div className="group relative bg-neutral-950/40 backdrop-blur-sm border border-neutral-800/60 rounded-2xl p-8 hover:border-lime-500/30 transition-all duration-500 flex flex-col justify-between min-h-40">
          <h4 className="text-lg font-medium text-neutral-200">Our Mission</h4>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mt-2">
            At Shadow infosystem, our mission is to empower businesses with
            cutting-edge IT solutions, robust cybersecurity, and digital
            marketing.
          </p>
        </div>
        <div className="group relative bg-neutral-950/40 backdrop-blur-sm border border-neutral-800/60 rounded-2xl p-8 hover:border-lime-500/30 transition-all duration-500 flex flex-col justify-between min-h-40">
          <h4 className="text-lg font-medium text-neutral-200">Our Vision</h4>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mt-2">
            Our vision is to be a trailblazer in the IT industry, recognized for
            excellence in cyber security and digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
