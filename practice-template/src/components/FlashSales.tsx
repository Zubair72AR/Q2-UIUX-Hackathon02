import React from "react";
import SubHeading from "./SubHeading";
import CountdownTimer from "./CountdownTimer";
import FlashSalesSlider from "./FlashSalesSlider";

export default function FlashSales() {
  return (
    <div className="px-7 sm:px-8 lg:px-12 2xl:px-24">
      <SubHeading text="Today’s" />
      <CountdownTimer />
      <FlashSalesSlider />
    </div>
  );
}
