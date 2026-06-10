import { Cpu, Shield, Cloud, Users, Settings, Code, Mail, Database } from "lucide-react";

export default function FAQCategories() {
  const cats = [
    { icon: Database, title: "General", count: "12" },
    { icon: Code, title: "Software Dev", count: "8" },
    { icon: Cpu, title: "AI Services", count: "5" },
    { icon: Shield, title: "Cyber Security", count: "7" },
    { icon: Cloud, title: "Cloud Services", count: "6" },
    { icon: Users, title: "CRM Solutions", count: "4" },
    { icon: Settings, title: "ERP Systems", count: "5" },
    { icon: Mail, title: "Billing & Support", count: "9" },
  ];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {cats.map((c, i) => (
        <div key={i} className="p-6 bg-white rounded-2xl border border-zinc-200 hover:border-[#2D6A6A] transition-all cursor-pointer">
          <c.icon className="w-8 h-8 text-[#2D6A6A] mb-4" />
          <h4 className="font-bold text-[#0F172A]">{c.title}</h4>
          <span className="text-xs text-zinc-500">{c.count} questions</span>
        </div>
      ))}
    </section>
  );
}