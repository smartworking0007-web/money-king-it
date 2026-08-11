// File Name: AsymmetricBentoMatrix.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { Network, Server, Layers, ShieldCheck } from "lucide-react";

const BENTO_FEATURES = [
  {
    title: "GraphQL Schema Federation",
    description:
      "Consolidate distributed data systems under a single robust graph interface. Prevent data over-fetching parameters cleanly.",
    tag: "HEADLESS CORE ↗",
    icon: Network,
    span: "col-span-1 lg:col-span-8",
  },
  {
    title: "RESTful Protocol Hub",
    description:
      "Stateless JSON endpoints mapped cleanly around predictable routing logic guidelines.",
    tag: "STANDARD JSON API",
    icon: Server,
    span: "col-span-1 lg:col-span-4",
  },
  {
    title: "Microservice Mesh Networks",
    description:
      "Deconstruct structural monolith platforms into highly scalable autonomous cloud clusters.",
    tag: "GRPC SUPPORTED",
    icon: Layers,
    span: "col-span-1 lg:col-span-4",
  },
  {
    title: "Fintech & Banking Rails",
    description:
      "Strict multi-currency validation pipelines built natively to support programmatic cross-border asset transfers with instant transaction matching logs.",
    tag: "COMPLIANCE SECURE ↗",
    icon: ShieldCheck,
    span: "col-span-1 lg:col-span-8",
  },
];

export default function AsymmetricBentoMatrix() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D094]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D094]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
          >
            Asymmetric Bento Matrix
          </Text>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {BENTO_FEATURES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`${item.span} relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 hover:border-[#00D094]/50 transition-all duration-500 group shadow-xl hover:-translate-y-1`}
              >
                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#00D094]/10 group-hover:border-[#00D094]/30 transition-all duration-300">
                    <IconComponent
                      className="h-6 w-6 text-[#00D094]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[#00D094] text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <Text
                    variant="h3"
                    className="text-white! text-lg sm:text-xl font-bold tracking-tight mb-3 group-hover:text-[#00D094] transition-colors duration-300"
                  >
                    {item.title}
                  </Text>
                  <Text
                    variant="body"
                    className="text-zinc-400! text-xs sm:text-sm leading-relaxed"
                  >
                    {item.description}
                  </Text>
                </div>

                {/* Decorative corner glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
