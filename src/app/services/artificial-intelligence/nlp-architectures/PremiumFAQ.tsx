export default function PremiumFAQ() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {["How does text classification work?", "Can you handle custom intent recognition?", "Is data processed securely?", "Do you support multilingual models?"].map((q, i) => (
          <details key={i} className="p-4 bg-white rounded-xl border border-zinc-200">
            <summary className="font-bold text-xs text-[#0F172A] cursor-pointer">{q}</summary>
            <p className="text-[11px] pt-3 text-zinc-600">Our NLP architectures are built for high-scale enterprise needs with top-tier accuracy and processing performance.</p>
          </details>
        ))}
      </div>
    </section>
  );
}