"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { RiHeart3Line } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

import { ToggleButton } from "@/components/ToggleButton";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

// Nav Links Array
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Sign Up", path: "/signup" },
];

export default function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectLang, setSelectLang] = useState("English");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Array of Languages List
  const languages = [
    "English",
    "Urdu",
    "Arabic",
    "German",
    "Italian",
    "Spanish",
  ];
  // Show and Hide Languages List
  const toggleDropDownLang = () => setIsDropdownVisible((prev) => !prev);
  // FUnction for Updating Language
  const handleSelectLanguage = (e: string) => {
    setSelectLang(e);
    setIsDropdownVisible(false);
  };

  // Show Active Nav Link
  const pathName = usePathname();
  const isActive = (path: string) => path == pathName;

  // Show and hide Navbar According to Media Size
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
      {/* Top Sale Discount Offer Tab */}
      <div className="flex justify-between gap-5 bg-foreground dark:bg-chart-1 text-background dark:text-foreground px-7 sm:px-8 lg:px-20 xl:px-24 py-3 md:items-center">
        <div className="md:flex-1 md:text-center text-xs">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="ml-1 font-semibold cursor-pointer underline text-xs">
              Shop Now
            </span>
          </p>
        </div>

        {/* Change Languages Button */}
        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleDropDownLang}
          >
            <p className="text-xs">{selectLang}</p>
            <FaAngleDown className="text-xs" />
          </div>
          {/* list of Available Languages */}
          {isDropdownVisible && (
            <div className="absolute mt-1 z-30 bg-chart-5 dark:bg-foreground text-background shadow-md rounded-sm">
              {languages.map((language, i) => (
                <p
                  key={i}
                  onClick={() => handleSelectLanguage(language)}
                  className="cursor-pointer text-xs px-3 py-1 hover:text-primary-foreground hover:bg-primary"
                >
                  {language}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* NavBar Stars from Here */}
      <div className="relative flex justify-between items-center px-7 sm:px-8 lg:px-20 xl:px-24 py-2 md:py-3 mt-3 md:mt-4">
        {/* Nav Logo */}
        <Link href="/" className="font-bold text-xl">
          Exclusive
        </Link>

        {/* Nav Links for Large Screen */}
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

        {/* Nav Icons for Right Side */}
        <div className="flex justify-center items-center gap-3 md:gap-5">
          {/* Search Bar and Icons for Large Screen */}
          <div className="hidden lg:flex justify-between items-center h-9 px-[10px] rounded-sm w-60 bg-muted">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="placeholder:text-xs text-sm text-foreground bg-transparent placeholder:text-muted-foreground outline-none w-[80%]"
            />
            <LuSearch className="text-foreground text-lg" />
          </div>

          {/* Search Icons for Mobile Devices */}
          <LuSearch
            className={`text-foreground text-lg sm:text-xl lg:hidden transition-all ${
              isSearchVisible ? "text-transparent" : ""
            }`}
            onClick={() => {
              setIsSearchVisible(true);
            }}
          />

          {/* Icons for Heart/Favorite, Shopping Cart HamburgerMenu */}
          <RiHeart3Line className="text-foreground text-lg sm:text-xl transition-all" />
          <PiShoppingCart className="text-foreground text-lg sm:text-xl transition-all" />

          {/* HamburgerMenu  */}
          <div
            className="text-foreground text-lg sm:text-xl transition-all sm:hidden"
            onClick={() => {
              setIsMenuVisible((prev) => !prev);
              setIsSearchVisible(false);
            }}
          >
            {isMenuVisible ? <AiOutlineClose /> : <CgMenuRightAlt />}
          </div>

          {/* Light and Dark Theme Toggle Button */}
          <ToggleButton />
        </div>

        {/* Search Bar Appear for Mobile Devices */}
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

      {/* Nav Links for Mobile Devices */}
      <ul
        className={`fixed top-0 h-screen w-full xs:w-2/3 bg-[rgba(225,225,225,0.4)] dark:bg-[rgba(0,0,0,0.4)]  backdrop-blur-sm	py-12 flex flex-col border-r-2 transition-all duration-1000 ${
          isMenuVisible ? "left-0 shadow-lg" : "-left-full"
        }`}
      >
        <Button
          size={"icon"}
          onClick={() => {
            setIsMenuVisible(false);
          }}
          className="ml-[75%] mb-4"
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
            onClick={() => {
              setIsMenuVisible(false);
            }}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
