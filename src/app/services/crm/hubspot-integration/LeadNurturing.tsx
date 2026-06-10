export default function LeadNurturing() {
  const nurture = ["Email Sequences", "Lead Scoring", "Behavior Tracking", "Segmentation", "Campaigns", "Conversion Auto", "Engagement", "Retention"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Lead Nurturing Automation</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {nurture.map((n) => (
          <div key={n} className="p-5 bg-white rounded-xl border border-zinc-200 shadow-sm text-center font-bold text-xs text-[#0F172A]">
            {n}
          </div>
        ))}
      </div>
    </section>
  );
}