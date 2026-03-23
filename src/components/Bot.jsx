import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Bot as BotIcon, User } from "lucide-react";
import { PROFILE, BOT_KB } from "../data";
import { motion, AnimatePresence } from "framer-motion";

export function Bot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: BOT_KB.hello }
  ]);
  const messagesEndRef = useRef(null);

  const phoneNumber = PROFILE.phone.replace(/\D/g, "");
  const waMessage = encodeURIComponent("Hello, I found your portfolio and would like to connect!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${waMessage}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleOptionClick = (key, label) => {
    setMessages(prev => [...prev, { role: "user", text: label }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: BOT_KB[key] || BOT_KB.def }]);
    }, 500);
  };

  const options = [
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
    { key: "education", label: "Education" },
    { key: "achieve", label: "Achievements" }
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-[200] w-[340px] flex flex-col bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <BotIcon className="w-5 h-5" />
                <span className="font-display font-bold text-[15px]">Ankush AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/20 p-1.5 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 h-[300px] overflow-y-auto space-y-4 bg-muted/10">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-primary/20 text-primary" : "bg-primary text-primary-foreground"}`}>
                    {msg.role === "user" ? <User className="w-4 h-4" /> : <BotIcon className="w-4 h-4" />}
                  </div>
                  <div className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-[13.5px] font-sans leading-relaxed ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-muted border border-border/50 text-foreground rounded-tl-none"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions & Input */}
            <div className="p-4 bg-card border-t border-border/50 space-y-3">
              <div className="flex flex-wrap gap-2">
                {options.map(opt => (
                  <button 
                    key={opt.key}
                    onClick={() => handleOptionClick(opt.key, opt.label)}
                    className="px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors border border-primary/20"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white flex items-center justify-center gap-2 font-display font-bold text-[14px] transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" /> Connect on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with AI"
        className="fixed bottom-6 right-6 z-[150] w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground bg-primary shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-110 active:scale-95 transition-all duration-300 border border-border"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </>
  );
}
