"use client";

import Link from "next/link";
import { Text } from "@/components/ui/Text";
import {
  Laptop,
  BarChart3,
  Smartphone,
  Shield,
  Database,
  Users,
  Settings,
  Cpu,
  Cloud,
} from "lucide-react";

// 1. Array ko function ke bahar rakhein
const services = [
  {
    id: "app-prog",
    title: "Application Programming",
    icon: Laptop,
    slug: "application-programming/project-implementation",
    desc: "Ship flawless builds, on time, every sprint.",
  },
  {
    id: "perf-mark",
    title: "Performance Marketing",
    icon: BarChart3,
    slug: "performance-marketing/seo-optimization",
    desc: "Make ROAS and attribution provable.",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    icon: Smartphone,
    slug: "mobile-app-development/ios-app-development",
    desc: "Launch apps fast without technical bottlenecks.",
  },
  {
    id: "cyber-sec",
    title: "Cyber Security",
    icon: Shield,
    slug: "cyber-security/vulnerability-assessment",
    desc: "Secure corporate assets and implement custom pipelines.",
  },
  {
    id: "data-mgmt",
    title: "Data Management",
    icon: Database,
    slug: "data-management/data-warehousing",
    desc: "Add execution capacity without structural hiring.",
  },
  {
    id: "crm",
    title: "CRM",
    icon: Users,
    slug: "crm/hubspot-integration",
    desc: "Manage high-performance digital and ad spends.",
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    icon: Settings,
    slug: "erp/supply-chain-systems",
    desc: "Optimize operations and business resources.",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: Cpu,
    slug: "artificial-intelligence/gen-ai-integrations",
    desc: "Implement custom autonomous intelligence.",
  },
  {
    id: "cloud",
    title: "Managed Cloud Services",
    icon: Cloud,
    slug: "managed-cloud-services/cloud-infrastructure-scaling",
    desc: "Cloud infrastructure scaling and management.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Text variant="h1" className="text-[#2D6A6A] mb-4">
            On-Demand Services
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            // 2. Icon ko yahan use karein
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={"/services/" + service.slug}
                className="group block h-87.5 cursor-pointer perspective-[1000px]"
              >
                <div className="relative h-full w-full transition-all duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm backface-hidden flex flex-col justify-between">
                    <div>
                      <Icon className="w-10 h-10 text-[#2D6A6A] mb-6" />
                      <Text variant="h3" className="text-xl text-gray-900 mb-3">
                        {service.title}
                      </Text>
                      <Text variant="body" className="text-sm text-gray-500">
                        {service.desc}
                      </Text>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-[#2D6A6A] p-8 rounded-2xl transform-[rotateY(180deg)] backface-hidden flex flex-col justify-center items-center text-white text-center">
                    <Text variant="h3" className="text-xl mb-4 text-white">
                      Explore Partnership
                    </Text>
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                      <span className="text-[#2D6A6A] font-bold">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
