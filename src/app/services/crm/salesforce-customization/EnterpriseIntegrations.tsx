"use client";

import React from "react";
import Text from "@/components/ui/Text";

const integrationConnectors = [
  {
    id: "01",
    title: "HubSpot Integration",
    subtext:
      "Real-Time CRM Data Sync, Automated Lead Handoffs & Closed-Loop Marketing",
    geoKeywords:
      "HubSpot API Integration, HubSpot Bi-Directional Sync, CRM Marketing Alignment",
  },
  {
    id: "02",
    title: "SAP Integration",
    subtext:
      "Enterprise ERP Data Pipelines, Inventory Sync & Automated Order Management",
    geoKeywords:
      "SAP ERP Integration Solutions, SAP S/4HANA Middleware, Enterprise Resource Planning Sync",
  },
  {
    id: "03",
    title: "Oracle ERP",
    subtext:
      "Financial Ledger Sync, Supply Chain Visibility & Enterprise Database Connectivity",
    geoKeywords:
      "Oracle ERP Cloud Integration, Oracle Financials Sync, Enterprise Database Connectors",
  },
  {
    id: "04",
    title: "Microsoft Dynamics",
    subtext:
      "Unified Customer Insights, ERP Integration & Cross-Platform Workflow Triggers",
    geoKeywords:
      "Dynamics 365 CRM Integration, Microsoft Power Automate Workflows, Azure Middleware Connectors",
  },
  {
    id: "05",
    title: "Mailchimp",
    subtext:
      "Automated Subscriber Sync, Audience Segmentation & Email Performance Tracking",
    geoKeywords:
      "Mailchimp CRM Integration, Automated List Sync, Omnichannel Email Integration",
  },
  {
    id: "06",
    title: "Slack",
    subtext:
      "Instant Workflow Notifications, Automated Deal Alerts & Real-Time Incident Escalations",
    geoKeywords:
      "Slack CRM Notifications, Real-Time Sales Alerts, Slack Bot Workflow Automation",
  },
  {
    id: "07",
    title: "QuickBooks",
    subtext:
      "Automated Invoice Generation, Payment Reconciliation & Financial Record Sync",
    geoKeywords:
      "QuickBooks Accounting Integration, Automated Invoicing Sync, CRM Financial Reconciliation",
  },
  {
    id: "08",
    title: "Shopify",
    subtext:
      "E-Commerce Order Tracking, Real-Time Inventory Sync & Customer Lifetime Value Analysis",
    geoKeywords:
      "Shopify ERP/CRM Integration, E-Commerce Data Sync, Automated Order Fulfillment",
  },
  {
    id: "09",
    title: "Stripe",
    subtext:
      "Automated Payment Gateway Sync, Subscription Billing Management & Failed Payment Recovery",
    geoKeywords:
      "Stripe Billing Integration, Automated Subscription Management, Payment Gateway Webhooks",
  },
  {
    id: "10",
    title: "Google Workspace",
    subtext:
      "Calendar Event Sync, Gmail Email Logging & Automated Document Generation",
    geoKeywords:
      "Google Workspace CRM Integration, Gmail & Google Calendar Sync, Google Cloud Workflows",
  },
];

export default function EnterpriseIntegrations() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden flex items-center justify-center min-h-100">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading (H3) using Text component */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-14">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug drop-shadow-md"
          >
            Seamless Enterprise Integrations &amp; Ecosystem Connectors
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Laptop: 3 cols, Desktop: 5 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 w-full">
          {integrationConnectors.map((item) => (
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
