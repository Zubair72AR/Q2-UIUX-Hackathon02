"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function JoinClub() {
  return (
    <div className="py-14 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 bg-[hsl(0,0%,98%)] p-8 dark:bg-chart-2">
      <div className="grid place-content-center place-items-center gap-5 text-center bg-background pt-12 pb-10">
        <h2 className="text-3xl md:text-4xl px-4">
          Join the club and get the benefits
        </h2>
        <p className="max-w-[450px] px-4">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="flex justify-between items-center h-12 mt-10 min-w-[90%] px-4">
          <input
            type="text"
            placeholder="your@email.com"
            className="w-full h-full px-6 text-sm font-light placeholder:text-chart-3 dark:placeholder:text-white bg-chart-4 dark:bg-chart-2 outline-none"
          />
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
}
