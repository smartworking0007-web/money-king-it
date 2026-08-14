"use client";

import React from "react";
import Text from "@/components/ui/Text";

const crmFeatureItems = [
  {
    id: "01",
    title: "Lead Scoring",
    subtext:
      "Predictive Qualification Models to Prioritize High-Intent Sales Prospects",
    geoKeywords:
      "Automated Lead Scoring CRM, MQL SQL Lead Qualification, Predictive Sales Lead Scoring",
  },
  {
    id: "02",
    title: "Task Management",
    subtext: "Automated Daily To-Dos, Meeting Schedules & Follow-Up Reminders",
    geoKeywords:
      "CRM Task Management Software, Automated Sales To-Do Lists, Sales Rep Productivity Tools",
  },
  {
    id: "03",
    title: "Sales Forecasting",
    subtext:
      "Real-Time Revenue Predictions Based on Deal Stage Win Probabilities",
    geoKeywords:
      "CRM Sales Forecasting Engine, Predictive Revenue Analytics, Pipeline Revenue Projections",
  },
  {
    id: "04",
    title: "Customer Profiles",
    subtext:
      "360-Degree Contact Views Aggregating Communication History & Deal Value",
    geoKeywords:
      "360 Customer Profiles CRM, Centralized Contact Management, Unified Account History",
  },
  {
    id: "05",
    title: "Activity Logs",
    subtext:
      "Automated Tracking of Calls, Emails, Meetings & Notes Across Accounts",
    geoKeywords:
      "Automated Activity Tracking, CRM Interaction History, Sales Call & Email Logging",
  },
  {
    id: "06",
    title: "Team Collaboration",
    subtext:
      "In-App Deal Notes, Direct @Mentions & Cross-Departmental Handoffs",
    geoKeywords:
      "CRM Team Collaboration Features, Cross-Functional Deal Workspace, Internal Sales Communication",
  },
  {
    id: "07",
    title: "Real-Time Notifications",
    subtext:
      "Instant Desktop & Mobile Alerts for Lead Activity, Task Deadlines & Stage Changes",
    geoKeywords:
      "Real-Time CRM Alerts, Automated Lead Activity Notifications, Pipeline Instant Alerts",
  },
  {
    id: "08",
    title: "Reporting & Analytics",
    subtext:
      "Customizable Executive Dashboards Measuring Conversion Rates & Rep Velocity",
    geoKeywords:
      "Custom CRM Reporting Dashboards, Sales Performance Analytics, Revenue Attribution Reports",
  },
];

export default function PowerfulCrmFeatures() {
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
            Powerful CRM Features to Scale Revenue Operations
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full">
          {crmFeatureItems.map((item) => (
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
