import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  Zap,
  TrendingUp,
} from "lucide-react";

function Awards() {
  const features = [
    {
      icon: <ShieldCheck size={45} color="#387ED1" />,
      title: "Bank-Grade Security",
      desc: "Your investments are protected with enterprise-level encryption, multi-factor authentication, and secure cloud infrastructure.",
    },
    {
      icon: <Brain size={45} color="#387ED1" />,
      title: "AI Investment Insights",
      desc: "Receive smart portfolio recommendations and market analysis powered by artificial intelligence.",
    },
    {
      icon: <Zap size={45} color="#387ED1" />,
      title: "Lightning Fast Trading",
      desc: "Execute trades in milliseconds with a highly optimized and reliable trading engine.",
    },
    {
      icon: <TrendingUp size={45} color="#387ED1" />,
      title: "Real-Time Analytics",
      desc: "Monitor live prices, portfolio performance, and market trends with interactive analytics.",
    },
  ];

  return (
    <section className="container awards-section py-5">

      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="fw-bold display-5">
          Why Millions Choose TradeNest
        </h2>

        <p
          className="lead mt-3"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "var(--secondary-text)",
          }}
        >
          A next-generation investment platform built with security,
          intelligence, and speed to help every investor grow confidently.
        </p>
      </motion.div>

      <div className="row g-4">

        {features.map((item, index) => (

          <motion.div
            key={index}
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="feature-card text-center h-100">

              <div className="feature-icon mb-4">
                {item.icon}
              </div>

              <h4 className="fw-bold">
                {item.title}
              </h4>

              <p className="mt-3">
                {item.desc}
              </p>

            </div>
          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Awards;