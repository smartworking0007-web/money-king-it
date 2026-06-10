export default function IndustrySolutions() {
  const industries = ["Banking", "Fintech", "Healthcare", "Insurance", "Retail", "E-Commerce", "Manufacturing", "Logistics", "SaaS", "Enterprise Tech"];
  
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Industries Served</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {industries.map((ind) => (
          <div key={ind} className="p-4 bg-white border border-zinc-200 rounded-xl shadow-sm text-center hover:border-teal-400 transition-all cursor-default">
            <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-wider">{ind}</span>
          </div>
        ))}
      </div>
    </section>
  );
}