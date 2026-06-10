export default function CloudMonitoring() {
  const mon = ["Real-Time Metrics", "Infrastructure Alerts", "Performance", "Availability", "Traffic Analytics", "Incidents", "Health Monitoring", "Observability"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Cloud Monitoring</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {mon.map((m) => <div key={m} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{m}</div>)}
      </div>
    </section>
  );
}