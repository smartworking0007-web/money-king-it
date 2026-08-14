// File Name: EnterpriseGenerativeAISolutions.tsx

import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

const GEN_AI_SOLUTIONS = [
  {
    number: "01",
    title: "Custom Conversational AI & Chatbot Development",
    description:
      "Context-Aware Conversational Bots Powered by LLMs, Tailored for Web, Mobile & Enterprise Messaging",
    keywords:
      "Custom Enterprise Chatbot Development, LLM Conversational AI Agents, Context-Aware AI Chatbots",
  },
  {
    number: "02",
    title: "Custom AI Assistants",
    description:
      "Task-Specific Digital Assistants Integrated Across Workspaces to Automate Daily Workflows",
    keywords:
      "Enterprise AI Virtual Assistants, Personalized AI Workstation Assistants, Custom Role-Based AI Agents",
  },
  {
    number: "03",
    title: "Embedded AI Copilot Systems",
    description:
      "Specialized Co-Pilots Designed for Coders, Analysts, Marketers & Operational Teams",
    keywords:
      "Custom Enterprise AI Copilot, Domain-Specific AI Co-Pilots, Embedded Assistant Systems",
  },
  {
    number: "04",
    title: "AI-Powered Workflow Automation",
    description:
      "Autonomous Multi-Step Process Execution Driven by Generative AI Agents & API Triggering",
    keywords:
      "Generative AI Process Automation, Agentic Workflow Automation, LLM Triggered Enterprise Workflows",
  },
  {
    number: "05",
    title: "Intelligent Document Processing (IDP)",
    description:
      "Automated Extraction, Summarization & Structuring of Data from Unstructured PDF Documents",
    keywords:
      "Generative AI Document Intelligence, Unstructured PDF Data Extraction, Intelligent Document Parsing",
  },
  {
    number: "06",
    title: "Knowledge Base AI & RAG Systems",
    description:
      "Retrieval-Augmented Generation (RAG) Architecture Fetching Real-Time Insights from Internal Docs",
    keywords:
      "Retrieval-Augmented Generation (RAG), Enterprise Knowledge Management AI, Internal Vector Search Engines",
  },
  {
    number: "07",
    title: "Customer Support AI Solutions",
    description:
      "24/7 Autonomous Ticket Resolution, Sentiment Analysis & Smart Agent Copilots",
    keywords:
      "Automated Customer Service AI, GenAI Support Ticket Resolution, Agent Assist AI Solutions",
  },
  {
    number: "08",
    title: "AI-Driven Sales Enablement",
    description:
      "Automated Outreach Personalization, Lead Scoring Summaries & Real-Time Deal Intelligence",
    keywords:
      "Generative AI Sales Enablement, Automated Email Personalization AI, Deal Intelligence Assistant",
  },
  {
    number: "09",
    title: "Multi-Format Content Generation",
    description:
      "Brand-Aligned Copywriting, Marketing Creative Generation & Automated Report Writing",
    keywords:
      "Enterprise AI Content Generation, Brand-Aligned Copywriting AI, Automated Report Generation",
  },
  {
    number: "10",
    title: "Multimodal AI Applications",
    description:
      "Vision, Audio, Text & Code Intelligence Combined for Unified Contextual Processing",
    keywords:
      "Multimodal AI Platform Integration, Vision-Text Processing Models, Cross-Media Generative Systems",
  },
];

export default function EnterpriseGenerativeAISolutions() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/ai/1.png"
          alt="generative ai solutions background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Dark Overlay Gradient for text and box clarity */}
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/80 to-black/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <Text
            variant="h3"
            className="text-white! text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2"
          >
            Enterprise Generative AI Solutions & Custom AI Assistants
          </Text>
        </div>

        {/* Responsive Grid layout (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {GEN_AI_SOLUTIONS.map((solution, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#121212]/85 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Solution Number */}
                <span className="text-xs font-mono font-bold text-[#00D094] mb-1.5 sm:mb-2 tracking-wider block">
                  {solution.number}
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h4"
                  className="text-white! text-base sm:text-lg font-bold tracking-tight mb-2 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {solution.title}
                </Text>

                {/* Subtext / Short Description */}
                <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                  {solution.description}
                </p>
              </div>

              {/* GEO Keyword Association */}
              <div className="text-[10px] text-[#00D094]/80 font-mono bg-black/40 px-2.5 py-1.5 rounded border border-white/5 leading-snug">
                {solution.keywords}
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
