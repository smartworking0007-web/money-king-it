import { Button } from "@/components/ui/Text";

export default function CTA() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto p-16 bg-[#0F172A] rounded-3xl text-white">
        <h2 className="text-3xl font-black mb-4">
          Ready To Build Your Next Digital Product?
        </h2>
        <p className="mb-8 opacity-80">
          Let s discuss your goals and create a technology solution that drives
          growth.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-teal-600">Talk To Experts</Button>
          <Button variant="outline" className="text-white border-zinc-600">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
