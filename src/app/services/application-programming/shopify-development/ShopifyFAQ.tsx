'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function ShopifyFAQ() {
  const problems = [
    { q: 'What is Shopify Hydrogen and when should my business utilize headless configurations?', a: 'Shopify Hydrogen is a modern React-based framework that allows developers to separate your front display layer from back transaction systems, unlocking instant loading states that increase conversions.' },
    { q: 'How do you transfer complex database variations from WooCommerce or Magento models safely?', a: 'We construct sandboxed migration scripts that cleanly transfer complete customer purchasing profiles, SKU matrices, and active balances with absolute zero data drops.' },
    { q: 'Can custom public or private apps integrate directly with internal ERP systems?', a: 'Yes, we specialize in developing isolated custom applications that bridge internal corporate asset records with Shopify backend repositories through webhooks.' },
    { q: 'What procedures enforce high speed scores across heavy media layout fields?', a: 'We refactor code templates, implement aggressive asset lazy loading scripts, and eliminate redundant legacy script fragments to hit sub-second parameters.' },
    { q: 'Is multi-store cross-channel inventory tracking managed concurrently?', a: 'Shopify Plus architectures allow developers to configure dynamic multi-warehouse telemetry logic to adjust store quantities simultaneously.' },
    { q: 'How do you handle localized multi-currency taxation logic tracks during checkouts?', a: 'We sync advanced third-party payment rails that automatically process precise coordinate tax mappings and compute local final invoices safely.' },
    { q: 'Are your checkout customization loops compliant with global banking standards?', a: 'Every payment flow we structure runs exclusively inside unified secure environments that adhere strictly to international PCI-DSS conditions.' },
    { q: 'Can you map automated multi-tiered promotional coupon scripts into carts?', a: 'Yes, we integrate rules engines that evaluate customer cart parameters to apply precise volume discounts without slowing down paths.' },
    { q: 'What metrics are tracked inside post-launch maintenance SLA pipelines?', a: 'Our diagnostic branch tracks checkout path stability logs, public API security patches, and persistent backend monitor systems 24/7.' },
    { q: 'How early do your UI UX design teams wire store layout prototypes?', a: 'We operate a design-first pipeline mapping exact conversion journeys and checkout fields before writing a single statement of functional Liquid code.' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">FAQ Center</Text>
        <Text variant="h2">Advanced Shopify Queries</Text>
      </div>

      <div className="max-w-3xl mx-auto space-y-3 px-2">
        {problems.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div key={idx} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:border-zinc-300">
              <button
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="w-full py-4 px-5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-zinc-800 focus:outline-none cursor-pointer"
              >
                <span className={isOpen ? 'text-teal-600' : 'text-zinc-800'}>{faq.q}</span>
                <ChevronDown size={16} className={`text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed border-t border-zinc-100 pt-3">{faq.a}</div>
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