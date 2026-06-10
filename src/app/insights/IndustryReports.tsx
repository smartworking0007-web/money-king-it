export default function IndustryReports() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black mb-8 text-[#0F172A]">Industry Reports</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {["FinTech", "AI Market", "Cloud Adoption"].map((r) => (
          <div key={r} className="p-8 bg-zinc-900 rounded-3xl text-white">
            <h4 className="font-bold">{r} Report</h4>
            <button className="mt-4 text-[10px] font-bold underline">Download PDF</button>
          </div>
        ))}
      </div>
    </section>
  );
}