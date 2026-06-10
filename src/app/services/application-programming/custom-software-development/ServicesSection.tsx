"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Layers,
  Briefcase,
  Wallet,
  ShieldCheck,
  Box,
  Kanban,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    { title: "Enterprise Software Development", desc: "Complex cross-platform applications built to centralize core enterprise business processes.", icon: Building2 },
    { title: "CRM Development", desc: "Custom customer relationship tools mapping data and touchpoints around actual customer behavior journeys.", icon: Users },
    { title: "ERP Development", desc: "Resource management ecosystems binding asset allocation, warehouse, manufacturing, and dynamic accounts.", icon: Layers },
    { title: "HRMS Development", desc: "Secure platforms coordinating automated onboarding, compliance logs, payroll processing, and operations.", icon: Briefcase },
    { title: "Loan Management System", desc: "Automated lending pipelines with complex credit risk evaluation engine integrations and verification steps.", icon: Wallet },
    { title: "Fintech Software Development", desc: "High frequency clearing models designed completely under rigorous security architectures and banking compliances.", icon: ShieldCheck },
    { title: "SaaS Product Development", desc: "Multi-tenant cloud applications optimizing microservice structures and usage-tiered billing analytics.", icon: Box },
    { title: "Business Process Automation", desc: "Workflows orchestrated via integrated APIs to systematically compress latency overhead across departments.", icon: Kanban },
  ];

  return (
    <section className="py-16 sm:py-24 relative w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600 bg-white px-3 py-1 rounded border border-zinc-200/80 font-bold inline-block mb-3 shadow-xs">
          Capabilities
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 mt-2">
          Targeted Development Frameworks
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 font-light">
          Engineering solid, modular frameworks built specifically to fulfill micro and macro operational needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group bg-white border border-zinc-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-[#00E5A0] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#E5EBEB]/50 border border-zinc-200/60 flex items-center justify-center group-hover:bg-[#00E5A0]/10 group-hover:border-[#00E5A0]/30 transition-all duration-300">
                    <Icon className="text-zinc-800 group-hover:text-zinc-900 transition-colors" size={20} />
                  </div>
                  
                  <div className="w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#00E5A0] group-hover:text-zinc-950 group-hover:border-[#00E5A0] transition-all duration-300 shrink-0">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight transition-colors duration-200 group-hover:text-black">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* FIXED: Canonicalized h-[3px] */}
              <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-zinc-100 group-hover:bg-[#00E5A0] transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}