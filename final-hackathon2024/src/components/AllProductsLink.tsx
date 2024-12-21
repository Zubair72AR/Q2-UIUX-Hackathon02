"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Products Links for navigation
const productsLinks = [
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

// Type Interface for Products Navigation to Adjust Background and Horizontal Line
interface AllProductsProps {
  bgColor: string;
  lineColor: string;
}

// All Products Navigation Component
export default function AllProductsLink({
  bgColor,
  lineColor,
}: AllProductsProps) {
  // Show Active Nav Link
  const pathName = usePathname();
  const isActive = (path: string) => path == pathName;

  return (
    <div
      className={`relative dark:bg-chart-1 text-foreground px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 ${bgColor}`}
    >
      {/* Horizontal Line for Large Screen Only */}

      <hr className={`dark:border-chart-5 hidden md:block ${lineColor}`} />

      {/* productsLinks for Large Screen */}
      <div className="hidden md:flex justify-center items-center gap-6 py-4 ">
        {productsLinks.map((e, i) => (
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
