import { useState, useEffect } from "react";
import { SKILLS_CATEGORIES, SOFT_SKILLS } from "../data";
import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { motion } from "framer-motion";
import { Sparkles, Layout, Database, Smartphone, Settings } from "lucide-react";
import * as si from "simple-icons";

const iconMap = {
  java: si.siOpenjdk,
  cc: si.siCplusplus,
  javascript: si.siJavascript,
  kotlin: si.siKotlin,
  sql: si.siMysql,
  reactjs: si.siReact,
  nodejs: si.siNodedotjs,
  express: si.siExpress,
  tailwind: si.siTailwindcss,
  socketio: si.siSocketdotio,
  axios: si.siAxios,
  jetpackcompose: si.siJetpackcompose,
  androidstudio: si.siAndroidstudio,
  mongodb: si.siMongodb,
  gitgithub: si.siGithub,
  github: si.siGithub,
  git: si.siGit,
  figma: si.siFigma,
  postman: si.siPostman,
  canva: si.siCanva,
  nextjs: si.siNextdotjs,
};

function SkillIcon({ name }) {
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const icon = iconMap[normalizedName] || iconMap[name.toLowerCase()];

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync with HTML root class
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (!icon) return (
    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center p-2.5">
       <span className="text-[10px] font-bold text-muted-foreground">{name.slice(0,3)}</span>
    </div>
  );

  const isBlackVector = icon.hex === "000000" || icon.hex === "181717" || icon.hex === "010101";
  const color = isBlackVector ? (isDark ? "#ffffff" : "#000000") : `#${icon.hex}`;

  return (
    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center p-2.5">
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full"
        fill={color}
      >
        <path d={icon.path} />
      </svg>
    </div>
  );
}

const CATEGORY_ICONS = {
  "Languages": <Settings className="w-5 h-5" />,
  "Frameworks & Libs": <Layout className="w-5 h-5" />,
  "Mobile Dev": <Smartphone className="w-5 h-5" />,
  "Tools & Platforms": <Database className="w-5 h-5" />,
};

export function Skills() {
  return (
    <div className="min-h-screen px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
      <AnimatedReveal>
        <div className="mb-16">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[4px] uppercase mb-4 text-primary font-bold">
            <span className="w-12 h-px block bg-gradient-to-r from-primary to-transparent" />
            02. Tech Stack
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,64px)] font-black tracking-tight text-foreground mb-4">
            Specialized <span className="text-muted-foreground/40 font-light italic">Capabilities</span>
          </h2>
          <p className="font-sans text-[17px] max-w-xl text-muted-foreground leading-relaxed font-light">
            A versatile toolkit focused on modern web architectures, scalable backends, and high-fidelity user interfaces.
          </p>
        </div>
      </AnimatedReveal>

      {/* Extreme Layered Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
        {SKILLS_CATEGORIES.map((cat, idx) => (
          <AnimatedReveal key={cat.label} delay={idx * 0.1}>
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-card rounded-[32px] border border-border/50 shadow-sm group-hover:shadow-md transition-shadow duration-500 z-0" />
              
              {/* Inner Minimal Card Content */}
              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                <div className="flex items-center justify-between mb-12 pb-6 border-b border-border/60">
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center text-primary border border-border/50">
                         {CATEGORY_ICONS[cat.label] || <Settings className="w-6 h-6" />}
                      </div>
                      <h3 className="font-display text-[28px] font-black tracking-tight text-foreground">{cat.label}</h3>
                   </div>
                  <span className="font-mono text-[11px] px-4 py-2 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest border border-primary/10 shadow-sm">{cat.items.length} Modules</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 mt-auto">
                  {cat.items.map(([name, level]) => (
                    <div key={name} className="flex flex-col group/skill cursor-default">
                      <div className="flex items-center gap-5 mb-4">
                        <SkillIcon name={name} />
                        <span className="font-sans text-[15px] font-extrabold text-foreground/80 group-hover/skill:text-primary transition-colors tracking-wide">{name}</span>
                      </div>
                      {/* Clean Minimal Progress Bar */}
                      <div className="w-full h-1.5 bg-muted/60 rounded-full overflow-hidden relative">
                        <motion.div 
                          className="absolute top-0 left-0 bottom-0 bg-primary/70 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>
        ))}
      </div>

      {/* Soft Skills Section */}
      <AnimatedReveal>
        <div className="space-y-10">
          <h3 className="font-display text-[28px] font-bold text-foreground">Professional Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFT_SKILLS.map((s, idx) => (
              <Card key={idx} className="p-8 bg-primary/[0.02] border-primary/10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                   <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-display text-[18px] font-bold text-foreground mb-3">{s.name}</h4>
                <p className="font-sans text-[14px] text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedReveal>
    </div>
  );
}
