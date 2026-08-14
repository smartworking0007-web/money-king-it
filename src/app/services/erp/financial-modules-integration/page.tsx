import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import Text from "@/components/ui/Text";

import EnterpriseIndustrySolutions from "../../data-management/data-warehousing/EnterpriseIndustrySolutions";
import WebsiteDevelopmentHeroSection from "../../mobile-app-development/flutter-apps/WebsiteDevelopmentHeroSection";
import FaqSection from "@/app/industries/FaqSection";
import EnterpriseFinanceAccountingSolutions from "./EnterpriseFinanceAccountingSolutions";
import AccountingWorkflowFramework from "./AccountingWorkflowFramework";
import EnterpriseGeneralLedgerReconciliation from "./EnterpriseGeneralLedgerReconciliation";
import EnterpriseFinancialAnalyticsBI from "./EnterpriseFinancialAnalyticsBI";

/**
 * FinancialAutomationLedgersHero.tsx
 * Fully responsive hero section with strictly left-aligned content across all screen sizes.
 */

export default function FinancialAutomationLedgersHero() {
  return (
    <>
      <section className="relative w-full min-h-85 sm:min-h-90 bg-black text-white overflow-hidden flex items-center pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image Container with object-cover and dark gradient for readability */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/financial/1.png"
            alt="financial ledgers"
            fill
            priority
            unoptimized
            className="object-cover object-center z-0"
            sizes="100vw"
          />
          {/* Stronger background overlay on mobile so text remains 100% readable */}
          <div className="absolute inset-0 bg-black/75 sm:bg-black/50 pointer-events-none z-1" />
        </div>

        {/* Main Content Container - Strictly Left-Aligned across all viewports */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex justify-start">
          <div className="max-w-2xl w-full flex flex-col space-y-6 text-left items-start">
            {/* Title (H3 Variant) */}
            <Text
              variant="h3"
              className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md text-left w-full"
            >
              Financial Automation Ledgers
            </Text>

            {/* Description (H4 Variant) */}
            <Text
              variant="h4"
              className="text-zinc-200! text-sm sm:text-base md:text-lg font-normal leading-relaxed drop-shadow text-left w-full"
            >
              Automate accounting, financial reporting, and compliance
              monitoring through intelligent ERP-driven systems.
            </Text>

            {/* Action Buttons - Left Aligned */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto py-3.5 px-8 text-base justify-center bg-[#00D094] hover:bg-[#00b07d] text-black font-bold rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Book Consultation →
                </Button>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-white font-medium hover:text-[#00D094] transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer py-3.5 px-6 rounded-xl border border-white/20 bg-black/60 backdrop-blur-md hover:border-[#00D094]/40"
              >
                Start Project
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Appended Sections */}
      <EnterpriseFinanceAccountingSolutions />
      <AccountingWorkflowFramework />
      <EnterpriseGeneralLedgerReconciliation />
      <EnterpriseFinancialAnalyticsBI />
      <EnterpriseIndustrySolutions />
      <WebsiteDevelopmentHeroSection />
      <FaqSection />
    </>
  );
}
