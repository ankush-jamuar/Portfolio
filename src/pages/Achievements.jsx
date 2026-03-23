import { Trophy, Code2, Flame, Brain, ShieldCheck } from "lucide-react";
import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { ACHIEVEMENTS } from "../data";
import { motion } from "framer-motion";

export function Achievements() {
  const getStatIcon = (label) => {
    switch (label) {
      case "Problems Solved": return <Code2 className="w-5 h-5 text-primary" />;
      case "Day Streak": return <Flame className="w-5 h-5 text-orange-500" />;
      case "Specialization": return <Brain className="w-5 h-5 text-purple-500" />;
      default: return <Trophy className="w-5 h-5 text-yellow-500" />;
    }
  };

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
            05. Milestones
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,64px)] font-black tracking-tight text-foreground mb-4">
            Technical <span className="text-muted-foreground/40 font-light italic">Excellence</span>
          </h2>
          <p className="font-sans text-[17px] max-w-xl text-muted-foreground leading-relaxed font-light">
            A real-time overview of progress, problem-solving consistency, and algorithmic mastery.
          </p>
        </div>
      </AnimatedReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ACHIEVEMENTS.stats.map((s, idx) => (
            <AnimatedReveal key={s.label} delay={idx * 0.1}>
              <Card className="p-8 h-full flex flex-col items-center text-center group hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getStatIcon(s.label)}
                </div>
                <p className="font-display text-[48px] font-black text-foreground mb-2 leading-none">{s.value}</p>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{s.label}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>

        {/* LeetCode Profile Accent */}
        <AnimatedReveal delay={0.3}>
          <a href="https://leetcode.com/u/ankush_jamuar/" target="_blank" rel="noopener noreferrer" className="block h-full">
            <Card className="p-8 bg-primary/[0.02] hover:bg-primary/[0.05] transition-colors border-primary/20 flex flex-col items-center justify-center text-center h-full group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform flex items-center justify-center text-primary mb-6">
                 <Code2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-[22px] font-bold text-foreground mb-2 group-hover:text-primary transition-colors">LeetCode Master</h3>
              <p className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest mb-6">@ankush_jamuar</p>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Verified Ranking
              </div>
            </Card>
          </a>
        </AnimatedReveal>

        {/* Badges Grid */}
        <div className="lg:col-span-3 mt-8">
          <AnimatedReveal>
            <Card className="p-8 md:p-12">
              <h3 className="font-display text-[24px] font-bold text-foreground mb-10 flex items-center gap-4">
                Platform Badges <div className="h-px flex-1 bg-border/50" />
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ACHIEVEMENTS.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-muted/30 group hover:border-primary/20 transition-all">
                     <div className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-5 h-5" />
                     </div>
                     <span className="font-sans text-[14px] font-bold text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedReveal>
        </div>

      </div>
    </motion.div>
  );
}
