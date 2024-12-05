"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { RiHeart3Line } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import { ToggleButton } from "@/components/ToggleButton";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Sign Up", path: "/signup" },
];

export default function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const pathName = usePathname();
  const isActive = (path: string) => path == pathName;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSearchVisible(false);
      }

      if (window.innerWidth >= 640) {
        setIsMenuVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="border-b-[1px]">
      <div className="flex justify-between gap-5 bg-foreground dark:bg-chart-1 text-background dark:text-foreground px-4 sm:px-8 lg:px-20 xl:px-24 py-3 md:items-center">
        <div className="md:flex-1 md:text-center text-xs">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="ml-1 font-semibold cursor-pointer underline text-xs">
              Shop Now
            </span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-xs">English</p>
          <FaAngleDown className="text-xs" />
        </div>
      </div>

      <div className="relative flex justify-between items-center px-4 sm:px-8 lg:px-20 xl:px-24 py-2 md:py-3 mt-3 md:mt-4">
        {" "}
        <Link href="/" className="font-bold text-xl">
          Exclusive
        </Link>
        <ul className="hidden sm:flex justify-center items-center gap-6 md:gap-8">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className={`text-foreground text-sm font-medium hover:text-chart-1 ${
                isActive(link.path)
                  ? "border-b-2 border-secondary"
                  : "border-b-2 border-transparent"
              }`}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-3 md:gap-5">
          <div className="hidden lg:flex justify-between items-center h-9 px-[10px] rounded-sm w-60 bg-muted">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="placeholder:text-xs text-sm text-foreground bg-transparent placeholder:text-muted-foreground outline-none w-[80%]"
            />
            <LuSearch className="text-foreground text-lg" />
          </div>
          <LuSearch
            className={`text-foreground text-lg sm:text-xl lg:hidden transition-all ${
              isSearchVisible ? "text-transparent" : ""
            }`}
            onClick={() => {
              setIsSearchVisible(true);
            }}
          />
          <RiHeart3Line className="text-foreground text-lg sm:text-xl transition-all" />
          <PiShoppingCart className="text-foreground text-lg sm:text-xl transition-all" />
          <CgMenuRightAlt
            className="text-foreground text-lg sm:text-xl  transition-all sm:hidden"
            onClick={() => {
              setIsMenuVisible(true);
              setIsSearchVisible(false);
            }}
          />

          <ToggleButton />
        </div>
        <div
          className={`absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 justify-between items-center h-9 pl-[10px] rounded-md w-[75%] bg-muted ${
            isSearchVisible ? "flex" : "hidden"
          }`}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="placeholder:text-xs text-sm text-foreground bg-transparent placeholder:text-muted-foreground outline-none w-[80%]"
          />
          <div className="flex justify-between items-center gap-2">
            <LuSearch className="text-foreground text-lg" />
            <Button
              size={"icon"}
              onClick={() => {
                setIsSearchVisible(false);
              }}
            >
              <RxCross2 />
            </Button>
          </div>
        </div>
      </div>
      <ul
        className={`overflow-hidden absolute top-0 right-0 h-screen w-full xs:w-1/2 bg-background py-12 flex-col border-[1px] transition-all duration-1000 ${
          isMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Button
          size={"icon"}
          onClick={() => {
            setIsMenuVisible(false);
          }}
          className="ml-8 mb-8"
        >
          <RxCross2 />
        </Button>
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`text-foreground text-sm font-medium px-8 py-3 hover:text-background hover:bg-foreground ${
              isActive(link.path)
                ? "border-b-2 border-secondary"
                : "border-b-2 border-transparent"
            } `}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
