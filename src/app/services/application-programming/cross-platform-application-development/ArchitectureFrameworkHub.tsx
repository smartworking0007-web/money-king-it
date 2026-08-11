// File Name: ArchitectureFrameworkHub.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Layout, Server, Database, Cloud } from "lucide-react";

const FRAMEWORK_CATEGORIES = [
  {
    title: "FRONTEND RUNTIMES",
    icon: Layout,
    items: [
      { name: "Flutter", desc: "Cross-platform UI toolkit for apps." },
      { name: "React Native", desc: "Native mobile app framework." },
      { name: "Next.js", desc: "SSR React framework for SEO." },
      { name: "TypeScript", desc: "Typed programming language." },
    ],
  },
  {
    title: "BACKEND ENGINES",
    icon: Server,
    items: [
      { name: "Node.js", desc: "Event-driven server runtime." },
      { name: "NestJS", desc: "Structured framework for scalable APIs." },
      { name: "Express.js", desc: "Minimalist web framework." },
    ],
  },
  {
    title: "DATABASE REPOSITORIES",
    icon: Database,
    items: [
      { name: "PostgreSQL", desc: "High-performance relational DB." },
      { name: "MongoDB", desc: "NoSQL document database." },
      { name: "Firebase Firestore", desc: "Real-time cloud database." },
    ],
  },
  {
    title: "CLOUD INFRASTRUCTURE",
    icon: Cloud,
    items: [
      { name: "AWS Infrastructure", desc: "Scalable global cloud security." },
      { name: "Vercel Edge", desc: "Serverless edge network deployment." },
      {
        name: "Docker & Kubernetes",
        desc: "Containerized deployment clusters.",
      },
    ],
  },
];

export default function ArchitectureFrameworkHub() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-125 h-80 sm:h-125 bg-[#00D094]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <Text
            variant="h5"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2.5"
          >
            Architecture Framework Hub
          </Text>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {FRAMEWORK_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-white/10 hover:border-[#00D094]/50 transition-all duration-300 group shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00D094] group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300">
                      <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <Text
                      variant="h5"
                      className="text-white! text-sm sm:text-base font-bold tracking-tight group-hover:text-[#00D094] transition-colors duration-300"
                    >
                      {category.title}
                    </Text>
                  </div>

                  {/* Technology List */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex flex-col space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D094]"></span>
                          <Text
                            variant="h5"
                            className="text-white! text-xs font-bold tracking-wide"
                          >
                            {item.name}
                          </Text>
                        </div>
                        <Text
                          variant="body"
                          className="text-zinc-400! text-[11px] leading-relaxed pl-3.5"
                        >
                          {item.desc}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ambient Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
