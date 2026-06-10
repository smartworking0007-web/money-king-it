// src/app/services/application-programming/project-implementation/ContactSection.tsx
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Text';

const formConstraints = z.object({
  name: z.string().min(2, "Name validation parameters require clear character contexts."),
  email: z.string().email("Please supply a valid corporate routing email address."),
  phone: z.string().min(6, "Provide precise phone routing information rules."),
  company: z.string().min(2, "Company entity structural context is required."),
  requirement: z.string().min(10, "Briefly map your code integration bottleneck details.")
});

type FormInputData = z.infer<typeof formConstraints>;

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormInputData>({
    resolver: zodResolver(formConstraints)
  });

  const sendPayload = async (data: FormInputData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Synchronized Data Block:", data);
    reset();
    alert("Project parameters cleanly registered inside Money King IT configuration queues.");
  };

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 space-y-8 bg-[#E5EBEB]">
      <div className="text-center space-y-2">
        <Text variant="h2">Initiate Technical Validation</Text>
        <p className="text-xs md:text-sm text-zinc-500 font-mono uppercase tracking-widest">Submit System Scope Variables</p>
      </div>

      <form onSubmit={handleSubmit(sendPayload)} className="p-6 md:p-10 bg-white/90 border border-zinc-200 rounded-3xl space-y-5 shadow-xs">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase text-zinc-500 font-bold tracking-widest">Full Name</label>
            <input {...register("name")} className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:border-emerald-600 text-zinc-900 placeholder-zinc-400" placeholder="Alex Carter" />
            {errors.name && <p className="text-[11px] text-emerald-600 font-mono">{errors.name.message}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase text-zinc-500 font-bold tracking-widest">Business Email</label>
            <input {...register("email")} className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:border-emerald-600 text-zinc-900 placeholder-zinc-400" placeholder="alex@enterprise.com" />
            {errors.email && <p className="text-[11px] text-emerald-600 font-mono">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase text-zinc-500 font-bold tracking-widest">Phone Line</label>
            <input {...register("phone")} className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:border-emerald-600 text-zinc-900 placeholder-zinc-400" placeholder="+1 (555) 014-2394" />
            {errors.phone && <p className="text-[11px] text-emerald-400 font-mono">{errors.phone.message}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase text-zinc-500 font-bold tracking-widest">Company Name</label>
            <input {...register("company")} className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:border-emerald-600 text-zinc-900 placeholder-zinc-400" placeholder="Horizon Core Corp" />
            {errors.company && <p className="text-[11px] text-emerald-400 font-mono">{errors.company.message}</p>}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono uppercase text-zinc-500 font-bold tracking-widest">Project Blueprint Scope</label>
          <textarea {...register("requirement")} rows={4} className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-hidden focus:border-emerald-600 text-zinc-900 resize-none placeholder-zinc-400" placeholder="Elaborate on database types, server platforms, or cluster migration bottlenecks..." />
          {errors.requirement && <p className="text-[11px] text-emerald-400 font-mono">{errors.requirement.message}</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-xs font-mono uppercase tracking-widest">
          {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Transmit Configuration Payload"}
        </Button>
      </form>
    </section>
  );
}