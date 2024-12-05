"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { RiHeart3Line } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { ToggleButton } from "@/components/ToggleButton";

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
    <div className="flex justify-between items-center px-8 lg:px-20 2xl:px-24 py-6 border-b-2">
      <Link href="/" className="font-bold text-2xl">
        Exclusive
      </Link>
      <ul className="flex justify-center items-center gap-8">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`text-sm font-medium ${
              isActive(link.path)
                ? "border-b-2"
                : "border-b-2 border-transparent"
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-between items-center h-9 px-[10px] rounded-sm w-auto bg-muted">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-xs text-foreground bg-transparent placeholder:text-muted-foreground outline-none w-[80%]"
          />
          <LuSearch className="text-foreground size-5" />
        </div>

        <RiHeart3Line />

        <PiShoppingCart />
        <ToggleButton />
      </div>
    </div>
  );
}
