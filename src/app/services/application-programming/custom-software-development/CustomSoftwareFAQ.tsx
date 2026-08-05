"use client";

import React, { useState } from "react";
import Text from "@/components/ui/Text";
import { Plus, Minus } from "lucide-react";

/**
 * CustomSoftwareFAQ.tsx
 * Fully interactive, responsive FAQ section with expandable accordion items,
 * dark theme styling, and compact typography.
 */

const FAQ_ITEMS = [
  {
    question: "What is custom software?",
    answer:
      "Custom software is designed and built specifically for your unique business logic and operational requirements.",
  },
  {
    question: "How long does it take?",
    answer:
      "Timelines vary by scope. Standard enterprise solutions typically take between 8 to 16 weeks.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Cost depends on architecture, features, and scope. We provide tailored estimates after audit.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes, we provide continuous updates, security patches, and ongoing support for stability.",
  },
  {
    question: "Can existing systems upgrade?",
    answer:
      "Yes, we specialize in modernizing legacy architectures into secure cloud-ready platforms.",
  },
];

export default function CustomSoftwareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Text variant="label" className="mb-3 inline-block text-[#00D094]">
            FAQ
          </Text>
          <Text
            variant="h2"
            className="text-white! tracking-tight text-3xl sm:text-4xl md:text-5xl font-extrabold"
          >
            Frequently Answered Logistics
          </Text>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 transition-all duration-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                >
                  <Text
                    variant="h5"
                    className="text-white! group-hover:text-[#00D094] transition-colors text-base sm:text-lg font-semibold tracking-tight"
                  >
                    {item.question}
                  </Text>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-300 group-hover:border-[#00D094]/50 group-hover:text-[#00D094] transition-all">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-12">
                    <Text
                      variant="body"
                      className="text-zinc-400! text-xs sm:text-sm leading-relaxed"
                    >
                      {item.answer}
                    </Text>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}