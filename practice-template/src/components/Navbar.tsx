"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LuSearch } from "react-icons/lu";
import { RiHeart3Line } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";

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
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-2xl">Exclusive</h1>
      <ul className="flex justify-center items-center gap-8">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className={`text-sm font-medium ${
              isActive(link.path)
                ? "border-b-2"
                : "border-b-2 border-background"
            }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-between items-center py-2 px-[10px] rounded-sm w-auto bg-muted">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-sm text-foreground bg-transparent placeholder:text-muted-foreground outline-none w-[80%]"
          />
          <LuSearch className="text-foreground size-5" />
        </div>

        <RiHeart3Line />

        <PiShoppingCart />
        <ThemeToggle />
      </div>
    </div>
  );
}
