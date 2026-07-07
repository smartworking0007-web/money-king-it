"use client";
import React, { useState } from 'react';
import { db } from "@/lib/firebase"; 
import { collection, addDoc } from "firebase/firestore";

export default function Hero() {
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
        createdAt: new Date().toISOString() 
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
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto my-10 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Green Section */}
        <div className="bg-[#064E3B] text-white p-10 lg:p-12 lg:w-[40%] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8">Your Invisible Delivery Team.</h2>
          <div className="space-y-8">
            <Feature icon="🏆" title="16+ Years Experience" desc="Two decades of powering businesses." />
            <Feature icon="👤" title="2,500+ Projects Delivered" desc="From sprints to full-scale delivery." />
            <Feature icon="👥" title="675+ IT Experts" desc="Top 1% of talent, trained for you." />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-8 lg:p-12 lg:w-[60%] bg-white">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Book a Fit Call</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField name="fullName" label="Full Name*" placeholder="Full Name" />
              <InputField name="email" label="Email Address*" placeholder="Email Address" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField name="country" label="Country*" placeholder="Enter your country" />
              <InputField name="phone" label="Phone Number (Optional)" placeholder="Phone Number" />
            </div>
            
            {/* Dropdown Fix: Text color set to gray-900 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-zinc-700">Select your service*</label>
              <select name="service" required className="w-full border border-zinc-300 p-3 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-green-700 outline-none">
                <option value="">Please Select From The Dropdown</option>
                <option value="custom-software">Custom Software Development</option>
                <option value="ai-solutions">AI & Machine Learning Solutions</option>
                <option value="cloud-migration">Cloud Migration & DevOps</option>
                <option value="mobile-apps">Mobile App Development</option>
                <option value="data-analytics">Data Analytics & Business Intelligence</option>
                <option value="cyber-security">Cyber Security Services</option>
              </select>
            </div>

            {/* Description Fix: Added explicit text-gray-900 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-zinc-700">Description*</label>
              <textarea name="brief" required className="w-full border border-zinc-300 p-3 rounded-lg text-sm text-gray-900 h-28 focus:ring-2 focus:ring-green-700 outline-none bg-white" placeholder="Project Brief" />
            </div>

            <button type="submit" disabled={loading} className="bg-[#064E3B] text-white px-8 py-3 rounded-full font-bold text-sm w-full md:w-auto hover:bg-[#043d2e]">
              {loading ? "SENDING..." : "ENQUIRE NOW ➔"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <span className="text-xl mt-1 text-white">{icon}</span>
      <div>
        <h3 className="font-bold text-sm text-white">{title}</h3>
        <p className="text-green-100 text-xs">{desc}</p>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, name }: { label: string, placeholder: string, name: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-zinc-700">{label}</label>
      <input name={name} required className="w-full border border-zinc-300 p-3 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-green-700 bg-white" placeholder={placeholder} />
    </div>
  );
}