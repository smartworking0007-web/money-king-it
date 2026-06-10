import { Text } from "@/components/ui/Text";

export default function BusinessImpact() {
  const impacts = [
    "Organic Revenue Growth", 
    "Qualified Lead Generation", 
    "Search Visibility Increase", 
    "CAC Reduction", 
    "Brand Authority", 
    "Scalability"
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#E5EBEB]">
      <Text variant="h2" className="text-3xl font-bold mb-10 text-center">Business Impact</Text>
      
      {/* Grid columns kam karke ya gap badha kar boxes ko balance kiya gaya hai */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {impacts.map((item) => (
          <div 
            key={item} 
            className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-center"
          >
            {/* variant="body" ki jagah small size text ka use kiya hai */}
            <Text variant="body" className="font-semibold text-sm md:text-base leading-tight">
              {item}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}