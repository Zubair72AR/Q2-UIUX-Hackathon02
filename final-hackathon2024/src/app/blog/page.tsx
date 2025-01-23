"use client";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

export default function Blog() {
  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible } = useContext(OfferContext);
  return (
    // Offer Strip Margin Top Setup for Navbar Scrolling
    <div
      className={`${
        isOfferVisible ? "mt-[97px] md:mt-[110px]" : "mt-[61px] md:mt-[74px]"
      }`}
    >
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-[hsl(0,0,97%)]" lineColor="border-none" />
      <div className="flex flex-col md:flex-row justify-between md:justify-end items-center md:py-24 md:pr-16 lg:pr-24 2xl:pr-40 md:bg-[url('/Blog.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex items-center md:items-start justify-between flex-col gap-20 bg-background w-full md:w-[500px] md:h-[450px] px-6 sm:px-8 md:px-10 py-8 md:py-10">
          {/* Left Portion Heading and Button */}
          <div className="space-y-3 lg:space-y-4">
            <h1 className="text-2xl">
              Luxury homeware for people who love timeless design quality
            </h1>

            <p className="text-zinc-400">
              Shop the new Spring 2022 collection today
            </p>
          </div>

          {/* Button */}
          <Link href="/all-products" className="w-full md:w-auto">
            <Button variant={"secondary"} className="w-full md:w-auto">
              View collection
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Image src="/Blog.png" alt="Blog Image" width={1000} height={500} />
        </div>
      </div>
    </div>
  );
}
