import Text from '@/components/ui/Text';

export default function ClientSuccessStories() {
  const stories = [
    { industry: "Fintech", challenge: "High CAC.", strategy: "AI-driven retargeting.", roi: "350%", revenue: "45%" },
    { industry: "SaaS", challenge: "Low demo conversion.", strategy: "Behavioral intelligence.", roi: "280%", revenue: "30%" },
    { industry: "Luxury Retail", challenge: "Stagnant reach.", strategy: "Lookalike AI modeling.", roi: "420%", revenue: "55%" }
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <Text variant="label" className="text-emerald-600 mb-2 font-semibold uppercase tracking-widest text-xs">Proven Results</Text>
        <Text variant="h2" className="text-zinc-900 text-3xl">Client Success Stories</Text>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((story, i) => (
          <div key={i} className="p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <Text variant="h4" className="mb-4 text-emerald-700 text-lg">{story.industry}</Text>
            
            <div className="space-y-3 mb-6">
              <div>
                <Text variant="label" className="block text-zinc-400 text-[10px] uppercase">Challenge</Text>
                <Text variant="body" className="text-xs text-zinc-700">{story.challenge}</Text>
              </div>
              <div>
                <Text variant="label" className="block text-zinc-400 text-[10px] uppercase">Strategy</Text>
                <Text variant="body" className="text-xs text-zinc-700">{story.strategy}</Text>
              </div>
            </div>

            <div className="flex gap-6 pt-4 border-t border-zinc-100">
              <div>
                <Text variant="h4" className="text-lg">{story.roi}</Text>
                <Text variant="label" className="text-[10px] text-zinc-500">ROI</Text>
              </div>
              <div>
                <Text variant="h4" className="text-lg">{story.revenue}</Text>
                <Text variant="label" className="text-[10px] text-zinc-500">Growth</Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}