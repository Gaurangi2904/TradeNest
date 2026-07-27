import React from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Moon,
  Search,
  UserCircle,
  Settings,
  ChevronDown,
  CalendarDays,
} from "lucide-react";

const TopBar = () => {
  const today = new Date();

  const currentDate = today.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <nav
      className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">

        {/* Logo */}

        <Link
          to="/"
          className="navbar-brand fw-bold fs-3 text-primary d-flex align-items-center"
          style={{ textDecoration: "none" }}
        >
          📈 TradeNest
        </Link>

        {/* Search */}

        <div
          className="d-none d-lg-flex align-items-center"
          style={{
            width: "420px",
            background: "#F3F4F6",
            borderRadius: "12px",
            padding: "10px 15px",
          }}
        >
          <Search size={18} color="#6B7280" />

          <input
            type="text"
            placeholder="Search Stocks, ETFs, Mutual Funds..."
            className="form-control border-0 bg-transparent ms-2"
            style={{
              boxShadow: "none",
            }}
          />
        </div>

        {/* Right Side */}

        <div className="d-flex align-items-center gap-4">

          {/* Date */}

          <div
            className="d-none d-md-flex align-items-center"
            style={{
              color: "#6B7280",
              fontWeight: "500",
            }}
          >
            <CalendarDays
              size={18}
              className="me-2"
            />

            {currentDate}
          </div>

          {/* Notification */}

          <div
            style={{
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Bell size={22} />

            <span
              className="badge bg-danger"
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                fontSize: "10px",
              }}
            >
              3
            </span>
          </div>

          {/* Dark Mode */}

          <Moon
            size={22}
            style={{ cursor: "pointer" }}
          />

          {/* Settings */}

          <Settings
            size={22}
            style={{ cursor: "pointer" }}
          />

          {/* Profile */}

          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <UserCircle
              size={42}
              color="#2563EB"
            />

            <div className="ms-2 me-2">

              <div className="fw-bold">
                Gaurangi
              </div>

              <small className="text-muted">
                Premium Investor
              </small>

            </div>

            <ChevronDown
              size={18}
              color="#6B7280"
            />

          </div>

        </div>

      </div>
    </nav>
  );
};

export default TopBar;