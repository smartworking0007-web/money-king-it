import { Text } from "@/components/ui/Text";

export default function ClientSuccessStories() {
  const stories = [
    { client: "Major Bank", challenge: "Infrastructure Vulnerability", result: "92% Reduction" },
    { client: "Fintech Scaleup", challenge: "API Security Gap", result: "99% Mitigated" },
    { client: "Govt Portal", challenge: "Compliance Breach", result: "SOC2 Certified" }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Client Success Stories</Text>
      <div className="grid md:grid-cols-3 gap-3">
        {stories.map((s, i) => (
          <div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
            <Text variant="h4" className="text-sm">{s.client}</Text>
            <div className="text-xl font-black text-zinc-900 mt-2">{s.result}</div>
            <Text variant="label" className="text-[9px] uppercase tracking-wider">Security Outcome</Text>
          </div>
        ))}
      </div>
    </section>
  );
}