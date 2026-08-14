"use client";

import React from "react";
import Text from "@/components/ui/Text";

const dataSolutions = [
  {
    id: 1,
    title: "Real-Time Analytics",
    desc: "High-Speed Querying & Instant Operational Data Insights",
    geoKeywords:
      "Real-Time Data Analytics, Low-Latency Query Engines, Apache Pinot & ClickHouse Analytics",
  },
  {
    id: 2,
    title: "Big Data Engineering",
    desc: "Scalable Apache Spark & PySpark Data Pipelines",
    geoKeywords:
      "Big Data Engineering Services, Apache Spark Pipelines, Distributed Data Processing",
  },
  {
    id: 3,
    title: "Data Lake Arch",
    desc: "Modern Lakehouse Architecture on Databricks & Delta Lake",
    geoKeywords:
      "Data Lakehouse Architecture, Databricks Delta Lake Storage, Multi-Cloud Data Lake Design",
  },
  {
    id: 4,
    title: "Event Streaming",
    desc: "Real-Time Data Ingestion via Apache Kafka & AWS Kinesis",
    geoKeywords:
      "Apache Kafka Event Streaming, Real-Time Data Pipelines, AWS Kinesis Integration",
  },
  {
    id: 5,
    title: "BI Reporting",
    desc: "Interactive Power BI, Tableau & Looker Executive Dashboards",
    geoKeywords:
      "Business Intelligence Reporting, Power BI & Tableau Dashboards, Executive KPI Data Analytics",
  },
  {
    id: 6,
    title: "Predictive AI",
    desc: "Machine Learning Models, Forecasting & Pattern Recognition",
    geoKeywords:
      "Predictive Analytics & AI, Machine Learning Forecasting, Predictive Data Modeling",
  },
];

export default function DataSolutions() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Dark Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading (H3) */}
        <Text
          variant="h3"
          className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8 sm:mb-12"
        >
          Enterprise Data Engineering &amp; AI Solutions
        </Text>

        {/* 3x2 Grid Pills Layout with Dark Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 w-full max-w-5xl">
          {dataSolutions.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/90 border border-zinc-800 hover:border-[#00D094]/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between items-start text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div>
                {/* Title */}
                <h4 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-[#00D094] transition-colors">
                  {item.title}
                </h4>

                {/* Subtext / Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* GEO Keywords Badge / Footer */}
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
