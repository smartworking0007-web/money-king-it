export default function CampusRecruitment() {
  const items = ["Hiring Drives", "Graduate Programs", "Technical Assess.", "Virtual Events", "Placement Support", "Career Dev", "Leadership Dev", "Fast Track Hiring"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Campus Recruitment</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((s) => (
          <div key={s} className="p-6 bg-white rounded-xl border border-zinc-200 hover:border-teal-400 transition-all text-center">
            <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}