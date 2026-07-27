import React, { useState, useEffect } from "react";
import {
  Search,
  Bell,
  MessageSquare,
  Moon,
  Sun,
  Settings,
  ChevronDown,
  CalendarDays,
  UserCircle,
  Activity,
} from "lucide-react";

import "./DashboardHeader.css";

const DashboardHeader = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const today = new Date();

  const currentHour = today.getHours();

  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="dashboard-header">

      {/* Logo */}
      <div className="header-left">
        <div className="logo">
          <div className="logo-circle">TN</div>

          <div>
            <h3>TradeNest</h3>
            <small>AI Powered Investment Platform</small>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="header-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search Stocks, ETFs, Mutual Funds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Right Side */}
      <div className="header-right">

        <div className="market-status">
          <Activity size={16} />
          <span>Market Open</span>
        </div>

        <div className="date-box">
          <CalendarDays size={18} />
          <span>{formattedDate}</span>
        </div>

        {/* Notifications */}
        <button
          className="header-icon"
          onClick={() => alert("You have 3 new notifications")}
        >
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        {/* Messages */}
        <button
          className="header-icon"
          onClick={() => alert("Opening Messages")}
        >
          <MessageSquare size={20} />
          <span className="notification-badge">5</span>
        </button>

        {/* Dark Mode */}
        <button
          className="header-icon"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Settings */}
        <button
          className="header-icon"
          onClick={() => alert("Opening Settings")}
        >
          <Settings size={20} />
        </button>

        {/* Profile */}
        <div
          className="profile-card"
          onClick={() => alert("Profile")}
          style={{ cursor: "pointer" }}
        >
          <UserCircle size={48} color="#2563EB" />

          <div>
            <h6>{greeting}, Gaurangi</h6>
            <small>Premium Investor</small>
          </div>

          <ChevronDown size={18} />
        </div>

      </div>
    </header>
  );
};

export default DashboardHeader;