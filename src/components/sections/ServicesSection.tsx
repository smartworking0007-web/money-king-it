
"use client";

import Link from "next/link";
import Text from "@/components/ui/Text";
import {
  ArrowUpRight,
  Laptop,
  BarChart3,
  Smartphone,
  Shield,
  Database,
  Users,
  Settings,
  Cpu,
  Cloud,
  LucideIcon,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  slug: string;
}

const services: Service[] = [
  {
    id: "app-prog",
    title: "Application Programming",
    icon: Laptop,
    slug: "application-programming/project-implementation",
  },
  {
    id: "perf-mark",
    title: "Performance Marketing",
    icon: BarChart3,
    slug: "performance-marketing/seo-optimization",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    icon: Smartphone,
    slug: "mobile-app-development/ios-app-development",
  },
  {
    id: "cyber-sec",
    title: "Cyber Security",
    icon: Shield,
    slug: "cyber-security/vulnerability-assessment",
  },
  {
    id: "data-mgmt",
    title: "Data Management",
    icon: Database,
    slug: "data-management/data-warehousing",
  },
  {
    id: "crm",
    title: "Customer Relationship Management (CRM)",
    icon: Users,
    slug: "crm/hubspot-integration",
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    icon: Settings,
    slug: "erp/supply-chain-systems",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: Cpu,
    slug: "artificial-intelligence/gen-ai-integrations",
  },
  {
    id: "cloud",
    title: "Managed Cloud Services",
    icon: Cloud,
    slug: "managed-cloud-services/cloud-infrastructure-scaling",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative z-20 bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-12 md:mb-16">
          <Text
            variant="h1"
            className="mb-4 text-4xl! text-[#2D6A6A]! md:text-6xl!"
          >
            On-Demand Services
          </Text>

          <Text
            variant="body"
            className="mx-auto max-w-2xl text-sm! text-gray-600! md:text-lg!"
          >
            We provide innovative IT solutions to help businesses grow,
            secure data, optimize operations, and maximize their online
            presence.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={"/services/" + service.slug}
                className="group flex items-center justify-between rounded-[40px] border border-white/10 bg-[#2D6A6A] p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#235353] hover:shadow-2xl md:p-6"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white md:h-12 md:w-12">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>

                  <Text
                    variant="h2"
                    className="pr-2 text-left text-sm! font-bold text-white! leading-tight md:text-base!"
                  >
                    {service.title}
                  </Text>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-[#00D094]">
                  <ArrowUpRight
                    size={16}
                    className="text-white transition-colors group-hover:text-black"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

