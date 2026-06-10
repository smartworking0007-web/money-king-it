export default function FAQAccordion() {
  const faqs = [
    { q: "What services does Money King provide?", a: "We offer full-cycle software development, AI, cybersecurity, and enterprise cloud solutions." },
    { q: "How long does a project take?", a: "Timelines depend on complexity; most range from a few weeks to several months." },
    { q: "Do you support startups?", a: "Yes, we partner with startups, SMEs, and large global enterprises." }
  ];
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-black text-[#0F172A] mb-10 text-center">Popular Questions</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="p-6 bg-white rounded-2xl border border-zinc-200">
            <summary className="font-bold text-[#0F172A]">{f.q}</summary>
            <p className="text-sm text-zinc-600 pt-4 border-t mt-4">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}