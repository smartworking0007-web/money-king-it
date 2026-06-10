import { Button } from "@/components/ui/Text";
export default function CTA() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto p-16 bg-[#2D6A6A] rounded-3xl text-white">
        <h2 className="text-3xl font-black mb-4">Need Immediate Assistance?</h2>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#0F172A] text-white">Contact Support Team</Button>
          <Button variant="outline" className="text-white border-white/20">Explore Services</Button>
        </div>
      </div>
    </section>
  );
}