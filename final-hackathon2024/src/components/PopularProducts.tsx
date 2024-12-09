import React from "react";
import ImageComp from "./ImageComp";
import { Button } from "./ui/button";
import Image from "next/image";

export default function PopularProducts() {
  return (
    <div className="space-y-8 py-14 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      <h2 className="text-3xl md:text-4xl">Our popular products</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 justify-between">
        <div className="col-span-2">
          <Image
            src="/Large.png"
            alt="Large Sofa"
            width={1000}
            height={200}
            className="object-contain"
          />
          <h3 className="text-base md:text-lg lg:text-xl mt-1 md:mt-3">
            The Poplar suede sofa
          </h3>
          <p className="text-sm md:text-base lg:text-lg -mt-1 md:mt-1">£980</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <ImageComp src="/Photo01.png" dec="The Dandy chair" prices="£250" />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <ImageComp src="/Photo05.png" dec="The Dandy chair" prices="£250" />
        </div>
      </div>
      <Button variant={"secondary"} className="mx-auto block w-full md:w-auto">
        View collection
      </Button>
    </div>
  );
}