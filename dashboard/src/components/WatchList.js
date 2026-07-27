import "./WatchList.css";
import React, { useState, useContext, useMemo } from "react";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  Search,
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  StarBorder,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStocks = useMemo(() => {
    return watchlist.filter((stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const chartData = {
    labels: filteredStocks.map((stock) => stock.name),

    datasets: [
      {
        label: "Stock Price",
        data: filteredStocks.map((stock) => stock.price),

        backgroundColor: [
          "#2563EB",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
          "#06B6D4",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">

      {/* Header */}

      <div className="watchlist-header">
        <h3>My Watchlist</h3>
        <small>Live Market Overview</small>
      </div>

      {/* Search */}

      <div className="search-container">

        <div className="search-box">

          <Search
            style={{
              color: "#64748B",
              fontSize: "20px",
            }}
          />

          <input
            type="text"
            className="search"
            placeholder="Search Stocks, ETFs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        <span className="counts">
          {filteredStocks.length} / 50
        </span>

      </div>

      {/* List */}

      <ul className="list">

        {filteredStocks.length === 0 ? (

          <div className="empty-watchlist">
            No matching stocks found.
          </div>

        ) : (

          filteredStocks.map((stock) => (
            <WatchListItem
              key={stock.name}
              stock={stock}
            />
          ))

        )}

      </ul>

      {/* Chart */}

      <DoughnutChart data={chartData} />

    </div>
  );
};

export default WatchList;

/* ===================================================== */

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">

        {/* Left */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flex: 1,
          }}
        >

          <div className="stock-icon">

            <StarBorder
              style={{
                color: "#94A3B8",
                fontSize: "18px",
              }}
            />

          </div>

          <div>

            <p className={stock.isDown ? "down" : "up"}>
              {stock.name}
            </p>

            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                marginTop: "3px",
              }}
            >

              <small
                style={{
                  color: "#94A3B8",
                }}
              >
                NSE
              </small>

              <span className="market-open">
                ● OPEN
              </span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="itemInfo">

          <span className="price">
            ₹{stock.price.toLocaleString("en-IN")}
          </span>

          {stock.isDown ? (
            <KeyboardArrowDown
              className="down"
              fontSize="small"
            />
          ) : (
            <KeyboardArrowUp
              className="up"
              fontSize="small"
            />
          )}

          <span
            className={stock.isDown ? "down percent" : "up percent"}
          >
            {stock.percent}%
          </span>

        </div>

      </div>

      {showActions && (
        <WatchListActions uid={stock.name} />
      )}

    </li>
  );
};

/* ===================================================== */

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    alert(`Sell functionality for ${uid} will be added soon.`);
  };

  return (
    <span className="actions">

      <span>

       <Tooltip
  title="Buy"
  placement="top"
  arrow
  slots={{
    transition: Grow,
  }}
>

          <button
            className="buy"
            onClick={handleBuyClick}
          >
            Buy
          </button>

        </Tooltip>

        <Tooltip
          title="Sell Stock"
          placement="top"
          arrow
          slots={{
    transition: Grow,
  }}
        >

          <button
            className="sell"
            onClick={handleSellClick}
          >
            Sell
          </button>

        </Tooltip>

        <Tooltip
          title="Analytics"
          placement="top"
          arrow
         slots={{
    transition: Grow,
  }}
        >

          <button className="action">

            <BarChartOutlined className="icon" />

          </button>

        </Tooltip>

        <Tooltip
          title="More Options"
          placement="top"
          arrow
         slots={{
    transition: Grow,
  }}
        >

          <button className="action">

            <MoreHoriz className="icon" />

          </button>

        </Tooltip>

      </span>

    </span>
  );
};