'use client';

import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function CrossCTA() {
  return (
    <section className="py-14 w-full relative overflow-hidden bg-white border border-zinc-200/80 rounded-3xl text-center px-6 shadow-xs group hover:border-teal-500 transition-all duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05),transparent_65%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <Text variant="h2" className="text-zinc-900 tracking-tight font-black">
          Ready to Launch Across Every Platform?
        </Text>
      
        <p className="mt-4 text-xs sm:text-sm text-zinc-600 font-normal max-w-md mx-auto leading-relaxed">
          Secure robust structural app stability from a single codebase configuration track. Connect with our engineering desk squad now.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xs sm:max-w-none mx-auto">
          <button className="w-full sm:w-auto bg-teal-600 text-white font-black px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-500 transition-all cursor-pointer shadow-sm">
            Schedule a Free Consultation <ArrowRight size={14} />
          </button>
          <button className="w-full sm:w-auto bg-zinc-900 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-zinc-800 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs">
            <Calendar size={14} className="text-zinc-400" /> Request a Project Quote
          </button>
        </div>
      </div>
    </section>
  );
}