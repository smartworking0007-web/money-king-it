'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Globe, Laptop, Tv,  } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function PlatformShowcase() {
  const devices = [
    { name: 'iOS Applications', segment: 'Native Apple Framework', icon: Smartphone },
    { name: 'Android Applications', segment: 'Google Device Ecosystem', icon: Smartphone },
    { name: 'Web Applications', segment: 'Next-Gen PWA Standards', icon: Globe },
    { name: 'Windows Apps', segment: 'Win64 Native Logic', icon: Monitor },
    { name: 'macOS Applications', segment: 'Universal App Binary', icon: Laptop },
    { name: 'Smart TV System Apps', segment: 'Custom Interface Profiles', icon: Tv },
  ];

  return (
    <section className="w-full text-left py-4">
      <div className="bg-white/60 border border-zinc-200/80 p-5 rounded-2xl backdrop-blur-md shadow-xs">
        <Text variant="body" className="text-[10px] font-mono font-black text-center text-zinc-400 uppercase tracking-widest mb-6">
          Multi-Platform Code Compilation Pipeline
        </Text>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {devices.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: idx * 0.02 }}
              className="p-3.5 bg-white border border-zinc-200/80 rounded-xl text-center flex flex-col items-center hover:border-teal-500 hover:shadow-xs transition-all duration-300 cursor-pointer min-h-max"
            >
              <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 flex items-center justify-center text-slate-800 mb-2.5">
                <item.icon size={15} />
              </div>
              <div className="text-xs font-extrabold text-slate-900 tracking-tight leading-tight">{item.name}</div>
              <span className="text-[9px] font-mono mt-0.5 text-zinc-400 block">{item.segment}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}