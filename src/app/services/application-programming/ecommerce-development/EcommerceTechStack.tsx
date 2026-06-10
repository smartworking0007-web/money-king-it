"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, HardDrive, Cpu } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function EcommerceTechStack() {
  const groups = [
    {
      title: "Frontend Stack",
      techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: Layout,
    },
    {
      title: "Backend Rails",
      techs: ["Node.js", "Express.js", "NestJS"],
      icon: Server,
    },
    {
      title: "Database Layers",
      techs: ["PostgreSQL", "MongoDB", "MySQL"],
      icon: HardDrive,
    },
    {
      title: "Cloud Systems",
      techs: ["AWS Infrastructure", "Azure DevOps", "Vercel Edge"],
      icon: Cpu,
    },
  ];

  return (
    <section className="py-4 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Text variant="label" className="inline-block mb-1">
          Architecture Base
        </Text>
        <Text variant="h3">Commerce Technology Stack</Text>
      </div>

      <div className="max-w-4xl mx-auto space-y-3 px-2">
        {groups.map((segment, idx) => {
          const Icon = segment.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.02 }}
              className="group bg-white border border-zinc-200/80 p-4 rounded-xl flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:border-teal-500 transition-colors shadow-xs"
            >
              <div className="md:w-44 flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center text-zinc-700">
                  <Icon size={14} />
                </div>
                <Text
                  variant="body"
                  className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-extrabold"
                >
                  {segment.title}
                </Text>
              </div>

              <div className="flex flex-wrap items-center gap-2 flex-1">
                {segment.techs.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center bg-[#E5EBEB]/30 border border-zinc-200/60 px-3 py-1 rounded-full"
                  >
                    <div className="w-1 h-1 rounded-full bg-teal-500 mr-2" />
                    <span className="text-xs font-bold text-zinc-800 tracking-tight">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
