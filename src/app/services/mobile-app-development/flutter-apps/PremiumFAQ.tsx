import { Text } from "@/components/ui/Text";
export default function PremiumFAQ() {
  const f = [{q: "Why Flutter?", a: "Single codebase, native performance, and rapid deployment."}, {q: "Timeline?", a: "Custom enterprise apps in 3-5 months."}, {q: "Support?", a: "End-to-end maintenance and store management."}];
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto"><Text variant="h2" className="text-center mb-10">FAQs</Text>
    <div className="space-y-2">{f.map((x, i) => (<details key={i} className="p-4 bg-white rounded-xl border border-zinc-100"><summary className="font-bold text-sm text-zinc-900">{x.q}</summary><Text variant="body" className="text-xs pt-2">{x.a}</Text></details>))}</div></section>
  );
}