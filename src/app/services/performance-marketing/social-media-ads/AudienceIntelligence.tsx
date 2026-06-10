import Text from '@/components/ui/Text';

export default function AudienceIntelligence() {
  const intelligenceCards = [
    { title: "Behavioral Targeting", desc: "AI-driven tracking of user actions." },
    { title: "Demographic Intelligence", desc: "Precision segmenting by lifestyle and profile." },
    { title: "Predictive Segmentation", desc: "Anticipating user needs before they act." },
    { title: "Lookalike Modeling", desc: "Finding high-value clones of your best customers." }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Text variant="label" className="text-emerald-600 mb-4">Deep Data Analysis</Text>
        <Text variant="h2">Audience Intelligence</Text>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {intelligenceCards.map((card, index) => (
          <div 
            key={index} 
            className="p-10 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <Text variant="h4" className="mb-4">{card.title}</Text>
            <Text variant="body" className="text-zinc-600">{card.desc}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}