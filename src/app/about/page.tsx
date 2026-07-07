"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import WorldwideConnections from "./GlobeSection";
import JourneyShowcase from "./JourneyShowcase";
import LogoCarousel from "./LogoCarousel";
import CoreValues from "./CoreValues";
import PartnersSection from "./PartnersSection";
import VideoTestimonialSection from "./VideoTestimonialSection";
import TeamShowcase from "./TeamShowcase";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#040809] overflow-x-hidden antialiased">
      {/* HERO SECTION - Height fix ki hai taki mobile par photo dikhe */}
      <section className="relative w-full h-auto md:h-screen flex items-center justify-center overflow-hidden py-10 md:py-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/1.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-[0.15] blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#040809] via-[#040809]/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* LEFT SIDE: Image - aspect-square mobile ke liye, aspect-3/4 desktop ke liye */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-5/12"
          >
            <div className="relative w-full aspect-square md:aspect-3/4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/about/1.png"
                alt="Creative professional"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-7/12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
              Creative. <br />
              <span className="text-red-500">Innovative.</span>
              <br />
              Imaginative.
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              29 years into sales & marketing, a lifetime into building
              campaigns. That’s pretty much in brief about us.
            </p>

            <NextLink
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-red-900/50"
            >
              <span>MORE ABOUT US</span>
              <ArrowUpRight className="h-5 w-5" />
            </NextLink>
          </motion.div>
        </div>
      </section>

      {/* OTHER SECTIONS - Mobile optimized negative margins */}
      <div className="relative z-20 px-4 sm:px-6 md:px-0 -mt-10 md:-mt-32">
        <div className="-mt-5 md:-mt-10">
          <WorldwideConnections />
        </div>
        <div className="-mt-5 md:-mt-20">
          <JourneyShowcase />
        </div>
        <div className="-mt-5 md:-mt-20">
          <CoreValues />
        </div>
        <div className="-mt-5 md:-mt-20">
          <PartnersSection />
        </div>
        <div className="-mt-5 md:-mt-20">
          <VideoTestimonialSection />
        </div>
        <div className="-mt-5 md:-mt-20">
          <TeamShowcase />
        </div>
        <div className="-mt-5 md:-mt-20">
          <LogoCarousel />
        </div>
      </div>
    </main>
  );
}
