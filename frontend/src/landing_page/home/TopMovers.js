import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const gainers = [
  { name: "RELIANCE", price: "₹2,982", change: "+3.12%" },
  { name: "TCS", price: "₹4,188", change: "+2.41%" },
  { name: "HDFC BANK", price: "₹1,742", change: "+1.96%" },
];

const losers = [
  { name: "INFY", price: "₹1,621", change: "-1.14%" },
  { name: "WIPRO", price: "₹552", change: "-0.86%" },
  { name: "TECHM", price: "₹1,486", change: "-0.73%" },
];

function TopMovers() {
  return (
    <section className="container my-5">

      <motion.h2
        className="text-center fw-bold mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        📈 Top Movers Today
      </motion.h2>

      <div className="row">

        {/* Gainers */}
        <div className="col-lg-6 mb-4">
          <div className="movers-card">

            <h3 className="text-success mb-4">
              <TrendingUp size={24} /> Top Gainers
            </h3>

            {gainers.map((stock, index) => (
              <div
                className="stock-row"
                key={index}
              >
                <div>
                  <h5>{stock.name}</h5>
                  <small>{stock.price}</small>
                </div>

                <span className="badge bg-success">
                  {stock.change}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* Losers */}
        <div className="col-lg-6 mb-4">
          <div className="movers-card">

            <h3 className="text-danger mb-4">
              <TrendingDown size={24} /> Top Losers
            </h3>

            {losers.map((stock, index) => (
              <div
                className="stock-row"
                key={index}
              >
                <div>
                  <h5>{stock.name}</h5>
                  <small>{stock.price}</small>
                </div>

                <span className="badge bg-danger">
                  {stock.change}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default TopMovers;