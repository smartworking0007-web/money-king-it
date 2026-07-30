// src/app/industries/FaqSection.tsx

"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What is Pusal AI.",
    answer:
      "Power to founders with exceptional entrepreneurs and the world's leading companies, founders with exceptional entrepreneurs and the world's leading companies.",
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default matching design

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-25 w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-white/10">
      {/* Main Container */}
      <div className="mx-auto max-w-4xl">
        {/* Header Content */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight">
            Common Questions
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Find answers to frequently asked questions about our platform,
            features, and services quickly.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 p-5 sm:p-6 ${
                  isOpen
                    ? "bg-[#121212] border-white/20 shadow-xl"
                    : "bg-[#121212]/60 border-white/10 hover:bg-[#121212] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </h3>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-transform duration-300">
                    {isOpen ? (
                      <X className="h-4 w-4 text-[#00D094]" />
                    ) : (
                      <Plus className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-white/10 text-gray-300 text-sm sm:text-base leading-relaxed">
                    <p>{item.answer}</p>
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