import React from "react";

function Hero() {
  return (
    <section className="container py-5">

      {/* Heading */}

      <div className="text-center mb-5">

        <h1 className="display-4 fw-bold">
          About TradeNest
        </h1>

        <p
          className="text-muted mx-auto"
          style={{ maxWidth: "850px", fontSize: "1.15rem" }}
        >
          TradeNest is an AI-powered investment platform built to simplify
          investing through intelligent insights, secure trading,
          portfolio analytics, and modern cloud technologies.
        </p>

      </div>

      {/* Mission */}

      <div className="row align-items-center mb-5">

        <div className="col-lg-6">

          <h2 className="fw-bold mb-4">
            Our Mission
          </h2>

          <p className="text-muted" style={{ lineHeight: "1.9" }}>
            We believe investing should be simple, transparent,
            and accessible to everyone.
            TradeNest combines artificial intelligence,
            cloud computing, and real-time analytics to help
            investors make smarter financial decisions.
          </p>

          <p className="text-muted" style={{ lineHeight: "1.9" }}>
            Whether you are a beginner or an experienced trader,
            TradeNest provides all the tools needed to monitor,
            analyze, and grow your investments.
          </p>

        </div>

        <div className="col-lg-6">

          <img
            src="media/images/aboutHero.png"
            alt="TradeNest"
            className="img-fluid rounded-4 shadow"
          />

        </div>

      </div>

      {/* Features */}

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          Why Choose TradeNest?
        </h2>

      </div>

      <div className="row g-4">

        <div className="col-lg-3">

          <div className="card border-0 shadow h-100 p-4 text-center">

            <h1>🤖</h1>

            <h5 className="mt-3">
              AI Insights
            </h5>

            <p className="text-muted">
              Smart investment suggestions powered by AI.
            </p>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card border-0 shadow h-100 p-4 text-center">

            <h1>📈</h1>

            <h5 className="mt-3">
              Live Market
            </h5>

            <p className="text-muted">
              Real-time stock prices and portfolio tracking.
            </p>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card border-0 shadow h-100 p-4 text-center">

            <h1>☁️</h1>

            <h5 className="mt-3">
              Cloud Powered
            </h5>

            <p className="text-muted">
              Hosted securely using modern cloud infrastructure.
            </p>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card border-0 shadow h-100 p-4 text-center">

            <h1>🔒</h1>

            <h5 className="mt-3">
              Secure Trading
            </h5>

            <p className="text-muted">
              Authentication, encryption, and secure transactions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;