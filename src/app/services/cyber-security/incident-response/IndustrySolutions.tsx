import { Text } from "@/components/ui/Text";

export default function IndustrySolutions() {
  const industries = [
    "Banking", 
    "Fintech", 
    "Healthcare", 
    "Government", 
    "Education", 
    "SaaS", 
    "E-Commerce", 
    "Manufacturing", 
    "Telecom", 
    "Enterprise Tech"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Industries Served</Text>
      
      {/* Grid compact aur mobile-responsive */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {industries.map((ind) => (
          <div 
            key={ind} 
            className="p-4 bg-white border border-zinc-100 rounded-xl shadow-sm text-center hover:border-teal-400 transition-all"
          >
            <Text variant="body" className="text-zinc-900 font-bold text-xs">
              {ind}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}