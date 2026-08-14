// File Name: DataPipelines.tsx

import React from "react";
import Text from "@/components/ui/Text";
import { ArrowRight } from "lucide-react";

const pipelineItems = [
  { id: 1, title: "ETL Pipelines" },
  { id: 2, title: "ELT Workflows" },
  { id: 3, title: "Real-Time Streaming" },
  { id: 4, title: "Integration" },
  { id: 5, title: "Synchronization" },
  { id: 6, title: "Validation" },
  { id: 7, title: "Automation" },
  { id: 8, title: "Monitoring" },
];

export default function DataPipelines() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black overflow-hidden flex items-center justify-center">
      {/* Dark Subtle Glow Background Overlay (Matching other sections) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading */}
        <Text
          variant="h3"
          className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8 sm:mb-12"
        >
          Data Pipelines
        </Text>

        {/* 4x2 Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 w-full max-w-5xl">
          {pipelineItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#121316] text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between items-start h-28 sm:h-32 text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border border-zinc-800/80 hover:border-[#00D094]/50"
            >
              <span className="font-bold text-sm sm:text-base tracking-wide text-zinc-100 group-hover:text-[#00D094] transition-colors">
                {item.title}
              </span>

              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00D094] group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
