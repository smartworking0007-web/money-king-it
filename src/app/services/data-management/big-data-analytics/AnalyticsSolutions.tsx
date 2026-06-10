import { Text } from "@/components/ui/Text";
export default function AnalyticsSolutions() {
  const s = ["Real-Time Analytics", "Big Data Engineering", "Data Lake Arch", "Event Streaming", "BI Reporting", "Predictive AI"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Data Solutions</Text>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">{s.map((x, i) => (<div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 hover:border-teal-400"><Text variant="body" className="text-zinc-900 font-bold text-xs">{x}</Text></div>))}</div></section>
  );
}