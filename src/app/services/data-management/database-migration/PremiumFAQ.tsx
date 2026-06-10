export default function PremiumFAQ() {
  const f = [
    { q: "What is zero-downtime migration?", a: "A process that replicates data in real-time between source and target, allowing cutover with near-zero service interruption." },
    { q: "Do you support cross-platform migration?", a: "Yes, we handle complex schema conversions between heterogeneous databases like Oracle to PostgreSQL." },
    { q: "How is data integrity maintained?", a: "We employ automated checksum verification and continuous validation checks throughout the replication process." },
    { q: "Can we migrate to multi-cloud?", a: "Absolutely. Our engine supports hybrid and multi-cloud strategies, ensuring data portability across AWS, Azure, and GCP." }
  ];

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {f.map((x, i) => (
          <details key={i} className="p-4 bg-white rounded-xl border border-zinc-200">
            <summary className="font-bold text-xs text-zinc-900 cursor-pointer">{x.q}</summary>
            <p className="text-[11px] pt-3 text-zinc-600 leading-relaxed">{x.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}