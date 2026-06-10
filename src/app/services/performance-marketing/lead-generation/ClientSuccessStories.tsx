import { Text } from "@/components/ui/Text";

export default function ClientSuccessStories() {
  const stories = [
    { client: "Fintech", challenge: "High CAC", growth: "240%", roas: "9.2x" },
    { client: "E-Commerce", challenge: "Low conversion", growth: "310%", roas: "12.5x" },
    { client: "SaaS", challenge: "Stagnant leads", growth: "180%", roas: "7.8x" }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Success Stories</Text>
      
      <div className="grid md:grid-cols-3 gap-4">
        {stories.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:border-teal-400 transition-all">
            <Text variant="h4" className="mb-4 text-base">{s.client}</Text>
            
            <div className="mb-6">
              <Text variant="label" className="text-[9px] block text-zinc-400">Challenge</Text>
              <Text variant="body" className="text-xs text-zinc-600">{s.challenge}</Text>
            </div>

            <div className="flex gap-4 pt-4 border-t border-zinc-100">
              <div>
                <div className="text-lg font-black text-zinc-900">{s.growth}</div>
                <Text variant="label" className="text-[9px]">Growth</Text>
              </div>
              <div>
                <div className="text-lg font-black text-zinc-900">{s.roas}</div>
                <Text variant="label" className="text-[9px]">ROAS</Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}