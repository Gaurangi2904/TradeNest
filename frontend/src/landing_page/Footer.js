import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#fff",
        marginTop: "80px",
      }}
    >
      <div className="container py-5">

        <div className="row">

          {/* Company */}

          <div className="col-lg-4 mb-4">

            <h3 className="fw-bold text-primary">
              TradeNest
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              AI Powered Smart Investment Platform built using
              React, Node.js, MongoDB, AWS and modern cloud
              technologies.
            </p>
          <div className="d-flex gap-3 mt-4">

  <a
    href="https://github.com/Gaurangi2904"
    target="_blank"
    rel="noreferrer"
    className="btn btn-light rounded-circle shadow-sm"
  >
    <FaGithub color="#171515" />
  </a>

  <a
    href="https://linkedin.com/in/gaurangi-kapare"
    target="_blank"
    rel="noreferrer"
    className="btn btn-light rounded-circle shadow-sm"
  >
    <FaLinkedin color="#0A66C2" />
  </a>

  <a
    href="mailto:kaparegau@gmail.com"
    className="btn btn-light rounded-circle shadow-sm"
  >
    <FaEnvelope color="#EA4335" />
  </a>

  <a
    href="#"
    className="btn btn-light rounded-circle shadow-sm"
  >
    <FaInstagram color="#E1306C" />
  </a>

</div>
            
          
          </div>

          {/* Quick Links */}

          <div className="col-lg-2 col-md-6 mb-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled mt-3">

              <li className="mb-2">Home</li>

              <li className="mb-2">About</li>

              <li className="mb-2">Products</li>

              <li className="mb-2">Pricing</li>

              <li className="mb-2">Support</li>

            </ul>

          </div>

          {/* Technologies */}

          <div className="col-lg-3 col-md-6 mb-4">

            <h5>Technology</h5>

            <ul className="list-unstyled mt-3">

              <li>React.js</li>

              <li>Node.js</li>

              <li>MongoDB</li>

              <li>Express.js</li>

              <li>AWS Cloud</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3">

            <h5>Developer</h5>

            <p className="mt-3 mb-1">
              <strong>Gaurangi Vijay Kapare</strong>
            </p>

            <p style={{ color: "#cbd5e1" }}>
              Full Stack Developer
            </p>

            <p style={{ color: "#cbd5e1" }}>
              Pune, Maharashtra, India
            </p>

            <p style={{ color: "#cbd5e1" }}>
              kaparegau@gmail.com
            </p>

          </div>

        </div>

        <hr
          style={{
            borderColor: "#334155",
          }}
        />

        <div className="text-center">

          <small style={{ color: "#94a3b8" }}>
            © 2026 TradeNest. Designed & Developed by
            <strong> Gaurangi Vijay Kapare</strong>.
            All Rights Reserved.
          </small>

        </div>

      </div>
    </footer>
  );
}

export default Footer;