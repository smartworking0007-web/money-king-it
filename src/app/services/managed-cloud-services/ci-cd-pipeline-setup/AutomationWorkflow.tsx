export default function AutomationWorkflow() {
  const tasks = ["Source Control", "Build Auto", "Test Auto", "Deploy Auto", "IaC Auto", "Security Auto", "Monitor Auto", "Incident Resp"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Automation Workflow</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {tasks.map((t) => <div key={t} className="p-5 bg-zinc-900 rounded-xl text-white text-xs font-bold">{t}</div>)}
      </div>
    </section>
  );
}