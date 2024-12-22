"use client";
import ABrand from "@/components/ABrand";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import JoinClub from "@/components/JoinClub";
import MakesOurBrand from "@/components/MakesOurBrand";
import OurService from "@/components/OurService";
import StartedSmallIdea from "@/components/StartedSmallIdea";
import React, { useContext } from "react";

export default function AboutUs() {
  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    // Offer Strip Margin Top Setup for Navbar Scrolling
    <div
      className={` ${
        isOfferVisible ? "mt-[97px] md:mt-[110px]" : "mt-[61px] md:mt-[74px]"
      } `}
    >
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-[hsl(0,0,97%)]" lineColor="border-none" />

      {/* Other Components Data */}
      <ABrand />
      <StartedSmallIdea />
      <OurService />
      <MakesOurBrand />
      <JoinClub />
    </div>
  );
}
