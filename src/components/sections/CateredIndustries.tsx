"use client";

import Image from "next/image";

const industries = [
  { title: "ECOMMERCE", desc: "Convert Faster. Scale Smarter.", img: "/process/1.png", effect: "top" },
  { title: "SaaS", desc: "Ship Faster. Retain Longer.", img: "/process/2.png", effect: "left" },
  { title: "REAL ESTATE", desc: "Digitize. Engage. Close.", img: "/process/3.png", effect: "top" },
  { title: "HEALTHCARE", desc: "Secure. Compliant. Patient-First.", img: "/process/4.png", effect: "left" },
  { title: "FINANCIAL SERVICES", desc: "Build Trust. Automate Growth.", img: "/process/5.png", effect: "top" },
  { title: "LEAD GENERATION", desc: "Scale Outreach. Prove ROI.", img: "/process/6.png", effect: "left" },
];

export default function CateredIndustries() {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Cater to
          </h2>
          <p className="text-gray-600 max-w-2xl text-base md:text-lg">
            We cater to a wide range of industries, helping businesses optimize operations and drive growth with technology.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-md border border-gray-100 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Hover Animation Overlay */}
              <div
                className={`absolute inset-0 bg-blue-700/90 transition-transform duration-500 ease-in-out z-10 
                ${
                  item.effect === "top"
                    ? "-translate-y-full group-hover:translate-y-0"
                    : "-translate-x-full group-hover:group-hover:translate-x-0"
                }`}
              />

              {/* Text Content (Visible always, but centered on hover) */}
              <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end transition-all duration-300 group-hover:justify-center group-hover:items-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                {/* Description visible mostly on hover or styled to look good */}
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}