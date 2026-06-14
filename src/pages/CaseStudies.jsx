import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { motion } from "framer-motion";
import { 
  Search, Target, Layers, Play, Code2, RefreshCw, 
  Users, Feather, Eye, Repeat, Sparkles, BookOpen 
} from "lucide-react";

const DESIGN_STEPS = [
  { step: "01", title: "Research", desc: "Understanding the problem, users, and context.", icon: <Search className="w-5 h-5" /> },
  { step: "02", title: "Define", desc: "Identifying goals, pain points, and opportunities.", icon: <Target className="w-5 h-5" /> },
  { step: "03", title: "Wireframe", desc: "Structuring information and user flows.", icon: <Layers className="w-5 h-5" /> },
  { step: "04", title: "Prototype", desc: "Exploring interactions and validating ideas.", icon: <Play className="w-5 h-5" /> },
  { step: "05", title: "Build", desc: "Transforming designs into functional products.", icon: <Code2 className="w-5 h-5" /> },
  { step: "06", title: "Iterate", desc: "Improving experiences through continuous refinement.", icon: <RefreshCw className="w-5 h-5" /> }
];

const CASE_STUDIES = [
  {
    num: "01",
    project: "Neuronix",
    problem: "People struggle to organize and retrieve knowledge from scattered notes and documents.",
    thinking: "Designed a system centered around semantic search and AI-assisted retrieval. Prioritized discoverability, simplified navigation, and reduced friction in information retrieval.",
    contribution: [
      "Designed product workflows for AI-powered knowledge management.",
      "Developed responsive frontend experiences and dashboard interactions.",
      "Implemented semantic search and AI-assisted retrieval experiences."
    ],
    techSolution: "Implemented semantic query matching with PGVector, custom UI context drawers for AI assistant chat history, and fluid React graph visualization.",
    outcome: "More intuitive knowledge organization experience."
  },
  {
    num: "02",
    project: "Sprintify",
    problem: "Teams spend excessive time manually planning and organizing sprints.",
    thinking: "Created workflows focused on clarity, collaboration, and automation. Drag-and-drop interactions, dashboard-first approach, and AI-assisted planning experience.",
    contribution: [
      "Designed task management and sprint planning workflows.",
      "Developed real-time collaboration interfaces.",
      "Improved usability through drag-and-drop interactions and dashboard design."
    ],
    techSolution: "Developed real-time sync with Socket.io, drag-and-drop card logic with Framer Motion, and automated planning heuristics with LLM integrations.",
    outcome: "Improved task visibility and planning efficiency."
  },
  {
    num: "03",
    project: "Billiant",
    problem: "Small businesses often manage invoices using fragmented tools.",
    thinking: "Built a centralized invoicing workflow. Simplified invoice creation, clear dashboard hierarchy, and minimal navigation complexity.",
    contribution: [
      "Designed invoice creation and financial management workflows.",
      "Developed dashboard experiences focused on clarity and accessibility.",
      "Built responsive interfaces for billing and analytics features."
    ],
    techSolution: "Optimized database schemas for invoice calculations, JWT authorization security, PDF generator utilities on Node, and dashboard metrics.",
    outcome: "Streamlined billing management experience."
  }
];

const UX_PRINCIPLES = [
  { title: "User-Centric Thinking", desc: "Good products start with understanding user needs.", icon: <Users className="w-5 h-5 text-primary" /> },
  { title: "Simplicity", desc: "Reducing complexity improves adoption and usability.", icon: <Feather className="w-5 h-5 text-primary" /> },
  { title: "Discoverability", desc: "Users should find important actions effortlessly.", icon: <Eye className="w-5 h-5 text-primary" /> },
  { title: "Consistency", desc: "Consistent patterns and interactions reduce cognitive load and help users navigate products more confidently.", icon: <Repeat className="w-5 h-5 text-primary" /> },
  { title: "AI With Purpose", desc: "AI should enhance workflows, not overwhelm users.", icon: <Sparkles className="w-5 h-5 text-[#a78bfa]" /> }
];

export function CaseStudies() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto space-y-24"
    >
      {/* Page Header */}
      <AnimatedReveal>
        <div>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[4px] uppercase mb-4 text-primary font-bold">
            <span className="w-12 h-px block bg-gradient-to-r from-primary to-transparent" />
            05. Case Studies
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,64px)] font-black tracking-tight text-foreground mb-4">
            Case <span className="text-muted-foreground/40 font-light italic">Studies</span>
          </h2>
          <p className="font-sans text-[17px] max-w-xl text-muted-foreground leading-relaxed font-light">
            Exploring the thinking, challenges, and decisions behind the products I built.
          </p>
        </div>
      </AnimatedReveal>

      {/* Subsection 1: My Design Process */}
      <div className="space-y-10">
        <AnimatedReveal>
          <div className="flex items-center gap-4">
            <h3 className="font-display text-[26px] font-black text-foreground">My Design Process</h3>
            <div className="h-px flex-1 bg-border/50" />
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_STEPS.map((s, idx) => (
            <AnimatedReveal key={s.step} delay={idx * 0.05}>
              <Card className="p-6 md:p-8 h-full flex flex-col group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-inner">
                    {s.icon}
                  </div>
                  <span className="font-mono text-[12px] text-muted-foreground/40 font-bold">Step {s.step}</span>
                </div>
                <h4 className="font-display text-[18px] font-bold text-foreground mb-2">{s.title}</h4>
                <p className="font-sans text-[14px] text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>

      {/* Subsection 2: Case Studies */}
      <div className="space-y-10">
        <AnimatedReveal>
          <div className="flex items-center gap-4">
            <h3 className="font-display text-[26px] font-black text-foreground">Product Case Studies</h3>
            <div className="h-px flex-1 bg-border/50" />
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, idx) => (
            <AnimatedReveal key={cs.project} delay={idx * 0.1}>
              <Card className="p-8 md:p-10 h-full flex flex-col group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                  <span className="font-mono text-[10px] text-primary/60 font-bold uppercase tracking-widest">Case Study {cs.num}</span>
                  <h4 className="font-display text-[24px] font-black text-foreground">{cs.project}</h4>
                </div>

                <div className="space-y-6 flex-1">
                  <div>
                    <h5 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Problem</h5>
                    <p className="font-sans text-[14px] text-foreground/90 leading-relaxed font-light">{cs.problem}</p>
                  </div>

                  <div>
                    <h5 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Design Thinking</h5>
                    <p className="font-sans text-[14px] text-foreground/90 leading-relaxed font-light">{cs.thinking}</p>
                  </div>

                  <div>
                    <h5 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-2">My Contribution</h5>
                    <ul className="space-y-2">
                      {cs.contribution.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sans text-[13px] text-foreground/80 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Technical Solution</h5>
                    <p className="font-sans text-[14px] text-foreground/90 leading-relaxed font-light">{cs.techSolution}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 bg-primary/[0.01] rounded-2xl p-4 border border-primary/5">
                  <h5 className="font-mono text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Outcome</h5>
                  <p className="font-sans text-[14px] text-muted-foreground font-medium leading-relaxed">{cs.outcome}</p>
                </div>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>

      {/* Subsection 3: Product & UX Principles */}
      <div className="space-y-10">
        <AnimatedReveal>
          <div className="flex items-center gap-4">
            <h3 className="font-display text-[26px] font-black text-foreground">Product & UX Principles</h3>
            <div className="h-px flex-1 bg-border/50" />
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {UX_PRINCIPLES.map((p, idx) => (
            <AnimatedReveal key={p.title} delay={idx * 0.05}>
              <Card className="p-6 h-full flex flex-col items-center text-center group hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h4 className="font-display text-[16px] font-bold text-foreground mb-3">{p.title}</h4>
                <p className="font-sans text-[13px] text-muted-foreground leading-relaxed font-light">{p.desc}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
