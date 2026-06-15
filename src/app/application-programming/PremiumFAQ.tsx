export default function PremiumFAQ() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-black text-center mb-10 text-[#0F172A]">
        FAQ
      </h2>
      <div className="space-y-3">
        {[
          "How do we start?",
          "Is code secure?",
          "Support included?",
          "Scalability?",
          "API First?", 
        ].map((q, i) => (
          <details
            key={i}
            className="p-6 bg-white rounded-2xl border border-zinc-200 cursor-pointer"
          >
            <summary className="font-bold text-[#0F172A]">{q}</summary>
            <p className="text-xs text-zinc-600 pt-4 border-t mt-4 border-zinc-100">
              Money King Software uses enterprise-grade practices to ensure your 
              applications are secure, scalable, and future-ready.
            </p>
          </details> 
        ))} 
      </div>
    </section>
  );
}
