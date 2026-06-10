export default function ClientSuccessStories() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Client Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {[ {c: "Manufacturing", g: "30% Cost Cut"}, {c: "E-Commerce", g: "2x Fulfillment"}, {c: "Logistics", g: "40% Faster"} ].map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200">
            <h4 className="font-bold text-[#0F172A]">{s.c}</h4>
            <div className="text-xl font-black text-teal-600 mt-2">{s.g}</div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1">Operational Impact</p>
          </div>
        ))}
      </div>
    </section>
  );
}