import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
   datasets: [
  {
    label: "Portfolio Value",

    data: [
      85000,
      92000,
      97000,
      104000,
      110000,
      118000,
      126000,
    ],

    borderColor: "#387ED1",

    backgroundColor: "rgba(56,126,209,0.18)",

    borderWidth: 4,

    fill: true,

    tension: 0.45,

    pointRadius: 5,

    pointHoverRadius: 8,

    pointBackgroundColor: "#387ED1",

    pointBorderColor: "#ffffff",

    pointBorderWidth: 3,
  },
]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,

  animation: {
    duration: 1800,
    easing: "easeOutQuart",
  },

  interaction: {
    mode: "index",
    intersect: false,
  },

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      backgroundColor: "#111827",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
      padding: 14,
      displayColors: false,
      cornerRadius: 12,

      callbacks: {
        label: function (context) {
          return `Portfolio: ₹${context.parsed.y.toLocaleString()}`;
        },
      },
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        color: "rgba(120,120,120,0.15)",
      },

      ticks: {
        callback: function (value) {
          return "₹" + value / 1000 + "k";
        },
      },
    },
  },
};

function PortfolioChart() {
  return (
   <div className="portfolio-chart">

  {/* Header */}
  <div className="portfolio-header">

    <div>
      <h2>Portfolio Performance</h2>
      <p>Last 7 Months</p>
    </div>

    <div className="portfolio-profit">
      <h3>+62.3%</h3>
      <span>Total Return</span>
    </div>

  </div>

  {/* Summary Cards */}
  <div className="portfolio-summary">

    <div className="summary-card">
      <h4>Portfolio Value</h4>
      <h3>₹12,46,320</h3>
    </div>

    <div className="summary-card">
      <h4>Today's Profit</h4>
      <h3 className="text-success">+₹18,420</h3>
    </div>

    <div className="summary-card">
      <h4>Invested</h4>
      <h3>₹7,68,000</h3>
    </div>

  </div>

 <div
  style={{
    height: "420px",
  }}
>
  <Line
    data={data}
    options={options}
  />
</div>

</div>
  );
}

export default PortfolioChart;