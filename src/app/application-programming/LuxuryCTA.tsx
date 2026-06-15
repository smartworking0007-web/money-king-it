import { Button } from "@/components/ui/Text";

export default function LuxuryCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto p-16 bg-[#0F172A] rounded-3xl text-center text-white">
        <h2 className="text-3xl font-black mb-4">
          Ready To Build Enterprise Software That Scales ?
        </h2>
        <p className="mb-8 opacity-80">
          Partner with Money King Software to develop secure, scalable, and
          future-ready applications.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-teal-600 hover:bg-teal-500 text-white">
            Book Free Consultation
          </Button>
          <Button variant="outline" className="text-white border-zinc-700">
            Request Proposal
          </Button>
        </div>
      </div>
    </section>
  );
}
