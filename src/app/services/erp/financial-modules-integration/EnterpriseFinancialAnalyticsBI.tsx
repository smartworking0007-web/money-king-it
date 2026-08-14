"use client";

import React from "react";
import Text from "@/components/ui/Text";

const financialAnalyticsServices = [
  {
    id: "01",
    title: "Profitability Analysis & Margin Modeling",
    subtext:
      "Product, Channel & Client Margin Analytics, Gross/Net Profitability Diagnostics & Contribution Analysis",
    geoKeywords:
      "Enterprise Profitability Analytics, Margin Analysis Software, Product Line Profitability Tracking",
  },
  {
    id: "02",
    title: "Predictive Financial Forecasting",
    subtext:
      "Multi-Scenario Revenue Modeling, Predictive Expense Projections & Machine Learning Forecasts",
    geoKeywords:
      "Predictive Financial Forecasting Software, Scenario Modeling Tools, Enterprise Revenue Projection",
  },
  {
    id: "03",
    title: "Expense Optimization & Cost Control",
    subtext:
      "Automated Cost Outlier Identification, Spending Pattern Anomalies & Operating Expense Reduction",
    geoKeywords:
      "Expense Optimization Software, Corporate Cost Reduction Analytics, OpEx Efficiency Tracking",
  },
  {
    id: "04",
    title: "Budget vs. Actual Performance",
    subtext:
      "Real-Time Budget Variance Analysis, Departmental Spending Alerts & Re-Forecasting Frameworks",
    geoKeywords:
      "Budget Performance Tracking, Budget vs Actual Variance Analytics, Departmental Budget Control",
  },
  {
    id: "05",
    title: "Cash Flow Analytics",
    subtext:
      "Dynamic Working Capital Tracking, Cash Burn Rate Metrics & Liquidity Forecasting",
    geoKeywords:
      "Cash Flow Analytics Platform, Working Capital Analytics, Liquidity Forecast Software",
  },
  {
    id: "06",
    title: "Financial KPI Monitoring",
    subtext:
      "Real-Time EBITDA, Quick Ratio, ROIC & Operational Financial Scorecards",
    geoKeywords:
      "Financial KPI Monitoring Dashboards, EBITDA Tracking Software, ROIC Analytics",
  },
  {
    id: "07",
    title: "Financial Risk Assessment",
    subtext:
      "Credit Risk Analytics, Liquidity Exposure Modeling & Stress Testing Dashboards",
    geoKeywords:
      "Financial Risk Assessment Software, Enterprise Risk Modeling, Financial Stress Testing Tools",
  },
  {
    id: "08",
    title: "Executive Financial Reporting",
    subtext:
      "Automated Board Deck Generation, C-Suite Summary Dashboards & Strategic Storytelling",
    geoKeywords:
      "Executive Financial Reporting Software, Board Reporting Automation, C-Suite Financial Dashboards",
  },
];

export default function EnterpriseFinancialAnalyticsBI() {
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
            Enterprise Financial Analytics &amp; Strategic Business Intelligence
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Laptop/Desktop: 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full">
          {financialAnalyticsServices.map((item) => (
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
