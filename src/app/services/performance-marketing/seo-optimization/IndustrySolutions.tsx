import { Text } from "@/components/ui/Text";

export default function IndustrySolutions() {
  const industries = ["Fintech", "Banking", "Healthcare", "Education", "SaaS", "E-Commerce"];
  
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#E5EBEB]">
      <Text variant="h2" className="text-3xl font-bold mb-10 text-center text-[#0F172A]">
        Industries We Serve
      </Text>
      
      {/* Grid: Mobile par 2, Tablet/Desktop par 3-4 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {industries.map((ind) => (
          <div 
            key={ind} 
            className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center cursor-pointer hover:border-teal-400"
          >
            <Text variant="body" className="font-semibold text-sm md:text-sm text-[#334155]">
              {ind}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}