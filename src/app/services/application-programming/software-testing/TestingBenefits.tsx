'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Fingerprint, Zap, ShieldCheck, DollarSign, Smile, ArrowUpRight } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function TestingBenefits() {
  const items = [
    { title: 'Zero Critical Bugs', desc: 'Comprehensive path trace scripts intercepting fatal system exceptions before deployment.', icon: ShieldAlert },
    { title: 'Improved Security', desc: 'Deep vulnerability scans protecting network endpoints from standard penetration attacks.', icon: Fingerprint },
    { title: 'Better Performance', desc: 'Isolating server resource constraints to secure lightweight infrastructure components.', icon: Zap },
    { title: 'Faster Deployment', desc: 'Integrating parallel automated build regression layers within active workflows.', icon: ShieldCheck },
    { title: 'Reduced Maintenance Cost', desc: 'Preventing expensive patch operations by catching logical flaws early.', icon: DollarSign },
    { title: 'Customer Satisfaction', desc: 'Sustaining smooth navigation systems which unlock perfect app operational feedback.', icon: Smile },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">Strategic Impact</Text>
        <Text variant="h2">Measurable Operational Impact</Text>
      </div>

      {/* FIXED: Compacted using tight gap-3.5 spacing grid configuration rules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {items.map((item, idx) => {
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
                {/* Compact Interactive Header Action Items */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-teal-50/50 transition-colors">
                    <Icon className="text-zinc-800 group-hover:text-teal-600 transition-colors" size={14} />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
                    <ArrowUpRight size={8} />
                  </div>
                </div>

                {/* Tight Typography Settings */}
                <Text variant="h4" className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight leading-snug">
                  {item.title}
                </Text>
                
                <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                  {item.desc}
                </p>
              </div>

              {/* Seamless Premium Bottom Border Indicator Strip */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}