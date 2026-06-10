import { Button } from "@/components/ui/Text";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto p-16 bg-[#0F172A] rounded-3xl text-center text-white">
        <h2 className="text-3xl font-black mb-8">Transform Knowledge Into Business Growth</h2>
        <div className="flex gap-4 justify-center">
          <Button className="bg-teal-600 hover:bg-teal-500">Explore Insights</Button>
          <Button variant="outline" className="text-white border-zinc-700">Contact Experts</Button>
        </div>
      </div>
    </section>
  );
}