'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui/Text';

export default function TestingFAQ() {
  const questions = [
    { q: 'What software testing methodologies do you follow?', a: 'We employ Agile testing frameworks along with standard V-Model paradigms to continuously intercept exceptions during iterative software loops.' },
    { q: 'Do you offer both manual and automation testing?', a: 'Yes, our teams run localized manual exploratory paths for UX along with large multi-threaded functional loops using Playwright and Cypress.' },
    { q: 'How early should testing begin in the development lifecycle?', a: 'Testing metrics must integrate from Day 1 during analysis to prevent architecture debt from affecting core structural properties.' },
    { q: 'Can you write and execute automated test scripts for mobile applications?', a: 'Yes, we map multi-device automation loops through Appium across native android and iOS physical hardware targets cleanly.' },
    { q: 'What is your procedure for logging and tracking software bugs?', a: 'All defects are isolated inside secure triage boards with complete tracing steps, environment properties, and processing crash telemetry logs.' },
    { q: 'Do you conduct load and performance stress testing?', a: 'We use JMeter loops simulating simultaneous concurrent users to trace application response constraints under production environments.' },
    { q: 'Is security vulnerability testing included in your services?', a: 'Yes, we execute rigid penetration vectors, dependency path scans, and OWASP systems checks safeguarding data access tokens.' },
    { q: 'How do you guarantee test data confidentiality?', a: 'All validation is run within sandboxed VPC spaces using completely anonymized mock records to secure enterprise user information.' },
    { q: 'Do you provide a formal quality sign-off document?', a: 'Every delivery cycle generates full diagnostic audit sheets tracking metrics, test matrix passes, and complete trace documentation steps.' },
    { q: 'Can you work alongside our in-house development engineering squads?', a: 'Our QA squads embed directly inside active client Git branch configurations, handling automated checks cleanly without disrupting sprint cycles.' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Text variant="label" className="inline-block mb-2">FAQ Center</Text>
        <Text variant="h2" className="text-zinc-900">Frequently Asked Queries</Text>
      </div>

      <div className="max-w-3xl mx-auto space-y-3 px-2">
        {questions.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div key={idx} className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:border-zinc-300">
              <button
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="w-full py-4 px-5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-zinc-800 hover:text-black focus:outline-none cursor-pointer"
              >
                <span className={`transition-colors duration-200 ${isOpen ? 'text-teal-600' : 'text-zinc-800'}`}>{faq.q}</span>
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