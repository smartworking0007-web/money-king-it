export default function SuccessMetrics() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
      {[ {v: "500+", l: "Implementations"}, {v: "100M+", l: "Records"}, {v: "99.99%", l: "Compliance"}, {v: "98%", l: "Audit Success"} ].map((s, i) => (
        <div key={i} className="p-4 bg-white rounded-xl border border-zinc-200 text-center">
          <div className="text-2xl font-black text-zinc-900">{s.v}</div>
          <div className="text-[10px] text-teal-600 font-bold uppercase">{s.l}</div>
        </div>
      ))}
    </section>
  );
}