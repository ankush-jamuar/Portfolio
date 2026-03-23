import React, { useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Ambient } from "./components/Ambient";
import { Cursor } from "./components/Cursor";
import { Sidebar } from "./components/Sidebar";
import { Bot } from "./components/Bot";
import { AnimatePresence } from "framer-motion";

// Pages
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Certs } from "./pages/Certs";
import { Achievements } from "./pages/Achievements";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";
import { Menu, X } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("home");
  const [mobOpen, setMobOpen] = useState(false);

  const nav = useCallback((p) => {
    setPage(p);
    setMobOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Map of available pages
  const pages = {
    home: <Home nav={nav} />,
    skills: <Skills />,
    projects: <Projects />,
    certifications: <Certs />,
    achievements: <Achievements />,
    resume: <Resume />,
    contact: <Contact />,
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobOpen]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="flex min-h-screen overflow-x-hidden selection:bg-primary/30 selection:text-primary">
        <Ambient />
        <Cursor />

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobOpen((o) => !o)}
          className="md:hidden fixed top-4 left-4 z-[200] w-12 h-12 flex items-center justify-center rounded-xl bg-card/80 backdrop-blur-xl border border-border/50 text-foreground shadow-sm hover:bg-card transition-colors"
          aria-label="Toggle Menu"
        >
          {mobOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Overlay */}
        {mobOpen && (
          <div
            onClick={() => setMobOpen(false)}
            className="fixed inset-0 z-[99] md:hidden bg-background/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />
        )}

        <Sidebar page={page} nav={nav} open={mobOpen} />

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 relative z-10 w-full min-h-screen overflow-x-hidden">
          {/* AnimatePresence for buttery smooth route cross-fading */}
          <AnimatePresence mode="wait">
             {React.cloneElement(pages[page], { key: page })}
          </AnimatePresence>
        </main>

        <Bot />
      </div>
    </ThemeProvider>
  );
}