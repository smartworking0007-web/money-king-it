"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  { tag: "AI", title: "Enterprise AI Adoption", readTime: "5m read" },
  { tag: "DEV", title: "Next.js 15 Performance", readTime: "8m read" },
  { tag: "CLOUD", title: "Cloud Cost Strategies", readTime: "6m read" },
];

export default function LatestArticles() {
  return (
    <section className="relative w-full py-16 px-4 md:py-20 min-h-150 flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/insights/2.jpg"
        alt="Background"
        fill
        className="object-cover" 
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center md:items-end px-2">
        
        {/* Title Container */}
        {/* mt-[-60px] se mobile par heading aur upar chali jayegi */}
        <div className="w-full max-w-md mb-8 -mt-35 md:-mt-10 px-2">
          <h2 className="text-white text-3xl font-bold">Latest Articles</h2>
        </div>

        {/* Responsive Cards Container */}
        <div className="flex flex-col gap-6 w-full max-w-md px-2">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              className="bg-black/80 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-[#a3e635]/50 transition-all shadow-lg"
            >
              {/* Tag Section */}
              <div className="text-[#10b981] text-[8px] font-bold uppercase tracking-widest mb-1">
                {article.tag}
              </div>
              
              {/* Title Section */}
              <h3 className="text-white text-base font-bold mb-4 leading-tight">
                {article.title}
              </h3>
              
              {/* Footer Section */}
              <div className="flex justify-between items-center text-[9px]">
                <span className="text-zinc-500">{article.readTime}</span>
                <a
                  href="#"
                  className="text-white font-bold hover:text-[#a3e635] transition-colors"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
            
          ))}
        </div>
      </div>
    </section>
  );
}