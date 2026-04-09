import { useState, useRef, useEffect } from "react";
import { Send, X, Minimize2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useChat } from "@/hooks/use-chat";

interface ChatWindowProps {
  onClose: () => void;
  onMinimize?: () => void;
  fullPage?: boolean;
}

const ChatWindow = ({ onClose, onMinimize, fullPage = false }: ChatWindowProps) => {
  const { messages, isLoading, send } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    send(trimmed);
  };

  const quickActions = [
    "Help me find bundles",
    "Track my order",
    "What bundle deals do you have?",
    "Hair care tips",
  ];

  return (
    <div className={`flex flex-col bg-card ${fullPage ? "h-full" : "h-[500px] w-[380px] rounded-2xl shadow-2xl border border-border"}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary/5 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-semibold text-foreground" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            NAYA Assistant
          </span>
        </div>
        <div className="flex items-center gap-1">
          {onMinimize && (
            <button onClick={onMinimize} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="Minimize">
              <Minimize2 size={14} />
            </button>
          )}
          <button onClick={onClose} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-xl p-3 text-sm text-foreground">
              <p className="font-medium mb-1">Hey babe! 💕</p>
              <p className="text-muted-foreground text-xs">
                I can help you find the perfect hair, track your order, or answer any questions. What can I help with?
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => send(action)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-foreground"
              }`}
            >
              {msg.role === "assistant" ? (
                <div className="prose prose-sm max-w-none [&_p]:m-0 [&_ul]:my-1 [&_li]:my-0 [&_strong]:text-foreground">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="bg-secondary/50 rounded-xl px-3 py-2 text-sm text-muted-foreground">
              <span className="animate-pulse">Typing...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about products, orders..."
            maxLength={4000}
            className="flex-1 bg-secondary/30 text-foreground placeholder:text-muted-foreground rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-primary/30"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-2 rounded-full bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors"
            aria-label="Send"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
