'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function CaseStudiesSection() {
  const items = [
    { type: 'Fintech Engine', title: 'Loan Management System', metrics: '45% operational speed optimization achieved' },
    { type: 'Enterprise Tool', title: 'CRM Automation Platform', metrics: 'Over 2.4M user endpoints managed actively' },
    { type: 'Lending System', title: 'Fintech Lending Platform', metrics: 'Successfully processed $140M+ in volume' },
  ];

  return (
    <section className="py-16 sm:py-24 relative w-full text-left">
      {/* FIXED: w-[500px] and h-[500px] standard classes map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#00E5A0]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">
          Case Studies
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">
          Proven System Deliveries
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 font-light max-w-xl mx-auto">
          Real-world architecture deployment instances scaling live business performance metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            /* FIXED: min-h-[260px] dynamic scale warning resolved to min-h-65 */
            className="group bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer min-h-65"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] sm:text-xs font-mono uppercase text-zinc-900 bg-[#00E5A0]/10 border border-[#00E5A0]/30 px-2.5 py-1 rounded-md font-bold">
                  {item.type}
                </span>
                
                <div className="w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all duration-300 shrink-0">
                  <ArrowUpRight size={13} />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight leading-tight transition-colors duration-200 group-hover:text-black">
                {item.title}
              </h3>
            </div>
            
            <div className="pt-6 border-t border-zinc-100 flex items-center gap-2 mt-4 text-left">
              <TrendingUp size={14} className="text-[#00E5A0] shrink-0" />
              <span className="text-[11px] sm:text-xs text-zinc-600 font-bold font-mono tracking-tight group-hover:text-zinc-900 transition-colors">
                {item.metrics}
              </span>
            </div>

            {/* FIXED: h-[3px] changed to h-0.75 */}
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}