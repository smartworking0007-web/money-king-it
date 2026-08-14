"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { ArrowRight } from "lucide-react";

const cloudItems = [
  { id: 1, title: "AWS Migration" },
  { id: 2, title: "Azure Migration" },
  { id: 3, title: "Google Cloud" },
  { id: 4, title: "Hybrid Cloud" },
  { id: 5, title: "Multi-Cloud" },
  { id: 6, title: "Replication" },
  { id: 7, title: "Backup" },
  { id: 8, title: "High Availability" },
];

export default function CloudStrategySolutions() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black overflow-hidden flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/datawarehousing/1.png" // Aapki unique background image ka path
          alt="Cloud Strategy Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle dark overlay for high readability and consistent theme */}
        <div className="absolute inset-0 bg-black/80 sm:bg-black/75 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Main Heading */}
        <Text
          variant="h3"
          className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8 sm:mb-12 drop-shadow-md"
        >
          Cloud Strategy
        </Text>

        {/* 4x2 Grid layout matching the screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 w-full max-w-5xl">
          {cloudItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#121316] text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between items-start h-28 sm:h-32 text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border border-zinc-800/80 hover:border-[#00D094]/50"
            >
              <span className="font-bold text-sm sm:text-base tracking-wide text-zinc-100 group-hover:text-[#00D094] transition-colors">
                {item.title}
              </span>

              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00D094] group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
