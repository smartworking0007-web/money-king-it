import React from 'react';
// Correct Shadcn Button import (Check your folder path)
import { Button } from '@/components/ui/Text';

export default function LuxuryCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto p-12 bg-white rounded-3xl border border-zinc-200 shadow-sm text-center">
        {/* Explicit text-zinc-900 ensures visibility */}
        <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-8 leading-tight">
          Ready To Migrate Mission-Critical Databases Without Downtime?
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {/* Using standard button components */}
          <Button className="bg-[#0F172A] hover:bg-zinc-800 text-white px-8 py-6">
            Book Consultation
          </Button>
          <Button variant="outline" className="border-zinc-300 px-8 py-6">
            Request Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}