import { Text } from "@/components/ui/Text";
export default function EnterpriseFeatures() {
  const f = ["Face ID", "Apple Pay", "Push Notifs", "Offline Sync", "CloudKit", "Real-Time Updates"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <Text variant="h2" className="text-center mb-10">Enterprise Features</Text>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{f.map((x, i) => (<div key={i} className="p-6 bg-white rounded-2xl border border-zinc-100 text-sm font-semibold text-zinc-700">{x}</div>))}</div>
    </section>
  );
}