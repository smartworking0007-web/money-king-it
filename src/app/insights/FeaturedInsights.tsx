export default function FeaturedInsights() {
  const items = ["AI", "Cloud", "Software Eng", "Cyber Security", "DevOps", "Data Analytics", "FinTech", "Digital Trans."];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black mb-8 text-[#0F172A]">Featured Insights</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-zinc-200 hover:border-teal-400 transition-all shadow-sm">
            <h3 className="font-bold text-[10px] uppercase tracking-wider text-zinc-500">{i}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}