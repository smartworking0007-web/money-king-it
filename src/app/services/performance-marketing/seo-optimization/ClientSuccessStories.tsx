import { Text } from "@/components/ui/Text";

export default function ClientSuccessStories() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#E5EBEB]">
      <Text variant="h2" className="text-3xl font-bold mb-10 text-center text-[#0F172A]">
        Case Studies
      </Text>
      
      {/* Grid: Mobile par 1 column, Tablet/Desktop par 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            {/* variant="p" ka use kiya hai heading ke liye agar h2/h3 available na ho */}
            <Text variant="body" className="font-bold text-lg mb-2 text-[#0F172A]">
              Client {i} Success
            </Text>
            {/* Body text ke liye standard p variant */}
            <Text variant="body" className="text-sm text-slate-500 leading-relaxed">
              Real-world challenge, data-driven strategy, and measurable growth impact that drove business revenue.
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}