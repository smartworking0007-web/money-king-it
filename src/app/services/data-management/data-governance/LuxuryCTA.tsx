import React from 'react';
import { Button } from '@/components/ui/Text';

export default function LuxuryCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto p-12 bg-white rounded-3xl border border-zinc-200 shadow-sm text-center">
        {/* Force-visible heading using !text class */}
        <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-8 leading-tight">
          Ready To Govern, Protect, And Control Enterprise Data At Scale?
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {/* Custom classes to ensure visibility */}
          <Button className="bg-[#0F172A] hover:bg-zinc-800 text-white px-8 py-6 font-bold">
            Schedule Consultation
          </Button>
          <Button 
            variant="outline" 
            className="border-zinc-300 px-8 py-6 font-bold text-[#0F172A]"
          >
            Request Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}