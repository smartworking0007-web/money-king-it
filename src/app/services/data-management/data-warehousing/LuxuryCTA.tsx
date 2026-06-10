// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/Text";
export default function LuxuryCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto p-10 rounded-3xl border border-zinc-200 bg-white text-center shadow-sm">
        <h3 className="text-2xl font-black mb-6">Ready To Build A Modern Enterprise Data Warehouse?</h3>
        <div className="flex gap-3 justify-center">
          <Button>Schedule Consultation</Button>
          <Button variant="outline">Request Data Strategy</Button>
        </div>
      </div>
    </section>
  );
}