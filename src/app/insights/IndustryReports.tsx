"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Text from "@/components/ui/Text";

const reports = [
  {
    title: "FinTech Report",
    desc: "Comprehensive analysis of financial tech trends.",
  },
  {
    title: "AI Market Report",
    desc: "Global insights into artificial intelligence.",
  },
  {
    title: "Cloud Adoption Report",
    desc: "Strategies for cloud infrastructure growth.",
  },
];

export default function IndustryReports() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Force White Text */}
        <div className="mb-16">
          <Text variant="h3" className="text-white! font-bold">
            Industry Reports
          </Text>
        </div>

        {/* Reports Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {reports.map((report, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative py-12 px-6 flex flex-col items-center text-center group 
                ${i < reports.length - 1 ? "md:border-r border-white/10" : ""}
                border-b md:border-b-0 border-white/10`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-emerald-500/20 transition-colors">
                <FileText className="w-8 h-8 text-emerald-400" />
              </div>

              {/* Force White Text for Headings and Body */}
              <Text variant="h4" className="`text-white! mb-4">
                {report.title}
              </Text>
              <Text
                variant="body"
                className="text-zinc-400! mb-8 max-w-55 text-sm"
              >
                {report.desc}
              </Text>

              {/* Download Action */}
              <button className="inline-flex items-center gap-2 text-emerald-500 font-bold hover:text-emerald-300 transition-colors">
                Download PDF <Download className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
