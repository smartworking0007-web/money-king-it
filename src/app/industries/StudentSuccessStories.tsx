export default function StudentSuccessStories() {
  const stories = [
    { name: "Rahul S.", role: "SDE @ Global Tech", impact: "Led AI integration project." },
    { name: "Priya M.", role: "Cloud Eng @ Fintech", impact: "Optimized cloud costs by 40%." },
    { name: "Amit K.", role: "DevOps @ SaaS Firm", impact: "Reduced deployment time by 60%." }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Student Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {stories.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200">
            <h4 className="font-bold text-[#0F172A]">{s.name}</h4>
            <p className="text-[10px] uppercase font-bold text-teal-600 mt-1">{s.role}</p>
            <p className="text-xs text-zinc-600 mt-3 italic">{s.impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}