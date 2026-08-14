"use client";

import React from "react";
import Text from "@/components/ui/Text";

const hrWorkforceServices = [
  {
    id: "01",
    title: "Employee Management",
    subtext:
      "Centralized Digital Employee Records, Asset Tracking & Onboarding Workflows",
    geoKeywords:
      "Enterprise Employee Management System, Centralized HR Database, Digital Onboarding Software",
  },
  {
    id: "02",
    title: "Attendance & Leave Management",
    subtext:
      "Automated Time Tracking, Shift Scheduling, Biometric Sync & Leave Accrual Rules",
    geoKeywords:
      "Automated Leave Tracking System, Biometric Attendance Integration, Shift & Overtime Management",
  },
  {
    id: "03",
    title: "Payroll Automation",
    subtext:
      "One-Click Salary Calculations, Tax Deductions, Direct Deposits & Payslip Generation",
    geoKeywords:
      "Automated Payroll Processing, Tax Compliance Payroll System, Direct Deposit Salary Automation",
  },
  {
    id: "04",
    title: "Recruitment & Applicant Tracking (ATS)",
    subtext:
      "Automated Job Posting, Candidate Pipeline Tracking, Resume Parsing & Interview Scheduling",
    geoKeywords:
      "Applicant Tracking System (ATS), Automated Candidate Screening, Enterprise Recruitment Software",
  },
  {
    id: "05",
    title: "Employee Self-Service (ESS)",
    subtext:
      "Mobile & Web Portals for Payslip Downloads, Leave Requests & Personal Info Updates",
    geoKeywords:
      "Employee Self-Service Portal, ESS Mobile HR App, Self-Service Payslip Download",
  },
  {
    id: "06",
    title: "Performance Management",
    subtext:
      "Continuous OKR/KPI Tracking, Automated 360-Degree Feedback & Appraisal Reviews",
    geoKeywords:
      "Employee Performance Management Software, 360-Degree Appraisal System, OKR & Goal Tracking HR",
  },
  {
    id: "07",
    title: "Workforce Planning",
    subtext: "Capacity Forecasting, Headcount Budgeting & Skills Gap Analysis",
    geoKeywords:
      "Strategic Workforce Planning, Headcount Forecasting Software, HR Skill Gap Analysis",
  },
  {
    id: "08",
    title: "HR Analytics & Reporting",
    subtext:
      "Executive Dashboards Tracking Turnover Rates, Retention Trends & Labor Costs",
    geoKeywords:
      "People Analytics Software, HR KPI Analytics Dashboard, Employee Retention Metrics",
  },
  {
    id: "09",
    title: "HR Compliance & Governance",
    subtext:
      "Automated Labor Law Compliance, Audit Trail Management & Policy Sign-offs",
    geoKeywords:
      "Labor Law Compliance Software, Automated HR Audit Trails, Statutory Compliance Tracking",
  },
  {
    id: "10",
    title: "Organizational Management",
    subtext:
      "Dynamic Org Chart Visualization, Hierarchy Mapping & Department Structuring",
    geoKeywords:
      "Dynamic Org Chart Software, Enterprise Hierarchy Management, Departmental Structure Mapping",
  },
];

export default function NextGenHrWorkforceSolutions() {
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
            Next-Generation HR Technology &amp; Workforce Management Solutions
          </Text>
        </div>

        {/* Responsive Grid Layout (Mobile: 1 col, Tablet: 2 cols, Laptop: 3 cols, Desktop: 5 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 w-full">
          {hrWorkforceServices.map((item) => (
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
