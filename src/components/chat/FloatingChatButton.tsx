import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatWindow from "./ChatWindow";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen && (
        <div className="absolute bottom-16 right-0 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <ChatWindow
            onClose={() => setIsOpen(false)}
            onMinimize={() => setIsOpen(false)}
          />
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
          isOpen
            ? "bg-foreground text-background rotate-0"
            : "bg-primary text-primary-foreground hover:scale-105"
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? (
          <span className="text-lg font-light">×</span>
        ) : (
          <MessageCircle size={22} />
        )}
      </button>
    </div>
  );
};

export default FloatingChatButton;
