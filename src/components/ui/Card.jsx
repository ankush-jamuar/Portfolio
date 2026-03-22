import { cn } from "../../lib/utils";

export function Card({ children, className, neon, glowColor = "var(--color-primary)" }) {
  return (
    <div 
      className={cn(
        "relative rounded-[32px] bg-card border border-border/50 shadow-sm transition-all duration-500",
        "hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30",
        neon && "shadow-[0_0_20px_rgba(255,255,255,0.02)] border-primary/20",
        className
      )}
    >
      {/* Subtle Inner Glow for Neon cards */}
      {neon && (
        <div 
          className="absolute inset-0 rounded-[32px] pointer-events-none opacity-10" 
          style={{ 
            background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)` 
          }} 
        />
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
