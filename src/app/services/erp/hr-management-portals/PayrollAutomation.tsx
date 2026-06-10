export default function PayrollAutomation() {
  const items = ["Salary Processing", "Tax Management", "Benefits Admin", "Compliance", "Payroll Reporting", "Direct Deposit", "Reimbursements", "Fin Integration"];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">Payroll Automation</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {items.map((i) => <div key={i} className="p-5 bg-zinc-900 rounded-xl text-white text-xs font-bold">{i}</div>)}
      </div>
    </section>
  );
}