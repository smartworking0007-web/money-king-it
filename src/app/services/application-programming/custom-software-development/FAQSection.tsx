'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    { q: 'What is custom software development?', a: 'Custom software development is the process of designing, building, deploying, and maintaining software apps configured specifically for a defined set of business users, processing logics, or operational goals.' },
    { q: 'How long does development take?', a: 'Simple applications can run within 3-4 months, whereas highly interconnected web ecosystems or robust multi-module enterprise software tools might scale between 6 to 9+ months.' },
    { q: 'How much does custom software cost?', a: 'Project estimation shifts heavily based upon structural workflow depth, third-party framework data dependencies, and cross-platform endpoints. Contact our analysts for an exact breakdown.' },
    { q: 'Do you provide maintenance?', a: 'Yes, we provide fully-fledged SLA runtime maintenance covering technical software optimization, continuous hosting monitoring, security tracking patches, and platform adjustments.' },
    { q: 'Can existing software be upgraded?', a: 'Yes, we can analyze legacy code ecosystems, extract logic points, and re-architect systems into modern, performant frontend and backend clouds.' },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-12 relative max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00E5A0] font-bold block">Faq</span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
          Frequently Answered Logistics
        </h2>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="border-b border-zinc-300 overflow-hidden text-left">
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:text-black transition-colors cursor-pointer"
              >
                <span className="font-bold text-zinc-900 text-xs sm:text-base leading-snug">{faq.q}</span>
                {isOpen ? <Minus size={16} className="text-[#00E5A0] shrink-0" /> : <Plus size={16} className="text-zinc-400 shrink-0" />}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="pb-5 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}