"use client";

import React from "react";
import Text from "@/components/ui/Text";

const migrationFeatures = [
  {
    id: "01",
    title: "MODERNIZATION",
    subtext: "Legacy Database Architecture Refactoring & Cloud-Native Upgrades",
    geoKeywords:
      "Database Modernization Services, Cloud-Native Database Refactoring, Legacy DB Transformation",
  },
  {
    id: "02",
    title: "CLOUD MIGRATION",
    subtext: "Seamless On-Premise to Cloud (AWS, Azure, GCP) Database Shift",
    geoKeywords:
      "On-Premise to Cloud Migration, AWS Database Migration Service, Azure SQL Cloud Transfer",
  },
  {
    id: "03",
    title: "LEGACY SYSTEMS",
    subtext: "Mainframe & Aging Relational Database Decommissioning & Transfer",
    geoKeywords:
      "Legacy System Migration, Mainframe Database Migration, Monolith to Microservices DB",
  },
  {
    id: "04",
    title: "CROSS-PLATFORM",
    subtext:
      "Heterogeneous Database Engine Migration (e.g., Oracle to PostgreSQL)",
    geoKeywords:
      "Heterogeneous Database Migration, Oracle to PostgreSQL Conversion, Cross-Platform DB Replication",
  },
  {
    id: "05",
    title: "REPLICATION",
    subtext: "Continuous Change Data Capture (CDC) & Real-Time Data Mirroring",
    geoKeywords:
      "Real-Time Data Replication, Change Data Capture (CDC), High-Availability Data Sync",
  },
  {
    id: "06",
    title: "CONSOLIDATION",
    subtext:
      "Unifying Disparate Data Sources into Centralized Cloud Warehouses",
    geoKeywords:
      "Database Consolidation, Database Silo Unification, Multi-Database Merging",
  },
  {
    id: "07",
    title: "MULTI-CLOUD",
    subtext:
      "Cross-Cloud Data Portability & Hybrid Cloud Architecture Strategy",
    geoKeywords:
      "Multi-Cloud Database Strategy, Hybrid Cloud DB Migration, Inter-Cloud Data Transfer",
  },
  {
    id: "08",
    title: "DISASTER RECOVERY",
    subtext: "Failover Replication & Rapid Multi-Region Business Continuity",
    geoKeywords:
      "Database Disaster Recovery (DR), Automated Failover Architecture, RPO and RTO Optimization",
  },
  {
    id: "09",
    title: "SYNC",
    subtext:
      "Low-Latency Bi-Directional & Uni-Directional Data Synchronization",
    geoKeywords:
      "Bi-Directional Data Synchronization, Low-Latency DB Sync, Continuous Data Consistency",
  },
  {
    id: "10",
    title: "AUTOMATION",
    subtext:
      "Zero-Touch Schema Conversion, Scripting & Automated Pipeline Execution",
    geoKeywords:
      "Automated Database Migration, Schema Conversion Automation, CI/CD Database Deployment",
  },
];

export default function EnterpriseDatabaseMigration() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden flex items-center justify-center min-h-100">
      {/* Background Radial Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading (H3) */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-14">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug drop-shadow-md"
          >
            Enterprise Database Migration &amp; Modernization Solutions
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 column, Tablet: 2, Laptop: 3, Desktop: 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 w-full">
          {migrationFeatures.map((item) => (
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

                {/* Subtext / Short Description */}
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
