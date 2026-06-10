import { Text } from "@/components/ui/Text";

export default function PremiumFAQ() {
  const faqs = [
    { q: "Why Native iOS?", a: "Unmatched performance, security, and full access to Apple hardware." }, 
    { q: "Timeline?", a: "Typical enterprise iOS projects take 3-6 months." }, 
    { q: "Maintenance?", a: "Full post-launch support and App Store updates." }
  ];

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <Text variant="h2" className="text-center mb-10">FAQs</Text>
      
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details 
            key={i} 
            className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm hover:border-teal-400 transition-all cursor-pointer"
          >
            <summary className="font-bold text-sm text-zinc-900 list-none flex justify-between">
              {f.q}
              <span className="text-teal-600">+</span>
            </summary>
            {/* Yahan text-zinc-600 set kiya hai taaki contrast achha rahe */}
            <Text variant="body" className="text-xs pt-3 mt-2 border-t border-zinc-100 text-zinc-600">
              {f.a}
            </Text>
          </details>
        ))}
      </div>
    </section>
  );
}