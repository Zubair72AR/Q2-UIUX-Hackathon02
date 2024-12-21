"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import React, { useContext } from "react";

export default function Blog() {
  // Offer Strip Setup for Navbar Scrolling
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);
  return (
    <div className={` ${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} `}>
      <AllProductsLink bgColor="bg-[hsl(0,0,97%)]" lineColor="border-none" />
      <div className="flex justify-center items-center flex-col h-[80vh]">
        <h1 className="text-3xl">Blog</h1>
        <p className="text-xs max-w-[400px] text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          necessitatibus deserunt dolor quas placeat expedita quisquam nobis ab
          aspernatur, odit commodi officia quod, iure nemo obcaecati
          voluptatibus labore? Cum, dolor? Similique odit facilis quaerat, sequi
          corrupti magnam, neque veritatis labore assumenda beatae cum ratione
          cupiditate nulla ad inventore illum? Veniam officiis quas pariatur
          facere quod ratione. Cum, necessitatibus veritatis! Reprehenderit.
        </p>
      </div>
    </div>
  );
}
