"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { RiHeart3Line } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { ToggleButton } from "@/components/ToggleButton";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Sign Up", path: "/signup" },
];

export default function Navbar() {
  const pathName = usePathname();
  const isActive = (path: string) => path == pathName;

  return (
    <div className="relative flex justify-between items-center px-8 lg:px-20 xl:px-24 py-3 mt-5 border-b-[1px]">
      <Link href="/" className="font-bold text-xl">
        Exclusive
      </Link>
      <ul className="hidden sm:flex justify-center items-center gap-6 md:gap-8">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`text-foreground text-sm font-medium ${
              isActive(link.path)
                ? "border-b-2 border-secondary"
                : "border-b-2 border-transparent"
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-4 md:gap-5">
        <div className="hidden lg:flex justify-between items-center h-9 px-[10px] rounded-sm w-60 bg-muted">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="placeholder:text-xs text-sm text-foreground bg-transparent placeholder:text-muted-foreground outline-none w-[80%]"
          />
          <LuSearch className="text-foreground text-lg" />
        </div>
        <LuSearch className="text-foreground text-xl lg:hidden" />
        <RiHeart3Line className="text-foreground text-xl" />
        <PiShoppingCart className="text-foreground text-xl" />
        <ToggleButton />
      </div>
      <div className="absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 flex justify-between items-center h-9 pl-[10px] rounded-md w-[75%] bg-muted ">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="placeholder:text-xs text-sm text-foreground bg-transparent placeholder:text-muted-foreground outline-none w-[80%]"
        />
        <div className="flex justify-between items-center gap-2">
          <LuSearch className="text-foreground text-lg" />
          <Button size={"icon"}>
            <RxCross2 className="text-[22px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
