
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface StatItemProps {
  endValue: number; // Logic chalane ke liye pure numeric point
  suffix?: string;  // '%' symbol toggle karne ke liye
  label: string;
}

// Dynamic Counter Hook Integration Inside Reusable Stat Component
const StatItem: React.FC<StatItemProps> = ({ endValue, suffix = "", label }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const duration = 2000; // Total 2 seconds runtime
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
      <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-2 md:mb-4 w-[160px] inline-block">
        {count}{suffix}
      </span>
      <p className="text-gray-400 text-xs sm:text-sm max-w-[200px] leading-relaxed">
        {label}
      </p>
    </div>
  );
};

export default function WorldwideConnections() {
  return (
    <section className="relative w-full min-h-screen mt-16 md:mt-24 bg-[#040809] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center overflow-hidden antialiased select-none">
      
      {/* 1. Animated Floating & Moving Real Globe Header */}
      <div className="relative flex flex-col items-center mb-6">
        
        {/* Master Container: Handles up/down floating */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center animate-bounce [animation-duration:4s]">
          
          {/* Globe Neon Shadow Glow */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 bg-lime-500/20 rounded-full blur-2xl animate-pulse pointer-events-none" />
          
          {/* Rotating dashed border ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-lime-400/30 animate-spin [animation-duration:10s] pointer-events-none" />
          <div className="absolute inset-2 rounded-full border border-double border-lime-400/20 animate-pulse pointer-events-none" />
          
          {/* Globe Wrapper Mask Box */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full relative overflow-hidden bg-black/40 border border-neutral-800/80 shadow-[0_0_40px_rgba(163,230,53,0.1)]">
            {/* Real Globe Image Element */}
            <Image
              src="/about/globe.jpg" 
              alt="Moving Globe Structure"
              fill
              priority
              className="object-cover object-center animate-spin [animation-duration:40s] opacity-90"
            />
            {/* Glass shading overlay layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10 pointer-events-none rounded-full" />
          </div>
          
          {/* Vertical Laser Beam Element */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-lime-400 to-transparent opacity-60" />
        </div>

        {/* Badge Indicator */}
        <div className="mt-8 flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-lg">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-gray-300">Reaching Every Corner</span>
        </div>
      </div>

      {/* 2. Content Center Stage */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
          Worldwide Connections
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed px-2">
          Collaboration without borders—connecting worldwide teams with ease and efficiency.
        </p>
      </div>

      {/* 3. Core Stats Grid Layout with Dynamic Hook Props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 w-full max-w-5xl mx-auto items-center justify-center border-b border-neutral-900 pb-16">
        <StatItem endValue={100} suffix="%" label="Increase in Progress Tracking" />
        <div className="hidden md:block h-12 w-[1px] bg-neutral-800 mx-auto" />
        <StatItem endValue={75} suffix="%" label="Faster Project Completion Rates" />
        <div className="hidden md:block h-12 w-[1px] bg-neutral-800 mx-auto" />
        <StatItem endValue={90} suffix="%" label="Satisfaction Rate Among Users" />
      </div>

      {/* 4. Two Dynamic Motion Boxes with Hover Glow Effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mt-16 px-2">
        
        {/* Box 1 */}
        <div className="group relative bg-neutral-950/40 backdrop-blur-sm border border-neutral-800/60 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-lime-500/30 cursor-pointer flex flex-col justify-between min-h-[160px]">
          <div className="absolute -inset-px bg-gradient-to-r from-lime-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-400/0 rounded-full blur-[40px] group-hover:bg-lime-400/20 transition-all duration-700 pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <h4 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors duration-300">
              Our Mission
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300 leading-relaxed">
              At Shadow infosystem, our mission is to empower businesses with cutting-edge IT solutions, robust cybersecurity measures, and digital marketing strategies. 
              We are committed to delivering innovative and tailored services that not only meet but exceed the evolving needs of our clients. 
              Through our expertise and unwavering dedication, we strive to be the catalyst for our clients success in the ever-changing landscape of technology.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-end text-xs text-lime-400 font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 pt-4">
            LIVE LATENCY 0.2ms →
          </div>
        </div>

        {/* Box 2 */}
        <div className="group relative bg-neutral-950/40 backdrop-blur-sm border border-neutral-800/60 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-lime-500/30 cursor-pointer flex flex-col justify-between min-h-[160px]">
          <div className="absolute -inset-px bg-gradient-to-r from-lime-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-400/0 rounded-full blur-[40px] group-hover:bg-lime-400/20 transition-all duration-700 pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <h4 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors duration-300">
              Our Vision
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300 leading-relaxed">
              Our vision at Shadow infosystem is to be a trailblazer in the IT industry, recognized for our excellence in cyber security and digital transformation. We aspire to be the go-to partner for businesses seeking reliable and advanced technological solutions. 
              With a focus on continuous innovation, client satisfaction, and ethical practices, we envision a future where businesses thrive in a secure and digitally optimized environment, and Shadow infosystem is at the forefront of this transformation.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-end text-xs text-lime-400 font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 pt-4">
            ACTIVE OPTIMIZATION →
          </div>
        </div>

      </div>

    </section>
  );
}