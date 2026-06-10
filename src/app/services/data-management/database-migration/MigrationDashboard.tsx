export default function MigrationDashboard() {
  const stats = [
    { l: "Migrated", v: "1000+" },
    { l: "Data Volume", v: "5 PB" },
    { l: "Success Rate", v: "99.99%" },
    { l: "Speed", v: "95% Faster" }
  ];
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto bg-white p-2 rounded-2xl border border-zinc-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-2">
        {stats.map((s, i) => (
          <div key={i} className="p-4 bg-zinc-50 rounded-xl text-center border border-zinc-100">
            <div className="text-[10px] uppercase font-bold text-zinc-400">{s.l}</div>
            <div className="text-xl font-black text-teal-600 mt-1">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}