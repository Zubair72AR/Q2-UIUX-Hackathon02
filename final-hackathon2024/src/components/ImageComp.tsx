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
      <div className="overflow-hidden hover:rounded-xl transition-all duration-1000">
        <Image
          src={src}
          alt={dec}
          width={500}
          height={200}
          className={`object-contain bg-cover transition-all duration-500 hover:scale-110 ${className}`}
        />
      </div>
      <h3 className="text-base md:text-lg lg:text-xl mt-2 md:mt-3">{dec}</h3>
      <p className="text-sm md:text-base lg:text-lg mt-0 md:mt-1">{prices}</p>
    </div>
  );
}
