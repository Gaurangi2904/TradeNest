import React from "react";

function Hero() {
  return (
    <section className="container py-5 text-center">

      <h1 className="display-3 fw-bold">
        TradeNest Platform
      </h1>

      <p
        className="lead mt-4"
        style={{
          maxWidth: "850px",
          margin: "auto",
          color: "var(--secondary-text)",
        }}
      >
        Experience next-generation investing with AI-powered analytics,
        portfolio tracking, real-time market data, advanced charting,
        secure trading and lightning-fast execution.
      </p>

    </section>
  );
}

export default Hero;