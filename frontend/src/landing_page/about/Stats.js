import React from "react";
import {
  Users,
  ShieldCheck,
  TrendingUp,
  Globe,
} from "lucide-react";

function Stats() {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          TradeNest in Numbers
        </h2>

        <p className="text-muted">
          Building a next-generation investment platform powered by AI.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">

          <div className="card border-0 shadow-sm text-center p-4 h-100">

            <Users
              size={45}
              color="#387ED1"
            />

            <h2 className="fw-bold mt-3">
              5K+
            </h2>

            <p className="text-muted">
              Active Investors
            </p>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card border-0 shadow-sm text-center p-4 h-100">

            <TrendingUp
              size={45}
              color="#16a34a"
            />

            <h2 className="fw-bold mt-3">
              ₹10Cr+
            </h2>

            <p className="text-muted">
              Assets Tracked
            </p>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card border-0 shadow-sm text-center p-4 h-100">

            <ShieldCheck
              size={45}
              color="#0d6efd"
            />

            <h2 className="fw-bold mt-3">
              99.9%
            </h2>

            <p className="text-muted">
              Platform Security
            </p>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card border-0 shadow-sm text-center p-4 h-100">

            <Globe
              size={45}
              color="#ff9800"
            />

            <h2 className="fw-bold mt-3">
              24/7
            </h2>

            <p className="text-muted">
              Cloud Availability
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;