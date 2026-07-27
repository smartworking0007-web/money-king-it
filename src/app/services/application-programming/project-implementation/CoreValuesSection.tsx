import React from "react";
import Image from "next/image";
import { Bot, Zap, Lock, TrendingUp } from "lucide-react";

/**
 * CoreValuesSection.tsx
 * Fully responsive component with negative margins (-mt-12 md:-mt-28)
 * added to pull the section upward seamlessly on both mobile and web views,
 * clean Tailwind canonical classes, and fixed parent container height for the Next.js fill Image.
 */

const CORE_VALUES = [
  {
    icon: Bot,
    title: "Business Automation",
    desc: "Simplify your daily operations by automating repetitive tasks. We help you reduce manual errors and save valuable time with custom-built automation workflows.",
  },
  {
    icon: Zap,
    title: "Workflow Optimization",
    desc: "Streamline your fragmented systems into one unified process. We identify and clear operational bottlenecks to improve your team's overall productivity.",
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    desc: "Protect your business data with custom security architecture. Unlike standard off-the-shelf software, our solutions are built with personalized, high-level security features tailored to your needs.",
  },
  {
    icon: TrendingUp,
    title: "Unlimited Scalability",
    desc: "Build for the future. Our custom software frameworks are designed to grow with your business, allowing you to scale your operations seamlessly as your user base expands.",
  },
];

export default function CoreValuesSection() {
  return (
    /* 
      MOBILE & WEB POSITIONING ADJUSTMENT:
      -mt-12 pulls the section upward on mobile devices.
      md:-mt-28 pulls the section upward on desktop/web views.
    */
    <section className="relative z-20 -mt-12 md:-mt-28 w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Main Container */}
      <div className="mx-auto max-w-350">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-bold tracking-tight text-white leading-[1.1]">
              Our Core Values
            </h2>
          </div>
          <div className="max-w-md text-gray-400 text-[15px] md:text-[16px] leading-[1.6]">
            We see randomness not as noise, but as a source of insight unlocking
            paths that structured thinking often overlooks.
          </div>
        </div>

        {/* Bento/Grid Section: 3 Columns on desktop (2 for cards grid, 1 for large portrait image) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Side: 2x2 Grid of Cards (Takes 2 columns on large screens) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CORE_VALUES.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-[#121212] p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#161616]"
              >
                {/* Icon Container */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                  <item.icon
                    className="h-5 w-5 text-[#a3e635]"
                    strokeWidth={2}
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="mb-3 text-[20px] md:text-[22px] font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Tall Feature Image Card with explicit min-height to fix Next.js fill warning */}
          <div className="relative lg:col-span-1 h-full min-h-87.5 sm:min-h-112.5 lg:min-h-full w-full rounded-[32px] overflow-hidden border border-white/10 bg-[#121212]">
            <Image
              src="/implementation/3.png"
              alt="Core Values Professional"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
