export default function InventoryControl() {
  const inventory = ["Real-Time Tracking", "Stock Replenishment", "Multi-Warehouse", "Barcode/RFID", "Demand Forecasting", "Stock Opt", "Automated Alerts", "Analytics"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Inventory Control</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {inventory.map((i) => (
          <div key={i} className="p-5 bg-white rounded-xl border border-zinc-200 shadow-sm text-center font-bold text-xs text-[#0F172A]">
            {i}
          </div>
        ))}
      </div>
    </section>
  );
}