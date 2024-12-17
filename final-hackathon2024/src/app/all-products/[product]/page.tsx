"use client";
import Image from "next/image";
import products from "@/components/ArrayData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";
import YouMightLike from "@/components/YouMightLike";
import MakesOurBrand from "@/components/MakesOurBrand";
import JoinClub from "@/components/JoinClub";

const ProductPage = ({ params }: { params: { product: string } }) => {
  const [number, setNumber] = useState(1);
  const { product } = params;

  const myProd = products.find(
    (c) => c.path.toLowerCase() === product.toLowerCase()
  );

  // If product is not found, return "Page not found"
  if (!myProd) {
    return (
      <div className="text-center">
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 underline">
          Go back to the homepage
        </a>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center gap-12">
        <Image
          src={myProd.image}
          alt={myProd.name || "Product Image"}
          width={500}
          height={200}
          className="object-contain hover:bg-cover shadow-md w-full md:w-1/2"
        />
        <div className="space-y-10 w-full md:w-1/2 pr-6 sm:pr-8 md:pr-12 lg:pr-20 2xl:pr-36 pl-6 sm:pl-8 md:pl-0">
          <div className="space-y-4">
            <div>
              <p className="text-[10px]">Date Added: {myProd.dateAdded}</p>
              <h3 className="text-3xl">{myProd.name}</h3>
            </div>
            <p className="text-xl">£{myProd.price}</p>
          </div>

          <div className="space-y-4">
            <p>Description</p>
            <p className="text-sm text-zinc-500 dark:text-gray-300">
              {myProd.description}
            </p>

            <ul className="space-y-1 text-zinc-500 dark:text-gray-300">
              <li className="text-sm list-disc ml-6">
                {myProd.specification[0]}
              </li>
              <li className="text-sm list-disc ml-6">
                {myProd.specification[1]}
              </li>
              <li className="text-sm list-disc ml-6">
                {myProd.specification[2]}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p>Dimensions</p>
            <div className="flex justify-start items-center gap-10">
              <div className="space-y-1">
                <p className="text-sm ">Height</p>
                <p className="text-sm text-zinc-500 dark:text-gray-300">
                  {myProd.Dimensions[0]}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm ">Width</p>
                <p className="text-sm text-zinc-500 dark:text-gray-300">
                  {myProd.Dimensions[1]}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm ">Depth</p>
                <p className="text-sm text-zinc-500 dark:text-gray-300">
                  {myProd.Dimensions[2]}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-4">
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-3 md:gap-4">
              <p>Quantity:</p>
              <div className="flex justify-center items-center gap-6 md:gap-3 px-3 bg-chart-4 text-chart-1 mx-auto w-full md:w-auto">
                <button
                  onClick={() => {
                    number >= 2 && setNumber(number - 1);
                  }}
                  className="px-3 py-[6px] text-chart-3 text-lg"
                >
                  -
                </button>
                {number}
                <button
                  onClick={() => {
                    setNumber(number + 1);
                  }}
                  className="px-3 py-[6px] text-chart-3 text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              <Button
                onClick={() => {
                  setNumber(number + 1);
                }}
                className="mx-auto block w-full md:w-auto"
              >
                Add to cart
              </Button>

              <Link href="/all-products">
                <Button
                  variant={"secondary"}
                  className="bg-red-500 text-white hover:bg-red-700 mx-auto block w-full md:w-auto"
                >
                  Back <TbArrowBackUp />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <YouMightLike />
      <MakesOurBrand />
      <JoinClub />
    </div>
  );
};

export default ProductPage;

/*
path: "sleek-lamp",
    id: 18,
    name: "Sleek Floor Lamp",
    category: "Lighting",
    type: "Lamp",
    price: 190,
    brand: "Brand R",
    dateAdded: "2023-11-09",
    image: "/Photo09.png",
    className: "",*/
