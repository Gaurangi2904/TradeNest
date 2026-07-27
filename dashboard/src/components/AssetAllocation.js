import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./AssetAllocation.css";

const portfolioData = [
  { name: "Technology", value: 40 },
  { name: "Banking", value: 20 },
  { name: "Healthcare", value: 15 },
  { name: "Energy", value: 15 },
  { name: "Cash", value: 10 },
];

const COLORS = [
  "#2563EB",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="allocation-tooltip">
        <h6>{payload[0].name}</h6>
        <p>{payload[0].value}% Allocation</p>
      </div>
    );
  }

  return null;
};

const renderLabel = ({ percent }) =>
  `${(percent * 100).toFixed(0)}%`;

function AssetAllocation() {
  return (
    <div className="allocation-card">

      <div className="allocation-header">

        <div>

          <h4>Asset Allocation</h4>

          <p>Portfolio diversification by sector</p>

        </div>

        <span className="allocation-total">
          100%
        </span>

      </div>

      <ResponsiveContainer
        width="100%"
        height={330}
      >
        <PieChart>

          <Pie
            data={portfolioData}
            dataKey="value"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
            label={renderLabel}
            labelLine={false}
          >
            {portfolioData.map((item, index) => (
              <Cell
                key={item.name}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip content={<CustomTooltip />} />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
          />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default AssetAllocation;