export default function SupplyChainSolutions() {
  const sol = ["Procurement", "Inventory Opt", "Warehouse Mgmt", "Logistics", "Vendor Collab", "Demand Forecast", "Order Fulfillment", "Distribution", "SC Analytics", "Transport"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Supply Chain Solutions</h2>
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