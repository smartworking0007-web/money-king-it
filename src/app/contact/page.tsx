// File Name: page.tsx

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import FaqSection from "@/app/industries/FaqSection";
import ContactInfoGrid from "./ContactInfoGrid";
import OurLocations from "./OurLocations";
import OurSupportChannels from "./OurSupportChannels";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await addDoc(collection(db, "enquiries"), {
        ...data,
        createdAt: new Date().toISOString(),
      });
      alert("Success! Your enquiry has been sent.");
      form.reset();
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Get in Touch Header, Description & Form */}
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                Get in Touch
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base">
                Reach out today and start growing your brand successfully
                guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="fullName"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-[#121212] border border-zinc-800 focus:border-[#00D094] rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full bg-[#121212] border border-zinc-800 focus:border-[#00D094] rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="company"
                  placeholder="Company Name"
                  className="w-full bg-[#121212] border border-zinc-800 focus:border-[#00D094] rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
                />
                <select
                  name="budget"
                  defaultValue=""
                  className="w-full bg-[#121212] border border-zinc-800 focus:border-[#00D094] rounded-xl p-3.5 text-sm text-zinc-500 outline-none transition-colors"
                >
                  <option value="" disabled>
                    Budget
                  </option>
                  <option value="5k-10k" className="text-white bg-[#121212]">
                    ₹5,000 - ₹10,000
                  </option>
                  <option value="10k-25k" className="text-white bg-[#121212]">
                    ₹10,000 - ₹25,000
                  </option>
                  <option value="25k+" className="text-white bg-[#121212]">
                    ₹25,000+
                  </option>
                </select>
              </div>

              <div>
                <textarea
                  name="brief"
                  required
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full bg-[#121212] border border-zinc-800 focus:border-[#00D094] rounded-xl p-3.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#CCFF00] hover:bg-[#b3e600] text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {loading ? "SENDING..." : "Submit Now"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Image Container */}
          <div className="relative w-full h-87.5 sm:h-112.5 lg:h-125 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Contact/1.png"
              alt="contact us"
              fill
              priority
              className="object-cover object-center grayscale contrast-125"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle gradient border/overlay */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      <ContactInfoGrid />
      <OurLocations />
      <OurSupportChannels />
      <FaqSection />
    </>
  );
}
