"use client";

import { createContext } from "react";

// interface OfferBar {
//   [x: string]: any;
// }

// export const OfferContext = createContext({} as OfferBar);

interface Cart {
  [x: string]: any;
}

export const CartContext = createContext({} as Cart);
