export default function InternshipPrograms() {
  const progs = ["Software Dev", "AI & ML", "Cloud Computing", "Data Analytics", "Cyber Security", "UI/UX Design", "DevOps", "Full Stack"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Internship Programs</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {progs.map((p) => <div key={p} className="p-5 bg-zinc-900 rounded-xl text-white text-xs font-bold">{p}</div>)}
      </div>
    </section>
  );
}