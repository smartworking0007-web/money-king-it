"use client";
import React from "react";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="w-full bg-white text-slate-800 py-10 md:py-20 overflow-hidden relative z-20">
      
      {/* Native CSS Styles Block - Perfect height scaling without breaking layout */}
      <style jsx>{`
        .responsive-image-container {
          height: 300px; /* Perfect Mobile View Height */
          width: 100%;
          position: relative;
          margin-bottom: 1.5rem; /* Space between image and text on mobile */
        }
        @media (min-width: 640px) {
          .responsive-image-container {
            height: 450px; /* Tablet View Height */
            margin-bottom: 0;
          }
        }
        @media (min-width: 1024px) {
          .responsive-image-container {
            height: 620px; /* Massive Expanded Web Height */
            margin-bottom: 0;
          }
        }
      `}</style>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
        
        {/* Top Centered Section Heading - Tightened spacing for cleaner UI */}
        <div className="w-full text-center mb-8 md:mb-16 max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2d6a6b] leading-snug px-2">
            We Commit To World-class Services That Set Great Business Standards
          </h2>
        </div>

        {/* Content Layout Grid - Alternates flawlessly between mobile stack and desktop 6:6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Archery Target Column */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <div className="responsive-image-container rounded-2xl overflow-hidden">
              <Image
                src="/about/Target and Arrows.jpg"
                alt="Our Mission and Vision Target"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Text Blocks Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8 lg:pl-6 px-1 sm:px-0">
            
            {/* Our Mission Block */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-lg md:text-2xl font-bold text-[#0070f3] tracking-wide">
                Our Mission
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify font-normal">
                At Shadow infosystem, our mission is to empower businesses with
                cutting-edge IT solutions, robust cybersecurity measures, and
                digital marketing strategies. We are committed to delivering
                innovative and tailored services that not only meet but exceed
                the evolving needs of our clients. Through our expertise and
                unwavering dedication, we strive to be the catalyst for our
                clients success in the ever-changing landscape of technology.
              </p>
            </div>

            {/* Our Vision Block */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-lg md:text-2xl font-bold text-[#10b981] tracking-wide">
                Our Vision
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify font-normal">
                Our vision at Shadow infosystem is to be a trailblazer in the IT
                industry, recognized for our excellence in cyber security and
                digital transformation. We aspire to be the go-to partner for
                businesses seeking reliable and advanced technological
                solutions. With a focus on continuous innovation, client
                satisfaction, and ethical practices, we envision a future where
                businesses thrive in a secure and digitally optimized
                environment, and Shadow infosystem is at the forefront of this
                transformation.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}