import { Cpu, Shield, Cloud, Laptop, Code, Zap } from "lucide-react";

export default function ComingSoon() {
  const cards = [
    { icon: Zap, title: "Technology Trends" },
    { icon: Cpu, title: "Artificial Intelligence" },
    { icon: Shield, title: "Cyber Security" },
    { icon: Cloud, title: "Cloud Computing" },
    { icon: Laptop, title: "Software Development" },
    { icon: Code, title: "Digital Transformation" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="bg-[#00D094]/10 text-[#00D094] font-black text-[10px] uppercase px-4 py-1 rounded-full mb-4 inline-block">🚀 New Articles Will Be Published Soon</span>
        <h2 className="text-3xl font-black text-[#0F172A] mb-4">Our Content Hub Is Under Development</h2>
        <p className="text-zinc-600 max-w-xl mx-auto">Our team is working on a comprehensive resource center to help businesses stay informed about emerging technologies and best practices.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-zinc-200 hover:border-[#2D6A6A] transition-all group shadow-sm">
            <c.icon className="w-10 h-10 text-[#2D6A6A] mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-black text-[#0F172A]">{c.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}