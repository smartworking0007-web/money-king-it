import { Text } from "@/components/ui/Text";

export default function ClientSuccessStories() {
  const stories = [
    { client: "Global Fintech", challenge: "Data Exposure", improvement: "98%" },
    { client: "Healthcare Corp", challenge: "HIPAA Non-Compliance", improvement: "95%" },
    { client: "Enterprise SaaS", challenge: "Zero-Day Threats", improvement: "99%" }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Client Success</Text>
      <div className="grid md:grid-cols-3 gap-3">
        {stories.map((s, i) => (
          <div key={i} className="p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
            <Text variant="h4" className="text-sm">{s.client}</Text>
            <div className="text-xl font-black text-zinc-900 mt-2">{s.improvement}</div>
            <Text variant="label" className="text-[9px]">Security Improvement</Text>
          </div>
        ))}
      </div>
    </section>
  );
}