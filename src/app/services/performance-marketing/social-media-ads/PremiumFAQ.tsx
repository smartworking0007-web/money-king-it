"use client";
import { ChevronDown } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function PremiumFAQ() {
  const faqs = [
    { q: "How does ROI-focused SEO work?", a: "It prioritizes high-conversion keywords to drive actual revenue." },
    { q: "How does ROI-focused SEO work?", a: "We focus on data-driven strategies to ensure measurable growth." },
    { q: "How does ROI-focused SEO work?", a: "We link your organic search performance directly to business revenue." }
  ];

  return (
    <section className="py-16 px-6 bg-[#E5EBEB]">
      <div className="max-w-3xl mx-auto">
        <Text variant="h2" className="text-3xl font-bold text-center mb-10 text-[#0F172A]">
          Frequently Asked Questions
        </Text>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              className="group bg-white rounded-xl shadow-sm border border-slate-200 hover:border-teal-400 transition-all"
            >
              <summary className="list-none p-6 font-semibold cursor-pointer flex justify-between items-center text-[#0F172A]">
                {/* Question Text */}
                <span className="pr-4 text-base">{faq.q}</span>
                
                {/* Arrow Icon - Container ke sath taki hamesha dikhe */}
                <div className="shrink-0 bg-slate-100 p-1 rounded-full group-open:rotate-180 transition-transform duration-300">
                  <ChevronDown size={20} className="text-teal-600" />
                </div>
              </summary>
              
              <div className="px-6 pb-6 pt-0">
                <Text variant="body" className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </Text>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}