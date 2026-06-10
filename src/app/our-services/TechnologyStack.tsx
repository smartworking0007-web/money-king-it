export default function TechnologyStack() {
  const tech = ["React", "Next.js", "AWS", "Python", "Kubernetes", "OpenAI"];
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-zinc-900 rounded-3xl text-center">
      <h2 className="text-3xl font-black text-white mb-10">Technology Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tech.map((t) => <span key={t} className="px-6 py-2 bg-white/10 text-white rounded-full font-bold">{t}</span>)}
      </div>
    </section>
  );
}