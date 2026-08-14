"use client";

import React from "react";
import Text from "@/components/ui/Text";

const supplyChainServices = [
  {
    id: "01",
    title: "Strategic Procurement",
    subtext:
      "Automated Supplier Sourcing, Requisition Workflows & Purchase Order Lifecycle",
    geoKeywords:
      "Automated Strategic Procurement, Purchase Order Management Software, Supplier Sourcing Systems",
  },
  {
    id: "02",
    title: "Inventory Optimization",
    subtext:
      "Real-Time SKU Level Tracking, Reorder Point Automation & Holding Cost Reduction",
    geoKeywords:
      "Real-Time Inventory Optimization, Multi-Location Stock Control, Automated Safety Stock Calculation",
  },
  {
    id: "03",
    title: "Warehouse Management (WMS)",
    subtext:
      "Automated Bin Location Tracking, Pick-Pack-Ship Automation & Stock Audits",
    geoKeywords:
      "Enterprise Warehouse Management System (WMS), Automated Bin Allocation, Barcode & RFID Inventory Tracking",
  },
  {
    id: "04",
    title: "Freight & Logistics",
    subtext:
      "Multi-Modal Freight Orchestration, Carrier Integration & Route Optimization",
    geoKeywords:
      "Enterprise Logistics Management, Freight Orchestration Software, Carrier API Integration",
  },
  {
    id: "05",
    title: "Vendor Collaboration",
    subtext:
      "Unified Supplier Portals, Performance Scorecards & Automated SLA Tracking",
    geoKeywords:
      "Supplier Relationship Management (SRM), Vendor Portal Integration, Supplier SLA Compliance Tracking",
  },
  {
    id: "06",
    title: "Demand Forecasting",
    subtext:
      "AI-Driven Historical Sales Analysis, Seasonality Modeling & Stockout Prevention",
    geoKeywords:
      "Predictive Demand Forecasting, AI Supply Chain Analytics, Seasonal Inventory Demand Planning",
  },
  {
    id: "07",
    title: "Order Fulfillment",
    subtext:
      "Automated Order Ingestion, Batch Processing & Distributed Order Routing",
    geoKeywords:
      "Omnichannel Order Fulfillment, Automated Order Processing, Distributed Order Management System",
  },
  {
    id: "08",
    title: "Distribution Management",
    subtext:
      "Hub-and-Spoke Logistics Planning, Cross-Docking & Regional Warehouse Operations",
    geoKeywords:
      "Distribution Management Systems, Cross-Docking Optimization, Supply Chain Hub Operations",
  },
  {
    id: "09",
    title: "Supply Chain Analytics",
    subtext:
      "Real-Time Executive Dashboards Tracking Lead Times, Costs & Fulfillment Speed",
    geoKeywords:
      "Supply Chain KPI Dashboards, Logistics Analytics Software, End-to-End Operational Visibility",
  },
  {
    id: "10",
    title: "Transportation Management (TMS)",
    subtext:
      "Fleet Management, Real-Time GPS Tracking & Last-Mile Delivery Optimization",
    geoKeywords:
      "Transportation Management System (TMS), Fleet GPS Tracking, Last-Mile Delivery Optimization",
  },
];

export default function EnterpriseSupplyChainSolutions() {
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
            End-to-End Enterprise Supply Chain Solutions
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Laptop: 3 cols, Desktop: 5 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 w-full">
          {supplyChainServices.map((item) => (
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
