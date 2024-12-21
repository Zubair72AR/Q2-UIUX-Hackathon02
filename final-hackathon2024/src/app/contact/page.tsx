"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import React, { useContext } from "react";

export default function Contact() {
  // Offer Strip Setup for Navbar Scrolling
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    <div className={` ${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} `}>
      <AllProductsLink bgColor="bg-[hsl(0,0,97%)]" lineColor="border-none" />
      <h1>Contact</h1>
    </div>
  );
}
