'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '@/components/ui/Text';

export default function TrustedCompanies() {
  const logos = ['Money King Financial', 'Victrix Inc.', 'TechPulse IT', 'Nexa Lending', 'Omni Retail'];
  
  const numbers = [
    { value: '400k+', label: 'Automated Scripts Executed' },
    { value: '99.8%', label: 'Systems Uptime Guarded' },
    { value: '12M+', label: 'API Payloads Validated' },
  ];

  return (
    <section className="py-6 w-full text-left">
      <div className="bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-3xl shadow-xs">
        <Text variant="body" className="text-xs uppercase font-mono font-black text-zinc-400 tracking-wider mb-6 text-center">
          Trusted to safeguard operations at scale
        </Text>
        
        {/* Responsive Flex Flow Grid For Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-60">
          {logos.map((logo, index) => (
            <span key={index} className="text-sm font-black tracking-tight text-zinc-800 font-mono uppercase text-center">
              {logo}
            </span>
          ))}
        </div>

        <div className="border-t border-zinc-100 mt-8 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {numbers.map((num, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="text-xl sm:text-2xl font-black text-zinc-900 font-mono">{num.value}</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 uppercase font-mono tracking-wider font-bold mt-0.5">{num.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}