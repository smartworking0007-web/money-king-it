// File Name: BusinessPredictionsGrid.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const BUSINESS_PREDICTIONS = [
  {
    number: "01",
    title: "Predictive Sales Forecasting",
    description:
      "AI-Driven Deal Velocity Modeling, Pipeline Conversion Rates & Quarterly Sales Targets",
  },
  {
    number: "02",
    title: "Revenue Stream Projections",
    description:
      "Multi-Channel Revenue Growth Analytics, Recurring Revenue Modeling & Cash Inflow Projections",
  },
  {
    number: "03",
    title: "Market & Industry Trend Analysis",
    description:
      "Algorithmic Market Sentiment Tracking, Competitive Shifts & Consumer Behavior Diagnostics",
  },
  {
    number: "04",
    title: "Intelligent Inventory Forecasting",
    description:
      "Dynamic Reorder Point Calculation, Stockout Risk Reduction & Supply Chain Stock Optimization",
  },
  {
    number: "05",
    title: "Customer Lifetime Value (CLV) Prediction",
    description:
      "Predictive Cohort LTV Modeling, Churn Probability Signals & High-Value Segment Identification",
  },
  {
    number: "06",
    title: "Predictive Demand Modeling",
    description:
      "Seasonality Adjustment Models, Geographic Demand Spike Alerts & Product Capacity Planning",
  },
  {
    number: "07",
    title: "Workforce & Capacity Forecasting",
    description:
      "Headcount Requirement Projections, Skill Gap Analytics & Labor Cost Optimization",
  },
  {
    number: "08",
    title: "Predictive Financial Planning",
    description:
      "Dynamic Scenario Modeling (Best/Worst/Base), Capital Allocation & Operating Expense Forecasting",
  },
];

export default function BusinessPredictionsGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/ppc/2.png"
          alt="business predictions background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Balanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Business Predictions & AI Predictive Intelligence
          </Text>
        </div>

        {/* Responsive Grid layout with compact boxes and concise text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {BUSINESS_PREDICTIONS.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Item Number */}
                <span className="text-[11px] font-mono font-bold text-[#00D094] mb-1 tracking-wider block">
                  {item.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h5"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {item.title}
                </Text>

                {/* Short Description */}
                <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed">
                  {item.description}
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
