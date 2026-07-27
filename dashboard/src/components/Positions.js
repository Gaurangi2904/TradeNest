import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  const totalPnL = positions.reduce((total, stock) => {
    return total + (stock.price - stock.avg) * stock.qty;
  }, 0);

  const totalValue = positions.reduce((total, stock) => {
    return total + stock.price * stock.qty;
  }, 0);

  return (
    <div className="container-fluid">

      {/* Heading */}

      <h3 className="title mb-4">
        Open Positions ({positions.length})
      </h3>

      {/* Table */}

      <div className="card shadow-sm border-0">

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead className="table-light">

              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Avg Price</th>
                <th>Market Price</th>
                <th>Current Value</th>
                <th>P&L</th>
                <th>Today's Change</th>
              </tr>

            </thead>

            <tbody>

              {positions.map((stock) => {

                const currentValue = stock.price * stock.qty;

                const pnl =
                  (stock.price - stock.avg) * stock.qty;

                const profitClass =
                  pnl >= 0 ? "text-success fw-bold" : "text-danger fw-bold";

                const dayClass =
                  stock.isLoss
                    ? "text-danger"
                    : "text-success";

                return (

                  <tr
                    key={`${stock.product}-${stock.name}`}
                  >

                    <td>{stock.product}</td>

                    <td className="fw-semibold">
                      {stock.name}
                    </td>

                    <td>{stock.qty}</td>

                    <td>₹{stock.avg.toFixed(2)}</td>

                    <td>₹{stock.price.toFixed(2)}</td>

                    <td>
                      ₹{currentValue.toLocaleString("en-IN")}
                    </td>

                    <td className={profitClass}>
                      ₹{pnl.toFixed(2)}
                    </td>

                    <td className={dayClass}>
                      {stock.day}
                    </td>

                  </tr>

                );
              })}

            </tbody>

          </table>

        </div>

      </div>

      {/* Summary */}

      <div className="row mt-4 g-4">

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4 text-center">

            <h5 className="text-muted">
              Total Position Value
            </h5>

            <h3 className="fw-bold text-primary">
              ₹{totalValue.toLocaleString("en-IN")}
            </h3>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4 text-center">

            <h5 className="text-muted">
              Net P&L
            </h5>

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

        <div className="col-md-4">

          <div className="card border-0 shadow-sm p-4 text-center">

            <h5 className="text-muted">
              Open Positions
            </h5>

            <h3 className="fw-bold">
              {positions.length}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Positions;