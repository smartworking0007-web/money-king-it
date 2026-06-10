export default function UniversityPartnerships() {
  const parts = ["Industry Collab", "Research", "Innovation Labs", "Skill Dev", "Curriculum", "Guest Lectures", "Hackathons", "Tech Workshops"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">University Partnerships</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {parts.map((p) => <div key={p} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{p}</div>)}
      </div>
    </section>
  );
}