"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm">
      <h3 className="text-2xl font-black text-[#0F172A] mb-8">
        Send Us A Message
      </h3>

      <form className="grid md:grid-cols-2 gap-5">
        <Input
          placeholder="Full Name"
          className="bg-zinc-50 border-zinc-200 py-6"
        />

        <Input
          placeholder="Company Name"
          className="bg-zinc-50 border-zinc-200 py-6"
        />

        <Input
          placeholder="Business Email"
          className="bg-zinc-50 border-zinc-200 py-6"
        />

        <Input
          placeholder="Phone Number"
          className="bg-zinc-50 border-zinc-200 py-6"
        />

        <Input
          placeholder="Service Required"
          className="md:col-span-2 bg-zinc-50 border-zinc-200 py-6"
        />

        <textarea
          placeholder="Project Details & Budget"
          className="md:col-span-2 min-h-150px w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <Button className="md:col-span-2 bg-[#0F172A] hover:bg-zinc-800 py-6 font-bold">
          Request Consultation
        </Button>
      </form>
    </div>
  );
}