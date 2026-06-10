"use client";
import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-slate-800 py-16 md:py-24 relative z-20">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Main Grid: Left Column for Illustration, Right for Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Illustration Column */}
          <div
            className="lg:col-span-5 flex justify-center items-center w-full"
            style={{ height: "400px", position: "relative" }}
          >
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src="/about/illustration.jpeg"
                alt="Shadow Infosystem Isometric Illustration"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 relative pr-0 lg:pr-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2d6a6b] leading-tight">
              About Shadow infosystem
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify font-normal">
              Shadow infosystem, an esteemed IT company, epitomizes the pinnacle
              of excellence in the realms of cyber security and digital
              transformation. Distinguished for our meticulous approach in
              tailoring solutions to the unique needs of our esteemed clientele,
              we are unwaveringly committed to utilizing cutting-edge
              technologies that seamlessly align with the aspirations of our
              clients.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify font-normal">
              In the dynamic landscape of IT, our experienced team of expert
              marketers, designers, and developers possess the insight to plan
              campaigns that transcend conventional boundaries. In our
              relentless pursuit of tangible results, metrics such as leads and
              revenue generated occupy the forefront of our focus. The yardstick
              of our success is intrinsically tied to the prosperity of our
              clients.
            </p>

            {/* Stylized Vertical Background 'ABOUT' Text */}
            <div
              className="hidden lg:block absolute -right-40px top-1/2 -translate-y-1/2 font-sans font-black text-[90px] text-slate-100/70 tracking-[15px] select-none pointer-events-none"
              style={{
                writingMode: "vertical-rl",
                textTransform: "uppercase",
              }}
            >
              ABOUT 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
