// src/app/services/application-programming/project-implementation/TechnologyStack.tsx
import React from "react";
import { Text } from "@/components/ui/Text";

export default function TechnologyStack() {
  const engineCategories = [
    {
      category: "Frontend Engine",
      frameworks: ["React", "Next.js", "TypeScript"],
    },
    {
      category: "Backend Runtime",
      frameworks: ["Node.js", "NestJS", "Python"],
    },
    {
      category: "Persistence Tier",
      frameworks: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Cloud Orchestration",
      frameworks: ["AWS", "Azure", "Google Cloud"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 space-y-12 bg-[#E5EBEB]">
      <div className="text-center space-y-3">
        <Text variant="label">Validated Execution Ecosystem</Text>
        <Text variant="h2">Technology Stack Matrix</Text>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {engineCategories.map((group, i) => (
          <div
            key={i}
            className="p-6 bg-white/80 border border-zinc-200 rounded-2xl space-y-4 shadow-sm"
          >
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 border-b border-zinc-200 pb-2 uppercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.frameworks.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs bg-zinc-100 text-emerald-600 border border-zinc-200 px-2.5 py-1 rounded-md font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
