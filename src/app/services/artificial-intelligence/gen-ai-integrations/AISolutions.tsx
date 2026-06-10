export default function AISolutions() {
  const sol = ["Chatbot Dev", "AI Assistants", "Copilot Systems", "Workflow Auto", "Doc Intelligence", "Knowledge AI", "Support AI", "Sales AI", "Content Gen", "Multimodal"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Generative AI Solutions</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {sol.map((s) => (
          <div key={s} className="p-5 bg-white rounded-xl border border-zinc-200 hover:border-teal-400 transition-all text-center">
            <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}