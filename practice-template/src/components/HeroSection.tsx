"use client";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
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
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const sideMenuList = [
  { title: "Woman’s Fashion", icon: true, subMenu: ["Dresses", "Tops"] },
  { title: "Men’s Fashion", icon: true, subMenu: ["Shirts", "Pants"] },
  { title: "Electronics", icon: false, subMenu: [] },
  { title: "Home & Lifestyle", icon: false, subMenu: [] },
  { title: "Medicine", icon: false, subMenu: [] },
  { title: "Sports & Outdoor", icon: false, subMenu: [] },
  { title: "Baby’s & Toys", icon: false, subMenu: [] },
  { title: "Groceries & Pets", icon: false, subMenu: [] },
  { title: "Health & Beauty", icon: false, subMenu: [] },
];

const heroIMages = [
  {
    no: 1,
    title: "iPhone 14 Series",
    heading: "Up to 10%",
    src: Image01,
  },
  {
    no: 2,
    title: "iPhone 13 Series",
    heading: "Up to 15%",
    src: Image02,
  },
  {
    no: 3,
    title: "iPhone 15 Series",
    heading: "Up to 20%",
    src: Image03,
  },
  {
    no: 4,
    title: "iPhone 15 Series",
    heading: "Up to 20%",
    src: Image04,
  },
  {
    no: 5,
    title: "iPhone 15 Series",
    heading: "Up to 20%",
    src: Image05,
  },
];

export default function HeroSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Side Mene Sub Menu
  const sideMenuCollapse = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-full px-7 sm:px-8 lg:px-20 xl:px-24">
      {/* Side Menu */}
      <div className="flex justify-between items-start lg:items-end">
        <div className="w-52 space-y-3 pt-10 border-r-[1px] pr-4">
          {sideMenuList.map((e, i) => (
            <div key={i}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => sideMenuCollapse(i)}
              >
                <p className="text-foreground text-sm font-medium hover:text-chart-1">
                  {e.title}
                </p>

                {/* Arrow Icon and Rotate Icon */}
                {e.icon && (
                  <FaAngleRight
                    className={`text-sm transition-all duration-300 ${
                      openIndex === i ? "rotate-90" : ""
                    }`}
                  />
                )}
              </div>

              {/* Show Sub Menu */}
              {openIndex === i && e.subMenu.length > 0 && (
                <div className="space-y-1">
                  {e.subMenu.map((subItem, index) => (
                    <p
                      key={index}
                      className="text-secondary-foreground bg-secondary text-xs hover:bg-muted hover:text-chart-1 px-1 py-[2px]"
                    >
                      {subItem}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Hero Image */}
        <Carousel setApi={setApi} className="w-[calc(100%-228px)]">
          <CarouselContent>
            {heroIMages.map((e, i) => (
              <CarouselItem>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 bg-foreground px-12 pt-4 ">
                  <div className="space-y-2">
                    <div className="flex justify-start items-center gap-3">
                      <FaApple className="text-background w-12 h-12" />
                      <p className="text-background text-xs">{e.title}</p>
                    </div>
                    <div>
                      <h1 className="text-background text-4xl font-semibold leading-tight">
                        {e.heading}
                      </h1>
                      <h1 className="text-background text-4xl font-semibold leading-tight">
                        off Voucher
                      </h1>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <Link
                        href=""
                        className="text-background text-xs font-medium border-b-[1px]"
                      >
                        Shop Now
                      </Link>
                      <FaArrowRight className="text-background text-xs" />
                    </div>
                  </div>
                  <Image
                    src={e.src}
                    alt={"Hero Image"}
                    width={400}
                    height={400}
                    className="h-72 w-auto object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2" />
          <CarouselNext className="absolute right-2 top-1/2" />
          {/* Bullet of The Carousel */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2">
            {heroIMages.map((e, i) => (
              <span
                className={`inline-block rounded-full ${
                  i === current
                    ? "w-3 h-3 bg-primary border-[1px] border-background"
                    : "w-2 h-2 bg-chart-2"
                }`}
                onClick={() => api && api.scrollTo(i)}
              ></span>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
