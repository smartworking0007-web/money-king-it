import { Text } from "@/components/ui/Text";

export default function AnalyticsDashboard() {
  const metrics = [
    { label: "ROAS", value: "14.2x" }, 
    { label: "Predictive Score", value: "98/100" }, 
    { label: "Conversion Rate", value: "8.4%" }
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm grid md:grid-cols-3 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 text-center">
            <Text variant="label" className="mb-2 block">{m.label}</Text>
            <div className="text-3xl font-bold text-emerald-600">{m.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}