export default function EnterpriseWorkflows() {
  const workflows = ["Lead Assignment", "Sales Process", "Approval Flows", "Support Flows", "Case Management", "Quote Auto", "Revenue Track", "Performance"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Enterprise Workflows</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {workflows.map((w) => (
          <div key={w} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-white font-bold text-sm">
            {w}
          </div>
        ))}
      </div>
    </section>
  );
}