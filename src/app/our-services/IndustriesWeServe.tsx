

export default function IndustriesWeServe() {
  const inds = ["Banking", "Healthcare", "Retail", "Manufacturing", "Education", "Logistics"];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-black mb-12 text-[#0F172A]">Industries We Serve</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {inds.map((i) => <div key={i} className="p-8 bg-white rounded-2xl border border-zinc-200 font-bold text-[#0F172A]">{i}</div>)}
      </div>
    </section>
  );
}