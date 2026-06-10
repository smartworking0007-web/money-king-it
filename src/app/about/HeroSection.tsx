import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-6 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Empowering Your{" "}
              <span className="text-emerald-400">Financial Growth</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-lg mx-auto md:mx-0">
              We provide cutting-edge wealth management and financial solutions
              tailored to your future goals. Discover who we are and what drives
              our passion.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-emerald-400 hover:bg-emerald-500 transition duration-150 ease-in-out"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-500 text-base font-medium rounded-md text-white hover:bg-slate-700 transition duration-150 ease-in-out"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div
            className="w-full flex justify-center"
            style={{
              height: "450px",
              position: "relative",
              minHeight: "450px",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src="/about/illustration.jpeg"
                alt="Money King Financial Illustration"
                fill
                priority
                className="object-cover transform hover:scale-105 transition duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
