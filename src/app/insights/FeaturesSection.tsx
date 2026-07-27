"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code,
  ShieldCheck,
  GitBranch,
} from "lucide-react";


const insights = [
  {
    icon: BrainCircuit,
    title: "AI",
    desc: "Advanced neural networks for predictive analytics.",
  },

  {
    icon: Cloud,
    title: "Cloud",
    desc: "Scalable infrastructure for global operations.",
  },
  {
    icon: Code,
    title: "Software Eng",
    desc: "Clean, maintainable, and robust codebases.",
  },

  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Proactive defense against modern threats.",
  },

  {
    icon: GitBranch,
    title: "DevOps",
    desc: "Streamlined CI/CD pipelines and deployment.",
  },
];

export default function FeaturedInsights() {
  return (
    <section className="bg-[#040809] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Featured Insights
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 flex flex-col items-center text-center group border-b md:border-b-0 md:border-r border-neutral-800 last:border-r-0"
            >
              {/* Animated Line Effect (Desktop only) */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#a3e635]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-6 p-4 rounded-full bg-[#111415] group-hover:bg-[#a3e635]/10 transition-colors">
                <item.icon className="w-8 h-8 text-[#a3e635]" />
              </div>

              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

