import { Text } from "@/components/ui/Text";

export default function ComplianceSolutions() {
  const c = ["ISO 27001", "SOC 2", "PCI DSS", "HIPAA", "GDPR", "NIST", "CIS", "RBI"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Compliance Validation</Text>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {c.map((x, i) => (
          <div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm text-center">
            <Text variant="body" className="text-zinc-900 font-bold text-[10px] uppercase tracking-wider">{x}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}