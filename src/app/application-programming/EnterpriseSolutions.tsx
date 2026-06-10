export default function EnterpriseSolutions() {
  const sol = ["ERP Systems", "CRM Platforms", "Business Automation", "Enterprise Portals", "Workflow Systems", "Analytics"];
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-black mb-10 text-[#0F172A]">Enterprise Solutions</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {sol.map((s) => (
          <div key={s} className="p-8 bg-white border-l-4 border-teal-600 rounded-xl shadow-sm">
            <h4 className="font-black text-[#0F172A]">{s}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}