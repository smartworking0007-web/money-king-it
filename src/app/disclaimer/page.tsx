import { Metadata } from "next";
import Hero from "./Hero";
import DisclaimerContent from "./DisclaimerContent";
import CTA from "./CTA";

export const metadata: Metadata = {
  title: "Disclaimer | Money King IT Solutions",
  description: "Read the official Disclaimer of Money King IT Solutions regarding website usage, service limitations, intellectual property, cybersecurity notices, and liability policies.",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
      <DisclaimerContent />
      <CTA />
    </main>
  );
}