import { Text } from "@/components/ui/Text";
export default function IOSSolutions() {
  const items = ["Custom iOS App", "Enterprise iOS", "Swift/SwiftUI", "Modernization", "API Integration", "Apple Watch/iPad"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">iOS Development Solutions</Text>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl border border-zinc-100 hover:border-teal-400 transition-all shadow-sm">
            <Text variant="h4" className="text-base">{item}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}