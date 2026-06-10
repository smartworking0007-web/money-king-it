import { Button } from "@/components/ui/Text";

export default function LuxuryCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto p-12 bg-white rounded-3xl border border-zinc-200 text-center shadow-sm">
        <h3 className="text-2xl font-black text-[#0F172A] mb-8">Ready To Modernize Your Supply Chain Operations?</h3>
        <div className="flex gap-3 justify-center">
          <Button className="bg-[#0F172A]">Book ERP Consultation</Button>
          <Button variant="outline" className="text-[#0F172A]">Request Assessment</Button>
        </div>
      </div>
    </section>
  );
}