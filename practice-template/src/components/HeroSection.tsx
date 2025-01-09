"use client";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpandFilled,
} from "react-icons/tb";

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

  // Side Bar Setting
  const [sideBar, setSideBar] = useState(true);
  // Side Bar Settings as Per Media Query
  useEffect(() => {
    const sideBarSettings = () => {
      if (window.innerWidth >= 1024) {
        setSideBar(true);
      }
      window.addEventListener("resize", sideBarSettings);
      sideBarSettings();
      return () => {
        window.removeEventListener("resize", sideBarSettings);
      };
    };
  });

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
  const sideSubMenu = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-full px-7 sm:px-8 lg:px-12 2xl:px-24">
      {/* Side Menu */}
      <div className="relative flex justify-between items-start lg:items-end overflow-hidden">
        <div
          className={`w-64 lg:w-52 h-full lg:h-[360px] space-y-3 pl-8 lg:pl-0 pt-6 border-r-[1px] pr-4 absolute lg:static top-0 z-10 bg-background transition-all duration-500 lg:shadow-none dark:lg:shadow-none ${
            sideBar
              ? "-left-64 shadow-none"
              : "left-0 shadow-[10px_0px_10px_rgba(0,0,0,0.9)] dark:shadow-[10px_0px_10px_rgba(0,0,0,0.4)] "
          }`}
        >
          <TbLayoutSidebarRightCollapseFilled
            className={`block lg:hidden absolute left-full ml-4 mt-2 rounded-sm w-8 h-8 text-foreground bg-background animate-pulse transition-all duration-1000 ease-out ${
              sideBar ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setSideBar((prev) => !prev)}
          />

          {sideMenuList.map((e, i) => (
            <div key={i}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => sideSubMenu(i)}
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
        <Carousel
          setApi={setApi}
          className="w-full lg:w-[calc(100%-228px)] h-full"
        >
          <CarouselContent>
            {heroIMages.map((e, i) => (
              <CarouselItem>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-foreground px-2 sm:px-11 pt-4 mt-4">
                  <div className="space-y-2">
                    <div className="flex justify-start items-center gap-2">
                      <FaApple className="text-background w-12 h-12" />
                      <p className="text-background text-xs">{e.title}</p>
                    </div>
                    <div>
                      <h1 className="text-background text-3xl sm:text-4xl font-semibold leading-tight">
                        {e.heading}
                      </h1>
                      <h1 className="text-background text-3xl sm:text-4xl font-semibold leading-tight">
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
                    width={300}
                    height={300}
                    className="h-auto sm:h-80 w-auto object-contain"
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
