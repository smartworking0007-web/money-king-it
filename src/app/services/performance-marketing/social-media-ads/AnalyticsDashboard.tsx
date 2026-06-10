export default function AnalyticsDashboard() {
  const metrics = [{ label: "ROAS", value: "14.2x" }, { label: "Predictive Score", value: "98/100" }, { label: "Conversion Rate", value: "8.4%" }];
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm grid md:grid-cols-3 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 text-center">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{m.label}</p>
            <p className="text-3xl font-bold text-[#14B8A6] mt-2">{m.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}