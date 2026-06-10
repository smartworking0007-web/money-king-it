export default function FutureOpportunities() {
  const jobs = ["Full Stack Developer", "React Developer", "Next.js Developer", "AI Engineer", "Cloud Architect", "Cyber Security Analyst", "Performance Marketing", "UI/UX Designer", "Project Manager", "Business Dev.", "Sales Manager", "HR Executive"];
  
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black text-[#0F172A] mb-12 text-center">Future Career Paths</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {jobs.map((j) => (
          <div key={j} className="p-6 bg-white rounded-2xl border border-zinc-200 text-center hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-[#0F172A] text-sm mb-3">{j}</h4>
            <span className="bg-[#00D094]/10 text-[#00D094] text-[9px] font-black uppercase px-3 py-1 rounded-full">Opening Soon</span>
          </div>
        ))}
      </div>
    </section>
  );
}