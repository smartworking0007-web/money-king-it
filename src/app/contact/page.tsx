import { Metadata } from "next";
import Hero from "./Hero"; 

export const metadata: Metadata = {
  title: "Contact Us | Money King Software",
  description: "Get in touch with our experts for custom software, AI, and cloud solutions.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#E5EBEB] min-h-screen">
      <Hero />
    </main>
  );
}