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

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

  datasets: [
    {
      label: "Portfolio Value",

      data: [85000, 92000, 97000, 104000, 111000, 119000, 126000],

      borderColor: "#2563EB",

      backgroundColor: "rgba(37,99,235,0.15)",

      fill: true,

      tension: 0.45,

      pointRadius: 4,

      pointHoverRadius: 7,

      pointBackgroundColor: "#2563EB",

      pointBorderColor: "#ffffff",

      pointBorderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,

  maintainAspectRatio: false,

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

      padding: 12,

      displayColors: false,

      callbacks: {
        label: (context) =>
          `Portfolio : ₹${context.raw.toLocaleString("en-IN")}`,
      },
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },

      ticks: {
        color: "#6B7280",
      },
    },

    y: {
      beginAtZero: false,

      grid: {
        color: "#E5E7EB",
      },

      ticks: {
        color: "#6B7280",

        callback: function (value) {
          return "₹" + (value / 1000).toFixed(0) + "k";
        },
      },
    },
  },

  elements: {
    line: {
      borderWidth: 3,
    },
  },
};

function PortfolioChart() {
  return (
    <div
      style={{
        width: "100%",
        height: "350px",
      }}
    >
      <Line data={chartData} options={options} />
    </div>
  );
}

export default PortfolioChart;