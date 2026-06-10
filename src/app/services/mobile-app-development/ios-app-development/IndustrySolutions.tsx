import { Text } from "@/components/ui/Text";

export default function IndustrySolutions() {
  const industries = ["Fintech", "Banking", "Healthcare", "Education", "SaaS", "E-Commerce"];
  
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Industries We Serve</Text>
      
      {/* Grid: gap-3 aur p-4 se boxes compact ho gaye */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {industries.map((ind) => (
          <div 
            key={ind} 
            className="p-4 bg-white border border-zinc-100 rounded-xl shadow-sm text-center hover:border-teal-400 transition-all"
          >
            <Text variant="body" className="font-bold text-zinc-900 text-xs">
              {ind}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}