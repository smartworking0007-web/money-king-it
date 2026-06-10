import { Text } from "@/components/ui/Text";

export default function SuccessMetrics() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      {[ {v: "1M+", l: "Leads"}, {v: "₹500Cr+", l: "Pipeline"}, {v: "1000+", l: "Campaigns"}, {v: "97%", l: "Retention"} ].map((s, i) => (
        <div key={i} className="text-center">
          <div className="text-5xl font-black text-[#0F172A]">{s.v}</div>
          <Text variant="label" className="mt-2 block">{s.l}</Text>
        </div>
      ))}
    </section>
  );
}