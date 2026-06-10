export default function IndustrySolutions() {
  const industries = ["Banking", "Fintech", "Healthcare", "Insurance", "E-Commerce", "SaaS", "Education", "Logistics", "Manufacturing", "Enterprise"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Industries Served</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {industries.map((ind) => (
          <div key={ind} className="p-4 bg-white border border-zinc-200 rounded-xl text-center font-bold text-[10px] uppercase tracking-wider text-[#0F172A]">
            {ind}
          </div>
        ))}
      </div>
    </section>
  );
}