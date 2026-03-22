import { forwardRef, useRef } from "react";
import { cn } from "../../lib/utils";

export const Button = forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children, 
  href,
  download,
  ...props 
}, propRef) => {

  const localRef = useRef(null);
  const ref = propRef || localRef;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.2;
    const y = (e.clientY - r.top - r.height / 2) * 0.2;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-medium cursor-pointer overflow-hidden transition-all duration-300 no-underline select-none";
  
  const variants = {
    default: "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(99,120,255,0.3)] hover:shadow-[0_0_25px_rgba(99,120,255,0.5)] border-none",
    outline: "bg-primary/5 border border-primary/20 text-foreground hover:bg-primary/10",
    ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50",
  };

  const sizes = {
    default: "px-6 py-3 text-[14px] rounded-2xl",
    sm: "px-4 py-2 text-[12.5px] rounded-xl",
    icon: "w-10 h-10 rounded-xl",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const inner = (
    <>
      {variant === 'default' && (
        <span 
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
          style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)" }} 
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a 
        ref={ref} 
        href={href} 
        download={download} 
        target={href.startsWith("http") ? "_blank" : undefined} 
        rel="noreferrer" 
        className={classes} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {inner}
      </a>
    );
  }

  return (
    <button 
      ref={ref} 
      className={classes} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {inner}
    </button>
  );
});

Button.displayName = "Button";
