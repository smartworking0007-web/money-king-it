import { Text } from "@/components/ui/Text";
export default function PremiumFAQ() {
  const f = [{q: "Why Pen-Testing?", a: "To proactively discover vulnerabilities before attackers exploit them."}, {q: "Methodology?", a: "We combine automated scanning with manual expert-led validation."}, {q: "Frequency?", a: "Recommended annually or after major infrastructure changes."}];
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto"><Text variant="h2" className="text-center mb-10">FAQs</Text>
    <div className="space-y-2">{f.map((x, i) => (<details key={i} className="p-3 bg-white rounded-xl border border-zinc-100"><summary className="font-bold text-xs text-zinc-900">{x.q}</summary><Text variant="body" className="text-[10px] pt-2 text-zinc-600">{x.a}</Text></details>))}</div></section>
  );
}