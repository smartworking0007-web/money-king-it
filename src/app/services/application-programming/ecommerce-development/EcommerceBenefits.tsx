'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Smile, Zap, Activity, Lock, Target, ArrowUpRight } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function EcommerceBenefits() {
  const outcomes = [
    { title: 'Increased Sales', text: 'Accelerate cycle tasks by optimizing custom storefront layouts flawlessly.', icon: TrendingUp },
    { title: 'Better Customer Experience', text: 'Flawless responsive navigation systems driving maximum retention benchmarks.', icon: Smile },
    { title: 'Faster Checkout', text: 'Single-token processing frameworks minimizing abandoned user carts.', icon: Zap },
    { title: 'Improved Conversion Rate', text: 'Tailored interface elements driving definitive business growth indicators.', icon: Activity },
    { title: 'Secure Transactions', text: 'Strict end-to-end multi-currency token logic passing full validation.', icon: Lock },
    { title: 'Business Growth', text: 'Scalable structural properties built to accommodate brand expansion pipelines.', icon: Target },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">Strategic Impact</Text>
        <Text variant="h3">Measurable Operational Benefits</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {outcomes.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group bg-white border border-zinc-200/80 p-4 rounded-xl flex flex-col justify-between hover:border-teal-500 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden cursor-pointer min-h-max"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-teal-50/50 transition-colors">
                  <benefit.icon className="text-zinc-800 group-hover:text-teal-600 transition-colors" size={14} />
                </div>
                <div className="w-4 h-4 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all shrink-0">
                  <ArrowUpRight size={8} />
                </div>
              </div>

              <Text variant="body" className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight leading-snug">
                {benefit.title}
              </Text>
              <p className="text-[11px] text-zinc-500 mt-1 font-light leading-relaxed tracking-tight">
                {benefit.text}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100 group-hover:bg-teal-500 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}