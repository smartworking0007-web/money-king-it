export default function SuccessMetrics() {
  const metrics = [
    { v: "500+", l: "TB Managed" },
    { v: "100+", l: "Warehouses" },
    { v: "99.99%", l: "Availability" },
    { v: "95%", l: "Faster Reporting" }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
      {metrics.map((s, i) => (
        <div key={i} className="p-4 bg-white rounded-xl border border-zinc-200 text-center shadow-sm">
          <div className="text-2xl font-black text-zinc-900">{s.v}</div>
          <div className="text-[10px] text-teal-600 font-bold uppercase mt-1">{s.l}</div>
        </div>
      ))}
    </section>
  );
}