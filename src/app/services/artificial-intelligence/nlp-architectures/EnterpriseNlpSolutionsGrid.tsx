// File Name: EnterpriseNlpSolutionsGrid.tsx
import Text from "@/components/ui/Text";

const NLP_SOLUTIONS = [
  {
    number: "01",
    title: "Automated Text Classification",
    description:
      "High-Speed Algorithmic Tagging, Topic Labeling & Multi-Label Data Organization",
  },
  {
    number: "02",
    title: "Real-Time Sentiment Analysis",
    description:
      "Aspect-Based Emotion Detection, Brand Perception Tracking & Customer Tone Diagnostics",
  },
  {
    number: "03",
    title: "Intent & Entity Recognition",
    description:
      "Semantic User Intent Parsing, Action Triggers & Named Entity Recognition (NER)",
  },
  {
    number: "04",
    title: "Intelligent Document Categorization",
    description:
      "Dynamic Document Sorting, Contract Indexing & Unstructured File Organization",
  },
  {
    number: "05",
    title: "Automated Email Classification",
    description:
      "Inbound Message Categorization, Urgent Query Identification & Smart Inbox Triage",
  },
  {
    number: "06",
    title: "Customer Feedback Analysis",
    description:
      "Aggregated NPS/CSAT Review Mining, Customer Pain-Point Discovery & Trend Extraction",
  },
  {
    number: "07",
    title: "Automated Knowledge Extraction",
    description:
      "Contextual Data Parsing, Entity Relationship Mapping & Key Phrase Extraction from Unstructured Data",
  },
  {
    number: "08",
    title: "NLP Intelligence Platforms",
    description:
      "Unified Language Analytics Workspaces, Model Fine-Tuning & Custom Pipeline Deployment",
  },
  {
    number: "09",
    title: "Semantic AI Search & Vector Retrieval",
    description:
      "Context-Aware Vector Search, Natural Language Querying & Neural Document Indexing",
  },

];

export default function EnterpriseNlpSolutionsGrid() {
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
            Enterprise Natural Language Processing (NLP) Solutions
          </Text>
        </div>

        {/* Responsive Grid layout optimized for mobile view and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {NLP_SOLUTIONS.map((item, index) => (
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
