// src/app/services/application-programming/project-implementation/BenefitsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
  const trackRecords = [
    { count: "500+", text: "Enterprise Systems Delivered" },
    { count: "99%", text: "Platform Core Success Ratios" },
    { count: "24/7", text: "Continuous L3 Developer Support" },
    { count: "15+", text: "Years Technological Engineering" }
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl max-w-7xl mx-auto px-6 py-20 text-center shadow-lg">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] background-size:20px_20px" />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
        {trackRecords.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.96 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="space-y-1"
          >
            <div className="text-4xl md:text-5xl font-900 text-emerald-400 tracking-tighter font-sans">
              {item.count}
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-175px mx-auto leading-relaxed uppercase tracking-widest">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}