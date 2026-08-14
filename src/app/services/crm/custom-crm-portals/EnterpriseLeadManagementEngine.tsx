"use client";

import React from "react";
import Text from "@/components/ui/Text";

const leadManagementServices = [
  {
    id: "01",
    title: "CRM Development",
    subtext:
      "Tailored CRM Systems Built to Capture, Track & Manage Multi-Channel Leads",
    geoKeywords:
      "Custom CRM Development, Lead Database Architecture, Tailored Lead CRM Software",
  },
  {
    id: "02",
    title: "Lead Systems",
    subtext:
      "Centralized Ingestion Engines Aggregating Web Forms, Ads, Emails & APIs",
    geoKeywords:
      "Multi-Channel Lead Ingestion, Centralized Lead Management System, Inbound Lead Capture Software",
  },
  {
    id: "03",
    title: "Pipeline Boards",
    subtext:
      "Interactive Kanban Views for Real-Time Drag-and-Drop Deal Movement",
    geoKeywords:
      "Kanban Pipeline Boards, Visual Lead Funnel Tracking, Sales Pipeline Management",
  },
  {
    id: "04",
    title: "Automated Lead Assignment",
    subtext:
      "Instant Round-Robin, Geo-Based & Skill-Based Sales Lead Distribution",
    geoKeywords:
      "Automated Lead Distribution, Round-Robin Lead Assignment, Territory-Based Lead Routing",
  },
  {
    id: "05",
    title: "Lifecycle Tracking",
    subtext:
      "Complete Prospect Journey Visibility from First Click to Deal Closure",
    geoKeywords:
      "Lead Lifecycle Stage Tracking, MQL to SQL Transition Tracking, Full-Funnel Lead Analytics",
  },
  {
    id: "06",
    title: "Team Panels",
    subtext:
      "Role-Based Workspaces for Account Executives, SDRs & Sales Managers",
    geoKeywords:
      "Role-Based Sales Dashboards, SDR Workspaces, Managerial Lead Performance Panels",
  },
  {
    id: "07",
    title: "Revenue Tracking",
    subtext: "Multi-Touch Lead Attribution & Deal Value Revenue Forecasting",
    geoKeywords:
      "Lead Revenue Attribution, Pipeline Value Forecasting, Closed-Won Deal Revenue Analytics",
  },
  {
    id: "08",
    title: "Qualification Engines",
    subtext: "AI-Powered & Rule-Based Lead Scoring (BANT / CHAMP Frameworks)",
    geoKeywords:
      "Automated Lead Qualification, Predictive Lead Scoring Engine, BANT Lead Qualification",
  },
  {
    id: "09",
    title: "Reporting Modules",
    subtext:
      "Executive Analytics on Conversion Rates, Response Times & Rep Efficiency",
    geoKeywords:
      "Lead Conversion Reporting, Sales Velocity Analytics, Inbound Lead Performance Metrics",
  },
  {
    id: "10",
    title: "Workflow Automation",
    subtext:
      "Automated Task Triggers, SLA Reminders & Email Nurturing Hand-offs",
    geoKeywords:
      "Lead Workflow Automation, Automated Lead Follow-Up Triggers, CRM Lead Task Automation",
  },
];

export default function EnterpriseLeadManagementEngine() {
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
            Enterprise Lead Management Solutions &amp; Automation Engines
          </Text>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 w-full">
          {leadManagementServices.map((item) => (
            <div
              key={item.id}
              className="relative group bg-zinc-900/80 sm:bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80 hover:border-[#00D094]/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-start text-left shadow-md hover:shadow-[0_0_20px_rgba(0,208,148,0.15)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden min-h-47.5 sm:min-h-55"
            >
              {/* Top Accent Line on Hover */}
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
