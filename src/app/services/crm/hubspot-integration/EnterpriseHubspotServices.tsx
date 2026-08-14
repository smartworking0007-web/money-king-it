"use client";

import React from "react";
import Text from "@/components/ui/Text";

const hubspotServices = [
  {
    id: "01",
    title: "CRM SETUP",
    subtext:
      "Complete Hub Configuration, Custom Object Definition & Portal Onboarding",
    geoKeywords:
      "HubSpot CRM Onboarding Services, HubSpot Portal Setup, Custom Object Configuration",
  },
  {
    id: "02",
    title: "PIPELINE INTEGRATION",
    subtext: "Unified Sales & Deal Pipelines with Multi-Currency & Stage Rules",
    geoKeywords:
      "HubSpot Sales Pipeline Integration, Deal Pipeline Automation, Multi-Currency CRM Config",
  },
  {
    id: "03",
    title: "MARKETING AUTOMATION",
    subtext: "Omnichannel Campaign Orchestration & Behavioral Lead Nurturing",
    geoKeywords:
      "HubSpot Marketing Hub Automation, Lead Nurturing Campaigns, Inbound Marketing Workflows",
  },
  {
    id: "04",
    title: "LEAD MGMT",
    subtext:
      "Predictive Lead Scoring, Automated Routing & Qualification Matrices",
    geoKeywords:
      "HubSpot Predictive Lead Scoring, Lead Assignment Automation, MQL to SQL Hand-off Rules",
  },
  {
    id: "05",
    title: "LIFECYCLE",
    subtext: "Contact & Deal Stage Mapping Across Customer Journey Touchpoints",
    geoKeywords:
      "Customer Lifecycle Stage Mapping, HubSpot Contact Lifecycle Automation, Funnel Tracking",
  },
  {
    id: "06",
    title: "WORKFLOW AUTOMATION",
    subtext:
      "Internal Task Automation, Notifications & Cross-Object Trigger Logic",
    geoKeywords:
      "HubSpot Advanced Workflows, Sales Process Automation, Cross-Object Action Triggers",
  },
  {
    id: "07",
    title: "CRM MIGRATION",
    subtext: "Zero-Data-Loss Migration from Salesforce, Zoho, or Legacy CRMs",
    geoKeywords:
      "Salesforce to HubSpot Migration, Zoho to HubSpot Data Transfer, Clean CRM Data Migration",
  },
  {
    id: "08",
    title: "EMAIL AUTOMATION",
    subtext:
      "Personalized Drip Sequences, A/B Testing & Dynamic Content Delivery",
    geoKeywords:
      "HubSpot Email Drip Campaigns, Dynamic Email Personalization, Automated Sales Sequences",
  },
  {
    id: "09",
    title: "ANALYTICS",
    subtext:
      "Executive Multi-Touch Attribution, Pipeline Velocity & ROI Dashboards",
    geoKeywords:
      "HubSpot Custom Reporting Dashboards, Attribution Modeling, Revenue Performance Analytics",
  },
  {
    id: "10",
    title: "API INTEGRATION",
    subtext:
      "Custom REST API Integration with ERPs, Billing Engines & External Web Apps",
    geoKeywords:
      "Custom HubSpot Webhook Integration, HubSpot REST API Development, ERP CRM Integration",
  },
];

export default function EnterpriseHubspotServices() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden flex items-center justify-center min-h-100">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading (H3) using Text Typography Component */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-14">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug drop-shadow-md"
          >
            Comprehensive Enterprise HubSpot Services &amp; Solutions
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Laptop: 3 cols, Desktop: 5 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 w-full">
          {hubspotServices.map((item) => (
            <div
              key={item.id}
              className="relative group bg-zinc-900/80 sm:bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80 hover:border-[#00D094]/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-start text-left shadow-md hover:shadow-[0_0_20px_rgba(0,208,148,0.15)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hiddenmin-h-47.5 sm:min-h-55"
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

                {/* Title using Text Typography Component */}
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
