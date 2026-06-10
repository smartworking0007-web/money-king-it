export default function WhyChooseUs() {
  const reasons = [
    "Dedicated PMs",
    "Fast Response",
    "Enterprise Expertise",
    "Global Team",
    "Transparency",
    "Long-Term Support",
  ];
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      {reasons.map((r) => (
        <div
          key={r}
          className="p-8 bg-white rounded-2xl border border-zinc-200"
        >
          <h4 className="font-black text-[#0F172A]">{r}</h4>
        </div>
      ))}
    </section>
  );
}
