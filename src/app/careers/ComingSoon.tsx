import { Laptop, Cpu, Shield, Cloud, Megaphone, Settings } from "lucide-react";

export default function ComingSoon() {
  const cards = [
    { icon: Laptop, title: "Software Development" },
    { icon: Cpu, title: "Artificial Intelligence" },
    { icon: Shield, title: "Cyber Security" },
    { icon: Cloud, title: "Cloud Engineering" },
    { icon: Megaphone, title: "Digital Marketing" },
    { icon: Settings, title: "Business Operations" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#0F172A] mb-4">
          Exciting Opportunities Are On The Way
        </h2>
        <p className="text-zinc-600 max-w-xl mx-auto">
          We are currently building our dedicated recruitment platform. Soon you
          will be able to explore open positions and join our innovators.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-3xl border border-zinc-200 hover:border-[#2D6A6A] transition-all group shadow-sm"
          > 
            <c.icon className="w-10 h-10 text-[#2D6A6A] mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-black text-[#0F172A]">{c.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
