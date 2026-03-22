import { useState } from "react";
import { AnimatedReveal } from "../components/ui/AnimatedReveal";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Mail, Phone, Linkedin, Github, Send, MessageSquare, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", status: "idle" });

  const submit = async (e) => {
    e.preventDefault();
    setForm(f => ({ ...f, status: "sending" }));
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "345d9eaa-101d-454a-a6d9-ffc567a52506", // Using existing key, usually user sets this up
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "ankush.jamuar@gmail.com"
        }),
      });
      const json = await res.json();
      if (json.success) {
        setForm({ name: "", email: "", subject: "", message: "", status: "success" });
        setTimeout(() => setForm(f => ({ ...f, status: "idle" })), 4000);
      } else {
        setForm(f => ({ ...f, status: "error" }));
        setTimeout(() => setForm(f => ({ ...f, status: "idle" })), 4000);
      }
    } catch (err) {
      setForm(f => ({ ...f, status: "error" }));
      setTimeout(() => setForm(f => ({ ...f, status: "idle" })), 4000);
    }
  };

  const links = [
    { icon: <Mail className="w-5 h-5"/>, lbl: "Email", val: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: <Phone className="w-5 h-5"/>, lbl: "WhatsApp", val: PROFILE.phone, href: `https://wa.me/${PROFILE.phone.replace(/[\s+]/g, "")}` },
    { icon: <Linkedin className="w-5 h-5"/>, lbl: "LinkedIn", val: "ankushxjamuar", href: PROFILE.linkedin },
    { icon: <Github className="w-5 h-5"/>, lbl: "GitHub", val: "ankush-jamuar", href: PROFILE.github },
  ];

  return (
    <div className="min-h-screen px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
      <AnimatedReveal>
        <div className="mb-16">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[4px] uppercase mb-4 text-primary font-bold">
            <span className="w-12 h-px block bg-gradient-to-r from-primary to-transparent" />
            07. Contact
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,64px)] font-black tracking-tight text-foreground mb-4">
            Let's <span className="text-muted-foreground/40 font-light italic">Connect</span>
          </h2>
          <p className="font-sans text-[17px] max-w-xl text-muted-foreground leading-relaxed font-light">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </AnimatedReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Contact Info */}
        <div className="space-y-8">
           <div className="grid grid-cols-1 gap-4">
              {links.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center justify-between p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-0.5">{link.lbl}</p>
                      <p className="font-display text-[16px] font-bold text-foreground">{link.val}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
           </div>

           <div className="p-8 rounded-[32px] bg-primary/[0.03] border border-primary/10 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full" />
              <p className="font-sans text-[15px] text-muted-foreground leading-relaxed font-light italic relative z-10">
                "Technical expertise is only half the battle; the other half is communication and understanding the core business value."
              </p>
           </div>
        </div>

        {/* Contact Form */}
        <AnimatedReveal delay={0.2} direction="left">
          <Card className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
               </div>
               <h3 className="font-display text-[24px] font-bold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={submit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] tracking-[2px] uppercase block mb-2 text-muted-foreground font-bold">Name</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Enter your name" 
                    className="w-full bg-muted/30 border border-border/60 rounded-xl px-4 py-3 font-sans text-[15px] focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[2px] uppercase block mb-2 text-muted-foreground font-bold">Email</label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="Enter your email" 
                    className="w-full bg-muted/30 border border-border/60 rounded-xl px-4 py-3 font-sans text-[15px] focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[2px] uppercase block mb-2 text-muted-foreground font-bold">Subject</label>
                <input 
                  type="text" 
                  required
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  placeholder="Inquiry Subject" 
                  className="w-full bg-muted/30 border border-border/60 rounded-xl px-4 py-3 font-sans text-[15px] focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[2px] uppercase block mb-2 text-muted-foreground font-bold">Message</label>
                <textarea 
                  rows={5} 
                  required
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Tell me more about your project..." 
                  className="w-full bg-muted/30 border border-border/60 rounded-xl px-4 py-3 font-sans text-[15px] focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <Button disabled={form.status === "sending"} className={`w-full h-14 text-[15px] font-bold ${form.status === "success" ? "bg-green-600 hover:bg-green-700" : ""}`}>
                <AnimatePresence mode="wait">
                  {form.status === "sending" ? (
                    <motion.span key="s" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>Sending...</motion.span>
                  ) : form.status === "success" ? (
                    <motion.span key="v" initial={{ y:10, opacity:0 }} animate={{ y:0, opacity:1 }}>Message Sent!</motion.span>
                  ) : (
                    <motion.span key="i" initial={{ opacity:0 }} animate={{ opacity:1 }} className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4 ml-1" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </Card>
        </AnimatedReveal>
      </div>
    </div>
  );
}
