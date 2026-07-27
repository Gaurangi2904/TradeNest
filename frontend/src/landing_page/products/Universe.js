import React from "react";
import {
  LineChart,
  ShieldCheck,
  Brain,
  BarChart3,
  Smartphone,
  Wallet,
} from "lucide-react";

function Universe() {
  const products = [
    {
      icon: <LineChart size={50} color="#387ED1" />,
      title: "TradeNest Pro",
      desc: "Advanced web trading platform with live charts and AI-powered insights.",
    },
    {
      icon: <Smartphone size={50} color="#387ED1" />,
      title: "TradeNest Mobile",
      desc: "Trade and monitor your portfolio anytime with our mobile app.",
    },
    {
      icon: <Brain size={50} color="#387ED1" />,
      title: "AI Stock Assistant",
      desc: "Receive intelligent investment suggestions and market analysis.",
    },
    {
      icon: <Wallet size={50} color="#387ED1" />,
      title: "Smart Portfolio",
      desc: "Track investments, returns, and asset allocation in one place.",
    },
    {
      icon: <BarChart3 size={50} color="#387ED1" />,
      title: "Market Analytics",
      desc: "Real-time stock screening, watchlists, and market trends.",
    },
    {
      icon: <ShieldCheck size={50} color="#387ED1" />,
      title: "Secure Investing",
      desc: "Bank-grade security with encrypted transactions and data protection.",
    },
  ];

  return (
    <section className="container py-5">

      <h2 className="text-center fw-bold mb-3">
        Explore TradeNest Products
      </h2>

      <p
        className="text-center mb-5"
        style={{ color: "var(--secondary-text)" }}
      >
        Everything you need to invest smarter, trade faster, and grow your wealth.
      </p>

      <div className="row g-4">

        {products.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="product-card h-100 text-center p-4">

              <div className="mb-3">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Universe;