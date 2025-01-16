import React from "react";
import SubHeading from "./SubHeading";
import CountdownTimer from "./CountdownTimer";
import FlashSalesSlider from "./BestSellingSlider";
import { Button } from "./ui/button";

export default function ExploreOurProducts() {
  return (
    <div className="space-y-6 mt-20 px-7 sm:px-8 lg:px-12 2xl:px-24">
      <SubHeading text="Our Products" />
      <h2 className="text-4xl font-semibold">Flash Sales</h2>
      <FlashSalesSlider />
      <div className="grid place-items-center">
        <Button className="w-full sm:w-auto my-4">View All Products</Button>
      </div>
      <hr />
    </div>
  );
}
