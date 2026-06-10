'use client';

import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function CTASection() {
  return (
    <section className="py-14 sm:py-16 w-full relative overflow-hidden bg-white border border-zinc-200/80 rounded-3xl text-center px-6 shadow-xs group hover:border-[#00E5A0] transition-all duration-300">
      {/* Soft dynamic neon glow behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,160,0.06),transparent_65%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* FIXED: Applied Typography system with high-contrast text color tokens */}
        <Text variant="h2" className="text-zinc-900 tracking-tight font-black">
          Ready to Build Your Website?
        </Text>
        
        <p className="mt-4 text-xs sm:text-sm text-zinc-600 font-normal max-w-md mx-auto leading-relaxed">
          Let&apos;s create a high-performance website that grows your business. Get in touch with our engineering squad today.
        </p>

        {/* Action Triggers Grid */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xs sm:max-w-none mx-auto">
          <button className="w-full sm:w-auto bg-[#00E5A0] text-zinc-950 font-black px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-400 hover:scale-102 transition-all cursor-pointer shadow-sm shadow-[#00E5A0]/10">
            Get Started <ArrowRight size={14} />
          </button>
          
          <button className="w-full sm:w-auto bg-zinc-900 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-zinc-800 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs">
            <Calendar size={14} className="text-zinc-400" /> Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}