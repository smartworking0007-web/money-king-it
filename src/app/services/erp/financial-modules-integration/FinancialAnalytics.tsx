export default function FinancialAnalytics() {
  const stats = ["Profitability", "Forecasting", "Expense Opt.", "Budget Perf.", "Cash Flow", "KPI Monitoring", "Risk Assessment", "Exec Reporting"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Financial Analytics</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {stats.map((s) => <div key={s} className="p-5 bg-white rounded-xl border border-zinc-200 text-center font-bold text-xs text-[#0F172A]">{s}</div>)}
      </div>
    </section>
  );
}