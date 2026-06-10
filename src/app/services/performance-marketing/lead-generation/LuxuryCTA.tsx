import { Text, Button } from "@/components/ui/Text";

export default function LuxuryCTA() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto p-8 rounded-3xl border border-zinc-200 bg-white text-center shadow-sm">
        <Text variant="h4" className="mb-6 leading-tight">
          Ready To Build A Predictable Revenue Pipeline?
        </Text>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">Book Strategy Call</Button>
        </div>
      </div>
    </section>
  );
}