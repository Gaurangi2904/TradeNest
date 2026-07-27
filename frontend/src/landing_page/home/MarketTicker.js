import React from "react";

const stocks = [
  { name: "NIFTY 50", value: "+0.82%", color: "#22c55e" },
  { name: "SENSEX", value: "+0.74%", color: "#22c55e" },
  { name: "NASDAQ", value: "+1.12%", color: "#22c55e" },
  { name: "BTC", value: "+2.41%", color: "#22c55e" },
  { name: "ETH", value: "-0.36%", color: "#ef4444" },
  { name: "GOLD", value: "+0.25%", color: "#22c55e" },
];

function MarketTicker() {
  return (
    <div className="market-ticker">
      <div className="ticker-track">
        {[...stocks, ...stocks].map((stock, index) => (
          <div className="ticker-item" key={index}>
            <strong>{stock.name}</strong>

            <span
              style={{
                color: stock.color,
                marginLeft: "10px",
                fontWeight: "600",
              }}
            >
              {stock.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketTicker;