import { PROJECTS } from "../data";
import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Github, ExternalLink, Globe, Cpu } from "lucide-react";

export function Projects() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
      <AnimatedReveal>
        <div className="mb-20">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[4px] uppercase mb-4 text-primary font-bold">
            <span className="w-12 h-px block bg-gradient-to-r from-primary to-transparent" />
            03. Portfolio
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,64px)] font-black tracking-tight text-foreground mb-4">
            Featured <span className="text-muted-foreground/40 font-light italic">Creations</span>
          </h2>
          <p className="font-sans text-[17px] max-w-xl text-muted-foreground leading-relaxed font-light">
            A selection of complex engineering challenges solved with precision and modern architectural patterns.
          </p>
        </div>
      </AnimatedReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((p, idx) => (
          <AnimatedReveal key={p.name} delay={idx * 0.1}>
            <Card className="overflow-hidden group flex flex-col h-full bg-card hover:border-primary/30 transition-all duration-500">
              
              {/* Project Image Shell */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
                <img 
                  src={p.screenshot} 
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                
                {/* Visual Type Indicator */}
                <div className="absolute top-6 left-6">
                   {p.tech.includes("Kotlin") || p.tech.includes("Android") ? (
                     <div className="px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-green-400" /> MOBILE
                     </div>
                   ) : (
                     <div className="px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-blue-400" /> WEB APP
                     </div>
                   )}
                </div>
              </div>

              {/* Content Shell */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="font-mono text-[10px] text-primary/60 font-bold uppercase tracking-widest">{p.tag}</span>
                     <div className="h-px flex-1 bg-border/40" />
                  </div>
                  <h3 className="font-display text-[26px] md:text-[32px] font-bold text-foreground mb-4">
                    {p.name}
                  </h3>
                  <p className="font-sans text-[16px] text-muted-foreground leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>

                {/* Tech Matrix */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tech.map(t => (
                    <span key={t} className="font-mono text-[10px] px-3 py-1.5 rounded-lg bg-primary/5 text-primary border border-primary/10 uppercase tracking-tighter font-bold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4 pt-8 border-t border-border/50">
                   <Button href={p.live} target="_blank" className="flex-1 h-12 rounded-xl text-[14px]">
                      Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                   </Button>
                   <a href={p.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl flex items-center justify-center bg-muted/50 border border-border/50 hover:bg-muted transition-colors group/btn">
                      <Github className="w-5 h-5 text-muted-foreground group-hover/btn:text-foreground" />
                   </a>
                </div>
              </div>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </div>
  );
}
