import React from "react";

function CreateTicket() {
  const supportTopics = [
    {
      title: "Account Services",
      links: [
        "Open a Trading Account",
        "Complete KYC Verification",
        "Update Personal Details",
        "Nominee Registration",
        "Close Trading Account",
        "Account Security",
      ],
    },
    {
      title: "Trading & Orders",
      links: [
        "Place Buy/Sell Orders",
        "Order Status",
        "Order Rejections",
        "Intraday Trading",
        "Margin Trading",
        "Trading Hours",
      ],
    },
    {
      title: "Portfolio & Investments",
      links: [
        "Portfolio Performance",
        "Mutual Funds",
        "ETF Investments",
        "Dividend Tracking",
        "Profit & Loss Reports",
        "Watchlist Management",
      ],
    },
    {
      title: "Payments & Funds",
      links: [
        "Add Funds",
        "Withdraw Funds",
        "Transaction History",
        "Bank Account Update",
        "UPI Payments",
        "Payment Issues",
      ],
    },
    {
      title: "Security & Privacy",
      links: [
        "Reset Password",
        "Two-Factor Authentication",
        "Device Management",
        "Privacy Settings",
        "Report Fraud",
        "Login Issues",
      ],
    },
    {
      title: "Technical Support",
      links: [
        "App Not Working",
        "Website Issues",
        "Live Market Data",
        "API Documentation",
        "Bug Report",
        "Contact Support",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">TradeNest Help Center</h1>

        <p
          className="mt-3"
          style={{ color: "var(--secondary-text)" }}
        >
          Choose a topic below to find answers or create a support ticket.
        </p>
      </div>

      <div className="row">
        {supportTopics.map((topic, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="support-card p-4 h-100">
              <h4 className="mb-4">📌 {topic.title}</h4>

              {topic.links.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className="btn btn-link d-block text-start p-0 mb-3 text-decoration-none"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;