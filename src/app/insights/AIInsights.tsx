export default function AIInsights() {
  const items = ["LLM Innovations", "AI Automation", "Predictive Analytics", "ML Systems", "AI Infra", "Enterprise AI"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black mb-8 text-[#0F172A]">AI Intelligence</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {items.map((item) => (
          <div key={item} className="p-6 bg-zinc-900 rounded-2xl text-white">
            <h4 className="font-black">{item}</h4>
            <p className="text-[10px] mt-2 opacity-60 uppercase">Real-time Analytics</p>
          </div>
        ))}
      </div>
    </section>
  );
}