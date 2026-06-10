import { Text } from "@/components/ui/Text";
export default function FlutterSolutions() {
  const s = ["App Dev", "Cross-Platform", "Flutter Web", "Desktop Apps", "Migration", "UI Dev"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Solutions</Text>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{s.map((x, i) => (<div key={i} className="p-6 bg-white rounded-2xl border border-zinc-100 hover:border-teal-400">{<Text variant="h4" className="text-base">{x}</Text>}</div>))}</div></section>
  );
}