import { Text } from "@/components/ui/Text";

export default function LeadSolutions() {
  const items = [
    "B2B Lead Gen", 
    "Enterprise Acquisition", 
    "Inbound Strategy", 
    "Outbound Prospecting", 
    "Funnel Opt.", 
    "Automation"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Lead Generation Solutions</Text>
      
      {/* Grid ko 3-column ke bajaye 2x3 ya compact rakha hai */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="p-6 bg-white rounded-2xl border border-zinc-100 hover:border-teal-400 hover:shadow-md transition-all duration-300"
          >
            <Text variant="h4" className="mb-1 text-base">{item}</Text>
            <Text variant="body" className="text-xs text-zinc-500 leading-snug">
              High-intent strategies tailored for enterprise scale.
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}