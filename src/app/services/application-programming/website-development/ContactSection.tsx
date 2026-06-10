'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { Text } from '@/components/ui/Text';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  companyName: z.string().min(1, { message: 'Company name is required.' }),
  websiteType: z.string().min(1, { message: 'Please select a website type.' }),
  budget: z.string().min(1, { message: 'Please select a budget range.' }),
  requirements: z.string().min(10, { message: 'Requirements must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Project Request Logged:', data);
    reset();
  };

  return (
    <section className="py-12 relative w-full text-left max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <Text variant="label" className="inline-block mb-2">Project Initiation</Text>
        <Text variant="h2" className="text-zinc-900">Let&apos;s Start Your Project</Text>
      </div>

      {/* FIXED: Background transformed to solid crisp white card block with premium soft shadows */}
      <div className="bg-white border border-zinc-200/80 p-5 sm:p-8 rounded-3xl relative shadow-xs hover:border-[#00E5A0] transition-colors duration-300">
        {isSubmitSuccessful ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <CheckCircle2 size={40} className="text-emerald-600 mb-3" />
            <h3 className="text-lg font-bold text-zinc-900">Project Specs Logged</h3>
            <p className="text-xs text-zinc-500 mt-1.5 max-w-xs">
              Our assessment desk will review your requirements and respond within 12 structural hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Name & Email Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono uppercase font-bold text-zinc-700 block mb-1.5">Name</label>
                <input 
                  {...register('name')} 
                  className="w-full bg-[#E5EBEB]/30 border border-zinc-200 text-zinc-900 placeholder-zinc-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#00E5A0] focus:bg-white transition-all duration-200" 
                  placeholder="John Doe" 
                />
                {errors.name && <p className="text-[10px] text-rose-500 mt-1 font-mono">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase font-bold text-zinc-700 block mb-1.5">Corporate Email</label>
                <input 
                  {...register('email')} 
                  type="email" 
                  className="w-full bg-[#E5EBEB]/30 border border-zinc-200 text-zinc-900 placeholder-zinc-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#00E5A0] focus:bg-white transition-all duration-200" 
                  placeholder="john@company.com" 
                />
                {errors.email && <p className="text-[10px] text-rose-500 mt-1 font-mono">{errors.email.message}</p>}
              </div>
            </div>

            {/* Phone & Company Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono uppercase font-bold text-zinc-700 block mb-1.5">Phone Number</label>
                <input 
                  {...register('phone')} 
                  className="w-full bg-[#E5EBEB]/30 border border-zinc-200 text-zinc-900 placeholder-zinc-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#00E5A0] focus:bg-white transition-all duration-200" 
                  placeholder="+1 (555) 000-0000" 
                />
                {errors.phone && <p className="text-[10px] text-rose-500 mt-1 font-mono">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase font-bold text-zinc-700 block mb-1.5">Company Name</label>
                <input 
                  {...register('companyName')} 
                  className="w-full bg-[#E5EBEB]/30 border border-zinc-200 text-zinc-900 placeholder-zinc-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#00E5A0] focus:bg-white transition-all duration-200" 
                  placeholder="Enterprise Inc." 
                />
                {errors.companyName && <p className="text-[10px] text-rose-500 mt-1 font-mono">{errors.companyName.message}</p>}
              </div>
            </div>

            {/* Website Type & Budget Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono uppercase font-bold text-zinc-700 block mb-1.5">Website Type</label>
                <select 
                  {...register('websiteType')} 
                  className="w-full bg-[#E5EBEB]/30 border border-zinc-200 text-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#00E5A0] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Select Type</option>
                  <option value="corporate">Corporate Website</option>
                  <option value="ecommerce">Ecommerce Platform</option>
                  <option value="saas">SaaS Landing Platform</option>
                  <option value="custom">Custom Web App</option>
                </select>
                {errors.websiteType && <p className="text-[10px] text-rose-500 mt-1 font-mono">{errors.websiteType.message}</p>}
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase font-bold text-zinc-700 block mb-1.5">Project Budget</label>
                <select 
                  {...register('budget')} 
                  className="w-full bg-[#E5EBEB]/30 border border-zinc-200 text-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#00E5A0] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Select Range</option>
                  <option value="tier1">$5,000 - $10,000</option>
                  <option value="tier2">$10,000 - $25,000</option>
                  <option value="tier3">$25,000 - $50,000</option>
                  <option value="tier4">$50,000+</option>
                </select>
                {errors.budget && <p className="text-[10px] text-rose-500 mt-1 font-mono">{errors.budget.message}</p>}
              </div>
            </div>

            {/* Textarea Requirements */}
            <div>
              <label className="text-[10px] font-mono uppercase font-bold text-zinc-700 block mb-1.5">Project Requirements</label>
              <textarea 
                {...register('requirements')} 
                rows={3} 
                className="w-full bg-[#E5EBEB]/30 border border-zinc-200 text-zinc-900 placeholder-zinc-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#00E5A0] focus:bg-white transition-all duration-200 resize-none" 
                placeholder="Outline architectural integration mandates..." 
              />
              {errors.requirements && <p className="text-[10px] text-rose-500 mt-1 font-mono">{errors.requirements.message}</p>}
            </div>

            {/* Submission Interactive Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00E5A0] text-zinc-950 font-black py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-400 active:scale-99 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer text-sm shadow-md shadow-[#00E5A0]/10"
            >
              {isSubmitting ? 'Processing Payload...' : 'Submit Project Brief'} <Send size={13} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}