export default function AIOptimization() {
  const opt = ["Weight Tuning", "Prompt Opt", "RAG Opt", "Latency Red.", "Knowledge Aug", "Benchmarking", "Eval", "Governance"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">AI Optimization</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {opt.map((o) => <div key={o} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{o}</div>)}
      </div>
    </section>
  );
}