import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export function Ambient() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    
    let W = el.width = window.innerWidth;
    let H = el.height = window.innerHeight;
    let mx = W / 2, my = H / 2;
    
    const resize = () => { W = el.width = window.innerWidth; H = el.height = window.innerHeight; };
    const mm = (e) => { mx = e.clientX; my = e.clientY; };
    
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mm);

    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Stars
    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.7 + 0.1,
      s: Math.random() * 0.25 + 0.05,
      phase: Math.random() * Math.PI * 2,
    }));

    // Nebula blobs
    const blobs = [
      { x: 0.25, y: 0.2,  r: 400, c: isDark ? [99,120,255, 0.055] : [99,120,255, 0.02] },
      { x: 0.75, y: 0.75, r: 350, c: isDark ? [167,139,250,0.04]  : [167,139,250, 0.02] },
      { x: 0.55, y: 0.45, r: 300, c: isDark ? [56,189,248, 0.035] : [56,189,248, 0.015] },
      { x: 0.1,  y: 0.8,  r: 280, c: isDark ? [244,114,182,0.03]  : [244,114,182, 0.01] },
    ];

    let t = 0, raf;
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);

      // Draw nebula
      blobs.forEach(b => {
        const bx = b.x * W + Math.sin(t + b.x * 5) * 40;
        const by = b.y * H + Math.cos(t * 0.7 + b.y * 5) * 30;
        const [r, g, bl, a] = b.c;
        const grd = ctx.createRadialGradient(bx, by, 0, bx, by, b.r);
        grd.addColorStop(0, `rgba(${r},${g},${bl},${a})`);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.beginPath(); ctx.arc(bx, by, b.r, 0, Math.PI * 2); ctx.fill();
      });

      // Mouse glow
      const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 350);
      mg.addColorStop(0, isDark ? "rgba(99,120,255,0.08)" : "rgba(99,120,255,0.04)");
      mg.addColorStop(1, "transparent");
      ctx.fillStyle = mg; ctx.fillRect(0, 0, W, H);

      // Stars (only visible in darkness properly, fade slightly in light mode)
      stars.forEach(s => {
        const pulse = Math.sin(t * s.s * 4 + s.phase) * 0.3 + 0.7;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * pulse, 0, Math.PI * 2);
        const starAlpha = isDark ? s.a * pulse : (s.a * pulse * 0.4);
        ctx.fillStyle = `rgba(180,190,255,${starAlpha})`; 
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    
    raf = requestAnimationFrame(draw);
    return () => { 
      cancelAnimationFrame(raf); 
      window.removeEventListener("resize", resize); 
      window.removeEventListener("mousemove", mm); 
    };
  }, [theme]);

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700" />
      {/* Subtle Dot Grid */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700" 
        style={{ 
          backgroundImage: isDark 
            ? "radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)" 
            : "radial-gradient(circle,rgba(0,0,0,0.03) 1px,transparent 1px)", 
          backgroundSize: "42px 42px", 
          opacity: 1 
        }} 
      />
    </>
  );
}
