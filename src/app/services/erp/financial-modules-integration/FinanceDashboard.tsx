export default function FinanceDashboard() {
  const metrics = [{l: "Revenue", v: "₹500Cr+"}, {l: "AR", v: "₹12Cr"}, {l: "AP", v: "₹8Cr"}, {l: "Compliance", v: "98%"}];
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto bg-white p-2 rounded-2xl border border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-2">
        {metrics.map((m, i) => (
          <div key={i} className="p-4 bg-zinc-50 rounded-xl text-center">
            <div className="text-[10px] uppercase font-bold text-zinc-400">{m.l}</div>
            <div className="text-xl font-black text-[#0F172A] mt-1">{m.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}