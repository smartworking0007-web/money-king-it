// File Name: WebsiteDevelopmentHeroSection.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import Text from "@/components/ui/Text";

export default function WebsiteDevelopmentHeroSection() {
  return (
    <>
      {/* 
        Maximum upward adjustment: minimized vertical padding (py-2 sm:py-6 md:py-8) 
        and compact min-height to pull the section content right up to the top.
      */}
      <section className="relative w-full min-h-[45vh] sm:min-h-[55vh] bg-black text-white overflow-hidden flex items-center py-2 sm:py-6 md:py-8 px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image Container with object-contain and object-top-right to keep the head fully visible */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/flutter/3.png"
            alt="Website Development Services"
            fill
            priority
            className="object-contain md:object-cover object-top-right pt-0"
            sizes="100vw"
          />
          {/* Subtle gradient overlay to keep text readable on the left */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 lg:via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Main Content Container - Left-aligned */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex justify-start">
          <div className="max-w-2xl w-full flex flex-col space-y-3 text-left items-start">
            <Text
              variant="h3"
              className="text-white! text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md text-left"
            >
              Website Development <br />
              Services
            </Text>

            <Text
              variant="h4"
              className="text-zinc-200! text-sm sm:text-base md:text-lg font-normal leading-relaxed drop-shadow text-left"
            >
              Build fast, scalable, SEO-friendly, and conversion-focused
              websites that help your <br className="hidden sm:inline" />
              business grow online. Engineered on enterprise parameters.
            </Text>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto py-2 px-6 text-base justify-center bg-[#00D094] hover:bg-[#00b07d] text-black font-bold rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Book Consultation →
                </Button>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-white font-medium hover:text-[#00D094] transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer py-2 px-5 rounded-xl border border-white/20 bg-black/60 backdrop-blur-md hover:border-[#00D094]/40"
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
    </>
  );
}
