import React from "react";
import PortfolioChart from "./PortfolioChart";
import AssetAllocation from "./AssetAllocation";
import "./Summary.css";

import {
  Wallet,
  TrendingUp,
  Landmark,
  Briefcase,
} from "lucide-react";

const dashboardStats = [
  {
    title: "Portfolio Value",
    value: "₹12.45L",
    subtitle: "+12.6% this month",
    icon: <Wallet size={30} />,
    background: "linear-gradient(135deg,#2563EB,#3B82F6)",
    color: "#ffffff",
  },
  {
    title: "Today's Profit",
    value: "+₹8,420",
    subtitle: "+2.45% Today",
    icon: <TrendingUp size={30} color="#22C55E" />,
    background: "#ffffff",
    color: "#111827",
  },
  {
    title: "Wallet Balance",
    value: "₹54,200",
    subtitle: "Ready to Invest",
    icon: <Landmark size={30} color="#2563EB" />,
    background: "#ffffff",
    color: "#111827",
  },
  {
    title: "Active Holdings",
    value: "13",
    subtitle: "Diversified Portfolio",
    icon: <Briefcase size={30} color="#F59E0B" />,
    background: "#ffffff",
    color: "#111827",
  },
];

const watchList = [
  {
    stock: "TCS",
    price: "₹4,120",
    change: "+1.52%",
  },
  {
    stock: "Infosys",
    price: "₹1,648",
    change: "+0.82%",
  },
  {
    stock: "Reliance",
    price: "₹2,930",
    change: "-0.63%",
  },
  {
    stock: "HDFC Bank",
    price: "₹1,745",
    change: "+2.31%",
  },
  {
    stock: "ICICI Bank",
    price: "₹1,315",
    change: "+1.18%",
  },
];

const activities = [
  {
    color: "#22C55E",
    title: "Bought 10 shares of TCS",
    time: "Today • 10:42 AM",
  },
  {
    color: "#EF4444",
    title: "Sold 5 shares of Infosys",
    time: "Yesterday • 3:18 PM",
  },
  {
    color: "#2563EB",
    title: "Added ₹20,000 to Wallet",
    time: "Yesterday • 11:00 AM",
  },
  {
    color: "#F59E0B",
    title: "AI Portfolio Analysis Completed",
    time: "2 Days Ago",
  },
];

const Summary = () => {
  return (
    <div className="summary-page">

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-left">

          <p className="hero-tag">
            AI POWERED INVESTMENT PLATFORM
          </p>

          <h1>
            Welcome Back,
            <br />
            Gaurangi 👋
          </h1>

          <p className="hero-description">
            TradeNest AI analyzed your portfolio this morning.
            Your investments continue to outperform the market.
            Banking and Healthcare remain your strongest sectors
            while your overall portfolio health remains excellent.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              View Portfolio
            </button>

            <button className="secondary-btn">
              AI Insights
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="health-card">

            <h5>Portfolio Health</h5>

            <h1>92%</h1>

            <span className="health-badge">
              Excellent
            </span>

            <hr />

            <p>AI Risk Score</p>

            <h4>Low Risk</h4>

          </div>

        </div>

      </section>

      {/* KPI CARDS */}

      <section className="stats-grid">

        {dashboardStats.map((item, index) => (

          <div
            key={index}
            className="stat-card dashboard-card"
            style={{
              background: item.background,
              color: item.color,
            }}
          >

            <div className="stat-icon">
              {item.icon}
            </div>

            <h6>{item.title}</h6>

            <h2>{item.value}</h2>

            <small>{item.subtitle}</small>

          </div>

        ))}

      </section>

      {/* PORTFOLIO PERFORMANCE */}

      <section className="dashboard-card chart-card">

        <div className="section-header">

          <h3>📈 Portfolio Performance</h3>

          <span className="growth-badge">
            +12.6%
          </span>

        </div>

        <PortfolioChart />

      </section>
            

      {/* ================= BOTTOM SECTION ================= */}

      <section className="bottom-grid">

        {/* Asset Allocation */}

        <div className="dashboard-card card-box">

          <div className="section-header">
            <h3>📊 Asset Allocation</h3>
          </div>

          <AssetAllocation />

        </div>

        {/* Watchlist */}

        <div className="dashboard-card card-box">

          <div className="section-header">

            <h3>⭐ Watchlist</h3>

            <button className="secondary-btn">
              View All
            </button>

          </div>

          <table className="watch-table">

            <thead>

              <tr>

                <th>Stock</th>

                <th>Price</th>

                <th>Change</th>

              </tr>

            </thead>

            <tbody>

              {watchList.map((item, index) => (

                <tr key={index}>

                  <td>{item.stock}</td>

                  <td>{item.price}</td>

                  <td
                    style={{
                      color:
                        item.change.startsWith("-")
                          ? "#EF4444"
                          : "#22C55E",
                      fontWeight: "600",
                    }}
                  >
                    {item.change}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* ================= AI + RECENT ACTIVITY ================= */}

      <section className="bottom-grid">

        {/* AI */}

        <div
          className="dashboard-card card-box"
          style={{
            background:
              "linear-gradient(135deg,#111827,#2563EB)",
            color: "#ffffff",
          }}
        >

          <h2>🤖 AI Investment Assistant</h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
            }}
          >
            Your portfolio health is
            <strong> Excellent (92%)</strong>.
            TradeNest AI recommends increasing exposure
            towards Banking and Healthcare while
            maintaining current allocation in IT.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "35px",
              textAlign: "center",
            }}
          >

            <div>

              <h2 style={{ color: "#22C55E" }}>
                BUY
              </h2>

              <small>Banking</small>

            </div>

            <div>

              <h2 style={{ color: "#F59E0B" }}>
                HOLD
              </h2>

              <small>Technology</small>

            </div>

            <div>

              <h2 style={{ color: "#EF4444" }}>
                SELL
              </h2>

              <small>Auto</small>

            </div>

          </div>

        </div>

        {/* Activity */}

        <div className="dashboard-card card-box">

          <h3 className="mb-4">
            📋 Recent Activity
          </h3>

          {activities.map((item, index) => (

            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "28px",
              }}
            >

              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: item.color,
                  marginTop: "7px",
                }}
              />

              <div
                style={{
                  marginLeft: "16px",
                }}
              >

                <h6
                  style={{
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </h6>

                <small
                  style={{
                    color: "#64748B",
                  }}
                >
                  {item.time}
                </small>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Summary;