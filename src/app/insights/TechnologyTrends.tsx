export default function TechnologyTrends() {
  const trends = ["AI Agents", "Generative AI", "Multi-Cloud", "Platform Eng", "Edge Computing", "Security", "Data", "Automation"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black mb-8 text-[#0F172A]">Technology Trends</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {trends.map((t) => (
          <div key={t} className="p-5 bg-white border border-zinc-200 rounded-xl font-bold text-xs text-[#0F172A] text-center">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}