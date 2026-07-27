import React, { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const marginRequired =
    Number(stockQuantity || 0) * Number(stockPrice || 0);

  const handleBuyClick = async () => {
    if (!stockQuantity || stockQuantity <= 0) {
      alert("Enter a valid quantity.");
      return;
    }

    if (!stockPrice || stockPrice <= 0) {
      alert("Enter a valid stock price.");
      return;
    }

    try {
      setLoading(true);

      await axios.post("https://tradenest-0cbw.onrender.com/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      closeBuyWindow();
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="buy-overlay">

      <div className="buy-window">

        <div className="buy-header">

          <div>

            <h3>Buy Stock</h3>

            <p>{uid}</p>

          </div>

          <button
            className="close-btn"
            onClick={closeBuyWindow}
          >
            ✕
          </button>

        </div>

        <div className="buy-body">

          <div className="input-group">

            <label>Quantity</label>

            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />

          </div>

          <div className="input-group">

            <label>Price (₹)</label>

            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />

          </div>

          <div className="margin-box">

            <span>Estimated Investment</span>

            <strong>
              ₹ {marginRequired.toLocaleString()}
            </strong>

          </div>

        </div>

        <div className="buy-footer">

          <button
            className="cancel-btn"
            onClick={closeBuyWindow}
          >
            Cancel
          </button>

          <button
            className="buy-btn"
            onClick={handleBuyClick}
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Buy Now"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default BuyActionWindow;