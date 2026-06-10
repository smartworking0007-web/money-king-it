export default function IndustrySolutions() {
  const ind = ["SaaS", "Fintech", "E-Commerce", "Healthcare", "Logistics", "Media", "Education", "Enterprise", "Gaming", "Manufacturing"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Industries Served</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {ind.map((i) => <div key={i} className="p-4 bg-white border border-zinc-200 rounded-xl text-center font-bold text-[10px] uppercase tracking-wider text-[#0F172A]">{i}</div>)}
      </div>
    </section>
  );
}