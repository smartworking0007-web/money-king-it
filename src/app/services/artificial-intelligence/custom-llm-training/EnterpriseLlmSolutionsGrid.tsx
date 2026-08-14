// File Name: EnterpriseLlmSolutionsGrid.tsx
import Text from "@/components/ui/Text";

const LLM_SOLUTIONS = [
  {
    number: "01",
    title: "Enterprise LLM Custom Development",
    description:
      "Enterprise-Grade Large Language Model Integration, High-Throughput Inference & Private Cloud Deployment",
  },
  {
    number: "02",
    title: "Domain-Specific AI Models",
    description:
      "Customized Generative AI Tailored for Financial, Healthcare, Legal & Regulatory Compliance Frameworks",
  },
  {
    number: "03",
    title: "LLM Fine-Tuning & Adaptation",
    description:
      "Parameter-Efficient Fine-Tuning (PEFT/LoRA) & Reinforcement Learning from Human Feedback (RLHF)",
  },
  {
    number: "04",
    title: "Retrieval-Augmented Generation (RAG) Systems",
    description:
      "Context-Aware Grounded AI Generation using Vector Search, Semantic Indexing & Enterprise Knowledge Bases",
  },
  {
    number: "05",
    title: "Knowledge Base AI & Enterprise Search",
    description:
      "Unstructured Data Synthesis, Semantic Knowledge Graphs & Automated Corporate Knowledge Discovery",
  },
  {
    number: "06",
    title: "Custom Copilot & Assistant Development",
    description:
      "Task-Specific Copilot Assistants, Code Generation Engines & Workflow Augmentation Tools",
  },
  {
    number: "07",
    title: "Multi-Agent AI Orchestration",
    description:
      "Autonomous Multi-Agent Frameworks for Complex Multi-Step Task Planning & Execution",
  },
  {
    number: "08",
    title: "Foundation Model Management",
    description:
      "Open-Source & Proprietary Foundation Model Integration, Evaluation & Lifecycle Management",
  },
  {
    number: "09",
    title: "End-to-End LLM Process Automation",
    description:
      "Autonomous Text Processing, Structured Data Extraction & API Integration Workflows",
  },
  
];

export default function EnterpriseLlmSolutionsGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Balanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise LLM Solutions & Custom Generative AI Architecture
          </Text>
        </div>

        {/* Responsive Grid layout optimized for mobile view and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {LLM_SOLUTIONS.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-3.5 sm:p-4 md:p-5 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Item Number */}
                <span className="text-[11px] font-mono font-bold text-[#00D094] mb-1 tracking-wider block">
                  {item.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h5"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1.5 group-hover:text-[#00D094] transition-colors duration-300"
                >
                  {item.title}
                </Text>

                {/* Short Description */}
                <p className="text-zinc-400 text-[11px] sm:text-xs font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#00D094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
