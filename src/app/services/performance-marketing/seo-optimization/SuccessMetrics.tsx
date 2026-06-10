import { Text } from "@/components/ui/Text";

export default function SuccessMetrics() {
  const stats = [
    { v: "500+", l: "Keywords Ranked" }, 
    { v: "300%", l: "Traffic Growth" }, 
    { v: "95%", l: "Retention" }
  ];

  return (
    <section className="py-12 px-6 bg-[#E5EBEB]">
      {/* Container ko narrow kiya hai taaki metrics tight aur dashboard-like lagen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((s) => (
          <div 
            key={s.l} 
            className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center"
          >
            {/* Font size chota kiya hai taaki boxes balance rahen */}
            <Text variant="body" className="text-3xl md:text-4xl font-bold text-[#14B8A6] mb-1">
              {s.v}
            </Text>
            <Text variant="body" className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
              {s.l}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}