import { Button } from "@/components/ui/Text";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto p-16 bg-[#2D6A6A] rounded-3xl text-center text-white">
        <h2 className="text-3xl font-black mb-4">Stay Connected For Future Insights</h2>
        <p className="mb-8 opacity-80 max-w-xl mx-auto">Be among the first to access expert articles, industry research, and business innovation strategies from Money King IT Solutions.</p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#0F172A] hover:bg-black text-white">Contact Us</Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">Explore Our Services</Button>
        </div>
      </div>
    </section>
  );
}