import { Text } from "@/components/ui/Text";

export default function PerformanceDashboard() {
  const metrics = [
    { l: "Organic Traffic", v: "+145%" }, 
    { l: "Search Visibility", v: "89%" }, 
    { l: "Conversion Rate", v: "4.2%" }
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-[#E5EBEB]">
      {/* Light Container with subtle shadow */}
      <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 border border-slate-200 shadow-sm">
        <Text variant="h2" className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-[#0F172A]">
          Live SEO Performance
        </Text>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {metrics.map((m) => (
            <div 
              key={m.l} 
              className="p-5 bg-[#F8FAFC] rounded-2xl text-center border border-slate-100 transition-all hover:shadow-md"
            >
              <Text variant="body" className="text-slate-500 text-xs md:text-sm mb-1">
                {m.l}
              </Text>
              <Text variant="h3" className="text-[#14B8A6] text-2xl md:text-4xl font-bold">
                {m.v}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}