export default function TopicsPreview() {
  const topics = [
    "AI & Automation",
    "Cyber Security",
    "Cloud Infra",
    "Software Dev",
    "FinTech",
    "CRM & ERP",
    "Mobile Apps",
    "Marketing",
    "Enterprise Tech",
    "Business Growth",
    "Data Analytics",
    "Emerging Tech",
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black text-[#0F172A] mb-12 text-center">
        Topics We Will Cover
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topics.map((t) => (
          <div
            key={t}
            className="p-6 bg-white rounded-2xl border border-zinc-200 text-center hover:shadow-lg transition-shadow"
          >
            <h4 className="font-bold text-[#0F172A] text-sm mb-3">{t}</h4>
            <span className="bg-[#2D6A6A]/5 text-[#2D6A6A] text-[9px] font-black uppercase px-3 py-1 rounded-full">
              Coming Soon
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
