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

    // Stars Particle System
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.8 + 0.2,
      s: Math.random() * 0.3 + 0.1,
      phase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
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

      // Mouse Tracking Glow
      const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 400);
      mg.addColorStop(0, isDark ? "rgba(99,120,255,0.12)" : "rgba(99,120,255,0.06)");
      mg.addColorStop(1, "transparent");
      ctx.fillStyle = mg; ctx.fillRect(0, 0, W, H);

      // Stars and Constellation Logic
      for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        
        // Gentle drift
        s.x += s.vx;
        s.y += s.vy;
        
        // Wrap edges
        if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;

        // Draw Star
        const pulse = Math.sin(t * s.s * 4 + s.phase) * 0.3 + 0.7;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * pulse, 0, Math.PI * 2);
        
        // Interactive glow near mouse
        const distToMouse = Math.hypot(s.x - mx, s.y - my);
        const mouseGlow = distToMouse < 200 ? (200 - distToMouse) / 200 : 0;
        
        const starAlpha = isDark ? (s.a * pulse) + mouseGlow : ((s.a * pulse * 0.4) + mouseGlow * 0.5);
        ctx.fillStyle = `rgba(180,190,255,${starAlpha})`; 
        ctx.fill();

        // Constellation Lines
        for (let j = i + 1; j < stars.length; j++) {
          const dx = s.x - stars[j].x;
          const dy = s.y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
             const lineAlpha = (120 - dist) / 120;
             ctx.beginPath();
             ctx.moveTo(s.x, s.y);
             ctx.lineTo(stars[j].x, stars[j].y);
             ctx.strokeStyle = isDark ? `rgba(140, 160, 255, ${lineAlpha * 0.2})` : `rgba(100, 120, 255, ${lineAlpha * 0.1})`;
             ctx.lineWidth = 0.5;
             ctx.stroke();
          }
        }
      }

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
