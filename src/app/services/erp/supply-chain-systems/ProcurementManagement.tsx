export default function ProcurementManagement() {
  const items = ["Requisition Auto", "Supplier Selection", "Contracts", "PO Automation", "Evaluation", "Cost Opt", "Approvals", "Analytics"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Procurement</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {items.map((i) => <div key={i} className="p-5 bg-zinc-900 rounded-xl text-white text-xs font-bold">{i}</div>)}
      </div>
    </section>
  );
}