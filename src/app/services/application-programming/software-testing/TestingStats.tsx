'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bug, CheckSquare, Heart, Clock } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function TestingStats() {
  const metrics = [
    { value: '99%', label: 'Bug Detection Rate', icon: Bug },
    { value: '100+', label: 'Projects Tested', icon: CheckSquare },
    { value: '50+', label: 'Happy Clients', icon: Heart },
    { value: '24/7', label: 'Support SLA', icon: Clock },
  ];

  return (
    <section className="py-12 w-full text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-2">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-zinc-200/80 p-6 rounded-2xl flex flex-col items-center group text-center hover:border-teal-500 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center mb-4 group-hover:bg-teal-50/50 transition-colors">
                <Icon className="text-zinc-800 group-hover:text-teal-600 transition-colors" size={18} />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-zinc-900 font-mono tracking-tight">{metric.value}</span>
              <Text variant="h5" className="text-xs text-zinc-400 font-extrabold mt-1.5 font-mono uppercase tracking-wider">{metric.label}</Text>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}