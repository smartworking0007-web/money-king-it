import { Button } from "@/components/ui/Text";

export default function CTA() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto p-16 bg-[#0F172A] rounded-3xl text-white">
        <h2 className="text-3xl font-black mb-4">Need More Information?</h2>
        <p className="mb-8 opacity-80">If you have any questions regarding our Disclaimer or legal policies, our team is available to assist you.</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#2D6A6A] hover:bg-[#235353] text-white">Contact Us</Button>
          <Button variant="outline" className="text-white border-zinc-600">Get Consultation</Button>
        </div>
      </div>
    </section>
  );
}