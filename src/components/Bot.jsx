import { MessageSquare } from "lucide-react";
import { PROFILE } from "../data";

export function Bot() {
  const phoneNumber = PROFILE.phone.replace(/\D/g, "");
  const message = encodeURIComponent("Hello, I found your portfolio and would like to connect!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[150] w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground bg-primary shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 border border-border"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
}
