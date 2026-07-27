import React from "react";
import Image from "next/image";
import { Bot, Zap, Lock, TrendingUp } from "lucide-react";

/**
 * WhyCustomSection.tsx
 * Fully responsive component with corrected Tailwind CSS utility classes,
 * negative margin adjustments for desktop and mobile views to pull the section upward,
 * and clean layout integration.
 */

const FEATURES = [
  {
    icon: Bot,
    title: "Business Automation",
    desc: "Simplify daily operations by automating repetitive tasks and increasing efficiency.",
  },
  {
    icon: Zap,
    title: "Workflow Optimization",
    desc: "Connect fragmented systems into one seamless workflow and eliminate bottlenecks.",
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    desc: "Enterprise-grade security architecture tailored specifically for your business.",
  },
  {
    icon: TrendingUp,
    title: "Unlimited Scalability",
    desc: "Custom software designed to grow alongside your company.",
  },
];

export default function WhyCustomSection() {
  return (
    /* 
      MOBILE & WEB POSITIONING ADJUSTMENT:
      -mt-12 or -mt-16 handles pulling the section upward on mobile devices.
      md:-mt-24 or md:-mt-32 handles pulling the section upward on desktop/web views.
    */
    <section className="relative z-20 -mt-25 md:-mt-20 w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/implementation/2.png"
          alt="Background"
          fill
          priority
          className="h-full w-full object-cover object-center"
          quality={100}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 h-full w-full bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-350 px-6 py-16 md:py-24 lg:px-16 lg:py-28">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col text-white">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Strategic Paradigm
            </span>
            <h2 className="mb-6 text-[32px] font-extrabold leading-[1.1] md:text-[48px] lg:text-[56px]">
              Why Custom Software Solutions Outperform Off-The-Shelf Tools
            </h2>
            <p className="max-w-130 text-[16px] md:text-[18px] leading-[1.8] text-gray-200">
              Ready-made software forces your business to adapt to its
              limitations. Our custom software is engineered specifically around
              your workflow.
            </p>
          </div>

          {/* Right Content: Cards Grid */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col rounded-[24px] border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[16px] bg-emerald-500">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="mb-3 text-[20px] font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
