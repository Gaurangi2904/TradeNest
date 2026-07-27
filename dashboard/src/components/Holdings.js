import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Briefcase,
  Wallet,
  TrendingUp,
  BarChart3,
} from "lucide-react";

import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3002/allHoldings"
        );
        setAllHoldings(res.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load holdings.");
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  // Portfolio Calculations

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const totalPnL = currentValue - totalInvestment;

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Current Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "#2563EB",
        borderRadius: 8,
      },
    ],
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div
          className="spinner-border text-primary"
          role="status"
        />
        <p className="mt-3">Loading Holdings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-4">
        {error}
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">

      <h2 className="fw-bold mb-4">
        Holdings ({allHoldings.length})
      </h2>

      {/* Summary Cards */}

      <div className="row g-4 mb-4">

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow h-100">
            <div className="card-body">
              <Wallet color="#2563EB" size={30} />
              <h6 className="mt-3 text-muted">
                Total Investment
              </h6>
              <h3 className="fw-bold">
                ₹{totalInvestment.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow h-100">
            <div className="card-body">
              <TrendingUp color="#22C55E" size={30} />
              <h6 className="mt-3 text-muted">
                Current Value
              </h6>
              <h3 className="fw-bold text-success">
                ₹{currentValue.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow h-100">
            <div className="card-body">
              <BarChart3
                color={totalPnL >= 0 ? "#22C55E" : "#EF4444"}
                size={30}
              />
              <h6 className="mt-3 text-muted">
                Total P&L
              </h6>

              <h3
                className={
                  totalPnL >= 0
                    ? "fw-bold text-success"
                    : "fw-bold text-danger"
                }
              >
                ₹{totalPnL.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow h-100">
            <div className="card-body">
              <Briefcase color="#F59E0B" size={30} />
              <h6 className="mt-3 text-muted">
                Total Holdings
              </h6>
              <h3 className="fw-bold">
                {allHoldings.length}
              </h3>
            </div>
          </div>
        </div>

      </div>

      {/* Holdings Table */}

      <div
        className="card border-0 shadow-lg mb-5"
        style={{ borderRadius: "18px" }}
      >
        <div className="card-body">

          <h4 className="fw-bold mb-4">
            Portfolio Holdings
          </h4>

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead className="table-light">

                <tr>
                  <th>Instrument</th>
                  <th>Qty</th>
                  <th>Avg Cost</th>
                  <th>LTP</th>
                  <th>Current Value</th>
                  <th>P&L</th>
                  <th>Net Change</th>
                  <th>Day Change</th>
                </tr>

              </thead>

              <tbody>

                {allHoldings.map((stock, index) => {

                  const current =
                    stock.price * stock.qty;

                  const pnl =
                    current -
                    stock.avg * stock.qty;

                  return (
                    <tr key={index}>

                      <td className="fw-semibold">
                        {stock.name}
                      </td>

                      <td>{stock.qty}</td>

                      <td>
                        ₹{stock.avg.toFixed(2)}
                      </td>

                      <td>
                        ₹{stock.price.toFixed(2)}
                      </td>

                      <td>
                        ₹{current.toFixed(2)}
                      </td>

                      <td
                        className={
                          pnl >= 0
                            ? "text-success fw-bold"
                            : "text-danger fw-bold"
                        }
                      >
                        ₹{pnl.toFixed(2)}
                      </td>

                      <td
                        className={
                          pnl >= 0
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {stock.net}
                      </td>

                      <td
                        className={
                          stock.isLoss
                            ? "text-danger"
                            : "text-success"
                        }
                      >
                        {stock.day}
                      </td>

                    </tr>
                  );

                })}

              </tbody>

            </table>

          </div>

        </div>
      </div>

      {/* Portfolio Chart */}

      <div
        className="card border-0 shadow-lg p-4"
        style={{ borderRadius: "18px" }}
      >

        <h4 className="fw-bold mb-4">
          Portfolio Performance
        </h4>

        <VerticalGraph data={data} />

      </div>

    </div>
  );
};

export default Holdings;