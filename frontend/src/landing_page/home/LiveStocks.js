import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const stocks = [
  {
    name: "RELIANCE",
    price: "₹2,982.60",
    change: "+2.18%",
    positive: true,
  },
  {
    name: "TCS",
    price: "₹4,188.40",
    change: "+1.22%",
    positive: true,
  },
  {
    name: "INFY",
    price: "₹1,621.10",
    change: "-0.82%",
    positive: false,
  },
  {
    name: "HDFC BANK",
    price: "₹1,742.30",
    change: "+0.91%",
    positive: true,
  },
];

export default function LiveStocks() {
  return (
    <section className="container my-5">

      <motion.h2
        className="text-center fw-bold mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Live Market Snapshot
      </motion.h2>

      <div className="row">

        {stocks.map((stock, index) => (
          <motion.div
            key={index}
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="stock-card">

              <h5>{stock.name}</h5>

              <h3>{stock.price}</h3>

              <p
                className={
                  stock.positive
                    ? "text-success"
                    : "text-danger"
                }
              >
                {stock.positive ? (
                  <TrendingUp size={18} />
                ) : (
                  <TrendingDown size={18} />
                )}

                {" "}

                {stock.change}
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}