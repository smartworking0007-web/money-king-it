export default function CloudMigration() {
  const providers = ["AWS Migration", "Azure Migration", "Google Cloud", "Hybrid Cloud", "Multi-Cloud", "Replication", "Backup", "High Availability"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Cloud Strategy</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {providers.map((p) => (
          <div key={p} className="p-6 bg-zinc-900 rounded-xl text-white text-sm font-bold border border-zinc-800">{p}</div>
        ))}
      </div>
    </section>
  );
}