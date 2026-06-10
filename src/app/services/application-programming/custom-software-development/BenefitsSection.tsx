'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    { title: 'Faster Operations', text: 'Accelerate cycle tasks by optimizing the specific data structures directly handling execution layers.' },
    { title: 'Better Security', text: 'Minimize standard system security risks by building isolated custom application logic from scratch.' },
    { title: 'Reduced Costs', text: 'Eliminate long-term commercial software seats overhead with complete platform ownership rights.' },
    { title: 'Higher Productivity', text: 'Minimize multi-platform data context switching with centralized single-pane interface structures.' },
    { title: 'Easy Scalability', text: 'Introduce complex cloud horizontal autoscaling modules easily without vendor blockages.' },
    { title: 'Digital Transformation', text: 'Re-align outdated analog structures into secure, high-speed digital operation systems.' },
  ];

  return (
    <section className="py-16 sm:py-24 relative w-full text-left">
      {/* FIXED: Linter warning w-[500px] and h-[500px] replaced with canonical classes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#00E5A0]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">
          Strategic Advantages
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">
          Measurable Operational Impact
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 font-light max-w-xl mx-auto">
          Engineering tailored software properties that unlock definitive efficiency benchmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-[#00E5A0]/10 group-hover:border-[#00E5A0]/30 transition-all duration-300">
                  <Sparkles className="text-zinc-800 group-hover:text-zinc-900 transition-colors" size={18} />
                </div>
                
                <div className="w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all duration-300 shrink-0">
                  <ArrowUpRight size={13} />
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight transition-colors duration-200 group-hover:text-black">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 font-light leading-relaxed">
                {benefit.text}
              </p>
            </div>

            {/* FIXED: h-[3px] changed to h-0.75 */}
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}