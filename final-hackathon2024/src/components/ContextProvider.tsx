"use client";
import { useState } from "react";
import { CartContext } from "./Context";

type ObjCart = {
  path: string;
  id: number;
  name: string;
  category: string;
  type: string;
  price: number;
  brand: string;
  dateAdded: string;
  image: string;
  className?: string;
  description: string;
  specification: string[];
  Dimensions: string[];
};

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [offer, setOffer] = useState(true);
  const [addCart, setAddCart] = useState<ObjCart[]>([]);
  const add = (objCart: ObjCart) => setAddCart([...addCart, objCart]);
  return (
    <div>
      <CartContext.Provider value={{ offer, setOffer, addCart, add }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}
