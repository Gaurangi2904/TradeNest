import React, { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";

function AIStockAssistant() {
  const [question, setQuestion] = useState("");

  const suggestions = [
    "Should I invest in TCS?",
    "Explain SIP in simple words",
    "What is NIFTY 50?",
    "Difference between Stocks and Mutual Funds",
  ];

  return (
    <section className="container my-5">
      <div className="ai-card">

        <div className="text-center mb-4">
          <Bot size={55} color="#387ED1" />
          <h2 className="mt-3">TradeNest AI Assistant</h2>
          <p className="text-muted">
            Ask anything about investing, stocks, mutual funds, or trading.
          </p>
        </div>

        <div className="input-group mb-4">
          <input
            className="form-control"
            placeholder="Ask anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button className="btn btn-primary">
            <Send size={18} />
          </button>
        </div>

        <h5 className="mb-3">
          <Sparkles size={18} /> Suggested Questions
        </h5>

        <div className="d-flex flex-wrap gap-2">
          {suggestions.map((item, index) => (
            <button
              key={index}
              className="btn btn-outline-primary"
              onClick={() => setQuestion(item)}
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AIStockAssistant;