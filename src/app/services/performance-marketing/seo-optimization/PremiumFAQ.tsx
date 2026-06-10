import { Text } from "@/components/ui/Text";

export default function PremiumFAQ() {
  return (
    <section className="py-20 px-6 md:px-24 bg-[#E5EBEB]">
      <Text variant="h2" className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</Text>
      <div className="max-w-3xl mx-auto space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200">
            <Text variant="body" className="font-semibold">How does ROI-focused SEO work?</Text>
          </div>
        ))}
      </div>
    </section>
  );
}