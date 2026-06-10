import { ArrowRight } from "lucide-react";

export default function PopularQuestions() {
  const cards = ["Software Development", "AI Solutions", "Cloud Services", "Cyber Security", "CRM Systems", "ERP Solutions"];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <div key={i} className="p-8 bg-zinc-900 rounded-3xl text-white group">
          <h4 className="font-black mb-2">{c}</h4>
          <p className="text-xs opacity-70 mb-6">Learn more about our specialized {c} services.</p>
          <button className="flex items-center gap-2 text-sm font-bold text-[#00D094]">Learn More <ArrowRight size={16} /></button>
        </div>
      ))}
    </section>
  );
}