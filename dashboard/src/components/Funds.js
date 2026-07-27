import React from "react";
import {
  Wallet,
  CreditCard,
  Landmark,
  TrendingUp,
  ArrowDownCircle,
  ArrowUpCircle,
  ShieldCheck,
} from "lucide-react";

const Funds = () => {
  return (
    <div className="container-fluid p-4">

      {/* Top Banner */}

      <div
        className="card border-0 shadow-lg mb-4"
        style={{
          borderRadius: "20px",
          background: "linear-gradient(135deg,#2563EB,#1E40AF)",
          color: "white",
        }}
      >
        <div className="card-body d-flex justify-content-between align-items-center flex-wrap">

          <div>
            <h3 className="fw-bold">Wallet Balance</h3>

            <h1 className="fw-bold mt-2">
              ₹4,043.10
            </h1>

            <p className="mb-0">
              Instant UPI deposits with zero transaction fee.
            </p>
          </div>

          <div className="mt-3 mt-lg-0">

            <button className="btn btn-light btn-lg me-3">
              <ArrowDownCircle size={18} className="me-2" />
              Add Funds
            </button>

            <button className="btn btn-outline-light btn-lg">
              <ArrowUpCircle size={18} className="me-2" />
              Withdraw
            </button>

          </div>

        </div>
      </div>

      {/* Summary Cards */}

      <div className="row g-4 mb-4">

        <div className="col-lg-3">

          <div className="card border-0 shadow h-100">

            <div className="card-body">

              <Wallet color="#2563EB" size={35} />

              <h6 className="mt-3 text-muted">
                Available Margin
              </h6>

              <h3 className="fw-bold text-primary">
                ₹4,043
              </h3>

            </div>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card border-0 shadow h-100">

            <div className="card-body">

              <CreditCard color="#F59E0B" size={35} />

              <h6 className="mt-3 text-muted">
                Used Margin
              </h6>

              <h3 className="fw-bold">
                ₹3,757
              </h3>

            </div>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card border-0 shadow h-100">

            <div className="card-body">

              <Landmark color="#22C55E" size={35} />

              <h6 className="mt-3 text-muted">
                Available Cash
              </h6>

              <h3 className="fw-bold text-success">
                ₹4,043
              </h3>

            </div>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card border-0 shadow h-100">

            <div className="card-body">

              <TrendingUp color="#8B5CF6" size={35} />

              <h6 className="mt-3 text-muted">
                Portfolio Growth
              </h6>

              <h3 className="fw-bold">
                +12.6%
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Account Details */}

      <div className="row">

        <div className="col-lg-8">

          <div
            className="card border-0 shadow-lg"
            style={{ borderRadius: "20px" }}
          >

            <div className="card-body">

              <h4 className="fw-bold mb-4">
                Equity Account
              </h4>

              <table className="table table-hover align-middle">

                <tbody>

                  <tr>
                    <td>Opening Balance</td>
                    <td className="fw-bold">₹4,043.10</td>
                  </tr>

                  <tr>
                    <td>Pay In</td>
                    <td>₹4,064.00</td>
                  </tr>

                  <tr>
                    <td>SPAN Margin</td>
                    <td>₹0.00</td>
                  </tr>

                  <tr>
                    <td>Delivery Margin</td>
                    <td>₹0.00</td>
                  </tr>

                  <tr>
                    <td>Exposure</td>
                    <td>₹0.00</td>
                  </tr>

                  <tr>
                    <td>Options Premium</td>
                    <td>₹0.00</td>
                  </tr>

                  <tr>
                    <td>Liquid Collateral</td>
                    <td>₹0.00</td>
                  </tr>

                  <tr>
                    <td>Equity Collateral</td>
                    <td>₹0.00</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* Commodity */}

        <div className="col-lg-4">

          <div
            className="card border-0 shadow-lg h-100 text-center"
            style={{ borderRadius: "20px" }}
          >

            <div className="card-body d-flex flex-column justify-content-center">

              <ShieldCheck
                size={70}
                color="#2563EB"
              />

              <h4 className="fw-bold mt-4">
                Commodity Account
              </h4>

              <p className="text-muted">
                You haven't activated commodity trading yet.
              </p>

              <button className="btn btn-primary mt-3">
                Open Commodity Account
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Funds;