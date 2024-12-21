"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import ProductsPage from "@/components/ProductsPage";
import { useContext } from "react";

export default function AllProducts() {
  // Offer Strip Setup for Navbar Scrolling
  const { isOfferVisible, setIsOfferVisible } = useContext(OfferContext);

  return (
    <div className={` ${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} `}>
      <AllProductsLink bgColor="bg-white" lineColor="" />
      <div className="flex justify-center md:justify-start items-center md:items-end bg-[url('/Page-Headers.png')] bg-cover bg-center h-44 py-8 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
        <h2 className="text-3xl text-white">All products</h2>
      </div>
      <ProductsPage />
    </div>
  );
}
