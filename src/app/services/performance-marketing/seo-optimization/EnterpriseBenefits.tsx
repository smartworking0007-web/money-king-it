import { Text } from "@/components/ui/Text";

export default function EnterpriseBenefits() {
  const benefits = [
    "Multi-Location SEO", 
    "International SEO", 
    "Automation", 
    "Content Scaling", 
    "Tech Infrastructure"
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#E5EBEB]">
      <Text variant="h2" className="text-3xl font-bold mb-10 text-center text-[#0F172A]">
        Enterprise Solutions
      </Text>
      
      {/* Grid: Mobile par 1 column, Tablet par 2, Desktop par 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {benefits.map((b) => (
          <div 
            key={b} 
            className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-center text-center"
          >
            <Text variant="body" className="font-semibold text-sm md:text-base text-[#334155]">
              {b}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}