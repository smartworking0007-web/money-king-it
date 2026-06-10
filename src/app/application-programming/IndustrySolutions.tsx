export default function IndustrySolutions() {
  const ind = ["FinTech", "Banking", "Healthcare", "E-Commerce", "Logistics", "Insurance"];
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-black mb-10 text-[#0F172A]">Industry Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {ind.map((i) => <div key={i} className="p-5 bg-white rounded-xl border border-zinc-200 font-bold text-[#0F172A]">{i}</div>)}
      </div>
    </section>
  );
}