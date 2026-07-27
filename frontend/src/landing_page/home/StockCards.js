import React from "react";

const stocks = [
  {
    company: "RELIANCE",
    price: "₹3,245",
    change: "+2.41%",
    color: "#16a34a",
  },
  {
    company: "TCS",
    price: "₹4,182",
    change: "+1.63%",
    color: "#16a34a",
  },
  {
    company: "INFY",
    price: "₹1,892",
    change: "-0.82%",
    color: "#ef4444",
  },
];

function StockCards() {
  return (
    <div className="row justify-content-center mt-5 g-4">
      {stocks.map((stock, index) => (
        <div className="col-md-4" key={index}>
          <div className="stock-card">
            <h4>{stock.company}</h4>

            <h2>{stock.price}</h2>

            <p
              style={{
                color: stock.color,
                fontWeight: "700",
              }}
            >
              {stock.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StockCards;