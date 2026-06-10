import { Text, Button } from "@/components/ui/Text";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <Text variant="label" className="text-teal-600 mb-6 block uppercase tracking-widest">Cloud Security & Compliance</Text>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0F172A] mb-8 leading-[1.1]">Enterprise Cloud Security & Compliance Validation</h1>
        <Text variant="body" className="mb-10 max-w-2xl mx-auto">Secure your infrastructure with compliance-driven frameworks, governance controls, and continuous multi-cloud monitoring.</Text>
        <div className="flex gap-4 justify-center"><Button variant="primary">Request Assessment</Button><Button variant="outline">Book Consultation</Button></div>
      </div>
    </section>
  );
}