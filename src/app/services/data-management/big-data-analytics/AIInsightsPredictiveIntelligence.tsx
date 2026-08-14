"use client";

import React from "react";
import Text from "@/components/ui/Text";

const intelligenceFeatures = [
  {
    id: "01",
    title: "Predictive Mod",
    subtext:
      "Machine Learning Algorithms for Future Trend & Business Outcome Prediction",
    geoKeywords:
      "Predictive Modeling AI, Machine Learning Algorithms, Predictive Analytics Engine",
  },
  {
    id: "02",
    title: "Customer Intel",
    subtext:
      "Deep Customer Analytics, Churn Prediction & Personalization Insights",
    geoKeywords:
      "AI Customer Intelligence, Customer Lifetime Value Prediction, Churn Analytics AI",
  },
  {
    id: "03",
    title: "Forecasting",
    subtext: "Automated Financial, Demand & Revenue Time-Series Forecasting",
    geoKeywords:
      "AI Revenue Forecasting, Demand Planning Machine Learning, Time-Series Data Analytics",
  },
  {
    id: "04",
    title: "Risk Detection",
    subtext:
      "Automated Financial & Operational Cyber-Risk Identification Engine",
    geoKeywords:
      "AI Risk Detection, Automated Fraud & Threat Detection, Enterprise Risk Intelligence",
  },
  {
    id: "05",
    title: "Behavioral",
    subtext:
      "User & Entity Behavioral Analytics (UEBA) for Pattern Recognition",
    geoKeywords:
      "Behavioral AI Analytics, User Entity Behavior Analytics (UEBA), Action Pattern Mapping",
  },
  {
    id: "06",
    title: "Anomaly",
    subtext: "Real-Time Outlier Identification & Automated Anomaly Detection",
    geoKeywords:
      "AI Anomaly Detection, Real-Time Data Outlier Detection, Automated Incident Detection",
  },
];

export default function AIInsightsPredictiveIntelligence() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Dark Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading (H3) */}
        <Text
          variant="h3"
          className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8 sm:mb-12 drop-shadow-md"
        >
          AI Insights &amp; Predictive Intelligence
        </Text>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 w-full max-w-5xl">
          {intelligenceFeatures.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/90 border border-zinc-800 hover:border-[#00D094]/60 rounded-2xl p-4 sm:p-6 flex flex-col justify-between items-start text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div>
                {/* Number Badge */}
                <span className="text-[#00D094] font-bold text-xs font-mono mb-2 block tracking-wider">
                  {item.id}
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h3"
                  className="text-white! font-bold text-base sm:text-lg mb-2 group-hover:text-[#00D094] transition-colors"
                >
                  {item.title}
                </Text>

                {/* Subtext / Short Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.subtext}
                </p>
              </div>

              {/* GEO Keywords Footer */}
              <div className="pt-3 border-t border-zinc-800/80 w-full">
                <p className="text-[10px] sm:text-xs text-zinc-500 font-mono leading-tight">
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
