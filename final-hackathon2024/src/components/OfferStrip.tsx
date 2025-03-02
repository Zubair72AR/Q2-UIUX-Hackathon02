"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { OfferContext } from "./Context";

export default function OfferStrip() {
  const pathName = usePathname();
  const { theme } = useTheme();
  const [img01, setImg01] = useState("/DeliveryW.svg");

  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  useEffect(() => {
    // Update the image source based on theme
    if (theme === "dark") {
      setImg01("/Delivery.svg");
    } else {
      setImg01("/DeliveryW.svg");
    }
  }, [theme]);

  // Hide the offer strip on specific paths (e.g., homepage)
  const hideOfferStripPaths = ["/"];

  if (hideOfferStripPaths.includes(pathName)) {
    return null;
  }

  return (
    // Offer strip component with close button
    <div
      className={`flex justify-between items-center gap-6 bg-foreground text-background py-2 px-4 ${
        isOfferVisible ? "block" : " hidden"
      }`}
    >
      {/* Icon */}
      <div className="flex flex-1 justify-center items-center gap-2">
        <Image
          src={img01}
          alt="Delivery"
          width={50}
          height={50}
          className="w-6 xs:w-5 h-6 xs:h-5"
        />

        {/* Offer Text */}
        <p className="text-xs sm:text-sm">
          Free delivery on all orders over £50 with code easter checkout
        </p>
      </div>

      {/* Hide Button */}
      <button
        onClick={() => {
          setIsOfferVisible(false);
        }}
        className="bg-foreground text-background"
      >
        <RxCross2 />
      </button>
    </div>
  );
}
