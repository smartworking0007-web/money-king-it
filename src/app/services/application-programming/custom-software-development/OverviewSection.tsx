'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Lock, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function OverviewSection() {
  const cards = [
    { title: 'Business Automation', description: 'Eliminate manual errors and overheads by turning your highly repetitive operational tasks into smooth algorithms.', icon: Cpu },
    { title: 'Workflow Optimization', description: 'Align complex, fragmented systems into unified structural chains to clear operational bottlenecks.', icon: Zap },
    { title: 'Enhanced Security', description: 'Mitigate standard off-the-shelf system vulnerabilities with personalized, sandboxed source code security architecture.', icon: Lock },
    { title: 'Unlimited Scalability', description: 'Design frameworks built explicitly to absorb structural load expansion seamlessly as your user base demands scale.', icon: TrendingUp },
  ];

  return (
    <section className="py-16 sm:py-24 relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        <div className="lg:sticky lg:top-28 text-left">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">
            Strategic Paradigm
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 mt-2 leading-tight">
            Why Custom Beats <br className="hidden lg:inline" /> Off-The-Shelf
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            Ready-made software forces your business to model workflows around pre-built design limitations. 
            Custom engineering flips this paradigm, rendering infrastructure engineered dynamically around your precise operational logic.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-[#00E5A0]/10 group-hover:border-[#00E5A0]/30 transition-all duration-300">
                      <Icon className="text-zinc-800 group-hover:text-zinc-900 transition-colors" size={20} />
                    </div>
                    
                    <div className="w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all duration-300 shrink-0">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight transition-colors duration-200 group-hover:text-black">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* FIXED: Linter arbitrary value removed */}
                <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}