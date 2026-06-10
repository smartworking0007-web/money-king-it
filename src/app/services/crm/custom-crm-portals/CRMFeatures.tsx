export default function CRMFeatures() {
  const features = ["Lead Scoring", "Task Management", "Forecasting", "Profiles", "Activity Logs", "Collaboration", "Notifications", "Reporting"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">CRM Features</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {features.map((f) => (
          <div key={f} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-white font-bold text-sm">
            {f}
          </div>
        ))}
      </div>
    </section>
  );
}