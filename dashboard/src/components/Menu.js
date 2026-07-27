import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingCart,
  Briefcase,
  BarChart3,
  Wallet,
  Grid2x2,
  User,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const Menu = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "Orders",
      path: "/orders",
      icon: <ShoppingCart size={20} />,
    },
    {
      title: "Holdings",
      path: "/holdings",
      icon: <Briefcase size={20} />,
    },
    {
      title: "Positions",
      path: "/positions",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "Funds",
      path: "/funds",
      icon: <Wallet size={20} />,
    },
    {
      title: "Apps",
      path: "/apps",
      icon: <Grid2x2 size={20} />,
    },
  ];

  return (
    <aside
      className="d-flex flex-column shadow-lg"
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "#0F172A",
        color: "#fff",
        padding: "24px",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Logo */}

      <div className="text-center mb-4">

        <img
          src="/logo.png"
          alt="TradeNest"
          style={{
            width: 70,
            height: 70,
            objectFit: "contain",
          }}
        />

        <h3 className="fw-bold mt-3 mb-1">
          TradeNest
        </h3>

        <small style={{ color: "#94A3B8" }}>
          AI Powered Investment
        </small>

      </div>

      {/* Search */}

      <div
        className="d-flex align-items-center mb-4"
        style={{
          background: "#1E293B",
          borderRadius: "14px",
          padding: "12px 15px",
        }}
      >
        <Search size={18} color="#94A3B8" />

        <input
          type="text"
          placeholder="Search..."
          style={{
            marginLeft: 10,
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
          }}
        />

      </div>

      {/* Profile */}

      <div
        className="text-center mb-4"
        style={{
          background: "#1E293B",
          borderRadius: "18px",
          padding: "22px",
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            margin: "auto",
            background: "linear-gradient(135deg,#2563EB,#3B82F6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <User size={32} />
        </div>

        <h5 className="mt-3 mb-1">
          Gaurangi
        </h5>

        <small style={{ color: "#94A3B8" }}>
          Premium Investor
        </small>

      </div>

      {/* Navigation */}

      <div style={{ flex: 1 }}>

        {menuItems.map((item) => {

          const active =
            location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                  padding: "14px 18px",
                  marginBottom: 12,
                  borderRadius: 14,
                  background: active
                    ? "linear-gradient(135deg,#2563EB,#3B82F6)"
                    : "transparent",
                  color: "#fff",
                  transition: ".3s",
                  cursor: "pointer",
                  boxShadow: active
                    ? "0 8px 20px rgba(37,99,235,.35)"
                    : "none",
                }}
              >
                {item.icon}

                <span className="fw-semibold">
                  {item.title}
                </span>

              </div>
            </Link>
          );

        })}

      </div>

      {/* Portfolio Card */}

      <div
        style={{
          borderRadius: 18,
          padding: 20,
          background:
            "linear-gradient(135deg,#2563EB,#3B82F6)",
        }}
      >

        <Sparkles size={28} />

        <h6 className="mt-3">
          Portfolio Value
        </h6>

        <h3 className="fw-bold">
          ₹12.45 L
        </h3>

        <div
          className="d-flex align-items-center justify-content-center mt-2"
        >

          <TrendingUp
            size={18}
            className="me-2"
          />

          <span>
            +12.6% This Month
          </span>

        </div>

      </div>

    </aside>
  );
};

export default Menu;