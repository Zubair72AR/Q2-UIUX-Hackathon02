"use client";
import React, { useState } from "react";
import SubHeading from "./SubHeading";
import IconMobile from "./IconMobile";
import IconComputer from "./IconComputer";
import IconSmartWatch from "./IconSmartWatch";
import IconCamera from "./IconCamera";
import IconHeadPhone from "./IconHeadPhone";
import IconGamepad from "./IconGamepad";

// Define the type for the category objects
interface Category {
  id: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function BrowseByCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "Camera"
  );

  // Array of category objects with `id` and the respective `Icon` component
  const categories: Category[] = [
    { id: "Phones", Icon: IconMobile },
    { id: "Computers", Icon: IconComputer },
    { id: "SmartWatch", Icon: IconSmartWatch },
    { id: "Camera", Icon: IconCamera },
    { id: "HeadPhones", Icon: IconHeadPhone },
    { id: "Gaming", Icon: IconGamepad },
  ];

  // Dynamically generate class names based on selection
  const getCategoryClass = (categoryId: string) =>
    selectedCategory === categoryId
      ? "bg-primary border-primary text-white"
      : "hover:bg-primary hover:border-primary";

  return (
    <div className="space-y-6 mt-12 px-7 sm:px-8 lg:px-12 2xl:px-24">
      <SubHeading text="Categories" />
      <h2 className="text-4xl font-semibold">Browse By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 lg:gap-6 pt-4 pb-6">
        {categories.map(({ id, Icon }) => (
          <div
            key={id}
            className={`group flex flex-col gap-2 justify-center items-center border-2 rounded-sm h-32 md:h-36 ${getCategoryClass(
              id
            )}`}
            onClick={() => setSelectedCategory(id)}
            role="button"
            aria-pressed={selectedCategory === id}
          >
            <Icon
              className={`stroke-foreground group-hover:stroke-white ${
                selectedCategory === id ? "stroke-white" : ""
              }`}
            />
            <p
              className={`text-sm group-hover:text-white ${
                selectedCategory === id ? "text-white" : ""
              }`}
            >
              {id}
            </p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
