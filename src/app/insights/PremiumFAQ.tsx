export default function PremiumFAQ() {
  const faqs = [
    {
      q: "How do we curate our technology insights?",
      a: "Our insights are derived from a combination of proprietary research, industry partnerships, and real-time data analysis from global enterprise deployments.",
    },
    {
      q: "What is the frequency of our AI research updates?",
      a: "We publish major AI market reports quarterly, with weekly deep-dives into LLM breakthroughs and enterprise automation trends.",
    },
    {
      q: "How does multi-cloud architecture impact ROI?",
      a: "Multi-cloud strategies reduce vendor lock-in and optimize workload placement, typically leading to a 20-30% reduction in infrastructure costs.",
    },
    {
      q: "Are our cloud computing whitepapers vendor-neutral?",
      a: "Yes, our architecture blueprints and whitepapers are strictly vendor-agnostic, focusing on best practices and interoperability.",
    },
    {
      q: "What defines a successful digital transformation?",
      a: "Success is measured by the integration of agile culture, scalable technology, and tangible improvements in operational efficiency.",
    },
    {
      q: "How do we ensure data privacy in our reports?",
      a: "All case studies and industry analyses are anonymized to protect client confidentiality while providing actionable insights.",
    },
    {
      q: "What are the latest trends in cyber security?",
      a: "Zero Trust Architecture, AI-driven threat detection, and quantum-resistant encryption are currently the most critical focus areas.",
    },
    {
      q: "How can enterprises start with AI adoption?",
      a: "We recommend starting with specific, high-impact pilot projects like automated workflows before scaling enterprise-wide AI solutions.",
    },
    {
      q: "Do we offer custom research consulting?",
      a: "Yes, our team provides tailored research and advisory services for enterprises looking for deep-dive industry intelligence.",
    },
    {
      q: "How are technology trends predicted?",
      a: "We utilize predictive analytics, expert consensus, and market signals to forecast the adoption curves of emerging technologies.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Knowledge Hub FAQ
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group p-6 bg-white rounded-2xl border border-zinc-200 hover:border-teal-400 transition-all cursor-pointer"
          >
            <summary className="font-bold text-sm text-[#0F172A] list-none flex justify-between items-center">
              {faq.q}
              <span className="text-teal-600 group-open:rotate-180 transition-transform font-black text-lg">
                +
              </span>
            </summary>
            <p className="text-xs text-zinc-600 pt-4 leading-relaxed border-t border-zinc-100 mt-4">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
