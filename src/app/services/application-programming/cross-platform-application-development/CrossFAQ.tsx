'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function CrossFAQ() {
  const logic = [
    { q: 'How do you guarantee native processing speeds inside cross-platform mobile binaries?', a: 'We utilize Flutter compiler configurations to directly compile structural logic onto ARM machine codes, ensuring seamless 60fps rendering parameters.' },
    { q: 'Which framework dictates your deployment strategy between Flutter and React Native?', a: 'We assess system priorities explicitly: Flutter yields extreme UI pixel alignment and speed, while React Native maps beautifully where project components inherit heavy Javascript-based web tokens integrations.' },
    { q: 'Can cross-platform codebases communicate with underlying device sensors and custom APIs?', a: 'Yes, our platform engineers construct explicit platform channel wrappers that hook native Java/Kotlin or Swift background hardware hooks directly.' },
    { q: 'What is your procedure for handling browser caching inside Progressive Web Apps?', a: 'We configure aggressive service worker scripts that pre-render basic app routing assets locally, ensuring sub-second response operations.' },
    { q: 'How are database parameters synced during continuous offline operation parameters?', a: 'We integrate embedded multi-tenant SQLite repositories that capture local transaction fields, automatically executing conflict-free replication routines upon re-establishing network pipelines.' },
    { q: 'Do your engineering pipelines support native desktop app compilation rules?', a: 'Yes, our cross-compilers deliver standalone production-ready Win64 executables and macOS universal binaries from the identical source codebase layout.' },
    { q: 'What mechanisms optimize viewports scaling rules from mobile up to monitors?', a: 'We write fluid responsive layout boxes bound to strict grid constraint breakpoints, removing fixed aspect definitions completely.' },
    { q: 'How do you handle breaking modifications inside the Apple App Store review cycle?', a: 'Our publishing desk closely reviews strict iOS Human Interface parameters during coding sprint cycles, bypassing structural blocking issues completely before final build submission.' },
    { q: 'Are secure biometric credentials validated safely through cross-platform layers?', a: 'Yes, we bridge native keychains and FaceID/Fingerprint hardware interfaces safely inside encrypted sandboxed permission domains.' },
    { q: 'What infrastructure metrics back your post-release optimization SLAs?', a: 'All deliveries are covered by continuous dependency sync alerts, interface layout crash telemetries monitoring, and runtime environment health patches.' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">FAQ Center</Text>
        <Text variant="h2">Advanced Application Queries</Text>
      </div>

      <div className="max-w-3xl mx-auto space-y-3 px-2">
        {logic.map((faq, idx) => {
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