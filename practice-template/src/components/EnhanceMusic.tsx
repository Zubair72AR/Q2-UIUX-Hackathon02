import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import EnhanceMusicTimer from "./EnhanceMusicCountdownTimer";

export default function EnhanceMusic() {
  return (
    <div className="lg:px-12 2xl:px-24">
      <div className="sm:px-8 lg:px-0 flex flex-col lg:flex-row justify-between items-center bg-foreground lg:bg-[url('/Speaker1.png')] bg-no-repeat bg-auto bg-right">
        <div className="space-y-8 px-7 sm:px-0 lg:px-12 pt-10 lg:py-14">
          <p className="font-medium text-sm text-green-500">Categories</p>
          <h2 className="text-5xl font-semibold leading-tight text-white lg:max-w-[440px]">
            Enhance Your Music Experience
          </h2>
          <EnhanceMusicTimer />
          <Button className="bg-green-500">Buy Now!</Button>
        </div>
        <Image
          src="/Speaker1.png"
          alt="Speaker"
          width={500}
          height={500}
          className="lg:hidden w-full"
        />
      </div>
    </div>
  );
}
