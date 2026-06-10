import { Text } from "@/components/ui/Text";

export default function IndustrySolutions() {
  const industries = ["Fintech", "Banking", "Healthcare", "Education", "SaaS", "E-Commerce"];
  
  return (
    // py-12 aur max-w-5xl se section compact ho gaya
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Industry Solutions</Text>
      
      {/* gap-4 aur grid structure tight kiya gaya hai */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {industries.map((industry) => (
          <div 
            key={industry} 
            className="p-6 bg-white border border-zinc-100 rounded-2xl hover:border-teal-400 hover:shadow-sm transition-all"
          >
            <Text variant="h4" className="text-base">{industry}</Text>
            <Text variant="body" className="mt-1 text-[11px] text-zinc-400 leading-tight">
              Lead frameworks for {industry} performance.
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}