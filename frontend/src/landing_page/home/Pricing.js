import React from "react";
import {
  Wallet,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

function Pricing() {
  const plans = [
    {
      icon: <Wallet size={45} color="#387ED1" />,
      title: "Starter",
      price: "₹0/month",
      desc: "Perfect for beginners starting their investment journey.",
      features: [
        "Unlimited Watchlist",
        "Basic Portfolio Tracking",
        "Real-time Market Prices",
        "Mobile & Web Access",
      ],
    },
    {
      icon: <TrendingUp size={45} color="#387ED1" />,
      title: "Pro Trader",
      price: "₹299/month",
      desc: "Advanced tools for active investors and traders.",
      features: [
        "Advanced Charts",
        "AI Stock Suggestions",
        "Live Market Scanner",
        "Priority Support",
      ],
    },
    {
      icon: <ShieldCheck size={45} color="#387ED1" />,
      title: "Elite",
      price: "₹799/month",
      desc: "Everything you need to maximize your investments.",
      features: [
        "Personal Portfolio Advisor",
        "Unlimited Analytics",
        "Risk Assessment",
        "Premium AI Insights",
      ],
    },
  ];

  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold display-5">
          Simple & Transparent Pricing
        </h2>

        <p
          className="mt-3"
          style={{
            color: "var(--secondary-text)",
            maxWidth: "650px",
            margin: "auto",
          }}
        >
          Choose the perfect plan for your investment journey.
          Upgrade anytime as your portfolio grows.
        </p>
      </div>

      <div className="row g-4">

        {plans.map((plan, index) => (

          <div className="col-lg-4" key={index}>

            <div className="pricing-card h-100">

              <div className="mb-4">
                {plan.icon}
              </div>

              <h3>{plan.title}</h3>

              <h1
                className="my-3"
                style={{
                  color: "#387ED1",
                  fontWeight: "700",
                }}
              >
                {plan.price}
              </h1>

              <p
                style={{
                  color: "var(--secondary-text)",
                }}
              >
                {plan.desc}
              </p>

              <ul className="list-unstyled mt-4">

                {plan.features.map((feature, i) => (

                  <li
                    key={i}
                    className="mb-3"
                  >
                    ✅ {feature}
                  </li>

                ))}

              </ul>

              <button
                className="btn btn-primary mt-3 w-100"
              >
                Choose Plan
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Pricing;