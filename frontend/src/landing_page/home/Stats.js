import React from "react";
import { Users, BarChart3, ShieldCheck, TrendingUp } from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <Users size={40} color="#387ED1" />,
      value: "10M+",
      title: "Active Investors",
    },
    {
      icon: <BarChart3 size={40} color="#387ED1" />,
      value: "₹20T+",
      title: "Trading Volume",
    },
    {
      icon: <ShieldCheck size={40} color="#387ED1" />,
      value: "99.9%",
      title: "Platform Uptime",
    },
    {
      icon: <TrendingUp size={40} color="#387ED1" />,
      value: "250+",
      title: "Stocks Tracked",
    },
  ];

  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">
          TradeNest by the Numbers
        </h2>

        <p className="text-muted">
          Trusted by investors with secure, fast and intelligent investing.
        </p>
      </div>

      <div className="row g-4">

        {stats.map((item, index) => (

          <div className="col-lg-3 col-md-6" key={index}>

          <div className="stats-card text-center p-4 h-100">
              <div className="mb-3">
                {item.icon}
              </div>

              <h2 className="fw-bold text-primary">
                {item.value}
              </h2>

              <p className="mb-0">
                {item.title}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;