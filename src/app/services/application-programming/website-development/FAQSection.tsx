'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function FAQSection() {
  const faqs = [
    { q: 'How long does website development take?', a: 'Standard corporate deployments take 3-5 weeks, while complex custom enterprise web platforms can scale between 6-12 weeks depending on system architecture constraints.' },
    { q: 'What technologies do you use?', a: 'We compile interfaces using Next.js 15, React, TypeScript, and Tailwind CSS on the frontend, supported by Node.js, NestJS, Python, or robust cloud databases.' },
    { q: 'Is the website mobile responsive?', a: 'Every codebase is built with mobile-first viewport scaling logic, ensuring native compatibility across all mobile, tablet, and desktop devices.' },
    { q: 'Will my website be SEO friendly?', a: 'Yes, our Next.js architecture utilizes advanced Server-Side Rendering (SSR) alongside structured layout semantic schemas for top search visibility.' },
    { q: 'Do you provide website maintenance?', a: 'We back all production deliveries with routine infrastructure maintenance SLAs covering continuous updates, patch monitors, and core security syncs.' },
    { q: 'Can you redesign my existing website?', a: 'Our migration teams can fully refactor outdated legacy web applications into high-performance, modular modern stacks without payload data disruption.' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-12 relative w-full text-left">
      {/* Section Typography Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Text variant="label" className="inline-block mb-2">FAQ Center</Text>
        <Text variant="h2" className="text-zinc-900">Frequently Asked Queries</Text>
      </div>

      {/* FIXED: Gray blocks fully replaced with high-contrast, clean white accordion wrappers */}
      <div className="max-w-3xl mx-auto space-y-3 px-2">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:border-zinc-300"
            >
              <button
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="w-full py-4 px-5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-zinc-800 hover:text-black transition-colors focus:outline-none cursor-pointer"
              >
                <span className={`transition-colors duration-200 ${isOpen ? 'text-emerald-600' : 'text-zinc-800'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed border-t border-zinc-100 pt-3">
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