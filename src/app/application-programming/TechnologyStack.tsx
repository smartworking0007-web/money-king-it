export default function TechnologyStack() {
  const stack = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
    Backend: ["Node.js", "Express", "NestJS", "Python"],
    Database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    Cloud: ["AWS", "Azure", "Google Cloud"]
  };
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black mb-10 text-[#0F172A]">Technology Stack</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {Object.entries(stack).map(([cat, techs]) => (
          <div key={cat} className="p-6 bg-white rounded-3xl border border-zinc-200">
            <h4 className="font-black text-teal-600 mb-4 uppercase text-xs">{cat}</h4>
            <div className="space-y-2">
              {techs.map(t => <p key={t} className="font-bold text-[#0F172A]">{t}</p>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}