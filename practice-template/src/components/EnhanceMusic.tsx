import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import EnhanceMusicTimer from "./EnhanceMusicCountdownTimer";

export default function EnhanceMusic() {
  return (
    <div className="px-7 sm:px-8 lg:px-12 2xl:px-24">
      <div className="flex justify-between items-center bg-foreground px-12 py-14">
        <div className="space-y-8">
          <p className="font-medium text-sm text-green-400 text-primary">
            Categories
          </p>
          <h2 className="text-5xl font-semibold leading-tight text-background">
            Enhance Your <br />
            Music Experience
          </h2>
          <EnhanceMusicTimer />
          <Button className="bg-green-400">Buy Now!</Button>
        </div>
        <Image src="/Speaker.png" alt="Speaker" width={500} height={500} />
      </div>
    </div>
  );
}
