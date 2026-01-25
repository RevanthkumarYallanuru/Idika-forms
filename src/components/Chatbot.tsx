import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
import { chatbotConfig } from "@/data/siteData";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", type: "bot", content: chatbotConfig.greeting }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleQuickReply = (reply: string) => {
    addMessage(reply, "user");
    setTimeout(() => {
      const answer = findAnswer(reply);
      addMessage(answer, "bot");
    }, 500);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addMessage(inputValue, "user");
    const query = inputValue;
    setInputValue("");
    setTimeout(() => {
      const answer = findAnswer(query);
      addMessage(answer, "bot");
    }, 500);
  };

  const addMessage = (content: string, type: "bot" | "user") => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), type, content }
    ]);
  };

  const findAnswer = (query: string): string => {
    const queryLower = query.toLowerCase().trim();
    const queryWords = queryLower.split(/\s+/);
    
    let bestMatch = { score: 0, answer: "" };
    
    // Search through all FAQs
    for (const faq of chatbotConfig.faqs) {
      let score = 0;
      
      // Check keyword matches (primary matching)
      if (faq.keywords) {
        for (const keyword of faq.keywords) {
          if (queryLower.includes(keyword.toLowerCase())) {
            score += 3; // High weight for keyword match
          }
        }
      }
      
      // Check question similarity
      const questionWords = faq.question.toLowerCase().split(/\s+/);
      for (const qWord of questionWords) {
        if (qWord.length > 2 && queryLower.includes(qWord)) {
          score += 1;
        }
      }
      
      // Exact phrase bonus
      if (queryLower.includes(faq.question.toLowerCase().slice(0, 20))) {
        score += 5;
      }
      
      if (score > bestMatch.score) {
        bestMatch = { score, answer: faq.answer };
      }
    }
    
    // Return best match if score is good enough
    if (bestMatch.score >= 3) {
      return bestMatch.answer;
    }

    // Fallback responses for common intents
    if (queryLower.includes("hi") || queryLower.includes("hello") || queryLower.includes("hey")) {
      return "Hello! 👋 Welcome to Idika. How can I help you today? You can ask me about our rooms, prices, location, or how to book!";
    }
    
    if (queryLower.includes("thank") || queryLower.includes("thanks")) {
      return "You're welcome! 😊 Feel free to ask if you have more questions. We'd love to host you at Idika!";
    }
    
    if (queryLower.includes("bye") || queryLower.includes("goodbye")) {
      return "Goodbye! 🌿 We hope to see you at Idika soon. Have a wonderful day!";
    }

    // Default response with helpful suggestions
    return `I'm not sure about that specific question. Here's what I can help with:\n\n• Room types & prices\n• How to book\n• Location & directions\n• Amenities & facilities\n• Events & celebrations\n\nOr contact us directly:\n📱 WhatsApp: +91 7207357312`;
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] h-[500px] max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-border/30 flex flex-col bg-background-secondary"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/30 bg-background">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Idika Assistant</h3>
                  <p className="text-xs text-muted-foreground">Usually replies instantly</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {chatbotConfig.quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-2 text-xs border border-border/50 rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors flex items-center gap-1"
                    >
                      {reply}
                      <ChevronRight size={12} />
                    </button>
                  ))}
                </div>
              )}
              
              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/30 bg-background">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
