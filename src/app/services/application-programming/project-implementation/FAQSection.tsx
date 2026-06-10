// src/app/services/application-programming/project-implementation/FAQSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function FAQSection() {
  const faqData = [
    { q: "What is Project Implementation?", a: "Project implementation details systematically unpacking, configuring, mapping schemas, performance testing, and launching complex custom software modules into your active runtime environments." },
    { q: "How long does implementation take?", a: "Standard enterprise rollouts vary between 4 to 12 weeks based strictly upon system topological complexities and underlying data dependencies." },
    { q: "Do you provide support?", a: "Yes, every architectural deployment moves into our structured Tier-3 hypercare window, followed by dedicated long-term SLA monitoring contracts." },
    { q: "Can you migrate existing systems?", a: "Data refactoring is core to Money King IT. We engineer custom extraction pipelines to process, scrub, and cleanly transition historical logs into updated schemas with zero state loss." },
    { q: "What industries do you serve?", a: "We primarily support critical high-compliance fields including Fintech, Banking, Healthcare, Global Logistics, and Smart Retail infrastructures." }
  ];

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 space-y-12 bg-[#E5EBEB]">
      <div className="text-center space-y-3">
        <Text variant="label">Inquiries</Text>
        <Text variant="h3">Frequently Answered Queries</Text>
      </div>

      <div className="space-y-4">
        {faqData.map((item, idx) => {
          const isOpen = activeFAQ === idx;
          return (
            <div key={idx} className="border border-zinc-200 rounded-xl bg-white/80 overflow-hidden shadow-xs">
              <button onClick={() => setActiveFAQ(isOpen ? null : idx)} className="w-full p-5 text-left font-bold text-base flex justify-between items-center text-zinc-900 hover:bg-zinc-50 transition-colors cursor-pointer">
                <span>{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <p className="p-5 pt-0 text-sm text-zinc-600 border-t border-zinc-100 mt-2 leading-relaxed">{item.a}</p>
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