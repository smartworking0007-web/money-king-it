export default function AIModels() {
  const models = ["Transformers", "BERT", "RoBERTa", "Custom Models", "Semantic Search", "Class Engines", "Understanding", "AI Pipelines"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Model Architectures</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {models.map((m) => <div key={m} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{m}</div>)}
      </div>
    </section>
  );
}