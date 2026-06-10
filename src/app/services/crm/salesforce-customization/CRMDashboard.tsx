export default function CRMDashboard() {
  const stats = [{l: "Leads", v: "2M+"}, {l: "Pipeline", v: "$50M"}, {l: "Conversion", v: "28%"}, {l: "Retention", v: "98%"}];
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto bg-white p-2 rounded-2xl border border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-2">
        {stats.map((s, i) => (
          <div key={i} className="p-4 bg-zinc-50 rounded-xl text-center">
            <div className="text-[10px] uppercase font-bold text-zinc-400">{s.l}</div>
            <div className="text-xl font-black !text-[#0F172A] mt-1">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}