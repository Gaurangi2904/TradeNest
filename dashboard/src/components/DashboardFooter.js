import React from "react";
import { Mail, Globe, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./DashboardFooter.css";

const DashboardFooter = () => {
  return (
    <footer className="dashboard-footer">

      {/* Left */}
      <div className="footer-section">
        <h3 className="footer-logo">📈 TradeNest</h3>

        <p className="footer-description">
          AI-Powered Smart Investment Platform helping
          investors make data-driven financial decisions
          with confidence.
        </p>

        <small className="copyright">
          © 2026 TradeNest. All Rights Reserved.
        </small>
      </div>

      {/* Center */}
      <div className="footer-section">
        <h5>Technology Stack</h5>

        <div className="tech-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>AWS</span>
          <span>Docker</span>
        </div>
      </div>

      {/* Right */}
      <div className="footer-section">
        <h5>Developer</h5>

        <p>
          Built with <Heart size={15} color="#EF4444" /> by
          <strong> Gaurangi Vijay Kapare</strong>
        </p>

        <div className="footer-social">
          <a href="mailto:kaparegau@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/Gaurangi2904"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/gaurangi-kapare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          <a href="/" aria-label="Website">
            <Globe size={20} />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default DashboardFooter;