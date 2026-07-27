import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="container py-5">

      <div className="text-center open-account-box">

        <h2 className="fw-bold">
          Start Investing with TradeNest Today
        </h2>

        <p
          className="mt-3"
          style={{
            color: "var(--secondary-text)",
          }}
        >
          Join thousands of investors using AI-powered tools,
          advanced analytics and real-time market insights.
        </p>

        <Link to="/signup">
          <button className="btn btn-primary hero-btn mt-4">
            Create Free Account
          </button>
        </Link>

      </div>

    </section>
  );
}

export default OpenAccount;