import Image from "next/image";
import React from "react";

interface ImageCompProps {
  src: string;
  dec: string;
  prices: string;
  className?: string;
}
export default function ImageComp({
  src,
  dec,
  prices,
  className,
}: ImageCompProps) {
  return (
    <div>
      <Image
        src={src}
        alt={dec}
        width={500}
        height={200}
        className={`object-contain ${className}`}
      />
      <h3 className="text-base md:text-lg lg:text-xl mt-2 md:mt-3">{dec}</h3>
      <p className="text-sm md:text-base lg:text-lg mt-0 md:mt-1">{prices}</p>
    </div>
  );
}
