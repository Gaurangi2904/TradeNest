import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: true,
      text: "Stock Holdings Overview",
      color: "#111827",
      font: {
        size: 18,
        weight: "bold",
      },
      padding: {
        bottom: 20,
      },
    },

    tooltip: {
      backgroundColor: "#111827",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
      padding: 12,
      cornerRadius: 8,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },

      ticks: {
        color: "#6B7280",
        font: {
          size: 13,
        },
      },
    },

    y: {
      beginAtZero: true,

      grid: {
        color: "#E5E7EB",
      },

      ticks: {
        color: "#6B7280",
      },
    },
  },
};

export function VerticalGraph({ data }) {
  const chartData = {
    ...data,

    datasets: data.datasets.map((dataset) => ({
      ...dataset,

      backgroundColor: [
        "#2563EB",
        "#3B82F6",
        "#60A5FA",
        "#93C5FD",
        "#1D4ED8",
        "#1E40AF",
        "#2563EB",
      ],

      borderRadius: 8,

      borderSkipped: false,

      maxBarThickness: 45,
    })),
  };

  return (
    <div
      style={{
        height: "420px",
        background: "#ffffff",
        borderRadius: "20px",
        padding: "20px",
        marginTop: "25px",
      }}
    >
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
}

export default VerticalGraph;