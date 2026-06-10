"use client";
import { ChevronDown } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function PremiumFAQ() {
  const faqs = [
    { q: "How do we ensure lead quality?", a: "We utilize multi-stage qualification frameworks and intent data." },
    { q: "How long until results scale?", a: "Enterprise models typically reach peak velocity within 30-45 days." },
    { q: "Which CRMs integrate?", a: "We support Salesforce, HubSpot, Dynamics, and custom API setups." }
  ];

  return (
    <section className="py-20 px-6 bg-[#E5EBEB]">
      <div className="max-w-3xl mx-auto">
        <Text variant="h2" className="text-center mb-10">Frequently Asked Questions</Text>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
              <summary className="list-none font-semibold cursor-pointer flex justify-between items-center text-[#0F172A]">
                {faq.q}
                <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
              </summary>
              <Text variant="body" className="text-sm pt-4 border-t border-zinc-100 mt-4">{faq.a}</Text>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}