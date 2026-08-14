// File Name: EnterpriseAnalyticsSolutionsGrid.tsx

import React from "react";
import Text from "@/components/ui/Text";

const ANALYTICS_SOLUTIONS = [
  {
    number: "01",
    title: "Predictive Revenue Forecasting",
    description:
      "AI-Powered Revenue Stream Projections, Multi-Quarter Modeling & Pipeline Conversion Analytics",
  },
  {
    number: "02",
    title: "Advanced Sales Performance Modeling",
    description:
      "Territory Planning, Sales Velocity Analytics & Cross-Sell/Up-Sell Predictive Scoring",
  },
  {
    number: "03",
    title: "Demand & Supply Chain Forecasting",
    description:
      "Seasonality Trend Analysis, Inventory Optimization & Real-Time Product Demand Analytics",
  },
  {
    number: "04",
    title: "User & Customer Behavior Analytics",
    description:
      "Multi-Touch Journey Attribution, Feature Usage Heatmaps & Customer Engagement Scoring",
  },
  {
    number: "05",
    title: "Predictive Risk Assessment",
    description:
      "Operational Risk Identification, Anomaly Detection & Financial Exposure Modeling",
  },
  {
    number: "06",
    title: "Strategic Financial Forecasting",
    description:
      "Cash Flow Trend Projections, Scenario Modeling & Automated OpEx/CapEx Forecasting",
  },
  {
    number: "07",
    title: "Marketing Performance & Attributions",
    description:
      "Customer Acquisition Cost (CAC) Diagnostics, Channel ROI & Multi-Touch Attribution Models",
  },
  {
    number: "08",
    title: "Operations & Efficiency Analytics",
    description:
      "Bottleneck Diagnostics, Capacity Planning & Operational Process Optimization",
  },
  {
    number: "09",
    title: "Customer Churn Prediction & Retention",
    description:
      "ML Churn Risk Scoring, Proactive Retention Triggers & Customer Lifetime Value (LTV) Diagnostics",
  },
  {
    number: "10",
    title: "Enterprise Business Intelligence (BI)",
    description:
      "Interactive Executive Dashboards, Self-Service Data Warehousing & Real-Time KPI Tracking",
  },
];

export default function EnterpriseAnalyticsSolutionsGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Analytics Solutions & Predictive Business Intelligence
          </Text>
        </div>

        {/* Responsive Grid layout optimized for mobile view and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {ANALYTICS_SOLUTIONS.map((solution, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-3.5 sm:p-4 md:p-5 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Solution Number */}
                <span className="text-[11px] font-mono font-bold text-[#00D094] mb-1 tracking-wider block">
                  {solution.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h4"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1.5 group-hover:text-[#00D094] transition-colors duration-300"
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
