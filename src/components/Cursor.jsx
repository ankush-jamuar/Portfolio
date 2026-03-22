import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const lag = useRef({ x: 0, y: 0 });
  const hov = useRef(false);
  const { theme } = useTheme();

  useEffect(() => {
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    const mm = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", mm);
    
    const over = () => { hov.current = true; };
    const out  = () => { hov.current = false; };
    
    const addHov = () => document.querySelectorAll("a, button, [data-h]").forEach(el => { 
      el.addEventListener("mouseenter", over); 
      el.addEventListener("mouseleave", out); 
    });
    
    addHov();
    const obs = new MutationObserver(addHov);
    obs.observe(document.body, { childList: true, subtree: true });
    
    let raf;
    const loop = () => {
      lag.current.x += (pos.current.x - lag.current.x) * 0.15;
      lag.current.y += (pos.current.y - lag.current.y) * 0.15;
      
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
        if (hov.current) {
            dot.current.style.transform += " scale(0.5)";
        }
      }
      
      if (ring.current) {
        ring.current.style.transform = `translate(${lag.current.x - 20}px, ${lag.current.y - 20}px) scale(${hov.current ? 1.5 : 1})`;
        ring.current.style.opacity = hov.current ? "0.5" : "1";
        ring.current.style.borderColor = isDark ? (hov.current ? "#a78bfa" : "#6378ff") : (hov.current ? "#3b82f6" : "#0f172a");
      }
      
      raf = requestAnimationFrame(loop);
    };
    
    raf = requestAnimationFrame(loop);
    
    return () => { 
      cancelAnimationFrame(raf); 
      window.removeEventListener("mousemove", mm); 
      obs.disconnect(); 
    };
  }, [theme]);

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="hidden md:block">
      <div 
        ref={dot}  
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full pointer-events-none transition-transform duration-100 ease-out" 
        style={{ 
          background: isDark ? "linear-gradient(135deg, #6378ff, #a78bfa)" : "linear-gradient(135deg, #2563eb, #8b5cf6)", 
          boxShadow: isDark ? "0 0 10px rgba(99,120,255,0.8)" : "0 0 10px rgba(37,99,235,0.4)", 
          willChange: "transform" 
        }} 
      />
      <div 
        ref={ring} 
        className="fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border-[1.5px] pointer-events-none" 
        style={{ 
          willChange: "transform", 
          transition: "opacity 0.2s ease, transform 0.15s ease-out, border-color 0.2s mx-auto" 
        }} 
      />
    </div>
  );
}
