// File Name: EnterpriseAutomationSolutionsGrid.tsx

import React from "react";
import Text from "@/components/ui/Text";

const AUTOMATION_SOLUTIONS = [
  {
    number: "01",
    title: "Support Auto",
    description:
      "Multi-Channel Incident Resolution & Tier-1 Support Automation",
  },
  {
    number: "02",
    title: "Knowledge Assistants",
    description: "AI-Powered Internal Search Across SOPs & Wikis",
  },
  {
    number: "03",
    title: "Email Auto",
    description: "Intent Classification & Automated Response Generation",
  },
  {
    number: "04",
    title: "Ticket Routing",
    description: "AI Skill-Based Assignment & SLA Breach Alerts",
  },
  {
    number: "05",
    title: "Doc Processing",
    description: "Automated OCR Extraction & Form Classification",
  },
  {
    number: "06",
    title: "Workflow Orch",
    description: "Cross-Platform API Integration & Task Chaining",
  },
  {
    number: "07",
    title: "CRM AI",
    description: "Automated Data Entry & Pipeline Activity Summaries",
  },
  {
    number: "08",
    title: "Process Auto",
    description: "High-Volume Repetitive Task & System Data Sync",
  },
];

export default function EnterpriseAutomationSolutionsGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Automation Solutions & Intelligent Workflow Orchestration
          </Text>
        </div>

        {/* Responsive Grid layout with compact boxes and smaller text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {AUTOMATION_SOLUTIONS.map((solution, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Solution Number */}
                <span className="text-[11px] font-mono font-bold text-[#00D094] mb-1 tracking-wider block">
                  {solution.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h4"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {solution.title}
                </Text>

                {/* Short Description */}
                <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
