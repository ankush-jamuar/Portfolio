import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { RESUME_INFO, RESUME_CORE_SKILLS, PROFILE } from "../data";
import { Download, ExternalLink, GraduationCap, Briefcase, Award, CheckCircle2, FileText } from "lucide-react";

const ICONS = {
  "Education": <GraduationCap className="w-5 h-5" />,
  "Projects": <Briefcase className="w-5 h-5" />,
  "Certs": <Award className="w-5 h-5" />,
};

export function Resume() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
      <AnimatedReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[4px] uppercase mb-4 text-primary font-bold">
              <span className="w-12 h-px block bg-gradient-to-r from-primary to-transparent" />
              06. Resume
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,64px)] font-black tracking-tight text-foreground mb-4">
              Professional <span className="text-muted-foreground/40 font-light italic">Timeline</span>
            </h2>
            <p className="font-sans text-[17px] text-muted-foreground leading-relaxed font-light">
              A comprehensive overview of my academic background, technical projects, and professional certifications.
            </p>
          </div>
        </div>
      </AnimatedReveal>

      {/* Extreme SaaS Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: App-Like CV Viewer */}
        <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-1 lg:sticky lg:top-8">
          <AnimatedReveal delay={0.2} className="h-full">
            <div className="relative group h-full">
              {/* Clean App Window Frame */}
              <div className="relative flex flex-col h-[700px] md:h-[900px] rounded-[30px] overflow-hidden bg-white dark:bg-[#1e293b]/50 backdrop-blur-md border border-border/50 shadow-xl ring-1 ring-border/50">
                
                {/* Traffic Light Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-inner" />
                  </div>
                  
                  <div className="font-mono text-[12px] text-white/60 tracking-widest uppercase font-bold px-4 py-1.5 rounded-full bg-black/20 border border-white/5">
                    {PROFILE.name.replace(/\s+/g, '_')}_CV.pdf
                  </div>
                  
                  <div className="flex gap-2.5">
                     <a href={PROFILE.cvFile} target="_blank" rel="noreferrer" className="px-4 h-9 flex items-center justify-center rounded-xl bg-muted hover:bg-muted/80 transition-colors text-foreground text-[13px] font-medium border border-border/50">
                        <ExternalLink className="w-4 h-4 mr-2" /> View CV
                     </a>
                     <a href={PROFILE.cvFile} download className="px-5 h-9 flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-[13px] font-bold shadow-sm">
                        <Download className="w-4 h-4 mr-2" /> Download CV
                     </a>
                  </div>
                </div>

                {/* Secure PDF Frame */}
                <div className="flex-1 bg-white relative">
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_10px_20px_rgba(0,0,0,0.1)]" />
                  <iframe 
                    src={`${PROFILE.cvFile}#view=FitH`} 
                    className="w-full h-full border-none"
                    title="CV Preview App"
                  />
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* Right Column: Timeline & Core Skills */}
        <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-2 space-y-16">
          
          <div className="space-y-16">
            {RESUME_INFO.map((section, sIdx) => (
              <div key={section.title} className="relative">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-inner">
                      {ICONS[section.title] || <Briefcase className="w-5 h-5" />}
                   </div>
                   <h3 className="font-display text-[26px] font-black text-foreground uppercase tracking-tight">{section.title}</h3>
                   <div className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
                </div>

                <div className="space-y-8">
                  {section.rows.map((row, rIdx) => (
                    <AnimatedReveal key={rIdx} delay={rIdx * 0.1}>
                      <div className="relative pl-8 border-l-2 border-primary/20 group hover:border-primary transition-colors duration-500">
                        <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] transition-all duration-500" />
                        <div className="space-y-2.5">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                             <h4 className="font-display text-[19px] font-bold text-foreground group-hover:text-primary transition-colors">{row[0]}</h4>
                             <span className="font-mono text-[10px] px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-bold uppercase tracking-wider">{row[2]}</span>
                          </div>
                          {row[1] && <p className="font-sans text-[15px] text-muted-foreground/90 font-medium leading-relaxed">{row[1]}</p>}
                        </div>
                      </div>
                    </AnimatedReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <AnimatedReveal delay={0.4}>
             <Card className="p-8 md:p-10 border-primary/20 bg-primary/[0.02]">
                <h4 className="font-display text-[22px] font-black text-foreground mb-8">Core Competencies</h4>
                <div className="flex flex-wrap gap-3">
                   {RESUME_CORE_SKILLS.map(skill => (
                     <div key={skill} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card border border-border/50 shadow-sm group hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                        <CheckCircle2 className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="font-sans text-[14px] font-bold text-foreground/80 group-hover:text-foreground">{skill}</span>
                     </div>
                   ))}
                </div>
             </Card>
          </AnimatedReveal>

        </div>

      </div>



    </div>
  );
}
