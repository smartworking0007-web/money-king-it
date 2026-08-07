// src/app/industries/StatsCircularSection.tsx

"use client";

import React from "react";
import Link from "next/link";


const STATS_DATA = [
  {
    number: "400K+",
    label: "Active Users",
    ringText: "Trusted Global Scale • Secure Operations •",
  },
  {
    number: "99.8%",
    label: "Uptime SLA",
    ringText: "High Availability • Bulletproof Reliability •",
  },
  {
    number: "12M+",
    label: "Requests Secured",
    ringText: "Enterprise Performance • Data Integrity •",
  },
  {
    number: "50+",
    label: "Partnerships",
    ringText: "University Collaborations • Industry Network •",
  },
];

export default function StatsCircularSection() {
  return (
    <section className="relative z-20 w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-white/10">
      {/* Main Container matching your dark theme layout */}
      <div className="mx-auto max-w-350">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content & Call to Action (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold tracking-tight text-white leading-[1.1] mb-6">
              Trusted to Safeguard Operations at Scale
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-[1.6] mb-8 font-light">
              We work invisibly under your institution&apos;s name with complete
              quality assurance and structural protection.
            </p>

            <div>
              <Link href="/contact">
                <button className="bg-[#00D094] text-black px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-[#00b07d] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[#00D094]/20 cursor-pointer">
                  Book A Call
                </button>
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Or, use this form to tell us about your needs.
            </p>
          </div>

          {/* Right Side: Rotating Circular Badge Stats Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
            {STATS_DATA.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center p-4 group"
              >
                {/* Rotating SVG Circular Text */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
                  <svg
                    className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite] group-hover:animation-play-state-paused"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id={`circlePath-${index}`}
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                    />
                    <text className="text-[9.5px] uppercase font-mono tracking-widest fill-gray-400 group-hover:fill-[#00D094] transition-colors duration-300">
                      <textPath href={`#circlePath-${index}`} startOffset="0%">
                        {item.ringText}
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Stat Number & Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-[#121212]/80 backdrop-blur-sm rounded-full border border-white/10 m-3 group-hover:border-[#00D094]/50 transition-all duration-300">
                    <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-[#00D094] transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}