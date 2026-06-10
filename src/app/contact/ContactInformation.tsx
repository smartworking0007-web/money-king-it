import { Phone, Mail, MessageSquare, User, Wrench, Handshake } from "lucide-react";

export default function ContactInformation() {
  const info = [
    { title: "Call Us", icon: Phone, val: "+91 99999 99999" },
    { title: "Email Us", icon: Mail, val: "support@moneyking.com" },
    { title: "WhatsApp", icon: MessageSquare, val: "Connect Now" },
    { title: "Sales Team", icon: User, val: "Connect to Sales" },
    { title: "Tech Support", icon: Wrench, val: "24/7 Assistance" },
    { title: "Partnership", icon: Handshake, val: "Join Network" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {info.map((item, i) => (
        <div key={i} className="p-5 bg-white rounded-2xl border border-zinc-200 hover:border-teal-400 transition-all">
          <item.icon className="w-5 h-5 text-teal-600 mb-2" />
          <h4 className="font-bold text-[11px] uppercase text-zinc-500">{item.title}</h4>
          <p className="text-xs font-bold text-[#0F172A] mt-1">{item.val}</p>
        </div>
      ))}
    </div>
  );
}