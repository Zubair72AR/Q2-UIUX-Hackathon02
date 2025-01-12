import React from "react";
import SubHeading from "./SubHeading";
import IconMobile from "./IconMobile";
import IconComputer from "./IconComputer";
import IconSmartWatch from "./IconSmartWatch";
import IconCamera from "./IconCamera";
import IconHeadPhone from "./IconHeadPhone";
import IconGamepad from "./IconGamePad";

export default function BrowseByCategory() {
  return (
    <div className="space-y-6 mt-12 px-7 sm:px-8 lg:px-12 2xl:px-24">
      <SubHeading text="Categories" />
      <h2 className="text-4xl font-semibold">Browse By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 lg:gap-6 pt-4 pb-6">
        <div className="group flex flex-col gap-2 justify-center items-center border-2 rounded-sm h-32 md:h-36 hover:bg-primary hover:border-primary">
          <IconMobile className="stroke-foreground group-hover:stroke-white" />
          <p className="text-sm group-hover:text-white">Phones</p>
        </div>
        <div className="group flex flex-col gap-2 justify-center items-center border-2 rounded-sm h-32 md:h-36 hover:bg-primary hover:border-primary">
          <IconComputer className="stroke-foreground group-hover:stroke-white" />
          <p className="text-sm group-hover:text-white">Computers</p>
        </div>
        <div className="group flex flex-col gap-2 justify-center items-center border-2 rounded-sm h-32 md:h-36 hover:bg-primary hover:border-primary">
          <IconSmartWatch className="stroke-foreground group-hover:stroke-white" />
          <p className="text-sm group-hover:text-white">SmartWatch</p>
        </div>
        <div className="group flex flex-col gap-2 justify-center items-center border-2 rounded-sm h-32 md:h-36 hover:bg-primary hover:border-primary">
          <IconCamera className="stroke-foreground group-hover:stroke-white" />
          <p className="text-sm group-hover:text-white">Camera</p>
        </div>
        <div className="group flex flex-col gap-2 justify-center items-center border-2 rounded-sm h-32 md:h-36 hover:bg-primary hover:border-primary">
          <IconHeadPhone className="stroke-foreground group-hover:stroke-white" />
          <p className="text-sm group-hover:text-white">HeadPhones</p>
        </div>
        <div className="group flex flex-col gap-2 justify-center items-center border-2 rounded-sm h-32 md:h-36 hover:bg-primary hover:border-primary">
          <IconGamepad className="stroke-foreground group-hover:stroke-white" />
          <p className="text-sm group-hover:text-white">Gaming</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
