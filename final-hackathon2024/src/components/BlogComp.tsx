import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

// Type definitions
interface BlogCompProps {
  heading: string;
  slug?: string;
  src: string;
  description: string;
  date: string;
  tags?: string[];
  author: string;
  summary: string;
  className?: string;
}

export default function BlogComp({
  heading,
  slug,
  src,
  description,
  date,
  tags,
  author,
  summary,
  className,
}: BlogCompProps) {
  return (
    <div>
      <div className="overflow-hidden hover:rounded-xl transition-all duration-500">
        <Image
          src={src}
          alt={heading}
          width={1920}
          height={1080}
          className="hover:scale-110 transition-all duration-500"
        />
      </div>
      <h2 className="py-1">{heading}</h2>
      <div className="flex justify-between items-center">
        <p className="text-xs text-chart-5">{author}</p>
        <p className="text-xs text-zinc-400">{date}</p>
      </div>
      <p className="group flex justify-start items-center gap-1 text-xs font-medium text-red-500">
        Read More
        <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-500" />
      </p>
    </div>
  );
}
