import ABrand from "@/components/ABrand";
import AllProductsLink from "@/components/AllProductsLink";
import JoinClub from "@/components/JoinClub";
import MakesOurBrand from "@/components/MakesOurBrand";
import OurService from "@/components/OurService";
import StartedSmallIdea from "@/components/StartedSmallIdea";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <AllProductsLink />
      <ABrand />
      <StartedSmallIdea />
      <OurService />
      <MakesOurBrand />
      <JoinClub />
    </div>
  );
}
