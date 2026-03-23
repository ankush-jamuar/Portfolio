import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Button } from "../components/ui/Button";
import { PROFILE, STATS, HOME_WORDS } from "../data";
import { Github, Linkedin, Sparkles, Terminal, Code2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { TypeAnimation } from 'react-type-animation';

export function Home({ nav }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center relative overflow-hidden px-6 pt-12"
    >
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#a78bfa]/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-6xl mx-auto z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <AnimatedReveal direction="up">
            <div className="space-y-8 text-center lg:text-left">
              
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[11px] font-bold uppercase tracking-wider shadow-sm hover:bg-primary/15 transition-colors">
                  <Sparkles className="w-4 h-4" /> Ready to build your next vision
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-[clamp(44px,7vw,76px)] font-black tracking-tight leading-[1.05] text-foreground">
                  Building <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#a78bfa] to-[#38bdf8]">
                    Future-Ready Apps
                  </span>
                </h1>
                <div className="h-[1.5em] font-display font-bold text-[clamp(24px,3vw,34px)] text-foreground/80 flex items-center justify-center lg:justify-start">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer', 2000,
                      'Frontend Engineer', 2000,
                      'React Architect', 2000,
                      'Creative Problem Solver', 2000
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={65}
                    repeat={Infinity}
                    className="text-foreground border-r-2 border-primary pr-1 animate-[pulse_1s_infinite]"
                  />
                </div>
                <p className="font-sans text-[18px] md:text-[20px] text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-light pt-2">
                  I'm <span className="text-foreground font-semibold">{PROFILE.name}</span>, a professional <span className="text-foreground font-medium">{PROFILE.role}</span> with 
                  deep focus on scalable architectures and exceptional user experiences.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Button onClick={() => nav("projects")} className="h-14 px-10 text-[16px] shadow-lg shadow-primary/20">
                  Explore Work
                </Button>
                <div className="flex items-center gap-3">
                   <a href={PROFILE.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl flex items-center justify-center bg-card border border-border/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                      <Github className="w-5 h-5" />
                   </a>
                   <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl flex items-center justify-center bg-card border border-border/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                      <Linkedin className="w-5 h-5" />
                   </a>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border/50 max-w-2xl mx-auto lg:mx-0">
                {STATS.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-display text-[32px] font-bold text-foreground">{s.value}{s.suffix}</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal direction="left" delay={0.2} className="relative w-full flex justify-center items-center mt-12 lg:mt-0 lg:block">
            <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] mx-auto group rounded-[40px] overflow-visible">
              <div className="absolute inset-0 bg-primary/10 rounded-[40px] blur-3xl transition-all duration-500 group-hover:bg-primary/20 group-hover:blur-2xl" />
              <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-border/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-muted/20">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                <img 
                  src={PROFILE.photo} 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Floating Badge 1 */}
              <div className="absolute top-12 -left-6 md:-left-12 z-20 animate-[bounce_4s_infinite]">
                 <div className="p-3 pr-5 rounded-2xl flex items-center gap-3 shadow-xl bg-background/90 backdrop-blur-md border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                       <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                       <p className="font-display text-[15px] font-bold text-foreground leading-tight">Full Stack</p>
                       <p className="font-sans text-[12px] text-muted-foreground">Architect</p>
                    </div>
                 </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-20 -right-6 md:-right-12 z-20 animate-[bounce_5s_infinite_1s]">
                 <div className="p-3 pr-5 rounded-2xl flex items-center gap-3 shadow-xl bg-background/90 backdrop-blur-md border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center">
                       <Globe className="w-6 h-6 text-[#a78bfa]" />
                    </div>
                    <div>
                       <p className="font-display text-[15px] font-bold text-foreground leading-tight">Global</p>
                       <p className="font-sans text-[12px] text-muted-foreground">Impact</p>
                    </div>
                 </div>
              </div>
            </div>
          </AnimatedReveal>

        </div>
      </div>
    </motion.div>
  );
}
