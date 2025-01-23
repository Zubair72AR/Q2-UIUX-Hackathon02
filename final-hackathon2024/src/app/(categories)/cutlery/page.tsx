"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import DisplayByCategory from "@/components/DisplayByCategory";
import Link from "next/link";
import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Cutlery() {
  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible } = useContext(OfferContext);

  return (
    // Offer Strip Margin Top Setup for Navbar Scrolling
    <div
      className={`mb-20 ${
        isOfferVisible ? "mt-[97px] md:mt-[110px]" : "mt-[61px] md:mt-[74px]"
      } `}
    >
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-white" lineColor="" />

      {/* All Products Hero Image and Heading */}
      <div className="flex justify-center md:justify-start items-center md:items-end bg-[url('/Page-Headers.png')] bg-cover bg-center h-44 py-8 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
        <div className="flex justify-center items-center gap-2">
          <Link
            href="/all-products"
            className="text-2xl md:text-3xl text-white opacity-50 transition-all duration-500 hover:opacity-100"
          >
            All products
          </Link>
          <FaAngleRight className="text-white opacity-50" />
          <h2 className="text-2xl md:text-3xl text-white">Cutlery</h2>
        </div>
      </div>

      {/* All Products List */}
      <DisplayByCategory categoryType="Cutlery" />
    </div>
  );
}
