import { Text } from "@/components/ui/Text";
export default function IndustrySolutions() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Industries</Text>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">{["Fintech", "Banking", "Healthcare", "E-Commerce", "Logistics", "Travel"].map((ind) => (<div key={ind} className="p-4 bg-white border border-zinc-100 rounded-xl text-xs font-bold text-zinc-900 text-center">{ind}</div>))}</div></section>
  );
}