export default function KnowledgeCenter() {
  const resources = ["Blogs", "Whitepapers", "eBooks", "Research", "Blueprints", "Videos", "Analysis", "Learning"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black mb-8 text-[#0F172A]">Knowledge Center</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {resources.map((r) => (
          <div key={r} className="p-4 bg-white border border-zinc-200 rounded-xl text-center text-xs font-bold text-[#0F172A]">
            {r}
          </div>
        ))}
      </div>
    </section>
  );
}