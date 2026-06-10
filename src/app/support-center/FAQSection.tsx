export default function FAQSection() {
  const faqs = ["How do I submit a ticket?", "What are your support hours?", "Do you provide emergency support?"];
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-black text-[#0F172A] mb-10 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((q, i) => (
          <details key={i} className="p-6 bg-white rounded-2xl border border-zinc-200 cursor-pointer">
            <summary className="font-bold text-[#0F172A]">{q}</summary>
            <p className="text-xs text-zinc-600 pt-4">Standard response time is under 2 hours for enterprise clients.</p>
          </details>
        ))}
      </div>
    </section>
  );
}