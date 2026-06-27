"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  "2500+ Projects Delivered",
  "97% Client Retention Rate",
  "98% On-time Delivery",
  "24/7 Delivery Pods",
];


const clientLogos = Array.from({ length: 12 }, (_, i) => `/hero/${i + 1}.jpeg`);

export default function WhyChooseMoneyKingIT() {
  return (
    <section className="bg-gray-50 py-16 px-6">
     
      <div className="max-w-7xl mx-auto">
       
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           
        
          <div className="flex flex-col">  
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">    
              Why Choose Money King IT ? 
            </h2>
            <p className="text-gray-600 leading-8 mb-4">
              Agencies and brands stay with us for years because we make delivery predictable, clients happy, and teams confident.
            </p>
            <p className="text-gray-600 leading-8 mb-8">
              We don’t compete for your clients—we make you look flawless in front of them. Every engagement is governed, measurable, and built on quiet reliability.
            </p>
            <button className="inline-flex items-center gap-2 bg-lime-300 hover:bg-lime-400 transition px-7 py-3 rounded-full font-semibold w-fit">
              CONTACT US
              <ArrowRight size={20}/>
            </button>
          </div>

        
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            
    
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex-1">
              <h3 className="text-xl font-bold text-black mb-6">
                More Than 500 Brands Count on Us
              </h3>
              <ul className="space-y-4">
                {stats.map((stat, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    {stat}
                  </li>
                ))}
              </ul>
            </div>


            <div className="bg-blue-700 rounded-3xl p-6 flex-1 h-96 overflow-hidden relative">
              <motion.div
                className="grid grid-cols-2 gap-4"
                animate={{ y: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div key={index} className="bg-white rounded-xl h-16 flex items-center justify-center p-2 shadow-sm">
                    <Image
                      src={logo}
                      alt={`Client ${index + 1}`}
                      width={100}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}