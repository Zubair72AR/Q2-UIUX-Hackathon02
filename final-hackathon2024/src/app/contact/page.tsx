"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import React, { useContext } from "react";

export default function Contact() {
  // Offer Strip Setup for Navbar Scrolling
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    <div className={` ${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} h-screen`}>
      <AllProductsLink bgColor="bg-[hsl(0,0,97%)]" lineColor="border-none" />
      <div className="flex justify-center items-center gap-2 flex-col">
        <h1 className="text-center mt-36 text-2xl font-bold">Contact</h1>
        <p className="max-w-72 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          facere voluptatum quibusdam magni iusto possimus minima distinctio?
          Iusto assumenda quidem culpa molestias, aliquam modi nesciunt a at
          omnis, nihil minus?
        </p>
      </div>
    </div>
  );
}
