export default function HubspotServices() {
  const items = ["CRM Setup", "Pipeline Integration", "Marketing Automation", "Lead Mgmt", "Lifecycle", "Workflow Automation", "CRM Migration", "Email Automation", "Analytics", "API Integration"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">HubSpot Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {items.map((x) => (
          <div key={x} className="p-5 bg-white border border-zinc-200 rounded-xl hover:border-teal-400 transition-all text-center">
            <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-widest">{x}</span>
          </div>
        ))}
      </div>
    </section>
  );
}