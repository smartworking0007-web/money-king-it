import { Text } from "@/components/ui/Text";
export default function ThreatContainmentFramework() {
  const f = ["Detection", "Classification", "Investigation", "Isolation", "Recovery", "Continuous Monitoring"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Containment Flow</Text>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">{f.map((x, i) => (<div key={i} className="p-4 bg-zinc-50 rounded-xl border border-zinc-100"><Text variant="label" className="text-teal-600 text-[9px]">0{i+1}</Text><Text variant="body" className="font-bold text-xs">{x}</Text></div>))}</div></section>
  );
}