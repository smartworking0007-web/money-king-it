import { Text } from "@/components/ui/Text";
export default function ResponseAutomation() {
  const a = ["Playbooks", "Threat Engine", "Automation", "Endpoint Isolation", "Prioritization", "AI Analysis"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Response Automation</Text>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">{a.map((x, i) => (<div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 text-xs font-bold text-zinc-900">{x}</div>))}</div></section>
  );
}