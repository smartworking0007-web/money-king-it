import { Text } from "@/components/ui/Text";
export default function TechnologyStack() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto"><Text variant="h2" className="text-center mb-10">Stack</Text>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{["Flutter", "Dart", "Firebase", "Node.js"].map((t) => (<div key={t} className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl text-center text-xs font-bold text-teal-600">{t}</div>))}</div></section>
  );
}