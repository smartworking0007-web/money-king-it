import { Text } from "@/components/ui/Text";
export default function SuccessMetrics() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
      {[ {v: "10k+", l: "Incidents"}, {v: "99.9%", l: "Accuracy"}, {v: "95%", l: "Faster MTTR"}, {v: "98%", l: "Retention"} ].map((s, i) => (
        <div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 text-center"><div className="text-lg font-black text-zinc-900">{s.v}</div><Text variant="label" className="text-[9px] text-teal-600">{s.l}</Text></div>
      ))}
    </section>
  );
}