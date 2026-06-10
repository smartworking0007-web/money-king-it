export default function LanguageDashboard() {
  const stats = [{l: "Accuracy", v: "98%"}, {l: "Docs", v: "100M+"}, {l: "Speed", v: "High"}, {l: "Automation", v: "95%"}];
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto bg-white p-2 rounded-2xl border border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-2">
        {stats.map((s, i) => (
          <div key={i} className="p-4 bg-zinc-50 rounded-xl text-center">
            <div className="text-[10px] uppercase font-bold text-zinc-400">{s.l}</div>
            <div className="text-xl font-black text-[#0F172A] mt-1">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}