import React from "react";
import {
  Landmark,
  Coins,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  Building2,
  Factory,
} from "lucide-react";
import Text from "@/components/ui/Text";

/**
 * IndustrySolutionsSection.tsx
 * Updated component featuring industry-specific software solutions and enterprise platforms.
 */

const INDUSTRY_SOLUTIONS = [
  {
    icon: Landmark,
    title: "Banking Operations",
    desc: "Secure, scalable software built to streamline core banking processes and enhance data compliance.",
  },
  {
    icon: Coins,
    title: "Fintech Systems",
    desc: "High-speed financial software designed for secure transactions, payment integration, and real-time data processing.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Platforms",
    desc: "HIPAA-compliant software solutions tailored for patient management, electronic records, and secure data storage.",
  },
  {
    icon: GraduationCap,
    title: "Digital Education",
    desc: "Scalable EdTech platforms designed to support high-concurrency learning, course management, and seamless content delivery.",
  },
  {
    icon: ShoppingBag,
    title: "Smart E-Commerce",
    desc: "Robust, secure e-commerce development focused on user experience, payment gateway integration, and inventory management.",
  },
  {
    icon: Truck,
    title: "Logistics & Fleet",
    desc: "Advanced software solutions for real-time fleet tracking, supply chain management, and route optimization.",
  },
  {
    icon: Building2,
    title: "Real Estate Tech",
    desc: "Innovative property management platforms and custom digital solutions for real estate agencies and investors.",
  },
  {
    icon: Factory,
    title: "Smart Manufacturing",
    desc: "IoT-integrated manufacturing software to monitor production efficiency, machine maintenance, and supply chain logistics.",
  },
];

export default function IndustrySolutionsSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Text variant="label" className="mb-4 inline-block text-[#00D094]">
            Industry-Specific Software Solutions & Enterprise Platforms
          </Text>
          <Text
            variant="h3"
            className="text-white! tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
          >
            Industry-Specific Software Solutions & Enterprise Platforms
          </Text>
          <Text
            variant="h4"
            className="text-gray-400! text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We build high-performance enterprise platforms, custom-engineered to meet the unique operational requirements of your specific industry.
          </Text>
        </div>

        {/* Industry Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {INDUSTRY_SOLUTIONS.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col rounded-[24px] border border-white/10 bg-[#121212] p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[#00D094]/40 hover:bg-[#161616] shadow-xl h-full justify-between group"
            >
              <div>
                {/* Industry Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00D094]/10 border border-[#00D094]/20 text-[#00D094] group-hover:bg-[#00D094]/20 transition-colors">
                  <item.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>

                <Text
                  variant="h5"
                  className="text-white! mb-3 tracking-tight leading-snug text-base sm:text-lg font-bold"
                >
                  {item.title}
                </Text>
              </div>

              <Text
                variant="body"
                className="text-gray-400! text-[14px] leading-[1.7]"
              >
                {item.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}