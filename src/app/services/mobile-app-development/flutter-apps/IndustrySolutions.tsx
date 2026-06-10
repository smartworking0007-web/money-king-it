import { Text } from "@/components/ui/Text";

export default function IndustrySolutions() {
  const industries = ["Fintech", "Banking", "Healthcare", "E-Commerce", "Logistics", "Travel"];
  
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Industries</Text>
      
      {/* Box compact aur grid tight */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {industries.map((ind) => (
          <div 
            key={ind} 
            className="p-4 bg-white border border-zinc-100 rounded-xl shadow-sm text-center hover:border-teal-400 transition-all"
          >
            {/* Text color add kiya hai taaki visible ho */}
            <Text variant="body" className="text-zinc-900 font-bold text-xs">
              {ind}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}