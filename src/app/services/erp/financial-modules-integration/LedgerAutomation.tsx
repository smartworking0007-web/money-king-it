export default function LedgerAutomation() {
  const items = ["GL Management", "Journal Entries", "Multi-Currency", "Reconciliation", "Fixed Assets", "Consolidation", "Cost Centers", "Analytics"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Ledger Automation</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {items.map((i) => <div key={i} className="p-5 bg-zinc-900 rounded-xl text-white text-xs font-bold">{i}</div>)}
      </div>
    </section>
  );
}