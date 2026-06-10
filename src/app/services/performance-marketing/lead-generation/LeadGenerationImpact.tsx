import { Text } from "@/components/ui/Text";

export default function LeadGenerationImpact() {
  return (
    <section className="py-12 px-6 bg-white rounded-3xl max-w-5xl mx-auto my-8 border border-zinc-100 shadow-sm">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {["Qualified Lead Growth", "Pipeline Expansion", "Revenue Acceleration"].map((item) => (
          <div key={item} className="space-y-1">
            <Text variant="h4" className="text-teal-600 font-black mb-1">↑</Text>
            <Text variant="body" className="font-bold text-zinc-900 text-sm">{item}</Text>
            <Text variant="label" className="text-[10px] block mt-1 text-zinc-400">
              Impact on quarterly velocity
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}