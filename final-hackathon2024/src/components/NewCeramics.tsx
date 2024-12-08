import React from "react";
import ImageComp from "./ImageComp";
import { Button } from "./ui/button";

export default function NewCeramics() {
  return (
    <div className="space-y-8 py-14 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      <h2 className="text-3xl md:text-4xl">New ceramics</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 justify-between">
        <div className="flex flex-col items-center space-y-3">
          <ImageComp src="/Photo01.png" dec="The Dandy chair" prices="£250" />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <ImageComp src="/Photo02.png" dec="Rustic Vase Set" prices="£155" />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <ImageComp src="/Photo03.png" dec="The Silky Vase" prices="£125" />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <ImageComp src="/Photo04.png" dec="The Lucy Lamp" prices="£399" />
        </div>
      </div>
      <Button variant={"secondary"} className="mx-auto block w-full md:w-auto">
        View collection
      </Button>
    </div>
  );
}
