import { Text } from "@/components/ui/Text";
export default function ClientSuccessStories() {
  const st = [{ c: "Global Bank", r: "300%" }, { c: "Retail Giant", r: "250%" }, { c: "Health Cloud", r: "210%" }];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Case Studies</Text>
    <div className="grid md:grid-cols-3 gap-3">{st.map((s, i) => (<div key={i} className="p-4 bg-white rounded-xl border border-zinc-100"><Text variant="h4" className="text-sm">{s.c}</Text><div className="text-xl font-black text-zinc-900 mt-1">{s.r}</div><Text variant="label" className="text-[9px]">Revenue Growth</Text></div>))}</div></section>
  );
}