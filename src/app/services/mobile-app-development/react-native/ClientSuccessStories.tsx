import { Text } from "@/components/ui/Text";
export default function ClientSuccessStories() {
  const st = [{ c: "Fintech", g: "290%" }, { c: "Healthcare", g: "320%" }, { c: "Retail", g: "240%" }];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Success Stories</Text>
    <div className="grid md:grid-cols-3 gap-3">{st.map((s, i) => (<div key={i} className="p-4 bg-white rounded-xl border border-zinc-100"><Text variant="h4" className="text-sm">{s.c}</Text><div className="text-xl font-black">{s.g}</div><Text variant="label" className="text-[9px]">Growth</Text></div>))}</div></section>
  );
}