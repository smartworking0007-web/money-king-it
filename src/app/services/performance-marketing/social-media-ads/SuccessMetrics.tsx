import Text from '@/components/ui/Text';

export default function SuccessMetrics() {
  const metrics = [
    { label: "Ad Revenue", value: "₹150Cr+" },
    { label: "Audience Reach", value: "10M+" },
    { label: "Campaigns", value: "500+" },
    { label: "Client Retention", value: "95%" }
  ];

  return (
    <section className="py-16 px-6 bg-zinc-50 rounded-[2rem] my-10 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <Text variant="label" className="text-emerald-600 mb-2 font-semibold uppercase tracking-widest text-xs">
          Proven Impact
        </Text>
        <Text variant="h2" className="text-zinc-900 text-3xl">Success Metrics</Text>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm text-center">
            <Text variant="h3" className="text-emerald-600 text-2xl font-bold mb-1">
              {m.value}
            </Text>
            <Text variant="body" className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold">
              {m.label}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}