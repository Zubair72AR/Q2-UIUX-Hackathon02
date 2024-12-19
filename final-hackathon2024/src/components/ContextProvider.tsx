"use client";
import { useState } from "react";
import { offerContext } from "./Context";
export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [offer, setOffer] = useState([]);
  const [addCart, setAddCart] = useState([]);
  return (
    <div>
      <offerContext.Provider value={{ offer, setOffer, addCart, setAddCart }}>
        {children}
      </offerContext.Provider>
    </div>
  );
}
