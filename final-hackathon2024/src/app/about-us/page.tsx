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
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    <div className={` ${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} `}>
      <AllProductsLink bgColor="bg-[hsl(0,0,97%)]" lineColor="border-none" />
      <ABrand />
      <StartedSmallIdea />
      <OurService />
      <MakesOurBrand />
      <JoinClub />
      <button onClick={() => setIsOfferVisible(false)}>aaaa</button>
    </div>
  );
}
