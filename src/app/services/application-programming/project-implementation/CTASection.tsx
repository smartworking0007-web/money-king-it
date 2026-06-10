// src/app/services/application-programming/project-implementation/CTASection.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Text";

export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden py-16 px-8 md:p-20 rounded-3xl bg-zinc-900 text-center border border-zinc-800 space-y-6 shadow-xl">
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Ready to Implement Your Next Project?
        </h3>
        <p className="max-w-xl mx-auto text-zinc-300 text-sm md:text-base leading-relaxed">
          Accelerate your operational processing efficiency. Schedule an
          exclusive architecture validation analysis mapping session with our
          solutions engineering desk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button variant="primary">
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="secondary"
            className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
