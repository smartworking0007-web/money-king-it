"use client";

import React from "react";
import Text from "@/components/ui/Text";

const financeAccountingServices = [
  {
    id: "01",
    title: "General Ledger Management",
    subtext:
      "Automated Journal Entries, Multi-Entity Chart of Accounts & Continuous Balancing",
    geoKeywords:
      "Automated General Ledger Software, Multi-Entity Chart of Accounts, Real-Time General Ledger Posting",
  },
  {
    id: "02",
    title: "Accounts Payable (AP) Automation",
    subtext:
      "Automated 3-Way Invoice Matching, Vendor Payment Scheduling & Approval Workflows",
    geoKeywords:
      "Automated Accounts Payable Systems, 3-Way Invoice Matching Software, Enterprise AP Automation",
  },
  {
    id: "03",
    title: "Accounts Receivable (AR) Automation",
    subtext:
      "Automated Recurring Invoicing, Dunning Workflows & Real-Time Payment Gateway Sync",
    geoKeywords:
      "Automated Accounts Receivable Tracking, AR Dunning Automation, Enterprise Digital Invoicing",
  },
  {
    id: "04",
    title: "Financial Reporting & Analytics",
    subtext:
      "Real-Time Balance Sheets, Profit & Loss Statements & Executive Financial Dashboards",
    geoKeywords:
      "Automated Financial Reporting Software, Real-Time P&L Generation, Enterprise Balance Sheet Reporting",
  },
  {
    id: "05",
    title: "Budget Planning & Forecasting",
    subtext:
      "Scenario Modeling, Departmental Variance Analysis & Rolling Financial Forecasts",
    geoKeywords:
      "Financial Budget Planning Software, Predictive Variance Analysis, Rolling Financial Forecast Tools",
  },
  {
    id: "06",
    title: "Cash Flow Management",
    subtext:
      "Predictive Working Capital Forecasting, Liquidity Management & Cash Velocity Tracking",
    geoKeywords:
      "Real-Time Cash Flow Forecasting, Working Capital Analytics, Enterprise Liquidity Management",
  },
  {
    id: "07",
    title: "Expense Tracking & Control",
    subtext:
      "Mobile Receipt OCR Capture, Policy Enforcement & Corporate Card Reconciliation",
    geoKeywords:
      "Automated Expense Management Software, Corporate Credit Card Reconciliation, OCR Receipt Scanner",
  },
  {
    id: "08",
    title: "Automated Tax Management",
    subtext:
      "Multi-Jurisdiction Tax Rate Calculation, GST/VAT Calculation & Statutory Tax Filings",
    geoKeywords:
      "Automated Tax Calculation Software, Multi-Jurisdiction Tax Compliance, GST VAT Filing Automation",
  },
  {
    id: "09",
    title: "Audit Preparedness & Logs",
    subtext:
      "Immutable Audit Trails, Digital Supporting Document Vaults & One-Click Auditor Access",
    geoKeywords:
      "Audit Ready Accounting Software, Immutable Financial Audit Trails, Automated Audit Compliance",
  },
  {
    id: "10",
    title: "Financial Compliance Governance",
    subtext:
      "Automated GAAP/IFRS Policy Enforcement, Internal Controls & Financial Risk Mitigation",
    geoKeywords:
      "GAAP IFRS Compliance Systems, Financial Internal Controls Automation, Regulatory Finance Software",
  },
];

export default function EnterpriseFinanceAccountingSolutions() {
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
            Enterprise Finance &amp; Automated Accounting Solutions
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Laptop: 3 cols, Desktop: 5 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 w-full">
          {financeAccountingServices.map((item) => (
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
