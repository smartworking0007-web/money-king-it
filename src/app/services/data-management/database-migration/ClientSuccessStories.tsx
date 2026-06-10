export default function ClientSuccessStories() {
  const stories = [
    { client: "Global Bank", challenge: "Legacy Database", gain: "80% Downtime Reduced" },
    { client: "Fintech Scaleup", challenge: "Cloud Transition", gain: "95% Performance Gain" },
    { client: "Enterprise Retail", challenge: "On-Prem Scalability", gain: "60% Cost Optimized" }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Client Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {stories.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-sm font-bold text-zinc-900">{s.client}</h4>
            <div className="text-xl font-black text-teal-600 mt-2">{s.gain}</div>
            <p className="text-[10px] uppercase font-bold text-zinc-400 mt-1">Migration Outcome</p>
          </div>
        ))}
      </div>
    </section>
  );
}