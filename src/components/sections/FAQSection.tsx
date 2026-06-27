"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: 'What exactly is Money King IT, and how do your dedicated "Pods" work?',
    a: 'Money King IT is an enterprise-grade digital solutions and software engineering partner. Instead of traditional outsourcing where you hire individual freelancers, we provide specialized, fully-managed "Pods"—cohesive teams of developers, marketing analysts, and UI/UX designers who integrate directly into your workflows. They act as an instantaneous extension of your in-house team to scale execution with zero hiring friction.',
  },
  {
    q: "What IT and digital services are integrated into your delivery models?",
    a: "We structurally align our core engineering and digital capabilities into four scalable pillars: Development & Engineering (Custom web/mobile apps, API integrations), Marketing & Conversion (Data-driven performance marketing, CRO), Enterprise Automation (CRM, ERP implementation), and Cloud & Future-Gen Tech (Managed cloud, cybersecurity, AI integration).",
  },
  {
    q: "Does Money King IT operate as a white-label partner for agencies?",
    a: "Yes, absolutely. We specialize in comprehensive white-label execution. Our technical pods operate completely behind the scenes under your brand identity and guidelines. We manage the entire infrastructure and delivery timeline while you retain full ownership of client communication.",
  },
  {
    q: "How do you ensure project delivery timelines and data security?",
    a: "Every engagement is strictly governed by transparent agile project management metrics. We maintain a 98% on-time sprint delivery rate. To protect your assets, we enforce robust data encryption, secure API configurations, and strict non-disclosure agreements (NDAs).",
  },
  {
    q: "Can we scale our dedicated pod size up or down based on our business needs?",
    a: "Yes. Our infrastructure is engineered for complete operational agility. Whether you need to expand your engineering capacity or optimize operational costs during slower cycles, our pod system allows you to adjust resources dynamically without recruitment delays.",
  },
  {
    q: "How do we get started with allocating a tech or marketing pod?",
    a: "Getting started is straightforward. Connect with our technical desk through our website's contact channels. Our solution architects will review your project scope, map out the required competencies, and deploy a production-ready dedicated pod aligned with your brand's lifecycle.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Pehla question open rahega

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {item.q}
                <ChevronDown
                  className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
