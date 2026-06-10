export default function SuccessMetrics() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {[ {v: "500+", l: "Apps Delivered"}, {v: "99.9%", l: "System Uptime"}, {v: "100+", l: "Clients"}, {v: "95%", l: "Retention"} ].map((s, i) => (
        <div key={i} className="p-8 bg-white rounded-3xl border border-zinc-200 text-center">
          <div className="text-3xl font-black text-[#0F172A]">{s.v}</div>
          <div className="text-[10px] font-black text-teal-600 uppercase mt-2">{s.l}</div>
        </div>
      ))}
    </section>
  );
}