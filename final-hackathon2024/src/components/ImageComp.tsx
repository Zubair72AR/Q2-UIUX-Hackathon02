import Image from "next/image";
import React from "react";

// Type definitions
interface ImageCompProps {
  src: string;
  dec: string;
  prices: string;
  tags?: string;
  qty?: number;
  className?: string;
}
export default function ImageComp({
  src,
  dec,
  prices,
  tags,
  qty,
  className,
}: ImageCompProps) {
  return (
    <div className="relative">
      {/* Image */}
      <div className="overflow-hidden hover:rounded-xl transition-all duration-1000">
        <Image
          src={src || "/Placeholder.svg"}
          alt={dec || "Image Not Available"}
          width={500}
          height={200}
          className={`object-contain bg-cover transition-all duration-500 hover:scale-110 ${className}`}
        />
      </div>

      {/* Description and Price */}
      <h3 className="text-base md:text-lg lg:text-xl mt-2 md:mt-3">
        {dec || "Not Found"}
      </h3>
      <p className="text-sm md:text-base lg:text-lg mt-0 md:mt-1">
        {prices || "£0.00"}
      </p>

      <span
        className={`absolute top-3 left-3 px-2 py-[3px] text-[12px] rounded-sm text-white inline-block
        ${tags === "New" ? "bg-orange-400" : ""}
        ${tags === "Best Seller" ? "bg-green-600" : ""}
        ${tags === "Discount" ? "bg-blue-500" : ""}
        ${tags === "Limited" ? "bg-purple-600" : ""}
        ${tags === "Sold" ? "bg-red-600" : ""}
        `}
      >
        <p>{tags}</p>
      </span>
      {qty && (
        <span className="absolute top-3 right-3 px-2 py-[3px] text-[12px] rounded-sm bg-background inline-block text-foreground">
          <p>Qty: {qty}</p>
        </span>
      )}
    </div>
  );
}
