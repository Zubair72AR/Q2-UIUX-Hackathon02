"use client";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

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
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Show Active Nav Link
  const pathName = usePathname();
  const isActive = (path: string) => path == pathName;

  return (
    <div className="bg-background text-foreground dark:bg-primary-foreground dark:text-primary py-5 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 ">
      <div className="flex justify-between items-center">
        <LuSearch className="text-lg" />
        <h2 className="text-2xl">
          {" "}
          <Link href="/" className="text-2xl">
            Avion
          </Link>
        </h2>
        <div className="flex justify-between items-center gap-3">
          <LuSearch className="text-lg" />
          {isMenuVisible ? (
            <AiOutlineClose className="text-lg" />
          ) : (
            <HiMenu className="text-lg" />
          )}
          <MdOutlineShoppingCart className="text-lg" />
          <CgProfile className="text-lg" />
          <ToggleButton />
        </div>
      </div>
      <hr className="border-chart-4 my-4" />
      <ul className="flex justify-center items-center gap-6">
        {navLinks.map((e, i) => (
          <li key={i}>
            <Link
              href={e.path}
              className={`list-none text-sm ${
                isActive(e.path) ? "text-chart-1" : "text-chart-5"
              }`}
            >
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
