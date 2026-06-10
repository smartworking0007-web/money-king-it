export default function RecruitmentManagement() {
  const steps = ["ATS", "Resume Screening", "Interview Scheduling", "Evaluation", "Hiring Workflows", "Recruitment Analytics", "Talent Acquisition", "Onboarding Auto"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Recruitment Management</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {steps.map((s) => <div key={s} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{s}</div>)}
      </div>
    </section>
  );
}