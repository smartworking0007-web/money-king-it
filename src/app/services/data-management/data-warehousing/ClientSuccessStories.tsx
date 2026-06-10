export default function ClientSuccessStories() {
  const stories = [
    { client: "Global Finance", challenge: "Siloed Data", gain: "85% Speed" },
    { client: "Health Analytics", challenge: "Query Latency", gain: "90% Reduction" },
    { client: "Retail Leader", challenge: "Reporting Lag", gain: "95% Faster" }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-10">Client Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {stories.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-sm font-bold text-zinc-900">{s.client}</h4>
            <div className="text-xl font-black text-teal-600 mt-2">{s.gain}</div>
            <p className="text-[10px] uppercase font-bold text-zinc-400 mt-1">Analytics Gain</p>
          </div>
        ))}
      </div>
    </section>
  );
}