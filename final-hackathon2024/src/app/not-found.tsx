"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";

export default function NotFound() {
  // Offer Strip Setup for Navbar Scrolling
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    <div className={`${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} `}>
      <AllProductsLink bgColor="bg-white" lineColor="" />
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
