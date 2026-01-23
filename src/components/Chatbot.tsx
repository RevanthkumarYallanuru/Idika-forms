import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
import { chatbotConfig, siteConfig } from "@/data/siteData";

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
    const queryLower = query.toLowerCase();
    
    // Check FAQs
    for (const faq of chatbotConfig.faqs) {
      const keywords = faq.question.toLowerCase().split(" ");
      const matchCount = keywords.filter(kw => 
        queryLower.includes(kw) && kw.length > 3
      ).length;
      
      if (matchCount >= 2 || queryLower.includes(faq.question.toLowerCase().slice(0, 15))) {
        return faq.answer;
      }
    }

    // Keyword matching
    if (queryLower.includes("book") || queryLower.includes("reservation") || queryLower.includes("stay")) {
      return chatbotConfig.faqs.find(f => f.question.includes("book"))?.answer || "";
    }
    if (queryLower.includes("price") || queryLower.includes("cost") || queryLower.includes("rate")) {
      return "Our rates start at ₹8,500 per night on weekdays and ₹10,500 on weekends, including breakfast and dinner. Visit our Stay page for full details, or contact us to book.";
    }
    if (queryLower.includes("location") || queryLower.includes("where") || queryLower.includes("address")) {
      return chatbotConfig.faqs.find(f => f.question.includes("located"))?.answer || "";
    }
    if (queryLower.includes("sustain") || queryLower.includes("eco") || queryLower.includes("green")) {
      return chatbotConfig.faqs.find(f => f.question.includes("sustainability"))?.answer || "";
    }
    if (queryLower.includes("what") && queryLower.includes("idika")) {
      return chatbotConfig.faqs.find(f => f.question.includes("What is"))?.answer || "";
    }

    // Default response
    return `Thank you for your question! For detailed assistance, please reach out to us at ${siteConfig.email} or visit our Contact page. We'd love to help you plan your stay at Idika.`;
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
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
