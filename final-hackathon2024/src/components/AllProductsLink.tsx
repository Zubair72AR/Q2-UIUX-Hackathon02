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
    path: "/all-products",
    label: "All products",
  },
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

export default function AllProductsLink() {
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
    <div className="relative bg-[hsl(0,0%,97%)] dark:bg-chart-1 text-foreground px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      {/* Horizontal Line for Large Screen Only */}
      <hr className="border-white dark:border-chart-5 hidden md:block" />

      {/* NavLinks for Large Screen */}
      <div className="hidden md:flex justify-center items-center gap-6 py-4 ">
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
    </div>
  );
}
