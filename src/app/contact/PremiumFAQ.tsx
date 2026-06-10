export default function PremiumFAQ() {
  const faqs = [
    {
      q: "How do we start a software project?",
      a: "Fill out the consultation form, and our project manager will reach out within 2 hours.",
    },
    {
      q: "What is your pricing model?",
      a: "We offer fixed-bid, time-and-material, and dedicated team models tailored to your project scale.",
    },
    {
      q: "Do you provide AI integration?",
      a: "Yes, we specialize in Generative AI, LLMs, and custom machine learning pipelines.",
    },
    {
      q: "Is post-launch support included?",
      a: "We provide comprehensive maintenance and scaling support as part of our long-term partnership.",
    },
    {
      q: "How secure is the development?",
      a: "We adhere to ISO and SOC2 standards, ensuring enterprise-grade encryption and data privacy.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 text-[#0F172A]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="p-6 bg-white rounded-2xl border border-zinc-200 cursor-pointer group"
          >
            <summary className="font-bold text-sm text-[#0F172A] list-none flex justify-between">
              {faq.q}{" "}
              <span className="text-teal-600 group-open:rotate-180">+</span>
            </summary>
            <p className="text-xs text-zinc-600 pt-4 border-t mt-4 border-zinc-100">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
