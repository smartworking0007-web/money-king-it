import { Text } from "@/components/ui/Text";

export default function CRMIntegrations() {
  const tools = ["Salesforce", "HubSpot", "Zoho", "Pipedrive", "Apollo.io", "Dynamics"];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <Text variant="h2" className="text-center mb-16">Seamless CRM Integrations</Text>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.map((t) => (
          <div key={t} className="p-6 bg-white rounded-2xl border border-zinc-200 text-center font-bold text-zinc-700">{t}</div>
        ))}
      </div>
    </section>
  );
}