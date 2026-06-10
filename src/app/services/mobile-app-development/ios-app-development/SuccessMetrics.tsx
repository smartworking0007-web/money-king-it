import { Text } from "@/components/ui/Text";
export default function SuccessMetrics() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {[ {v: "100+", l: "Apps"}, {v: "1M+", l: "Downloads"}, {v: "99.9%", l: "Uptime"}, {v: "95%", l: "Retention"} ].map((s, i) => (
        <div key={i} className="p-6 bg-zinc-900 rounded-2xl text-white text-center"><div className="text-2xl font-black">{s.v}</div><Text variant="label" className="text-[9px] text-teal-400">{s.l}</Text></div>
      ))}
    </section>
  );
}