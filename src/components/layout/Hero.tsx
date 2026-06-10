// src/components/layout/Hero.tsx

"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[75vh] md:min-h-screen bg-black overflow-x-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero4.png"
          alt="Money King IT"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-110 contrast-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[75vh] md:min-h-screen flex-col items-center justify-center text-center px-6 py-16">
        
        <div className="max-w-5xl">
          
          <h2 className="text-[#00D094] text-xs md:text-2xl font-bold uppercase tracking-[0.2em] mb-3">
            Accelerate Your Business
          </h2>

          <h1 className="text-white text-4xl md:text-7xl font-extrabold mb-4 leading-[1.1]">
            Technology That <br className="hidden md:block" /> Drives Success
          </h1>

          <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Unlocking New Horizons with Next-Gen IT Solutions for Growth and
            Innovation.
          </p>

          <div className="mt-8 md:mt-12">
            <button className="bg-[#00D094] text-black px-8 py-3 md:px-12 md:py-5 rounded-full font-bold text-sm md:text-lg hover:bg-[#00b07d] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#00D094]/20">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}