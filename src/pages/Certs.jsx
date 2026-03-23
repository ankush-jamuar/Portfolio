import { useState } from "react";
import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { CERTIFICATIONS, TRAINING } from "../data";
import { Award, X, ExternalLink, Search, BookOpen, GraduationCap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Certs() {
  const [preview, setPreview] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto"
    >
      <AnimatedReveal>
        <div className="mb-16">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[4px] uppercase mb-4 text-primary font-bold">
            <span className="w-12 h-px block bg-gradient-to-r from-primary to-transparent" />
            04. Credentials
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,64px)] font-black tracking-tight text-foreground mb-4">
            Professional <span className="text-muted-foreground/40 font-light italic">Validation</span>
          </h2>
          <p className="font-sans text-[17px] max-w-xl text-muted-foreground leading-relaxed font-light">
            A curated list of technical certifications and specialized training programs.
          </p>
        </div>
      </AnimatedReveal>

      {/* Primary Training / Bootcamp Section */}
      <AnimatedReveal delay={0.1}>
        <div className="mb-16">
          <Card className="overflow-hidden border-primary/20 bg-primary/[0.02]">
            <div className="flex flex-col lg:flex-row">
              {/* Image Preview Left */}
              <div className="w-full lg:w-[40%] bg-muted/30 relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-border/50">
                 <img src={TRAINING.image} alt="Training preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[250px] lg:min-h-full" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <Button href={TRAINING.link} target="_blank" className="shadow-2xl">
                       <ExternalLink className="w-4 h-4 mr-2" /> View Certificate
                    </Button>
                 </div>
              </div>
              
              {/* Content Right */}
              <div className="p-8 md:p-12 lg:w-[60%] flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                        <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-2 mb-1.5">
                          {TRAINING.tags.map(t => (
                            <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/10 font-bold uppercase tracking-wider">
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest font-bold">{TRAINING.institution}</p>
                    </div>
                  </div>

                  <h3 className="font-display text-[28px] md:text-[36px] font-black text-foreground leading-tight tracking-tight mb-8">
                      {TRAINING.title}
                  </h3>

                  <div className="space-y-4">
                    {TRAINING.bullets.map((b, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <p className="font-sans text-[15px] text-muted-foreground/90 leading-relaxed font-medium">{b}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 lg:hidden">
                     <Button href={TRAINING.link} target="_blank" className="w-full shadow-lg shadow-primary/20">
                        <ExternalLink className="w-4 h-4 mr-2" /> View Certificate
                     </Button>
                  </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedReveal>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((c, i) => (
          <AnimatedReveal key={c.name} delay={i * 0.1}>
            <Card className="group h-full flex flex-col hover:border-primary/30 transition-all duration-300">
              <div 
                className="aspect-video relative overflow-hidden bg-muted/30 cursor-pointer"
                onClick={() => setPreview(c)}
              >
                <img 
                  src={c.image} 
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <div className="px-6 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-sans text-[14px] font-medium flex items-center gap-2">
                      <Search className="w-4 h-4" /> Quick Preview
                   </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="font-display text-[22px] font-bold text-foreground mb-1">{c.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-mono text-[11px] uppercase tracking-wider font-bold">{c.platform} · {c.date}</span>
                  </div>
                </div>

                <div className="mb-8 p-4 rounded-xl bg-muted/30 border border-border/50">
                   <p className="font-mono text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-1.5">Measured Skills</p>
                   <p className="font-sans text-[14px] text-foreground font-medium leading-relaxed">{c.skills}</p>
                </div>

                <div className="mt-auto flex gap-3">
                   <Button onClick={() => setPreview(c)} variant="outline" className="flex-1 h-11 text-[13px] font-bold">
                      <Search className="w-4 h-4 mr-2" /> Details
                   </Button>
                   <Button href={c.link} className="flex-1 h-11 text-[13px] font-bold shadow-sm">
                      <ExternalLink className="w-4 h-4 mr-2" /> URL
                   </Button>
                </div>
              </div>
            </Card>
          </AnimatedReveal>
        ))}
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-background/90 backdrop-blur-md" 
            onClick={() => setPreview(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button 
                onClick={() => setPreview(null)} 
                className="absolute -top-14 right-0 text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <Card className="overflow-hidden shadow-2xl bg-card">
                <img src={preview.image} alt={preview.name} className="w-full object-contain max-h-[75vh]" />
                <div className="p-8 flex items-center justify-between gap-6 border-t border-border/50 bg-muted/10">
                  <div className="space-y-1">
                    <p className="font-display text-[24px] font-bold text-foreground">{preview.name}</p>
                    <p className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest">{preview.platform} · {preview.date}</p>
                  </div>
                  <Button href={preview.link} target="_blank" className="h-12 px-8">
                    Verify Original <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
