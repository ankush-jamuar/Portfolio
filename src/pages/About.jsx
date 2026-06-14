import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { PROFILE } from "../data";

export function About() {
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
            02. About
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,64px)] font-black tracking-tight text-foreground mb-4">
            About <span className="text-muted-foreground/40 font-light italic">Me</span>
          </h2>
          <p className="font-sans text-[17px] max-w-xl text-muted-foreground leading-relaxed font-light">
            Combining product thinking, user experience, and engineering to build meaningful digital products.
          </p>
        </div>
      </AnimatedReveal>

      <AnimatedReveal delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Copy Card */}
          <Card className="lg:col-span-8 p-8 md:p-12 bg-primary/[0.01] border-primary/10 flex flex-col justify-center">
            <p className="font-sans text-[18px] md:text-[20px] text-foreground/90 leading-relaxed font-light mb-6">
              I enjoy combining product thinking, user experience, and engineering to build products that solve real-world problems. From AI-powered knowledge systems like Neuronix to collaborative platforms like Sprintify, I focus on creating intuitive experiences backed by scalable technology. My interests lie at the intersection of frontend development, product design, and AI-driven innovation.
            </p>
            <p className="font-sans text-[15px] text-muted-foreground leading-relaxed font-light">
              By working across the full product lifecycle—from wireframing and interactive prototyping to backend system architecture—I design with constraint awareness and build with user empathy.
            </p>
          </Card>

          {/* Side Focus Card */}
          <Card className="lg:col-span-4 p-8 bg-primary/[0.02] border-primary/10 flex flex-col justify-between items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/5 border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform mt-4">
              <User className="w-9 h-9" />
            </div>
            
            <div className="space-y-4 my-8">
              <h3 className="font-display text-[22px] font-black text-foreground">The Intersection</h3>
              <p className="font-sans text-[14px] text-muted-foreground leading-relaxed font-light">
                Bridging the gap between creative visual layouts and reliable frontend architectures.
              </p>
            </div>
            
            <div className="flex gap-2 mb-4">
              <span className="font-mono text-[9px] px-2.5 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/10 font-bold uppercase tracking-wider">Product</span>
              <span className="font-mono text-[9px] px-2.5 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/10 font-bold uppercase tracking-wider">UI/UX</span>
              <span className="font-mono text-[9px] px-2.5 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/10 font-bold uppercase tracking-wider">Code</span>
            </div>
          </Card>
        </div>
      </AnimatedReveal>
    </motion.div>
  );
}
