import { Text, Button } from "@/components/ui/Text";
export default function LuxuryCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto p-10 rounded-3xl border border-zinc-200 bg-white text-center shadow-sm">
        <Text variant="h3" className="mb-8">Ready To Build Your Next iOS Application?</Text>
        <Button variant="primary" size="lg">Schedule Consultation</Button>
      </div>
    </section>
  );
}