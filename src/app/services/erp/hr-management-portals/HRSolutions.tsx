export default function HRSolutions() {
  const sol = ["Employee Mgmt", "Attendance/Leave", "Payroll Auto", "Recruitment", "Self-Service", "Performance", "Workforce Plan", "HR Analytics", "Compliance", "Org Mgmt"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">HR Technology Solutions</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {sol.map((s) => (
          <div key={s} className="p-5 bg-white rounded-xl border border-zinc-200 hover:border-teal-400 transition-all text-center">
            <span className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}