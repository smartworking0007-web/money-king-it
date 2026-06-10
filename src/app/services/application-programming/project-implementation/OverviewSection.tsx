'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Lock, TrendingUp } from 'lucide-react';

export default function OverviewSection() {
  const cards = [
    { title: 'Business Automation', description: 'Eliminate manual errors and overheads by turning your highly repetitive operational tasks into smooth algorithms.', icon: Cpu },
    { title: 'Workflow Optimization', description: 'Align complex, fragmented systems into unified structural chains to clear operational bottlenecks.', icon: Zap },
    { title: 'Enhanced Security', description: 'Mitigate standard off-the-shelf system vulnerabilities with personalized, sandboxed source code security architecture.', icon: Lock },
    { title: 'Unlimited Scalability', description: 'Design frameworks built explicitly to absorb structural load expansion seamlessly as your user base demands scale.', icon: TrendingUp },
  ];

  return (
    <section className="py-24 bg-[#E5EBEB] border-t border-zinc-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00E5A0] font-bold">Strategic Paradigm</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
              Why Custom Beats Off-The-Shelf
            </h2>
            <p className="mt-4 text-zinc-700 font-light leading-relaxed">
              Ready-made software forces your business to model workflows around pre-built design limitations. 
              Custom engineering flips this paradigm, rendering infrastructure engineered dynamically around your precise operational logic.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-white/90 border border-zinc-200 rounded-xl hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E5EBEB] flex items-center justify-center border border-zinc-300 group-hover:border-[#00E5A0] transition-colors">
                  <card.icon className="text-[#00E5A0]" size={22} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mt-5 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-zinc-600 mt-2 font-light leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}