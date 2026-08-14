"use client";

import React from "react";
import Text from "@/components/ui/Text";

const pipelineStages = [
  {
    id: "01",
    title: "New Leads Ingestion",
    subtext:
      "Automated Lead Capture Across Web Forms, Inbound Channels & Paid Ads",
    geoKeywords:
      "Inbound Lead Ingestion, New Prospect Tracking, Automated Lead Capture",
  },
  {
    id: "02",
    title: "Qualified Leads (MQL / SQL)",
    subtext:
      "Automated Scoring & BANT Qualification Assessment to Identify High Intent",
    geoKeywords:
      "Lead Qualification Stage, BANT Criteria Assessment, MQL to SQL Hand-off",
  },
  {
    id: "03",
    title: "Contacted & Engaged",
    subtext:
      "Multi-Channel Rep Outreach via Calls, Automated Emails & Discovery Meetings",
    geoKeywords:
      "Sales Discovery Outreach, Lead Engagement Stage, Automated Meeting Scheduling",
  },
  {
    id: "04",
    title: "Proposal & Quote Sent",
    subtext:
      "Dynamic CPQ Proposal Generation, Quote Delivery & Document Engagement Tracking",
    geoKeywords:
      "Sales Proposal Generation, Quote Tracking Workflow, Automated CPQ Delivery",
  },
  {
    id: "05",
    title: "Contract Negotiation",
    subtext:
      "Dynamic Pricing Adjustments, Terms Agreement & Approval Workflow Triggers",
    geoKeywords:
      "Contract Negotiation Stage, Deal Approval Workflows, Sales Closing Strategy",
  },
  {
    id: "06",
    title: "Closed-Won Deal",
    subtext:
      "Instant Revenue Recognition, CRM Deal Closure & Customer Onboarding Handoff",
    geoKeywords:
      "Closed Won Deal Automation, Revenue Attribution Sync, Automated Customer Onboarding",
  },
];

export default function InteractiveLeadPipelineVisualizer() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden flex items-center justify-center min-h-100">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading (H3) using Text component */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-14">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug drop-shadow-md"
          >
            Interactive Lead Pipeline Visualizer &amp; Deal Stage Tracker
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Laptop/Desktop: 3 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 w-full max-w-6xl">
          {pipelineStages.map((item) => (
            <div
              key={item.id}
              className="relative group bg-zinc-900/80 sm:bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80 hover:border-[#00D094]/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-start text-left shadow-md hover:shadow-[0_0_20px_rgba(0,208,148,0.15)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden min-h-47.5 sm:min-h-55"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#00D094] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-full">
                {/* ID Badge */}
                <div className="flex items-center justify-between w-full mb-2 sm:mb-3">
                  <span className="text-[#00D094] font-mono text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-md bg-[#00D094]/10 border border-[#00D094]/20">
                    #{item.id}
                  </span>
                </div>

                {/* Title (H3) */}
                <Text
                  variant="h3"
                  className="text-white! font-bold text-xs sm:text-sm md:text-base tracking-wide mb-1.5 sm:mb-2 group-hover:text-[#00D094] transition-colors uppercase leading-snug"
                >
                  {item.title}
                </Text>

                {/* Subtext Description */}
                <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed mb-3 sm:mb-4">
                  {item.subtext}
                </p>
              </div>

              {/* GEO Keywords Footer */}
              <div className="pt-2.5 sm:pt-3 border-t border-zinc-800/60 w-full mt-auto">
                <p className="text-[10px] text-zinc-500 font-mono leading-tight line-clamp-2">
                  {item.geoKeywords}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
