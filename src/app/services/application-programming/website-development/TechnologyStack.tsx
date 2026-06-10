"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, HardDrive, Globe, Cpu } from "lucide-react";
import { Text } from "@/components/ui/Text";

export default function TechnologyStack() {
  const segments = [
    {
      title: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: Layout,
    },
    {
      title: "Backend",
      techs: ["Node.js", "NestJS", "Python", "Laravel"],
      icon: Server,
    },
    {
      title: "Database",
      techs: ["PostgreSQL", "MySQL", "MongoDB"],
      icon: HardDrive,
    },
    {
      title: "CMS Enablers",
      techs: ["WordPress", "Shopify", "Strapi"],
      icon: Globe,
    },
    {
      title: "Cloud Infrastructure",
      techs: ["AWS", "Azure", "Google Cloud"],
      icon: Cpu,
    },
  ];

  return (
    <section className="py-12 relative w-full text-left">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Text variant="label" className="inline-block mb-2">
          Architecture Hub
        </Text>
        <Text variant="h3" className="mt-1">
          Modern Technology Stack
        </Text>
      </div>

      {/* FIXED: Replaced gray tracks with soft border white dynamic tracking strips */}
      <div className="max-w-4xl mx-auto space-y-4 px-2">
        {segments.map((segment, idx) => {
          const Icon = segment.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-white border border-zinc-200/80 p-5 rounded-2xl flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:border-[#00E5A0] transition-colors shadow-xs"
            >
              {/* Category Segment Label */}
              <div className="md:w-44 flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center text-zinc-700">
                  <Icon size={15} />
                </div>
                <Text
                  variant="body"
                  className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-extrabold"
                >
                  {segment.title}
                </Text>
              </div>

              {/* Refactored Light Badge Capsules */}
              <div className="flex flex-wrap items-center gap-2.5 flex-1">
                {segment.techs.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center bg-[#E5EBEB]/30 hover:bg-zinc-900 border border-zinc-200/60 px-4 py-1.5 rounded-full transition-all duration-300 group/pill"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] mr-2.5 opacity-80" />
                    <Text
                      variant="body"
                      className="text-xs sm:text-sm font-bold text-zinc-800 group-hover/pill:text-white transition-colors duration-300"
                    >
                      {tech}
                    </Text>
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
