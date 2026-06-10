export default function PremiumFAQ() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {["How do you tune LLM weights?", "Do you support private cloud?", "Can you integrate with existing models?", "How do you ensure AI governance?"].map((q, i) => (
          <details key={i} className="p-4 bg-white rounded-xl border border-zinc-200">
            <summary className="font-bold text-xs text-[#0F172A] cursor-pointer">{q}</summary>
            <p className="text-[11px] pt-3 text-zinc-600">Our LLM pipelines provide custom weight tuning and domain-specific training for high-performance enterprise applications.</p>
          </details>
        ))}
      </div>
    </section>
  );
}