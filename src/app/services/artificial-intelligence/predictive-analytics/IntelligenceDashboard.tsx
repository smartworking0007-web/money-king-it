export default function IntelligenceDashboard() {
  const data = [{l: "Accuracy", v: "98%"}, {l: "Growth", v: "+45%"}, {l: "Demand", v: "High"}, {l: "Risk", v: "Low"}];
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto bg-white p-2 rounded-2xl border border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-2">
        {data.map((d, i) => (
          <div key={i} className="p-4 bg-zinc-50 rounded-xl text-center">
            <div className="text-[10px] uppercase font-bold text-zinc-400">{d.l}</div>
            <div className="text-xl font-black text-[#0F172A] mt-1">{d.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}