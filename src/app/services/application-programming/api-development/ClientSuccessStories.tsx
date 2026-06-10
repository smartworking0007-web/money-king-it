'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function ClientSuccessStories() {
  const feedback = [
    { author: 'Technical Architect, Victrix Inc.', phrase: 'Money King IT refactored our legacy communication layers into microservice API clusters with zero programmatic packet loss events.', brand: 'Victrix Infrastructure' },
    { author: 'Director of Platform, Americashop', phrase: 'The headless GraphQL schema synchronization loops handled our holiday traffic surges seamlessly while tracking optimal latency parameters.', brand: 'Americashop Platform' },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Text variant="label" className="inline-block mb-1">Corporate Sync</Text>
        <Text variant="h2" className="text-slate-950 font-black">Client Success Stories</Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto px-2">
        {feedback.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-teal-500 shadow-xs transition-all duration-300 relative min-h-44 cursor-pointer"
          >
            <div>
              <Quote className="text-teal-500/20 mb-3" size={24} />
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed tracking-tight">
                &ldquo;{item.phrase}&rdquo;
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-3 mt-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-slate-900 leading-tight">{item.author}</div>
                <span className="text-[10px] text-zinc-400 font-mono mt-0.5 block">{item.brand}</span>
              </div>
              <Sparkles size={12} className="text-teal-500/40" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}