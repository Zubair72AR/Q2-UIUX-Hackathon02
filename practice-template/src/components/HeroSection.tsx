"use client";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const sideMenuList = [
  { title: "Woman’s Fashion", icon: true, subMenu: ["Dresses", "Tops"] },
  { title: "Men’s Fashion", icon: true, subMenu: ["Shirts", "Pants"] },
  { title: "Electronics", icon: false, subMenu: [] },
  { title: "Home & Lifestyle", icon: false, subMenu: [] },
  { title: "Medicine", icon: false, subMenu: [] },
  { title: "Sports & Outdoor", icon: false, subMenu: [] },
  { title: "Baby’s & Toys", icon: false, subMenu: [] },
  { title: "Groceries & Pets", icon: false, subMenu: [] },
  { title: "Health & Beauty", icon: false, subMenu: [] },
];

export default function HeroSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Side Mene Sub Menu
  const sideMenuCollapse = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="px-7 sm:px-8 lg:px-20 xl:px-24">
      {/* Side Menu */}
      <div className="w-52 space-y-3 pt-10 border-r-[1px] pr-4">
        {sideMenuList.map((e, i) => (
          <div key={i}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => sideMenuCollapse(i)}
            >
              <p className="text-foreground text-sm font-medium hover:text-chart-1">
                {e.title}
              </p>

              {/* Arrow Icon and Rotate Icon */}
              {e.icon && (
                <FaAngleRight
                  className={`text-sm transition-all duration-300 ${
                    openIndex === i ? "rotate-90" : ""
                  }`}
                />
              )}
            </div>

            {/* Show Sub Menu */}
            {openIndex === i && e.subMenu.length > 0 && (
              <div className="space-y-1">
                {e.subMenu.map((subItem, index) => (
                  <p
                    key={index}
                    className="text-secondary-foreground bg-secondary text-xs hover:bg-muted hover:text-chart-1 px-1 py-[2px]"
                  >
                    {subItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hero Image */}
      <div></div>
    </div>
  );
}
