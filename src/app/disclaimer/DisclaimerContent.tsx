import { Shield, FileText, AlertCircle, Link2, Globe, Cpu, Lock, Gavel, RefreshCw, Mail } from "lucide-react";

const sections = [
  { icon: FileText, title: "General Information", text: "The information provided by Money King IT Solutions on this website is for general informational purposes only." },
  { icon: Gavel, title: "Professional Services", text: "Our services are subject to specific agreements. This website does not constitute a binding professional contract." },
  { icon: AlertCircle, title: "Limitation of Liability", text: "Money King IT Solutions shall not be liable for any indirect, incidental, or consequential damages arising from site use." },
  { icon: Link2, title: "Third-Party Links", text: "Our site may contain links to third-party sites. We hold no responsibility for their content or privacy practices." },
  { icon: Globe, title: "Service Availability", text: "We strive to keep our services available, but we cannot guarantee uninterrupted access to our digital platforms." },
  { icon: Cpu, title: "Intellectual Property", text: "All content, logos, and software architecture are the exclusive property of Money King IT Solutions." },
  { icon: Lock, title: "Data & Cybersecurity", text: "While we employ industry-standard security, no digital transmission is 100% secure. Use at your own discretion." },
  { icon: Shield, title: "No Warranty", text: "Services are provided 'as is'. We disclaim all warranties, express or implied, regarding site accuracy." },
  { icon: RefreshCw, title: "Changes to Disclaimer", text: "We reserve the right to update this disclaimer at any time. Continued use implies acceptance of changes." },
  { icon: Mail, title: "Contact Information", text: "For any legal inquiries, please reach out to our compliance department via our official contact channels." },
];

export default function DisclaimerContent() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((s, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-zinc-200 hover:border-[#2D6A6A] transition-all shadow-sm">
            <s.icon className="w-8 h-8 text-[#2D6A6A] mb-6" />
            <h3 className="text-xl font-black text-[#0F172A] mb-4">{s.title}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}