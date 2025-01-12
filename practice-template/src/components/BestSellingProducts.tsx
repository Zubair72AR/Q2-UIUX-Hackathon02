import React from "react";
import SubHeading from "./SubHeading";
import { Button } from "./ui/button";
import BestSellingSlider from "./BestSellingSlider";

export default function BestSellingProducts() {
  return (
    <div className="space-y-6 mt-12 px-7 sm:px-8 lg:px-12 2xl:px-24">
      <SubHeading text="This Month" />
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold">Best Selling Products</h2>
        <Button className="hidden sm:block">View All</Button>
      </div>
      <BestSellingSlider />
      <Button className="w-full sm:hidden">View All</Button>
    </div>
  );
}
