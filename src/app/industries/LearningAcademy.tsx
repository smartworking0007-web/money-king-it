export default function LearningAcademy() {
  const courses = ["Bootcamps", "AI Certs", "Cloud Certs", "Full Stack Dev", "Tech Workshops", "Leadership", "Mentorship", "Career Readiness"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Learning Academy</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {courses.map((c) => <div key={c} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{c}</div>)}
      </div>
    </section>
  );
}