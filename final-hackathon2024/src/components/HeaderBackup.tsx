"use client";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaPinterest } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { Button } from "./ui/button";

const navLinks = [
  {
    path: "/plant-pots",
    label: "Plant pots",
  },
  {
    path: "/ceramics",
    label: "Ceramics",
  },
  {
    path: "/tables",
    label: "Tables",
  },
  {
    path: "/chairs",
    label: "Chairs",
  },
  {
    path: "/crockery",
    label: "Crockery",
  },
  {
    path: "/tableware",
    label: "Tableware",
  },
  {
    path: "/cutlery",
    label: "Cutlery",
  },
];

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Show Active Nav Link
  const pathName = usePathname();
  const isActive = (path: string) => path == pathName;

  // Show and hide Navbar According to Media Size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  return (
    <div className="relative bg-background text-foreground pt-5 md:py-5 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      {/* Top Navbar */}
      <div className="flex justify-between items-center">
        {/* Search Icon for Large Media Size */}
        <LuSearch className="text-lg hidden md:block cursor-pointer" />

        {/* Logo */}
        <Link href="/" className="text-xl font-medium">
          Avion
        </Link>

        {/* NavBar Right Side Icons */}
        <div className="flex justify-between items-center gap-3">
          {/* Search Icon for Mobile Devices */}
          <LuSearch className="text-lg block md:hidden cursor-pointer" />

          {/* Menu Icon for Mobile Devices */}
          <div
            className="text-lg block md:hidden cursor-pointer"
            onClick={() => {
              setIsMenuVisible((prev) => !prev);
            }}
          >
            {isMenuVisible ? <AiOutlineClose /> : <HiMenu />}
          </div>

          {/* Shopping Cart, Profile Icon, Light and Dark Toggle Button */}
          <MdOutlineShoppingCart className="text-lg hidden md:block cursor-pointer" />
          <CgProfile className="text-lg hidden md:block cursor-pointer" />
          <RxDividerVertical className="text-chart-3 " />
          <ToggleButton />
        </div>
      </div>

      {/* Horizontal Line for Large Screen Only */}
      <hr className="border-chart-4 dark:border-chart-5 mt-4" />

      {/* NavLinks for Large Screen */}
      <div className="hidden md:flex justify-center items-center gap-6 py-4 bg-red-500">
        {navLinks.map((e, i) => (
          <Link
            key={i}
            href={e.path}
            className={`list-none text-sm font-medium hover:text-chart-1 dark:hover:text-white transition-all duration-500 ${
              isActive(e.path)
                ? "active text-chart-1 dark:text-white"
                : "not_Active text-chart-5 dark:text-chart-3"
            }`}
          >
            {e.label}
          </Link>
        ))}
      </div>
      <div
        className={`fixed top-0 h-screen pt-16 w-full xs:w-[300px] bg-[rgb(245,245,245,0.7)] dark:bg-[rgb(42,37,75,0.7)] backdrop-blur-xl border-r-2 transition-all duration-1000 ${
          isMenuVisible ? "left-0 shadow-lg" : "-left-full"
        }`}
      >
        {/* Side NavBar Close Button */}
        <Button
          size={"icon"}
          onClick={() => {
            setIsMenuVisible(false);
          }}
          className="absolute bg-foreground text-background left-[75%] top-10 "
        >
          <RxCross2 />
        </Button>

        {/* NavLinks for Mobile Devices */}
        <div className="space-y-1">
          {navLinks.map((e, i) => (
            <Link
              key={i}
              href={e.path}
              className={`list-none text-sm font-medium  text-foreground pl-8 w-full inline-block py-1 ${
                isActive(e.path) ? "activeMob" : "not_ActiveMob"
              }`}
              onClick={() => {
                setIsMenuVisible(false);
              }}
            >
              {e.label}
            </Link>
          ))}
        </div>

        {/* Cart Icon, Profile Icon, Social Media Info */}
        <div className="flex justify-start items-center text-foreground gap-5 mt-4 pl-8">
          <MdOutlineShoppingCart className="text-xl cursor-pointer" />
          <CgProfile className="text-xl cursor-pointer" />
        </div>
        {/* Social Icons */}
        <div className="flex justify-start items-center gap-4 mt-4 pl-8 text-foreground">
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            className="text-xl hover:text-chart-3 hover:scale-125 transition-all duration-500"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className="text-xl hover:text-chart-3 hover:scale-125 transition-all duration-500"
          >
            <ImFacebook2 />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="text-xl hover:text-chart-3 hover:scale-125 transition-all duration-500"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.skype.com/"
            target="_blank"
            className="text-xl hover:text-chart-3 hover:scale-125 transition-all duration-500"
          >
            <FaSkype />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-xl hover:text-chart-3 hover:scale-125 transition-all duration-500 "
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://www.pinterest.com/"
            target="_blank"
            className="text-xl hover:text-chart-3 hover:scale-125 transition-all duration-500"
          >
            <FaPinterest />
          </Link>
        </div>
      </div>
    </div>
  );
}
