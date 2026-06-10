export default function PremiumFAQ() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {["How do forecasting models work?", "Is your AI compatible with existing data?", "How is prediction accuracy validated?", "Can you handle real-time data streaming?"].map((q, i) => (
          <details key={i} className="p-4 bg-white rounded-xl border border-zinc-200">
            <summary className="font-bold text-xs text-[#0F172A] cursor-pointer">{q}</summary>
            <p className="text-[11px] pt-3 text-zinc-600">Our predictive models leverage enterprise-grade ML pipelines to ensure high-precision forecasting and actionable business intelligence.</p>
          </details>
        ))}
      </div>
    </section>
  );
}