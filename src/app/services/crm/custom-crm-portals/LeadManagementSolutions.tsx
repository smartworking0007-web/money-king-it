export default function LeadManagementSolutions() {
  const items = ["CRM Development", "Lead Systems", "Pipeline Boards", "Assignment Auto", "Lifecycle Tracking", "Team Panels", "Revenue Tracking", "Qualification Engines", "Reporting Modules", "Workflow Auto"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Lead Management Solutions</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {items.map((x) => (
          <div key={x} className="p-5 bg-white rounded-xl border border-zinc-200 hover:border-teal-400 transition-all text-center">
            <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-widest">{x}</span>
          </div>
        ))}
      </div>
    </section>
  );
}