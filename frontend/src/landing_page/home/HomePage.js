import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Testimonials from "./Testimonials";
import LiveStocks from "./LiveStocks";
import PortfolioChart from "./PortfolioChart";
import TopMovers from "./TopMovers";
import AIStockAssistant from "./AIStockAssistant";

function HomePage() {
  return (
    <>
      <>
  <Hero />
<LiveStocks />
<Features />
<PortfolioChart />
<AIStockAssistant />
<Testimonials />
<TopMovers />
<Awards />
<Stats />
<Pricing />
<Education />
<OpenAccount />
</>
    </>
  );
}

export default HomePage;