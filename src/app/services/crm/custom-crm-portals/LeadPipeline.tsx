export default function LeadPipeline() {
  const stages = ["New", "Qualified", "Contacted", "Proposal", "Negotiation", "Won"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Lead Pipeline Visualizer</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {stages.map((s) => (
          <div key={s} className="p-4 bg-zinc-900 rounded-xl text-white text-xs font-bold text-center">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}