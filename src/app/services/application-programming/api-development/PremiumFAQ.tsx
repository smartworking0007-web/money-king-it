'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function PremiumFAQ() {
  const solutions = [
    { q: 'How do you prevent architectural bottlenecks across federated GraphQL endpoints?', a: 'We employ dataloader batch paradigms alongside edge cached execution proxies to group client payload arrays into single stateless data requests efficiently.' },
    { q: 'What protocol rules dictate your choice between REST and gRPC microservices?', a: 'We deploy standard REST routing systems where clients require universal browser resource accessibility, while enforcing strict gRPC over HTTP/2 maps for rapid server-to-server cluster processing pipelines.' },
    { q: 'How do your security models block advanced database injection attempts?', a: 'All communication models use compiled query builders and isolated regex validation layer filters, blocking payload anomalies completely before reaching storage cores.' },
    { q: 'Do your enterprise API keys utilize adaptive runtime tracking metrics?', a: 'Yes, keys map onto automated Redis cache storage nodes that count real-time request counts against dynamic client threshold boundaries.' },
    { q: 'What mechanisms ensure zero packet drop rates across webhook loops?', a: 'We enclose webhook distribution channels inside scalable message queue clusters that run automated retry matrices up to 5 validation loops.' },
    { q: 'How early do you integrate OpenAPI endpoint definitions during sprint cycles?', a: 'We utilize a design-first framework where YAML specs map parameter fields explicitly before our backend developers write a single statement of functional code.' },
    { q: 'Can your networks bridge encrypted transactions across banking systems?', a: 'Yes, our custom fintech endpoints map transactional payloads onto certified banking protocols passing strict regional compliance parameters.' },
    { q: 'What continuous metrics track API pipeline health parameters?', a: 'We log latency, response matrices, execution counts, and P99 benchmarks natively across centralized cloud telemetry panels.' },
    { q: 'How do you handle breaking variations across running endpoint routes?', a: 'We encapsulate operational paths within strict sub-directory URL spaces (e.g., /v1, /v2) ensuring total backward runtime compatibility.' },
    { q: 'What maintenance SLAs back your custom deployed API infrastructures?', a: 'Every codebase delivery triggers automated security patch syncs, endpoint path performance scaling reviews, and persistent monitoring arrays.' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">FAQ Workspace</Text>
        <Text variant="h2" className="text-slate-900">Advanced API Queries</Text>
      </div>

      <div className="max-w-3xl mx-auto space-y-3 px-2">
        {solutions.map((faq, idx) => {
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