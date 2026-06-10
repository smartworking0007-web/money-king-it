"use client";
import React from "react";
import Image from "next/image";
import { Lightbulb, Sliders, Headphones, Rocket, ShieldCheck, Code2 } from "lucide-react";
import Text from "@/components/ui/Text";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-100 text-slate-800 py-16 md:py-24 overflow-hidden relative z-20">
      <style jsx>{`
        .image-wrapper-box {
          height: 360px;
          width: 100%;
          position: relative;
          margin-bottom: 2.5rem;
        }
        .floating-badge {
          position: absolute;
          bottom: -20px;
          right: 20px;
          background: white;
          padding: 1.25rem 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          z-index: 30;
          text-align: center;
        }
        @media (min-width: 640px) {
          .image-wrapper-box {
            height: 480px;
          }
          .floating-badge {
            bottom: -20px;
            right: 40px;
          }
        }
        @media (min-width: 1024px) {
          .image-wrapper-box {
            height: 540px;
            margin-bottom: 0;
          }
          .floating-badge {
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            right: auto;
          }
        }
      `}</style>

      <div className="max-w-7xl w-full mx-auto px-5 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Image with floating badge */}
          <div className="lg:col-span-5 flex justify-center items-center w-full relative">
            <div className="image-wrapper-box rounded-2xl overflow-visible">
              
              {/* Main Illustration/Team Image */}
              <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/about/choose.avif"
                  alt="Why Choose Us Workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="floating-badge border border-slate-50">
                <span className="block text-2xl md:text-3xl font-black text-teal-600 leading-none mb-1">
                  2k+
                </span>
                <Text variant="label" className="block text-slate-500! tracking-normal text-xs md:text-sm font-medium normal-case whitespace-nowrap">
                  Successful Projects
                </Text>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Heading and Feature 2-Column Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header Description */}
            <div className="space-y-3 mb-10 text-left">
              <Text variant="h1" className="text-[#0f172a]! text-2xl! md:text-3xl! lg:text-4xl! font-extrabold tracking-tight uppercase">
                WHY CHOOSE US
              </Text>
              <Text variant="body" className="text-slate-500! text-sm! md:text-base! max-w-2xl font-normal">
                We combine technical expertise with business acumen to deliver solutions that actually work.
              </Text>
            </div>

            {/* Features 2x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              
              {/* 1. Innovative Strategy */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <Text variant="h2" className="text-base! font-bold text-slate-900!">Innovative Strategy</Text>
                  <Text variant="body" className="text-slate-500! text-xs! md:text-sm!">
                    Forward-thinking approaches to solve modern problems.
                  </Text>
                </div>
              </div>

              {/* 2. Easy Customization */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Sliders className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <Text variant="h2" className="text-base! font-bold text-slate-900!">Easy Customization</Text>
                  <Text variant="body" className="text-slate-500! text-xs! md:text-sm!">
                    Flexible solutions tailored to your specific needs.
                  </Text>
                </div>
              </div>

              {/* 3. 24/7 Support */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <Text variant="h2" className="text-base! font-bold text-slate-900!">24/7 Support</Text>
                  <Text variant="body" className="text-slate-500! text-xs! md:text-sm!">
                    Always here to ensure your operations run smoothly.
                  </Text>
                </div>
              </div>

              {/* 4. Performance First */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <Text variant="h2" className="text-base! font-bold text-slate-900!">Performance First</Text>
                  <Text variant="body" className="text-slate-500! text-xs! md:text-sm!">
                    Optimized for speed, efficiency, and scalability.
                  </Text>
                </div>
              </div>

              {/* 5. Top-Tier Security */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <Text variant="h2" className="text-base! font-bold text-slate-900!">Top-Tier Security</Text>
                  {/* Fixed the closing tag from </p> to </Text> */}
                  <Text variant="body" className="text-slate-500! text-xs! md:text-sm!">
                    Enterprise-grade protection for your data.
                  </Text>
                </div>
              </div>

              {/* 6. Clean Development */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <Text variant="h2" className="text-base! font-bold text-slate-900!">Clean Development</Text>
                  <Text variant="body" className="text-slate-500! text-xs! md:text-sm!">
                    Maintainable, high-quality code standards.
                  </Text>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}