'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '@/components/ui/Text';

export default function EcommerceTrusted() {
  const logos = ['Americashop', 'Money King Gold', 'Nexa Marketplace', 'Apex Wholesale', 'Vanguard Retail'];
  const metrics = [
    { value: '3.8x', label: 'Average Conversion Trajectory' },
    { value: '99.99%', label: 'Checkout Pipeline Sync SLA' },
    { value: '<240ms', label: 'Catalog Payload Render Latency' },
  ];

  return (
    <section className="w-full text-left">
      <div className="bg-white border border-zinc-200/80 p-5 rounded-2xl shadow-xs">
        <Text variant="body" className="text-[10px] uppercase font-mono font-black text-zinc-400 tracking-wider mb-5 text-center">
          Empowering commerce pipelines globally
        </Text>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center opacity-60">
          {logos.map((logo, idx) => (
            <span key={idx} className="text-xs sm:text-sm font-black tracking-tight text-zinc-800 font-mono uppercase">
              {logo}
            </span>
          ))}
        </div>

        <div className="border-t border-zinc-100 mt-6 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {metrics.map((num, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-lg sm:text-xl font-black text-zinc-900 font-mono">{num.value}</div>
              <div className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-bold mt-0.5">{num.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}