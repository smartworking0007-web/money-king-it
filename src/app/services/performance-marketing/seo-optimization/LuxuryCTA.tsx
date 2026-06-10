import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Text";
export default function LuxuryCTA() {
  return (
    <section className="py-20 px-6 text-center bg-[#E5EBEB]">
      <Text variant="body" className="text-4xl font-bold mb-8">Ready To Turn Search Traffic Into Revenue?</Text>
      <div className="flex gap-4 justify-center">
        <Button size="lg">Book Strategy Call</Button>
        <Button size="lg" variant="outline">Get Free SEO Audit</Button>
      </div>
    </section>
  );
}