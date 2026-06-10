'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, GitMerge, Settings, CheckCircle, Flame, HeartPulse, ArrowUpRight } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function TestingTypesSection() {
  const structures = [
    { title: 'Unit Testing', desc: 'Isolating molecular methods to secure basic processing logic blocks.', icon: Layers },
    { title: 'Integration Testing', desc: 'Validating operational parameters between discrete sub-system connections.', icon: GitMerge },
    { title: 'System Testing', desc: 'Holistic system validations targeting full end-to-end user journeys.', icon: Settings },
    { title: 'Acceptance Testing', desc: 'Matching technical deliverables accurately against baseline project goals.', icon: CheckCircle },
    { title: 'Smoke Testing', desc: 'Rapid build diagnostics checking initial operational health variables.', icon: Flame },
    { title: 'Sanity Testing', desc: 'Targeted component sweeps validating specific update patches directly.', icon: HeartPulse },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">Architecture Core</Text>
        <Text variant="h2">Testing Taxonomy Matrix</Text>
      </div>

      {/* FIXED: Strict gap-3.5 spacing with dense responsive wrapping rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {structures.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: idx * 0.02 }}
              className="group bg-white border border-zinc-200/80 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer min-h-max"
            >
              <div>
                {/* Compact Top Action Navigation Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center text-zinc-700 group-hover:bg-teal-50/50 transition-colors">
                    <Icon size={14} />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
                    <ArrowUpRight size={8} />
                  </div>
                </div>

                {/* Tight Typography Configuration */}
                <Text variant="h4" className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight leading-snug">
                  {item.title}
                </Text>
                
                <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                  {item.desc}
                </p>
              </div>

              {/* Seamless Bottom Indicator Action Strip */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}