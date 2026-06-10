import { Mail, Phone, MessageCircle, FileInput } from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-4 gap-4">
      {[ {title: "Email", icon: Mail}, {title: "Phone", icon: Phone}, {title: "Chat", icon: MessageCircle}, {title: "Tickets", icon: FileInput} ].map((c, i) => (
        <div key={i} className="p-8 bg-zinc-900 rounded-2xl text-white text-center">
          <c.icon className="w-8 h-8 mx-auto mb-4 opacity-80" />
          <h4 className="font-bold text-sm">{c.title}</h4>
        </div>
      ))}
    </section>
  );
}