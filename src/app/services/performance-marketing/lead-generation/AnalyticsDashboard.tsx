import { Text } from "@/components/ui/Text";

export default function AnalyticsDashboard() {
  const stats = [
    { label: "Pipeline", value: "₹500Cr+" },
    { label: "Leads", value: "1M+" },
    { label: "Conversion", value: "12.5%" }
  ];

  return (
    <section className="py-6 px-4">
      <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl border border-zinc-100 shadow-sm grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="p-3 bg-zinc-50 rounded-xl text-center border border-zinc-100/50">
            <Text variant="label" className="text-[9px] uppercase tracking-wider">{s.label}</Text>
            <div className="text-lg font-black text-teal-600 leading-none mt-1">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}