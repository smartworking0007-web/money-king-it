// File Name: AiOptimizationGrid.tsx

import Text from "@/components/ui/Text";

const AI_OPTIMIZATION_SOLUTIONS = [
  {
    number: "01",
    title: "Model Weight & Parameter Tuning",
    description:
      "Quantization, LoRA & Parameter-Efficient Fine-Tuning to Boost Model Accuracy with Lower Compute Costs",
  },
  {
    number: "02",
    title: "Algorithmic Prompt Optimization",
    description:
      "Automated Prompt Engineering, Context Compression & Few-Shot Instruction Structuring for Higher Accuracy",
  },
  {
    number: "03",
    title: "RAG Architecture Optimization",
    description:
      "Hybrid Vector Search, Re-Ranking, Chunking Strategies & Query Rewriting to Reduce Hallucinations",
  },
  {
    number: "04",
    title: "Inference Latency Reduction",
    description:
      "Token Caching, Model Pruning, TensorRT Acceleration & Sub-Second API Response Times",
  },
  {
    number: "05",
    title: "Dynamic Knowledge Augmentation",
    description:
      "Real-Time Knowledge Graph Integration, Fact-Checking Layers & Enterprise Context Enrichment",
  },
  {
    number: "06",
    title: "Continuous AI Benchmarking",
    description:
      "Automated Performance Audits across Accuracy, Token Throughput, Cost-Per-Query & Hallucination Rates",
  },
  {
    number: "07",
    title: "Comprehensive Model Evaluation (Eval)",
    description:
      "Automated Guardrail Testing, Groundedness Scoring, Toxicity Audits & Domain-Specific Evals",
  },
  {
    number: "08",
    title: "Enterprise AI Governance & Safety",
    description:
      "Role-Based Access Controls, Data Privacy Guardrails, Compliance Audits & Ethical AI Policy Enforcement",
  },
];

export default function AiOptimizationGrid() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Balanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <Text
            variant="h4"
            className="text-white! text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2"
          >
            Enterprise AI Optimization & Model Performance Enhancement
          </Text>
        </div>

        {/* Responsive Grid layout with compact boxes and concise text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {AI_OPTIMIZATION_SOLUTIONS.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-white/15 hover:border-[#00D094]/60 transition-all duration-300 ease-out group shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Item Number */}
                <span className="text-[11px] font-mono font-bold text-[#00D094] mb-1 tracking-wider block">
                  {item.number}.
                </span>

                {/* Title (H3) */}
                <Text
                  variant="h5"
                  className="text-white! text-sm sm:text-base font-bold tracking-tight mb-1 group-hover:text-[#00D094] transition-colors duration-300"
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
