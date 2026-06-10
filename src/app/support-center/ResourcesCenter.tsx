import { BookOpen, FileText, Video } from "lucide-react";

export default function ResourcesCenter() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black text-[#0F172A] mb-12">Helpful Resources</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[ {title: "Documentation", icon: BookOpen}, {title: "Knowledge Base", icon: FileText}, {title: "Video Tutorials", icon: Video} ].map((r, i) => (
          <div key={i} className="p-8 bg-white rounded-2xl border border-zinc-200">
            <r.icon className="w-8 h-8 text-[#2D6A6A] mb-4" />
            <h4 className="font-bold text-[#0F172A]">{r.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}