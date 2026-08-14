"use client";

import React from "react";
import Text from "@/components/ui/Text";

const generalLedgerServices = [
  {
    id: "01",
    title: "General Ledger Governance",
    subtext:
      "Centralized Chart of Accounts, Continuous Account Balancing & Audit-Ready Record-Keeping",
    geoKeywords:
      "Automated General Ledger Management, Chart of Accounts Control, Real-Time Ledger Posting",
  },
  {
    id: "02",
    title: "Automated Journal Entries",
    subtext:
      "Touchless Recurring Entries, Rules-Based Transaction Posting & Automated Approval Triggers",
    geoKeywords:
      "Automated Journal Entry Software, Recurring Journal Entries, Rules-Based Accounting Posting",
  },
  {
    id: "03",
    title: "Multi-Currency Conversion",
    subtext:
      "Real-Time Exchange Rate Sync, Automated FX Gain/Loss Calculation & Global FX Adjustments",
    geoKeywords:
      "Multi-Currency Ledger Software, Automated FX Gain Loss Realization, Real-Time Foreign Exchange Sync",
  },
  {
    id: "04",
    title: "Automated Reconciliation",
    subtext:
      "Automated Bank Feeds Matching, Sub-Ledger to GL Sync & Discrepancy Alerting",
    geoKeywords:
      "Automated Bank Reconciliation Software, GL to Sub-Ledger Matching, Account Reconciliation Automation",
  },
  {
    id: "05",
    title: "Fixed Asset Management",
    subtext:
      "Automated Depreciation Calculation Schedules, Asset Lifecycle Tracking & Impairment Recording",
    geoKeywords:
      "Fixed Asset Accounting Software, Automated Depreciation Schedules, Asset Lifecycle Management",
  },
  {
    id: "06",
    title: "Multi-Entity Financial Consolidation",
    subtext:
      "Intercompany Elimination Entries, Consolidated Balance Sheets & Multi-Subsidiary Aggregation",
    geoKeywords:
      "Multi-Entity Financial Consolidation, Intercompany Elimination Automation, Subsidiary Ledger Aggregation",
  },
  {
    id: "07",
    title: "Cost Center & Profit Center Tracking",
    subtext:
      "Granular Expense Allocation, Departmental Cost Accounting & Segmented Financial Metrics",
    geoKeywords:
      "Cost Center Accounting Software, Departmental Expense Allocation, Profit Center Segment Reporting",
  },
  {
    id: "08",
    title: "Financial Ledger Analytics",
    subtext:
      "Real-Time Trial Balance Dashboards, Variance Diagnostics & Ledger Trend Visualization",
    geoKeywords:
      "General Ledger Analytics, Trial Balance Dashboards, Financial Close Analytics",
  },
];

export default function EnterpriseGeneralLedgerReconciliation() {
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
            Enterprise General Ledger Automation &amp; Financial Reconciliation
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Laptop/Desktop: 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full">
          {generalLedgerServices.map((item) => (
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
