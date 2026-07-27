import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";
import WatchList from "./WatchList";

import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

import { GeneralContextProvider } from "./GeneralContext";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <GeneralContextProvider>

      <div className="dashboard">

        {/* Sidebar */}

        <aside className="dashboard-sidebar">
          <WatchList />
        </aside>

        {/* Main Content */}

        <div className="dashboard-main">

          <DashboardHeader />

          <main className="dashboard-content">

            <Routes>

              <Route path="/" element={<Summary />} />

              <Route path="/orders" element={<Orders />} />

              <Route path="/holdings" element={<Holdings />} />

              <Route path="/positions" element={<Positions />} />

              <Route path="/funds" element={<Funds />} />

              <Route path="/apps" element={<Apps />} />

            </Routes>

          </main>

          <DashboardFooter />

        </div>

      </div>

    </GeneralContextProvider>
  );
};

export default Dashboard;