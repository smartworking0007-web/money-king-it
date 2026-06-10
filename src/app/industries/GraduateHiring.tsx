export default function GraduateHiring() {
  const steps = ["Registration", "Assessment", "Tech Eval", "Project Review", "Interview", "Offer", "Training", "Placement"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Hiring Pipeline</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {steps.map((s, i) => (
          <div key={s} className="px-5 py-3 bg-white rounded-full border border-zinc-200 text-xs font-black text-[#0F172A] shadow-sm">
            0{i + 1}. {s}
          </div>
        ))}
      </div>
    </section>
  );
}