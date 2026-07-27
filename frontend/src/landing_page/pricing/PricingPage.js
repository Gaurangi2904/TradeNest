import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    color: "#387ED1",
    features: [
      "Stock Investing",
      "Basic Portfolio",
      "Watchlist",
      "Market News",
    ],
  },
  {
    name: "Pro",
    price: "₹499/mo",
    color: "#16a34a",
    popular: true,
    features: [
      "Everything in Starter",
      "AI Stock Assistant",
      "Advanced Charts",
      "Portfolio Analytics",
      "Real-Time Alerts",
    ],
  },
  {
    name: "Elite",
    price: "₹999/mo",
    color: "#f59e0b",
    features: [
      "Everything in Pro",
      "Priority Support",
      "Options Analytics",
      "API Access",
      "Unlimited Watchlists",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing-section container py-5">

      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="display-5 fw-bold">
          Choose Your Plan
        </h2>

        <p className="lead text-muted">
          Flexible pricing for every investor.
        </p>
      </motion.div>

      <div className="row g-4">

        {plans.map((plan, index) => (

          <motion.div
            key={index}
            className="col-lg-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
            }}
          >

            <div className="pricing-card h-100">

              {plan.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <h3>{plan.name}</h3>

              <h1
                style={{
                  color: plan.color,
                }}
              >
                {plan.price}
              </h1>

              <hr />

              {plan.features.map((feature, i) => (

                <div
                  key={i}
                  className="d-flex align-items-center mb-3"
                >
                  <CheckCircle
                    color={plan.color}
                    size={20}
                  />

                  <span className="ms-2">
                    {feature}
                  </span>
                </div>

              ))}

              <button className="btn btn-primary w-100 mt-4">
                Get Started
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Pricing;