import React from "react";
import SubHeading from "./SubHeading";
import CountdownTimer from "./CountdownTimer";
import FlashSalesSlider from "./FlashSalesSlider";

export default function FlashSales() {
  return (
    <div className="space-y-6 mt-24 px-7 sm:px-8 lg:px-12 2xl:px-24">
      <SubHeading text="Today’s" />
      <div className="flex justify-start items-end gap-24">
        <h2 className="text-4xl font-semibold">Flash Sales</h2>
        <CountdownTimer />
      </div>
      <FlashSalesSlider />
    </div>
  );
}
