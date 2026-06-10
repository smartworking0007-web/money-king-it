
export default function MigrationSolutions() {
  const items = ["Modernization", "Cloud Migration", "Legacy Systems", "Cross-Platform", "Replication", "Consolidation", "Multi-Cloud", "Disaster Recovery", "Sync", "Automation"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Migration Solutions</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {items.map((x) => (
          <div key={x} className="p-4 bg-white rounded-xl border border-zinc-200 hover:border-teal-400 transition-all text-center">
            <span className="text-xs font-bold text-zinc-900 uppercase">{x}</span>
          </div>
        ))}
      </div>
    </section>
  );
}