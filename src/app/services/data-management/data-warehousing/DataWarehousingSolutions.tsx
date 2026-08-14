// File Name: DataWarehousingSolutions.tsx

import React from "react";
import Text from "@/components/ui/Text";
import {
  Database,
  Layers,
  PieChart,
  Workflow,
  Cloud,
  BarChart3,
  GitFork,
  Combine,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Enterprise Warehousing",
    subtext:
      "Scalable Centralized Data Storage & Query Performance Infrastructure",
    geoKeywords:
      "Enterprise Data Warehouse (EDW), High-Performance Data Storage, Centralized Data Repository",
    icon: Database,
  },
  {
    id: 2,
    title: "Data Lake Architecture",
    subtext:
      "Unified Repository for Structured, Semi-Structured & Unstructured Big Data",
    geoKeywords:
      "Cloud Data Lake Architecture, Unstructured Data Storage, Big Data Lakehouse Solutions",
    icon: Layers,
  },
  {
    id: 3,
    title: "Departmental Data Marts",
    subtext: "Subject-Oriented Data Repositories for Business Line Analytics",
    geoKeywords:
      "Data Mart Design, Departmental Analytics Store, Subject-Oriented Data Partitioning",
    icon: PieChart,
  },
  {
    id: 4,
    title: "ETL / ELT Pipelines",
    subtext:
      "Automated Data Extraction, Transformation, and Ingestion Workflows",
    geoKeywords:
      "Real-Time Data Ingestion, ETL vs ELT Architecture, Automated Data Pipeline Integration",
    icon: Workflow,
  },
  {
    id: 5,
    title: "Cloud Data Warehousing",
    subtext:
      "Serverless, Multi-Cloud Warehouse Deployment (Snowflake, BigQuery, Redshift)",
    geoKeywords:
      "Cloud DW Migration, Snowflake & Google BigQuery Solutions, AWS Redshift Optimization",
    icon: Cloud,
  },
  {
    id: 6,
    title: "BI Integration",
    subtext: "Seamless Connectivity with Power BI, Tableau & Looker Platforms",
    geoKeywords:
      "Business Intelligence Pipeline, Power BI & Tableau Integration, Self-Service BI Connectors",
    icon: BarChart3,
  },
  {
    id: 7,
    title: "Data Modeling",
    subtext: "Dimensional Star & Snowflake Schema Architecture for Analytics",
    geoKeywords:
      "Dimensional Data Modeling, Star Schema & Snowflake Schema, Data Warehouse Schema Design",
    icon: GitFork,
  },
  {
    id: 8,
    title: "Data Consolidation",
    subtext: "Merging Multi-Source Siloed Data into Unified Golden Records",
    geoKeywords:
      "Multi-Source Data Aggregation, Cross-Platform Data Unification, Enterprise Data Harmonization",
    icon: Combine,
  },
  {
    id: 9,
    title: "Master Data Management (MDM)",
    subtext: "Single Source of Truth for Critical Enterprise Data Entities",
    geoKeywords:
      "Master Data Management (MDM), Single Source of Truth (SSOT), Enterprise Data Quality Governance",
    icon: ShieldCheck,
  },
  {
    id: 10,
    title: "Advanced Analytics & Reporting",
    subtext: "Real-Time Dashboarding & Executive Decision Support Insights",
    geoKeywords:
      "Executive Reporting Dashboards, Automated Enterprise Reporting, Real-Time Business Analytics",
    icon: TrendingUp,
  },
];

export default function DataWarehousingSolutions() {
  return (
    <section className="w-full bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
          >
            Enterprise Data Warehousing &amp; Architecture Solutions
          </Text>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Empowering organizations with robust, high-performance data
            architectures built for scale, intelligence, and business growth.
          </p>
        </div>

        {/* 10 Key Points Grid (Compact Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-zinc-900/80 border border-zinc-800 hover:border-[#00D094]/50 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:shadow-[#00D094]/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00D094]/10 border border-[#00D094]/20 flex items-center justify-center text-[#00D094] mb-3 group-hover:bg-[#00D094] group-hover:text-black transition-all">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <Text
                    variant="h4"
                    className="text-white! text-base sm:text-lg font-bold mb-1.5 tracking-tight group-hover:text-[#00D094] transition-colors"
                  >
                    {item.title}
                  </Text>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-3">
                    {item.subtext}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-0.5">
                    Key Focus:
                  </span>
                  <p className="text-[10px] sm:text-xs text-zinc-400 font-mono leading-tight">
                    {item.geoKeywords}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
