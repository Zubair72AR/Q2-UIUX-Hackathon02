"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function OfferStrip() {
  const pathName = usePathname();
  const { theme } = useTheme();
  const [img01, setImg01] = useState("/DeliveryW.svg");
  const [isOfferBarVisible, setIsOfferBarVisible] = useState(true);

  useEffect(() => {
    // Update the image source based on theme
    if (theme === "dark") {
      setImg01("/Delivery.svg");
    } else {
      setImg01("/DeliveryW.svg");
    }
  }, [theme]);

  const hideOfferStripPaths = ["/"];

  if (hideOfferStripPaths.includes(pathName)) {
    return null;
  }

  return (
    <div
      className={`flex justify-between items-center gap-6 bg-foreground text-background py-2 px-4 ${
        isOfferBarVisible ? "block" : " hidden"
      }`}
    >
      <div className="flex flex-1 justify-center items-center gap-2">
        <Image
          src={img01}
          alt="Delivery"
          width={50}
          height={50}
          className="w-6 xs:w-5 h-6 xs:h-5"
        />
        <p className="text-xs sm:text-sm">
          Free delivery on all orders over £50 with code easter checkout
        </p>
      </div>
      <button
        onClick={() => {
          setIsOfferBarVisible(false);
        }}
        className="bg-foreground text-background"
      >
        <RxCross2 />
      </button>
    </div>
  );
}
