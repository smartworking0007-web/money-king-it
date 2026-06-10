import Text from '@/components/ui/Text';

export default function IndustrySolutions() {
  const industries = [
    "Fintech", "Banking", "Insurance", 
    "Healthcare", "Education", "SaaS", 
    "E-Commerce", "Real Estate", "Logistics"
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Text variant="label" className="text-emerald-600 mb-4">Domain Expertise</Text>
        <Text variant="h2">Industry Solutions</Text>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <div 
            key={index} 
            className="p-8 bg-white border border-zinc-200 rounded-3xl hover:border-emerald-500 hover:bg-emerald-50/30 transition-all duration-300 group"
          >
            <Text variant="h4" className="group-hover:text-emerald-800 transition-colors">
              {industry}
            </Text>
            <Text variant="body" className="mt-2 text-zinc-500 text-sm">
              Customized predictive models for {industry} performance.
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}