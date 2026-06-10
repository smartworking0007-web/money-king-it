import { Button } from "@/components/ui/Text";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto p-16 bg-[#2D6A6A] rounded-3xl text-center text-white">
        <h2 className="text-3xl font-black mb-4">Stay Connected For Future Opportunities</h2>
        <p className="mb-8 opacity-80 max-w-xl mx-auto">Our hiring portal is under development. We look forward to connecting with talented professionals who are passionate about innovation.</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#0F172A] hover:bg-black text-white">Contact Us</Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">Learn About Our Company</Button>
        </div>
      </div>
    </section>
  );
}