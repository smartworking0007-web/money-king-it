export default function PremiumFAQ() {
  const f = [
    { q: "What is a modern data warehouse?", a: "A high-performance cloud platform that unifies massive volumes of data for instant analytics." },
    { q: "How do ETL/ELT pipelines differ?", a: "ETL transforms data before loading, while ELT leverages cloud power to transform data within the warehouse." },
    { q: "Is the architecture scalable?", a: "Yes, our designs support exabyte-scale growth with decoupled storage and compute." },
    { q: "What about BI integration?", a: "We ensure seamless native connectivity with Tableau, Power BI, and Looker." }
  ];

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
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