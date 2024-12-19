"use client";

import { createContext } from "react";

interface OfferBar {
  [x: string]: any;
}

export const offerContext = createContext({} as OfferBar);

interface Cart {
  [x: string]: any;
}

export const cartContext = createContext({} as Cart);
