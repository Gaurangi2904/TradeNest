import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MarketTicker from "./MarketTicker";
import StockCards from "./StockCards";

function Hero() {
  return (
    <section className="hero-section py-5">
      <div className="container text-center">

        <MarketTicker />

        {/* Hero Image */}
        <motion.img
          src="media/images/homeHero.png"
          alt="TradeNest Hero"
          className="img-fluid mb-5 floating-image"
          style={{
            maxWidth: "900px",
            width: "100%",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
        />

        {/* Heading */}
        <motion.h1
          className="display-3 fw-bold mt-3"
          style={{
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          Invest Smarter.
          <br />
          Trade Faster.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="lead mt-4"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "var(--secondary-text)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
        >
          Experience the next generation of investing with{" "}
          <strong>TradeNest</strong>. Trade stocks, ETFs, mutual funds,
          crypto, and more using powerful analytics, real-time market
          insights, and a lightning-fast platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
        >
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary hero-btn me-3">
              🚀 Get Started
            </button>
          </Link>

          <button className="btn btn-outline-primary hero-outline-btn">
            📺 Live Demo
          </button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="row mt-5 justify-content-center g-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          <div className="col-md-3 col-10">
            <div className="hero-stat-card">
              <h2>10M+</h2>
              <p>Active Investors</p>
            </div>
          </div>

          <div className="col-md-3 col-10">
            <div className="hero-stat-card">
              <h2>₹20T+</h2>
              <p>Trading Volume</p>
            </div>
          </div>

          <div className="col-md-3 col-10">
            <div className="hero-stat-card">
              <h2>99.9%</h2>
              <p>Platform Uptime</p>
            </div>
          </div>
        </motion.div>

        <StockCards />

      </div>
    </section>
  );
}

export default Hero;