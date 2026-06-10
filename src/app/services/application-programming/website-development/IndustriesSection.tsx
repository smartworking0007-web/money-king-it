'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Coins, HeartPulse, GraduationCap, ShoppingBag, Truck, Building, Factory, ArrowUpRight } from 'lucide-react';

export default function IndustriesSection() {
  const verticals = [
    { title: 'Banking', icon: Landmark },
    { title: 'Fintech', icon: Coins },
    { title: 'Healthcare', icon: HeartPulse },
    { title: 'Education', icon: GraduationCap },
    { title: 'Retail', icon: ShoppingBag },
    { title: 'Logistics', icon: Truck },
    { title: 'Real Estate', icon: Building },
    { title: 'Manufacturing', icon: Factory },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">Domain Targets</span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">Target Industry Verticals</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {verticals.map((vert, idx) => {
          const Icon = vert.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] cursor-pointer transition-all relative overflow-hidden shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-[#00E5A0]/10 transition-colors">
                    <Icon size={18} className="text-zinc-800" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all shrink-0">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight">{vert.title}</h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}