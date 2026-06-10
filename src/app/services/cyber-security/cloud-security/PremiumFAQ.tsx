import { Text } from "@/components/ui/Text";

export default function PremiumFAQ() {
  const f = [
    { q: "What is cloud compliance?", a: "Adherence to security frameworks like SOC2/ISO to protect cloud assets." },
    { q: "How often are audits?", a: "We recommend continuous monitoring with quarterly deep-dive audits." },
    { q: "Why Multi-Cloud?", a: "To prevent vendor lock-in and increase resilience against regional outages." }
  ];
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Security FAQs</Text>
      <div className="space-y-2">
        {f.map((x, i) => (
          <details key={i} className="p-3 bg-white rounded-xl border border-zinc-100">
            <summary className="font-bold text-xs text-zinc-900 cursor-pointer">{x.q}</summary>
            <Text variant="body" className="text-[10px] pt-2 text-zinc-600">{x.a}</Text>
          </details>
        ))}
      </div>
    </section>
  );
}