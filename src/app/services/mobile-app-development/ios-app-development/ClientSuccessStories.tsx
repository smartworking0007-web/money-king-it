import { Text } from "@/components/ui/Text";
export default function ClientSuccessStories() {
  const stories = [{ c: "Fintech", g: "240%" }, { c: "SaaS", g: "310%" }, { c: "Retail", g: "180%" }];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Success Stories</Text>
      <div className="grid md:grid-cols-3 gap-4">{stories.map((s, i) => (<div key={i} className="p-6 bg-white rounded-2xl border border-zinc-100"><Text variant="h4" className="text-base">{s.c}</Text><div className="text-2xl font-black">{s.g}</div><Text variant="label" className="text-[9px]">Growth</Text></div>))}</div>
    </section>
  );
}