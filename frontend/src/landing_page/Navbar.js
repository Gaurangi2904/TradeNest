import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { TrendingUp } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: darkMode ? "#111827" : "#ffffff",
        transition: "0.3s",
      }}
    >
      <div className="container p-2">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <TrendingUp
            size={32}
            color={darkMode ? "#4F9CFF" : "#387ED1"}
          />

          <span
            style={{
              marginLeft: "10px",
              fontSize: "28px",
              fontWeight: "700",
              color: darkMode ? "#ffffff" : "#222222",
            }}
          >
            TradeNest
          </span>
        </Link>

        {/* Mobile Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: darkMode ? "#fff" : "#222" }}
                to="/signup"
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: darkMode ? "#fff" : "#222" }}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: darkMode ? "#fff" : "#222" }}
                to="/product"
              >
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: darkMode ? "#fff" : "#222" }}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: darkMode ? "#fff" : "#222" }}
                to="/support"
              >
                Support
              </Link>
            </li>
          </ul>

          {/* Dark / Light Mode Button */}
          <button
            className="btn btn-outline-primary rounded-circle ms-3"
            onClick={() => setDarkMode(!darkMode)}
            style={{
              width: "45px",
              height: "45px",
            }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;