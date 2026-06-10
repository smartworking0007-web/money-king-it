export default function SalesWorkflows() {
  const workflows = ["Lead Qualification", "Auto Follow-Ups", "Deal Management", "Task Automation", "Sales Notifications", "Revenue Forecast", "Journey Tracking", "Pipeline Opt"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Sales Workflows</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {workflows.map((w) => (
          <div key={w} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-white font-bold text-sm">
            {w}
          </div>
        ))}
      </div>
    </section>
  );
}