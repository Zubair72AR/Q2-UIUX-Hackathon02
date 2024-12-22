"use client";

import { createContext, useState } from "react";

// Define the OfferBar interface
interface OfferBar {
  [x: string]: any;
}

// Create the OfferContext
export const OfferContext = createContext({} as OfferBar);

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Offer Strip Margin Top Setup for Navbar Scrolling
  const [isOfferVisible, setIsOfferVisible] = useState(true);

  return (
    <OfferContext.Provider value={{ isOfferVisible, setIsOfferVisible }}>
      {children}
    </OfferContext.Provider>
  );
}
