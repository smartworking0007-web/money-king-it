import { Laptop, BarChart3, Smartphone, Shield, Database, Users, Settings, Cpu, Cloud } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    { icon: Laptop, title: "Application Programming" },
    { icon: BarChart3, title: "Performance Marketing" },
    { icon: Smartphone, title: "Mobile App Development" },
    { icon: Shield, title: "Cyber Security" },
    { icon: Database, title: "Data Management" },
    { icon: Users, title: "CRM Solutions" },
    { icon: Settings, title: "ERP Systems" },
    { icon: Cpu, title: "Artificial Intelligence" },
    { icon: Cloud, title: "Managed Cloud Services" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-zinc-200 hover:border-[#2D6A6A] transition-all group shadow-sm">
            <s.icon className="w-10 h-10 text-[#2D6A6A] mb-6" />
            <h4 className="font-black text-[#0F172A] text-xl mb-4">{s.title}</h4>
            <button className="text-[#00D094] font-bold text-xs flex items-center gap-2">Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
}