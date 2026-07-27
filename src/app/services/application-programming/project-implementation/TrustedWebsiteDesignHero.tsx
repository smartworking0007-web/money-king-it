import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text, { Button } from "@/components/ui/Text";

export default function TrustedWebsiteDesignHero() {
  return (
    <section className="relative z-20 -mt-12 md:-mt-24 w-full bg-[#0a0a0a] text-white overflow-hidden min-h-150 lg:min-h-175 flex items-center py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Main Container */}
      <div className="mx-auto max-w-350 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Description & CTA (Span 7 Columns) */}
        <div className="lg:col-span-7 space-y-6 z-10">
          <Text
            variant="h1"
            className="text-white! text-[36px] sm:text-[48px] md:text-[56px] font-extrabold tracking-tight leading-[1.1]"
          >
            Your Trusted Website Design Company
          </Text>

          {/* Accent Line */}
          <div className="w-20 h-1 " />

          <Text
            variant="h4"
            className="text-gray-400! font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-2xl"
          >
            Design and deliver high-performing websites without the cost or
            complexity of building an in-house team.
          </Text>

          {/* Call To Action Button routing to /contact */}
          <div className="pt-4">
            <Link href="/contact">
              <Button
                variant="outline"
                className="text-white! border-white! hover:bg-white/10 px-8 py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 w-full sm:w-auto cursor-pointer"
              >
                Request A Free Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Expert Graphic Image (Span 5 Columns) */}
        <div className="lg:col-span-5 relative w-full h-87.5 sm:h-112.5 lg:h-125 flex items-center justify-center">
          {/* Subtle Background Shape */}
          <div className="absolute w-75 sm:w-100 h-75 sm:h-100 rounded-full bg-white/5 border border-white/10 right-0 z-0" />

          {/* Expert Graphic Image using /implementation/4.png */}
          <div className="relative w-full h-full z-10">
            <Image
              src="/implementation/4.png"
              alt="Trusted Website Design Expert"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
