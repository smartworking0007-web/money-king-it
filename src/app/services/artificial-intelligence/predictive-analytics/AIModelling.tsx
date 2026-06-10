export default function AIModelling() {
  const models = ["Machine Learning", "Deep Learning", "Time Series", "Pattern Rec", "Algorithms", "Behavioral", "Data Pipelines", "Optimization"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">AI Modelling</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {models.map((m) => <div key={m} className="p-5 bg-zinc-900 rounded-xl text-white text-xs font-bold">{m}</div>)}
      </div>
    </section>
  );
}