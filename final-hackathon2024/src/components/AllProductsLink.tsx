"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { productsLinks } from "@/components/NavLinksArray";

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
      className={`hidden md:block relative dark:bg-[hsl(248,34%,20%)] text-foreground px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36 ${bgColor}`}
    >
      {/* Horizontal Line for Large Screen Only */}

      <hr className={`dark:border-chart-5 hidden md:block ${lineColor}`} />

      {/* productsLinks for Large Screen */}
      <div className="flex justify-center items-center gap-6 py-4 ">
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
