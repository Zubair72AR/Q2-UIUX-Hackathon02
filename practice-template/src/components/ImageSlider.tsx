import React from "react";
import { Button } from "./ui/button";
import { FaApple } from "react-icons/fa";
import Image01 from "../../public/phone01.png";
import Image02 from "../../public/phone02.png";
import Image03 from "../../public/phone03.png";
import Image04 from "../../public/phone04.png";
import Image05 from "../../public/phone05.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const heroIMages = [
  {
    title: "iPhone 14 Series",
    heading: "Up to 10% off Voucher",
    src: Image01,
  },
  {
    title: "iPhone 13 Series",
    heading: "Up to 15% off Voucher",
    src: Image02,
  },
  {
    title: "iPhone 15 Series",
    heading: "Up to 20% off Voucher",
    src: Image03,
  },
  {
    title: "iPhone 15 Series",
    heading: "Up to 20% off Voucher",
    src: Image04,
  },
  {
    title: "iPhone 15 Series",
    heading: "Up to 20% off Voucher",
    src: Image05,
  },
];
export default function ImageSlider() {
  return (
    <div>
      <Carousel>
        <CarouselContent className="w-[calc(100%-208px)]">
          {heroIMages.map((e, i) => (
            <CarouselItem>
              <div className="flex justify-between items-center bg-chart-4 w-[100%] h-80">
                <div>
                  <div>
                    <FaApple />
                    <p>{e.title}</p>
                  </div>
                  <h1>{e.heading}</h1>
                </div>
                <Image src={e.src} alt={"Hero Image"} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
