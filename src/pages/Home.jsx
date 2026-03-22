import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Button } from "../components/ui/Button";
import { PROFILE, STATS, HOME_WORDS } from "../data";
import { Github, Linkedin, Sparkles, Terminal, Code2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function TypewriterEffect({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeoutId;

    if (!isDeleting && currentText === word) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 500);
    } else {
      timeoutId = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="ml-1 w-0.5 h-[1em] bg-primary animate-pulse inline-block align-middle" />
    </span>
  );
}

export function Home({ nav }) {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center relative overflow-hidden px-6 pt-12">
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#a78bfa]/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-6xl mx-auto z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <AnimatedReveal direction="up">
            <div className="space-y-8 text-center lg:text-left">
              
              <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 mb-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse group-hover:bg-primary/30 transition-colors duration-500" />
                  <img 
                    src={PROFILE.photo} 
                    alt={PROFILE.name} 
                    className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-[3px] border-background shadow-[0_0_30px_-10px_rgba(var(--primary),0.4)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_0_50px_-10px_rgba(var(--primary),0.6)]"
                  />
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[11px] font-bold uppercase tracking-wider mb-2 lg:mb-4 shadow-sm hover:bg-primary/15 transition-colors">
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
                <div className="h-[1.5em] font-display font-bold text-[clamp(24px,3vw,34px)] text-foreground/80">
                  <TypewriterEffect words={HOME_WORDS} />
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

          <AnimatedReveal direction="left" delay={0.2} className="hidden lg:block relative">
            <div className="relative group">
              {/* Feature Grid Representation */}
              <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-6 mt-12">
                    <div className="aspect-square rounded-[40px] bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 p-10 flex flex-col justify-end shadow-sm">
                       <Code2 className="w-10 h-10 text-primary mb-6" />
                       <p className="font-display text-[20px] font-bold">Web Architect</p>
                    </div>
                    <div className="aspect-[4/5] rounded-[40px] bg-card border border-border p-10 flex flex-col justify-end shadow-sm">
                       <Terminal className="w-10 h-10 text-[#a78bfa] mb-6" />
                       <p className="font-display text-[20px] font-bold">API Systems</p>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="aspect-[4/5] rounded-[40px] bg-card border border-border p-10 flex flex-col justify-end shadow-sm">
                       <Globe className="w-10 h-10 text-[#38bdf8] mb-6" />
                       <p className="font-display text-[20px] font-bold">Scalable Apps</p>
                    </div>
                    <div className="aspect-square rounded-[40px] bg-gradient-to-br from-[#a78bfa]/15 to-[#a78bfa]/5 border border-[#a78bfa]/20 p-10 flex flex-col justify-end shadow-sm">
                       <Sparkles className="w-10 h-10 text-[#a78bfa] mb-6" />
                       <p className="font-display text-[20px] font-bold">Premium UX</p>
                    </div>
                 </div>
              </div>
            </div>
          </AnimatedReveal>

        </div>
      </div>
    </div>
  );
}
