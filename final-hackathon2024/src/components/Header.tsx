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
import OfferStrip from "./OfferStrip";
import { navLinks, productsLinks } from "@/components/NavLinksArray";

export default function Header() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [navbarBgColor, setNavbarBgColor] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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

    // Add Event Listener on Window Resize
    window.addEventListener("resize", handleResize);

    // Call HandleResize on Initial Render
    handleResize();

    // Remove Event Listener on Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsMenuVisible(false);
        setIsSearchVisible(false);
      }

      if (window.scrollY > 151 && window.scrollY < 450) {
        setNavbarVisible(false);
      } else if (window.scrollY < 150 || window.scrollY > 451) {
        setNavbarVisible(true);
      }

      if (window.scrollY < 150) {
        setNavbarBgColor(true);
      } else if (window.scrollY > 151) {
        setNavbarBgColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide the offer strip on specific paths (e.g., homepage)
  const hideOfferStripPaths = ["/studio"];

  if (pathName.startsWith(hideOfferStripPaths[0])) {
    return null;
  }

  return (
    <div
      className={`z-[999] fixed w-full transition-all duration-1000 ${
        navbarVisible ? "top-0" : "-top-full"
      } `}
    >
      <OfferStrip />
      <div
        className={`py-4 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 ${
          navbarBgColor
            ? "bg-background border-none"
            : "bg-[rgb(245,245,245,0.8)] dark:bg-[rgb(42,37,75,0.8)] border-b-2 backdrop-blur-lg"
        }`}
      >
        {/* Top Navbar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl">
            Avion
          </Link>

          {/* NavBar Right Side Icons */}
          <div className="flex justify-between items-center gap-[12px]">
            {/* NavLinks for Large Screen */}
            <div
              className={`hidden md:flex justify-center items-center gap-6 transition-all duration-1000 ${
                isSearchVisible ? "mr-4" : "-mr-4"
              }`}
            >
              {navLinks.map((e, i) => (
                <Link
                  key={i}
                  href={e.path}
                  className={`list-none text-sm hover:text-chart-1 dark:hover:text-white transition-all duration-500 ${
                    isActive(e.path)
                      ? "active text-chart-1 dark:text-white"
                      : "not_Active text-chart-5 dark:text-chart-3"
                  }`}
                >
                  {e.label}
                </Link>
              ))}
            </div>

            {/* Icon for Large Screen */}
            {/* Search Input / Icon Large Screen */}
            <div
              className={`hidden md:flex justify-center items-center py-2 px-[10px] rounded-full transition-all duration-1000 ${
                isSearchVisible
                  ? "border-[1px] dark:border-chart-5 bg-[hsl(0,0,98%)] dark:bg-[hsl(248,34%,28%)] mr-0"
                  : "border-[1px] border-transparent -mr-3"
              }`}
            >
              <button
                className={`block md:grid place-content-center h-6 w-6 rounded-full text-background bg-foreground hover:text-white hover:bg-red-500 transition-all duration-1000 hover:rotate-180 animate-pulse ${
                  isSearchVisible ? "scale-100" : "scale-0"
                }`}
                onClick={() => setIsSearchVisible(false)}
              >
                <AiOutlineClose />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className={`bg-transparent text-sm font-light outline-none transition-all duration-1000 ${
                  isSearchVisible
                    ? "w-52 lg:w-64 px-2 text-chart-5 dark:text-chart-3"
                    : "w-0 px-0"
                }`}
              />
              <LuSearch
                className="text-lg cursor-pointer"
                onClick={() => setIsSearchVisible(true)}
              />
            </div>
            {/* Icon for Mobile Devices */}
            {/* Search Input / Icon Mobile Devices */}
            <LuSearch
              className={`text-lg block cursor-pointer ${
                isSearchVisible ? "hidden" : "md:hidden"
              }`}
              onClick={() => {
                setIsSearchVisible((prev) => {
                  if (!prev) {
                    setIsMenuVisible(false);
                  }
                  return !prev;
                });
              }}
            />
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 flex justify-center items-center gap-1 w-[90%] transition-all duration-1000 mt-2 ${
                isSearchVisible ? "flex md:hidden" : "hidden"
              }`}
            >
              <div className="py-2 px-3 border-2 dark:border-chart-5 bg-[hsl(0,0,98%)] dark:bg-[hsl(248,34%,28%)] w-[90%] flex justify-center items-center rounded-full shadow-lg">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-sm font-light outline-none transition-all duration-1000 w-full px-2 text-chart-5 dark:text-chart-3"
                />
                <LuSearch className="text-lg cursor-pointer" />
              </div>
              <button
                className="grid place-content-center h-8 w-8 border-2 border-chart-2 dark:border-chart-4 rounded-full text-background bg-foreground hover:text-white hover:bg-red-500 transition-all duration-1000 hover:rotate-180 shadow-lg animate-pulse"
                onClick={() => setIsSearchVisible((prev) => !prev)}
              >
                <AiOutlineClose />
              </button>
            </div>

            {/* Menu Icon for Mobile Devices */}
            <div
              className="text-lg block md:hidden cursor-pointer"
              onClick={() => {
                setIsMenuVisible((prev) => {
                  if (!prev) {
                    setIsSearchVisible(false);
                  }
                  return !prev;
                });
              }}
            >
              {isMenuVisible ? <AiOutlineClose /> : <HiMenu />}
            </div>

            {/* Shopping Cart, Profile Icon, Light and Dark Toggle Button */}
            <Link href="/cart" className="relative">
              <MdOutlineShoppingCart className="text-lg cursor-pointer" />
              <span className="absolute -top-[11px] -right-[11px] flex justify-center items-center bg-red-500 text-[9px] font-medium w-[18px] h-[18px] rounded-full text-white">
                0
              </span>
            </Link>
            <CgProfile className="text-lg cursor-pointer" />
            <RxDividerVertical className="text-chart-3 " />
            <ToggleButton />
          </div>
        </div>

        <div
          className={`fixed top-0 flex flex-col justify-between h-screen pt-14 pb-6 pl-8 w-full xs:w-[300px] border-r-2 transition-all duration-1000 ${
            isMenuVisible ? "left-0 shadow-lg" : "-left-full"
          }
          ${
            !navbarBgColor
              ? "bg-background"
              : "bg-[rgb(245,245,245,0.8)] dark:bg-[rgb(42,37,75,0.8)] backdrop-blur-lg"
          }`}
        >
          {/* Side NavBar Close Button */}
          <button
            onClick={() => {
              setIsMenuVisible(false);
            }}
            className="absolute bg-foreground text-background right-10 top-10 text-lg p-1 rounded-full hover:text-white hover:bg-red-500 transition-all duration-1000 hover:rotate-180 shadow-md"
          >
            <RxCross2 />
          </button>

          {/* NavLinks for Mobile Devices */}
          <div className="space-y-2">
            {navLinks.map((e, i) => (
              <Link
                key={i}
                href={e.path}
                className={`list-none text-sm font-medium text-foreground w-full inline-block ${
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
          {/* Products Links for Mobile Devices */}
          <div className="space-y-1">
            {productsLinks.map((e, i) => (
              <Link
                key={i}
                href={e.path}
                className={`list-none text-sm text-zinc-500 dark:text-[hsl(241,31%,75%)] w-full inline-block ${
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

          {/* Social Icons */}
          <div className="flex justify-start items-center gap-4 text-foreground">
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
    </div>
  );
}
