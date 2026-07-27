"use client";

import React, { useState } from "react";
import Text from "@/components/ui/Text";

/**
 * FAQSection.tsx
 * Fully responsive FAQ section built from the reference screenshots,
 * utilizing your custom Text typography component, interactive accordion states,
 * and dark theme design matching the platform layout.
 */

const FAQS = [
  {
    question: "What is Pusal AI.",
    answer:
      "Power to founders with exceptional entrepreneurs and the world's leading companies founders with exceptional entrepreneurs and the world's leading companies",
  },
  {
    question: "Is this a free available?",
    answer:
      "Yes, we offer a free version with essential features to get you started immediately, allowing you to explore the platform confidently.",
  },
  {
    question: "Can I upgrade or downgrade my subscription later?",
    answer:
      "Yes! You can upgrade or downgrade your subscription anytime, giving full flexibility to access features you need while managing costs efficiently.",
  },
  {
    question: "How secure is my data on your platform?",
    answer:
      "Your data is protected with advanced encryption, secure servers, and strict privacy protocols, ensuring complete safety and peace of mind at all times.",
  },
  {
    question: "Do you offer customer support or training?",
    answer:
      "Yes! We provide dedicated customer support and comprehensive training to help you maximize platform usage and achieve optimal results efficiently.",
  },
];

export default function FAQSection() {
  // Set the first item open by default to match the first reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    /* 
      RESPONSIVE POSITIONING & PADDING:
      -mt-12 or -mt-16 pulls the section upward on mobile devices.
      md:-mt-24 or md:-mt-32 pulls the section upward on desktop screens.
    */
    <section className="relative z-20 -mt-12 md:-mt-28 w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Main Container */}
      <div className="mx-auto max-w-225">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Text
            variant="h2"
            className="text-white! mb-4 text-[36px] sm:text-[44px] md:text-[52px] font-extrabold tracking-tight"
          >
            Common Questions
          </Text>
          <Text
            variant="body"
            className="text-gray-400! text-[15px] md:text-[16px] leading-relaxed"
          >
            Find answers to frequently asked questions about our platform,
            features, and services quickly.
          </Text>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-[24px] border border-white/10 bg-[#121212] transition-all duration-300 overflow-hidden hover:border-white/20"
              >
                {/* Accordion Header / Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none cursor-pointer"
                >
                  <Text
                    variant="h5"
                    className="text-white! text-[18px] md:text-[20px] font-bold tracking-tight pr-4"
                  >
                    {faq.question}
                  </Text>

                  {/* Toggle Icon Indicator (+ or x) */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white font-mono text-sm">
                    {isOpen ? "✕" : "+"}
                  </div>
                </button>

                {/* Accordion Content Dropdown */}
                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                    <Text
                      variant="body"
                      className="text-gray-400! text-[15px] leading-relaxed border-t border-white/10 pt-4"
                    >
                      {faq.answer}
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
