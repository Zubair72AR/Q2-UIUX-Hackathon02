"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function MakesOurBrand() {
  const { theme } = useTheme();
  const [img01, setImg01] = useState("/Delivery.svg");
  const [img02, setImg02] = useState("/Checkmark.svg");
  const [img03, setImg03] = useState("/Purchase.svg");
  const [img04, setImg04] = useState("/Sprout.svg");

  useEffect(() => {
    // Update the image source based on theme
    if (theme === "dark") {
      setImg01("/DeliveryW.svg");
      setImg02("/CheckmarkW.svg");
      setImg03("/PurchaseW.svg");
      setImg04("/SproutW.svg");
    } else {
      setImg01("/Delivery.svg");
      setImg02("/Checkmark.svg");
      setImg03("/Purchase.svg");
      setImg04("/Sprout.svg");
    }
  }, [theme]);
  return (
    <div className="py-14 space-y-10 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      {/* Heading */}
      <h2 className="text-2xl md:text-center">
        What makes our brand different
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Grid 01 and Others Details */}
        <div className="space-y-3 bg-[hsl(0,0%,96%)] p-8 dark:bg-chart-2">
          <Image
            src={img01}
            alt="Delivery"
            width={50}
            height={50}
            className="w-7 h-7"
          />
          {/* Sub Heading and Paragraph */}
          <h3 className="text-xl">Next day as standard</h3>
          <p>Order before 3pm and get your order the next day as standard</p>
        </div>

        {/* Grid 02 and Others Details */}
        <div className="space-y-3 bg-[hsl(0,0%,96%)] p-8 dark:bg-chart-2">
          <Image
            src={img02}
            alt="Checkmark"
            width={50}
            height={50}
            className="w-7 h-7"
          />
          {/* Sub Heading and Paragraph */}
          <h3 className="text-xl">Made by true artisans</h3>
          <p>Handmade crafted goods made with real passion and craftmanship</p>
        </div>

        {/* Grid 03 and Others Details */}
        <div className="space-y-3 bg-[hsl(0,0%,96%)] p-8 dark:bg-chart-2">
          <Image
            src={img03}
            alt="Purchase"
            width={50}
            height={50}
            className="w-7 h-7"
          />
          {/* Sub Heading and Paragraph */}
          <h3 className="text-xl">Unbeatable prices</h3>
          <p>
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        {/* Grid 04 and Others Details */}
        <div className="space-y-3 bg-[hsl(0,0%,96%)] p-8 dark:bg-chart-2">
          <Image
            src={img04}
            alt="Sprout"
            width={50}
            height={50}
            className="w-7 h-7"
          />
          {/* Sub Heading and Paragraph */}
          <h3 className="text-xl">Recycled packaging</h3>
          <p>
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
}
