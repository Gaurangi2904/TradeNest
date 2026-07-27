import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="TradeNest Pro"
        productDesription="A powerful web trading platform offering live market data, advanced interactive charts, AI-powered investment insights, and lightning-fast order execution for modern investors."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="TradeNest Dashboard"
        productDesription="Monitor your complete portfolio with detailed analytics, profit & loss reports, asset allocation, watchlists, and real-time investment performance."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Smart Portfolio"
        productDesription="Track your investments, monitor long-term wealth growth, analyze portfolio diversification, and receive personalized AI recommendations."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="TradeNest API"
        productDesription="Developer-friendly REST APIs for fintech applications, algorithmic trading, portfolio management, and seamless third-party integrations."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="TradeNest Learn"
        productDesription="Master investing through beginner-friendly lessons, trading strategies, financial planning guides, interactive tutorials, and market education resources."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p
        className="text-center mt-5 mb-5"
        style={{
          color: "#6c757d",
          fontSize: "18px",
        }}
      >
        Discover how TradeNest combines Artificial Intelligence,
        Cloud Computing, Real-Time Analytics, and Bank-Grade Security
        to build the next generation investing platform.
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;