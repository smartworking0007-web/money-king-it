import { Mail, Phone } from "lucide-react";

export default function ContactSupport() {
  const contactMethods = [
    {
      title: "Email",
      value: "info@moneykingfinancial.com",
      href: "mailto:info@moneykingfinancial.com",
      icon: Mail,
    },
    {
      title: "Phone",
      value: "+91 9311284229",
      href: "tel:+919311284229",
      icon: Phone,
    },
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
      {contactMethods.map((c, i) => (
        <a
          key={i}
          href={c.href}
          className="p-8 bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-2xl text-white text-center flex flex-col items-center justify-center group"
        >
          <c.icon className="w-8 h-8 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
          <h4 className="font-bold text-base mb-1">{c.title}</h4>
          <p className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
            {c.value}
          </p>
        </a>
      ))}
    </section>
  );
}