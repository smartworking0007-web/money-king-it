import { Text } from "@/components/ui/Text";
export default function ThreatAnalysis() {
  const t = ["Malware", "Insider Threats", "Endpoint Viz", "Suspicious Activity", "Correlation", "Risk Prioritization"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Threat Analysis</Text>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">{t.map((x, i) => (<div key={i} className="p-4 bg-zinc-900 rounded-xl text-center"><Text variant="body" className="text-white font-bold text-xs">{x}</Text></div>))}</div></section>
  );
}