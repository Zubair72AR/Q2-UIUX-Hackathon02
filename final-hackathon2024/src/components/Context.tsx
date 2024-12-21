"use client";

import { createContext, useState } from "react";

interface OfferBar {
  [x: string]: any;
}

export const OfferContext = createContext({} as OfferBar);

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOfferVisible, setIsOfferVisible] = useState(true);

  return (
    <OfferContext.Provider value={{ isOfferVisible, setIsOfferVisible }}>
      {children}
    </OfferContext.Provider>
  );
}
