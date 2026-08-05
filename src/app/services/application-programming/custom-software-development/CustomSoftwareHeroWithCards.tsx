import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Text";
import { CheckCircle2, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export default function CustomSoftwareHeroWithCards() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image with perfect visibility for both mobile and web */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/custom/2.png"
          alt="AI IS A HELPING HAND OF HUMAN"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-55"
          sizes="100vw"
        />
        {/* Balanced canonical linear gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/80 to-black/85" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & Buttons (Fully optimized for Mobile & Web) */}
          <div className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-5 text-center lg:text-left p-5 sm:p-8 rounded-2xl ">
            <h3 className="font-mono uppercase tracking-[0.15em] text-[#00D094] text-[11px] sm:text-xs md:text-sm font-bold">
              Why Custom Software Beats Off-The-Shelf Solutions
            </h3>

            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
              Ready-made software often limits your business growth by forcing
              you to adapt to pre-built constraints. At Money King IT, we
              engineer custom software solutions tailored specifically to your
              operational logic, giving you complete control.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto py-3 px-6 sm:px-7 text-sm justify-center bg-[#8b00ff] hover:bg-[#7500db] text-white rounded-xl shadow-lg transition-all"
                >
                  Book Consultation →
                </Button>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-white text-sm font-semibold hover:text-[#00D094] transition-colors inline-flex items-center justify-center gap-1.5 group py-2"
              >
                Start Project
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Key Features Cards (Fully responsive grid for mobile and desktop) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 hover:border-[#00D094] transition-all duration-300 shadow-xl">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#00D094]/20 border border-[#00D094]/50 mb-2.5 sm:mb-3 text-[#00D094]">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-1.5">
                Business Automation
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-200 leading-normal">
                Automate repetitive tasks to eliminate manual errors and
                streamline daily operations.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 hover:border-[#00D094] transition-all duration-300 shadow-xl">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#00D094]/20 border border-[#00D094]/50 mb-2.5 sm:mb-3 text-[#00D094]">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-1.5">
                Workflow Optimization
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-200 leading-normal">
                Integrate fragmented systems into a unified platform to clear
                operational bottlenecks.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 hover:border-[#00D094] transition-all duration-300 shadow-xl">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#00D094]/20 border border-[#00D094]/50 mb-2.5 sm:mb-3 text-[#00D094]">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-1.5">
                Enhanced Security
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-200 leading-normal">
                Protect sensitive business data with secure, personalized source
                code architecture.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 hover:border-[#00D094] transition-all duration-300 shadow-xl">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#00D094]/20 border border-[#00D094]/50 mb-2.5 sm:mb-3 text-[#00D094]">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-1.5">
                Unlimited Scalability
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-200 leading-normal">
                Build flexible frameworks designed to scale effortlessly as your
                user base grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
