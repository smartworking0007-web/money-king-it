export default function ResourceOptimization() {
  const opt = ["Dynamic Allocation", "Compute Tuning", "Cost Management", "Performance Tuning", "Storage Opt", "Network Opt", "Forecasting", "Capacity"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Resource Optimization</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {opt.map((o) => <div key={o} className="p-5 bg-zinc-900 rounded-xl text-white text-xs font-bold">{o}</div>)}
      </div>
    </section>
  );
}