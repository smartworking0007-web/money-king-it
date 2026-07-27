"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Text from "@/components/ui/Text";

// 1. FAQ Data - Ye ek constant array hai, ise component mat samajhna
const faqData = [
  {
    question: "How do we curate our technology insights?",
    answer:
      "We curate insights through deep industry research and data analysis.",
  },
  {
    question: "What is the frequency of our AI research updates?",
    answer:
      "We publish AI research updates on a bi-weekly basis to keep you ahead.",
  },
  {
    question: "How does multi-cloud architecture impact ROI?",
    answer:
      "It optimizes costs and prevents vendor lock-in, directly boosting ROI.",
  },
  {
    question: "Are our cloud computing whitepapers vendor-neutral?",
    answer: "Yes, our whitepapers are entirely vendor-neutral and objective.",
  },
  {
    question: "What defines a successful digital transformation?",
    answer:
      "Success is defined by operational efficiency, scalability, and user satisfaction.",
  },
  {
    question: "How do we ensure data privacy in our reports?",
    answer:
      "We follow strict compliance and anonymization protocols for all data.",
  },
];

// 2. FAQSection Component
export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Meta Title & Decorative Image */}
        <div className="mb-16 text-center">
          <Text variant="h3" className="text-white! font-bold mb-6">
            Stay Ahead of Technology Trends
          </Text>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <Text variant="h5" className="text-white! font-semibold">
                  {item.question}
                </Text>
                {activeIndex === i ? (
                  <Minus className="text-emerald-400 w-5 h-5" />
                ) : (
                  <Plus className="text-emerald-400 w-5 h-5" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <Text variant="body" className="text-zinc-400!">
                      {item.answer}
                    </Text>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
