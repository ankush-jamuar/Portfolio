import { useState } from "react";
import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { RESUME_INFO, RESUME_CORE_SKILLS, PROFILE } from "../data";
import { Download, GraduationCap, Briefcase, Award, CheckCircle2, Search, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ICONS = {
  "Education": <GraduationCap className="w-6 h-6" />,
  "Experience": <Briefcase className="w-6 h-6" />,
  "Projects": <FileText className="w-6 h-6" />,
  "Certs": <Award className="w-6 h-6" />,
  "Certifications": <Award className="w-6 h-6" />
};

const BentoCard = ({ section }) => (
  <Card className="p-6 md:p-8 h-full bg-card hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.1)] hover:-translate-y-1 transition-all duration-300 border border-border/50 group">
    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
       <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
          {ICONS[section.title] || <Briefcase className="w-5 h-5" />}
       </div>
       <h3 className="font-display text-[20px] font-black text-foreground uppercase tracking-tight">{section.title}</h3>
    </div>
    <div className="space-y-5">
      {section.rows.map((row, rIdx) => (
         <div key={rIdx} className="flex flex-col gap-1.5 group/item">
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-1 xl:gap-4">
               <h4 className="font-display text-[16px] font-bold text-foreground leading-tight group-hover/item:text-primary transition-colors">{row[0]}</h4>
               <span className="font-mono text-[9px] w-fit shrink-0 px-2 py-1 rounded bg-primary/10 text-primary font-bold uppercase tracking-wider">{row[2]}</span>
            </div>
            {row[1] && <p className="font-sans text-[13px] text-muted-foreground/80 font-medium">{row[1]}</p>}
         </div>
      ))}
    </div>
  </Card>
);

export function Resume() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Parse dynamically assuming user data.js
  const edu = RESUME_INFO.find(r => r.title === "Education");
  const proj = RESUME_INFO.find(r => r.title === "Projects");
  const certs = RESUME_INFO.find(r => r.title === "Certs" || r.title === "Certifications");
  const exp = RESUME_INFO.find(r => r.title === "Experience"); // just in case they add it

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[calc(100vh-64px)] px-6 md:px-12 py-12 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <AnimatedReveal>
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[4px] uppercase mb-4 text-primary font-bold">
            06. Resume
          </div>
          <h2 className="font-display text-[clamp(40px,5vw,56px)] font-black tracking-tight text-foreground mb-4">
            Professional <span className="text-muted-foreground/40 font-light italic">Dashboard</span>
          </h2>
        </div>
      </AnimatedReveal>

      {/* COMPACT BENTO GRID - NO LONG SCROLLING */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max w-full max-w-6xl mx-auto">
        
        {/* ROW 1 */}
        {edu && (
          <AnimatedReveal delay={0.1} className="lg:col-span-2">
            <BentoCard section={edu} />
          </AnimatedReveal>
        )}

        {/* CV CTA (Interactive Modal Trigger) */}
        <AnimatedReveal delay={0.2} className="col-span-1">
          <Card className="p-8 h-full bg-gradient-to-br from-primary/10 to-transparent border-primary/20 flex flex-col justify-center items-center text-center group hover:border-primary/50 transition-all hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.2)]">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-6 shadow-xl group-hover:scale-110 transition-transform">
               <FileText className="w-8 h-8" />
            </div>
            <h3 className="font-display text-[22px] font-black text-foreground mb-2">Full Resume</h3>
            <p className="font-sans text-[14px] text-muted-foreground mb-8">View or download the classically formatted document.</p>
            <div className="flex flex-col gap-3 w-full">
               <Button onClick={() => setIsCvOpen(true)} className="w-full h-11 font-bold shadow-md hover:shadow-primary/30">
                  <Search className="w-4 h-4 mr-2" /> Quick Preview
               </Button>
               <a href={PROFILE.cvFile} download className="w-full h-11 flex items-center justify-center rounded-xl bg-card border border-border/50 hover:bg-muted text-foreground font-bold text-[14px] transition-colors shadow-sm">
                  <Download className="w-4 h-4 mr-2" /> Download PDF
               </a>
            </div>
          </Card>
        </AnimatedReveal>

        {/* ROW 2 */}
        {proj ? (
          <AnimatedReveal delay={0.3} className="lg:col-span-2">
            <BentoCard section={proj} />
          </AnimatedReveal>
        ) : exp ? (
          <AnimatedReveal delay={0.3} className="lg:col-span-2">
            <BentoCard section={exp} />
          </AnimatedReveal>
        ) : null}

        {certs && (
           <AnimatedReveal delay={0.4} className="col-span-1">
            <BentoCard section={certs} />
          </AnimatedReveal>
        )}

        {/* ROW 3: Core Skills Footer */}
        <AnimatedReveal delay={0.5} className="lg:col-span-3">
           <Card className="p-6 md:p-8 bg-card border-border/50">
             <h4 className="font-display text-[16px] font-black text-foreground mb-6 uppercase tracking-widest flex items-center gap-3">
                <div className="w-2 h-6 rounded-full bg-primary" /> Core Competencies
             </h4>
             <div className="flex flex-wrap gap-2.5">
                {RESUME_CORE_SKILLS.map(skill => (
                  <div key={skill} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border border-border/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 cursor-default">
                     <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                     <span className="font-sans text-[12px] font-bold text-foreground/80">{skill}</span>
                  </div>
                ))}
             </div>
           </Card>
        </AnimatedReveal>

      </div>

      {/* CV Modal Overlay (No new tab) */}
      <AnimatePresence>
        {isCvOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsCvOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-[#0f172a] rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(var(--primary),0.2)] ring-1 ring-border/50"
            >
              <div className="flex items-center justify-between px-8 py-5 bg-muted/30 border-b border-border/50 backdrop-blur-md">
                 <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                       <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
                       <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                       <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="font-mono text-[13px] text-muted-foreground uppercase font-bold tracking-widest">{PROFILE.name} - Resume</span>
                 </div>
                 
                 <div className="flex items-center gap-4">
                    <a href={PROFILE.cvFile} download className="hidden md:flex items-center font-sans text-[13px] font-bold text-primary hover:text-primary/80 transition-colors">
                       <Download className="w-4 h-4 mr-2" /> Download PDF
                    </a>
                    <button onClick={() => setIsCvOpen(false)} className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all">
                       <X className="w-5 h-5" />
                    </button>
                 </div>
              </div>

              <div className="flex-1 bg-white relative w-full h-full">
                 <iframe 
                    src={`${PROFILE.cvFile}#view=FitH`} 
                    className="w-full h-full border-none"
                    title="Full CV View"
                 />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
