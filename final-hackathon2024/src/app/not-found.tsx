"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import React, { useContext } from "react";

export default function NotFound() {
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    <div className={`${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} `}>
      <AllProductsLink bgColor="bg-white" lineColor="" />
      <div className="h-[600px] grid place-items-center">Not Found</div>
    </div>
  );
}
