'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function CrossTestimonials() {
  const references = [
    { statement: 'Money King Software synthesized our application tracks into one responsive code layout beautifully. Native performance metrics achieved are outstanding.', client: 'VP of Platform, TechPulse IT' },
    { statement: 'The automated offline syncing modules developed pass structural validation checks cleanly under deep network latency simulations.', client: 'Lead Architect, Victrix Inc.' },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">Corporate Validation</Text>
        <Text variant="h2">Client Success Testimonials</Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto px-2">
        {references.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-teal-500 shadow-xs transition-all duration-300 relative min-h-40 cursor-pointer"
          >
            <div>
              <div className="flex gap-0.5 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed tracking-tight ">
                &ldquo;{item.statement}&rdquo;
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-3 mt-4 flex items-center justify-between">
              <span className="text-xs font-black text-slate-900 leading-tight">{item.client}</span>
              <Quote size={16} className="text-teal-500/10" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}