import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
} from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const openBuyWindow = useCallback((uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  }, []);

  const closeBuyWindow = useCallback(() => {
    setSelectedStockUID("");
    setIsBuyWindowOpen(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      openBuyWindow,
      closeBuyWindow,
    }),
    [openBuyWindow, closeBuyWindow]
  );

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;