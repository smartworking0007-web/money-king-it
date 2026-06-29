"use client";

import React, { useEffect, useState, useRef } from "react";

// Dual-Direction Rolling Number Component for High-End Dashboard Feeling
interface RollingNumberProps {
  targetStr: string; // e.g., "90" or "40"
}

const RollingNumber: React.FC<RollingNumberProps> = ({ targetStr }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const firstDigit = targetStr[0] || "0";
  const secondDigit = targetStr[1] || "0";

  // Creating full sequence arrays for seamless multi-item transform translations
  const digitsUp = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const digitsDown = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

  const firstIdx = digitsUp.indexOf(firstDigit);
  // Reversing final stop target for the downward matching index tracking
  const secondIdx = digitsDown.indexOf(secondDigit);

  return (
    <span className="inline-flex overflow-hidden h-[48px] sm:h-[56px] font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter leading-none">
      {/* First Digit: Moves UPWARDS (Increasing) */}
      <span className="relative block h-full overflow-hidden">
        <span
          className="block transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: animated ? `translateY(-${firstIdx * 10}%)` : "translateY(0%)" }}
        >
          {digitsUp.map((d, i) => (
            <span key={i} className="block h-[48px] sm:h-[56px]">
              {d}
            </span>
          ))}
        </span>
      </span>

      {/* Second Digit: Moves DOWNWARDS (Decreasing) */}
      <span className="relative block h-full overflow-hidden">
        <span
          className="block transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: animated ? `translateY(-${secondIdx * 10}%)` : "translateY(0%)" }}
        >
          {digitsDown.map((d, i) => (
            <span key={i} className="block h-[48px] sm:h-[56px]">
              {d}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
};

export default function VideoTestimonialSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full bg-[#040809] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center overflow-hidden antialiased select-none">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        
        {/* 1. TOP VIDEO FRAME WRAPPER */}
        <div className="relative w-full rounded-[24px] overflow-hidden bg-neutral-900/40 border border-neutral-900 shadow-2xl group aspect-video max-h-[520px]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/about/IT.mp4" // 👈 Apne public folder ka video path yahan set karein
            autoPlay
            loop
            muted
            playsInline
          />
          
          {/* Custom Action Trigger Hotspot Screen Click Layer */}
          <div 
            onClick={togglePlay}
            className="absolute inset-0 w-full h-full bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
          >
            {/* Custom Dynamic Play/Pause Button overlay hud element */}
            <div className={`p-4 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md text-white shadow-2xl transform transition-all duration-300 ${isPlaying ? 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100 scale-100'}`}>
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* 2. BOTTOM CORE STATS & TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
          
          {/* LEFT SECTION: STATS PILLS COMPONENT (4 Columns Column Scope Layout) */}
          <div className="lg:col-span-4 flex flex-col gap-4 w-full">
            
            {/* STAT BLOCK 1: 90% PRODUCTIVITY ACCELERATION */}
            <div className="bg-[#0b1113]/30 border border-neutral-900/80 rounded-[20px] p-5 flex flex-col justify-between items-start h-[125px] relative overflow-hidden backdrop-blur-sm">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-baseline">
                  <RollingNumber targetStr="95" />
                  <span className="text-3xl sm:text-4xl font-bold text-white tracking-tighter">%</span>
                </div>
                {/* Product Meta Badge Tag info metrics overlay */}
                <div className="inline-flex items-center gap-1 bg-[#121a1c] border border-neutral-800/60 px-2.5 py-0.5 rounded-full">
                  <span className="text-[10px] font-medium text-neutral-400 tracking-wide flex items-center gap-1">
                    <svg className="w-2.5 h-2.5 text-[#a3e635]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    Product
                  </span>
                </div>
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm font-light tracking-wide">
                Client Satisfaction Rate for FinTech Deployments
              </p>
            </div>

            {/* STAT BLOCK 2: 40+ MEMBERS EXPERT CREW */}
            <div className="bg-[#0b1113]/30 border border-neutral-900/80 rounded-[20px] p-5 flex flex-col justify-between items-start h-[125px] relative overflow-hidden backdrop-blur-sm">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-baseline">
                  <RollingNumber targetStr="50" />
                  <span className="text-3xl sm:text-4xl font-bold text-white tracking-tighter">+</span>
                </div>
                {/* Team Meta Badge Tag block */}
                <div className="inline-flex items-center gap-1 bg-[#121a1c] border border-neutral-800/60 px-2.5 py-0.5 rounded-full">
                  <span className="text-[10px] font-medium text-neutral-400 tracking-wide flex items-center gap-1">
                    <svg className="w-2.5 h-2.5 text-[#a3e635]" fill="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Team
                  </span>
                </div>
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm font-light tracking-wide">
                Expert Software Engineers & IT Consultants
              </p>
            </div>

          </div>

          {/* RIGHT SECTION: METRIC QUOTES & SIGNATURE COMPONENT (8 Columns Layout) */}
          <div className="lg:col-span-8 space-y-8 lg:pl-6 text-left flex flex-col justify-center h-full pt-2">
            
            {/* Main Editorial Testimonial Review Text Content block */}
            <p className="text-xl sm:text-2xl md:text-[26px] font-medium text-neutral-200 leading-[1.45] tracking-tight font-sans">
              &ldquo;Truly impressive. The digital frameworks and customized FinTech solutions provided by Money King IT are fast, highly secure, and blend into daily financial operations without any friction. We bring your technology vision to life with agile development, functional architectures, and cutting-edge software engineering—delivering scalable IT ecosystems shaped by technical excellence.&rdquo;
            </p>

            {/* Signature Credentials Area Block */}
            <div className="space-y-1.5 pt-2">
              {/* Premium Inline Vectorized Calligraphy Effect mapping Diego Simone mock parameters */}
              <h4 
                className="text-2xl sm:text-3xl text-[#a2e635]/90 tracking-wide select-none filter drop-shadow font-light"
                style={{ 
                  fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive, sans-serif",
                  fontStyle: "italic" 
                }}
              >
                Amarjeet Chaddhha
              </h4>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 font-semibold">
                CEO at Money King IT
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}