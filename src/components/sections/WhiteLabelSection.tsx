"use client";

import { Text } from "@/components/ui/Text";
import { Briefcase, Users, ShieldCheck, Megaphone } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "NDA-backed partnership",
    icon: ShieldCheck,
    color: "hover:bg-[#D4FF00]",
  },
  {
    title: "One team across marketing & data",
    icon: Users,
    color: "hover:bg-[#00D094]",
  },
  {
    title: "QA-driven, SLA-based delivery",
    icon: Briefcase,
    color: "hover:bg-[#3B82F6]",
  },
  {
    title: "No direct client pitches",
    icon: Megaphone,
    color: "hover:bg-[#FF6B6B]",
  },
];

export default function WhiteLabelSection() {
  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Text
            variant="h2"
            className="text-[#2D6A6A] mb-4 text-3xl md:text-4xl"
          >
            Blue-Label Partnerships you can trust
          </Text>
          <Text
            variant="body"
            className="text-gray-600 font-normal max-w-2xl mx-auto px-2"
          >
            Scale your digital agency with our white-label teams. Expand
            capabilities, meet deadlines, and ensure zero client risk—all under
            your brand without hiring.
          </Text>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image (Responsive height) */}
          <div className="relative h-75 md:h-100 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src="/hero/whitelabel.jpeg"
              alt="Tech world with money king"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Grid (1 column on mobile, 2 on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group bg-gray-50 text-gray-900 p-6 md:p-8 rounded-3xl transition-all duration-500 cursor-pointer border border-gray-100 ${feature.color} hover:text-white hover:border-transparent`}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 transition-transform group-hover:scale-110" />
                  <Text
                    variant="body"
                    className="text-lg md:text-xl font-bold leading-tight"
                  >
                    {feature.title}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
