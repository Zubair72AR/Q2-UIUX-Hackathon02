"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";

export default function NotFound() {
  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible } = useContext(OfferContext);

  return (
    // Offer Strip Margin Top Setup for Navbar Scrolling
    <div
      className={`${
        isOfferVisible ? "mt-[97px] md:mt-[110px]" : "mt-[61px] md:mt-[74px]"
      } `}
    >
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-white" lineColor="" />

      {/* 404 Error Message */}
      <div className="flex justify-center items-center flex-col gap-3 my-48">
        <h1 className="font-bold text-2xl text-red-500 leading-none">
          Error 404
        </h1>
        <p>Oops! This page was not found</p>
        <Button variant={"destructive"}>Back to Home</Button>
      </div>
    </div>
  );
}
