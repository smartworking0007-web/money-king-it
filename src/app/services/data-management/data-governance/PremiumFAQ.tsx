export default function PremiumFAQ() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Frequently Asked Questions</h2>
      <div className="space-y-2">
        <details className="p-4 bg-white rounded-xl border border-zinc-200">
          <summary className="font-bold text-xs text-[#0F172A] cursor-pointer">What is Data Governance?</summary>
          <p className="text-[11px] pt-3 text-[#334155]">Managing data integrity and security.</p>
        </details>
      </div>
    </section>
  );
}