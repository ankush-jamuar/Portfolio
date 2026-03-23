import { cn } from "../../lib/utils";
import { useState, useRef } from "react";

export function Card({ children, className, neon, glowColor = "rgba(139, 92, 246, 0.07)" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-[32px] bg-card border border-border/50 shadow-sm transition-all duration-500 overflow-hidden group",
        "hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40",
        neon && "shadow-[0_0_20px_rgba(255,255,255,0.02)] border-primary/20",
        className
      )}
    >
      {/* Interactive Spotlight Glow */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      
      {/* Subtle Inner Glow for Neon cards */}
      {neon && (
        <div 
          className="absolute inset-0 rounded-[32px] pointer-events-none opacity-10 z-0" 
          style={{ 
            background: `radial-gradient(circle at 50% 0%, var(--color-primary, #8b5cf6), transparent 70%)` 
          }} 
        />
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
