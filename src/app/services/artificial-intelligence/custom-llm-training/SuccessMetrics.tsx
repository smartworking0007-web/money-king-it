export default function SuccessMetrics() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
      {[ {v: "100+", l: "Deployments"}, {v: "50M+", l: "Interactions"}, {v: "99.9%", l: "Availability"}, {v: "95%", l: "Efficiency"} ].map((s, i) => (
        <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200 text-center shadow-sm">
          <div className="text-2xl font-black text-[#0F172A]">{s.v}</div>
          <div className="text-[10px] font-bold text-teal-600 uppercase mt-1">{s.l}</div>
        </div>
      ))}
    </section>
  );
}