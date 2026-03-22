import { Home as HomeIcon, Box, Briefcase, Award, Trophy, FileText, Mail, Github, Linkedin, Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { PROFILE } from "../data";
import { cn } from "../lib/utils";

const NAV = [
  { id: "home",          lbl: "Home",          ic: HomeIcon },
  { id: "skills",        lbl: "Skills",        ic: Box },
  { id: "projects",      lbl: "Projects",      ic: Briefcase },
  { id: "certifications",lbl: "Certifications",ic: Award },
  { id: "achievements",  lbl: "Achievements",  ic: Trophy },
  { id: "resume",        lbl: "Resume",        ic: FileText },
  { id: "contact",       lbl: "Contact",       ic: Mail },
];

const SOCIALS = [
  { ic: Github, href: PROFILE.github, title: "GitHub" },
  { ic: Linkedin, href: PROFILE.linkedin, title: "LinkedIn" },
  { ic: Mail, href: `mailto:${PROFILE.email}`, title: "Email" },
  { ic: Phone, href: `tel:${PROFILE.phone.replace(/[\s+]/g, '')}`, title: "Phone" },
];

export function Sidebar({ page, nav, open }) {
  return (
    <aside 
      className={cn(
        "w-64 min-h-screen fixed top-0 left-0 bottom-0 flex flex-col pt-10 pb-8 z-[100] transition-transform duration-300",
        "bg-card border-r border-border shadow-sm",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      {/* Brand Section */}
      <div className="px-8 mb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="font-display text-[26px] font-black tracking-tighter text-foreground">
            {PROFILE.shortName}
          </p>
          <ThemeToggle />
        </div>
        <p className="font-mono text-[10px] tracking-[2px] uppercase text-muted-foreground font-medium">{PROFILE.role}</p>
        <div className="flex items-center gap-2 mt-4 text-[12px] text-green-500 font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {PROFILE.availability}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {NAV.map(n => {
          const isActive = page === n.id;
          const Icon = n.ic;
          return (
            <button 
              key={n.id} 
              onClick={() => nav(n.id)} 
              className={cn(
                "w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-200 font-sans text-[14px] font-medium group text-left",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <Icon 
                strokeWidth={isActive ? 2.5 : 2} 
                className={cn(
                  "w-[20px] h-[20px]",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} 
              />
              {n.lbl}
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Socials */}
      <div className="px-6 pt-6 border-t border-border mt-auto flex gap-3 justify-center">
        {SOCIALS.map((s) => {
          const Icon = s.ic;
          return (
            <a 
              key={s.title} 
              href={s.href} 
              target="_blank" 
              rel="noreferrer" 
              title={s.title} 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border border-border/50 text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              <Icon className="w-4.5 h-4.5" />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
