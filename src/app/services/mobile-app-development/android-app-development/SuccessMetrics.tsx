import { Text } from "@/components/ui/Text";
export default function SuccessMetrics() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
      {[ {v: "250+", l: "Apps"}, {v: "10M+", l: "Downloads"}, {v: "99.9%", l: "Uptime"}, {v: "97%", l: "Retention"} ].map((s, i) => (
        <div key={i} className="p-4 bg-zinc-900 rounded-xl text-white text-center"><div className="text-xl font-black">{s.v}</div><Text variant="label" className="text-[9px] text-teal-400">{s.l}</Text></div>
      ))}
    </section>
  );
}