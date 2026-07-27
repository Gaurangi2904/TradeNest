import React from "react";
import {
  ShieldCheck,
  BarChart3,
  Smartphone,
  Globe,
  Zap,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={40} />,
    title: "Lightning Fast Execution",
    desc: "Place orders instantly with low-latency trading infrastructure.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Bank-Grade Security",
    desc: "Your investments are protected with enterprise-level security.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Advanced Analytics",
    desc: "Professional charts and market insights to make better decisions.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Trade Anywhere",
    desc: "Access your portfolio seamlessly from desktop and mobile devices.",
  },
  {
    icon: <Globe size={40} />,
    title: "Global Markets",
    desc: "Invest across multiple asset classes and international markets.",
  },
  {
    icon: <Brain size={40} />,
    title: "AI Portfolio Insights",
    desc: "Receive smart recommendations to optimize your investments.",
  },
];

function Features() {
  return (
    <section className="features-section py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-3">
          Why Choose TradeNest?
        </h2>

        <p
          className="text-center mb-5"
          style={{
            color: "var(--secondary-text)",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Experience modern investing with powerful tools,
          advanced security, and real-time insights.
        </p>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="feature-card h-100">
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h4>{feature.title}</h4>

                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;