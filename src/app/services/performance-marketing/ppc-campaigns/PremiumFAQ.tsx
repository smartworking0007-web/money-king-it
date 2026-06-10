"use client";
import { ChevronDown } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function PremiumFAQ() {
  const faqs = [
    {
      q: "What is the ROI-focused PPC approach?",
      a: "We prioritize conversion intent and ROAS rather than just clicks, ensuring every rupee contributes to revenue.",
    },
    {
      q: "How do you ensure lead quality?",
      a: "We use advanced audience segmentation and conversion-tracking to filter out low-intent traffic.",
    },
    {
      q: "Which platforms do you manage?",
      a: "We specialize in Google Ads, Meta, LinkedIn, YouTube, and Display networks.",
    },
    {
      q: "How long to see measurable results?",
      a: "While learning phases take 7-14 days, you can start seeing high-intent leads within the first week.",
    },
    {
      q: "Is this suitable for enterprise scale?",
      a: "Yes, our strategies are built for scaling budgets while maintaining stable CPA.",
    },
    {
      q: "How do you handle budget wastage?",
      a: "We run weekly optimization audits to reallocate spend to high-converting segments.",
    },
    {
      q: "Do you provide transparent reporting?",
      a: "Absolutely, we provide a unified dashboard connecting PPC spend directly to sales.",
    },
    {
      q: "How do you handle ad fatigue?",
      a: "Our AI-driven creative testing continuously refreshes visuals based on real-time data.",
    },
    {
      q: "What is your conversion tracking setup?",
      a: "We implement advanced server-side tracking (GTM/GA4) for 100% accurate attribution.",
    },
    {
      q: "Why choose Money King IT?",
      a: "Our blend of marketing science and industry insight ensures ads build your business.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#E5EBEB]">
      <div className="max-w-2xl mx-auto">
        <Text
          variant="h3"
          className="text-2xl font-bold text-center mb-8 text-[#0F172A]"
        >
          Frequently Asked Questions
        </Text>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl shadow-sm border border-slate-100 hover:border-teal-400 transition-all duration-300"
            >
              <summary className="list-none p-4 font-semibold cursor-pointer flex justify-between items-center text-[#0F172A] text-sm">
                {faq.q}
                <div className="shrink-0 bg-slate-50 p-1 rounded-full group-open:rotate-180 transition-transform duration-300 ml-3">
                  <ChevronDown size={14} className="text-teal-600" />
                </div>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <Text
                  variant="body"
                  className="text-slate-500 text-xs leading-relaxed border-t border-slate-100 pt-3"
                >
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
