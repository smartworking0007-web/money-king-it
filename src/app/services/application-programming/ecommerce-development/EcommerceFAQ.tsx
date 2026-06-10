'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function EcommerceFAQ() {
  const queries = [
    { q: 'Which eCommerce platform is best for my business expansion requirements?', a: 'We assess operational targets explicitly: Shopify handles lightning scaling without administrative weight, while custom Next.js builds deliver total configuration parameters.' },
    { q: 'What is your operational framework for migrating existing catalog variants?', a: 'We run sandboxed payload tracking loops to move customer records, SKU matrix structures, and complete historical transactional balances safely.' },
    { q: 'Do the custom shopping carts support headless catalog synchronization?', a: 'Yes, our architectures connect backend inventory tracking repositories to modular UI displays through fast GraphQL APIs.' },
    { q: 'How do you preserve checkout security parameters across regional boundaries?', a: 'Every payment integration loop is enclosed inside certified PCI-DSS compliant frameworks utilizing strict single-token verification layers.' },
    { q: 'Are the storefronts optimized to clear Google Core Web Vitals targets?', a: 'We compile interfaces using server-side compilation (SSR) alongside tight asset configurations to ensure sub-second rendering actions.' },
    { q: 'Do you configure multi-warehouse inventory telemetry links?', a: 'Yes, our database developers integrate dynamic stock monitoring parameters that synchronize multi-channel sales nodes concurrently.' },
    { q: 'Can the shopping platforms handle massive promotion or flash sale surges?', a: 'Our Next.js decoupled networks distribute browsing traffic onto edge cloud relays, keeping transaction nodes stable under massive usage loads.' },
    { q: 'What multi-currency payment network configurations are supported?', a: 'We sync localized rails including custom Stripe gateways, PayPal enterprise parameters, and localized merchant banking hooks cleanly.' },
    { q: 'Do you deliver customized B2B wholesale operation layers?', a: 'Yes, we map tiered client access configurations, instant bulk quotation fields, and company sub-account tracking nodes natively.' },
    { q: 'What parameters are included within your post-release infrastructure SLAs?', a: 'All deployments are backed by continuous monitoring protocols covering core module updates, API security syncs, and system health checks.' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">FAQ Center</Text>
        <Text variant="h2">Frequently Asked Queries</Text>
      </div>

      <div className="max-w-3xl mx-auto space-y-3 px-2">
        {queries.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div key={idx} className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:border-zinc-300">
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