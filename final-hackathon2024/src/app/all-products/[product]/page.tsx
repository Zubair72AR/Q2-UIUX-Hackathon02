"use client";
import Image from "next/image";
import products from "@/components/ArrayData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

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
        <div className="space-y-6 w-full md:w-1/2 pr-6 sm:pr-8 md:pr-12 lg:pr-20 2xl:pr-36 pl-6 sm:pl-8 md:pl-0">
          <div className="space-y-1">
            <p className="text-[10px]">Date Added: {myProd.dateAdded}</p>
            <h3 className="text-3xl">{myProd.name}</h3>
            <p className="text-xl">£{myProd.price}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm ">Description</p>
            <p className="text-sm ">{myProd.description}</p>
          </div>
          <ul className="space-y-1">
            <li className="text-sm list-disc ml-6">
              Category: {myProd.category}
            </li>
            <li className="text-sm list-disc ml-6">Brand: {myProd.brand}</li>
            <li className="text-sm list-disc ml-6">
              Product Type: {myProd.type}
            </li>
          </ul>
          <div className="flex flex-wrap justify-between items-center gap-4 pt-10">
            <div className="flex justify-center items-center gap-4">
              <p>Amount:</p>
              <div className="flex justify-between items-center bg-chart-4 text-chart-1 w-28">
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
            <div className="flex justify-center items-center gap-2">
              <Button
                onClick={() => {
                  setNumber(number + 1);
                }}
              >
                Add to cart
              </Button>
              <Link href="/all-products">
                <Button
                  variant={"secondary"}
                  className="bg-red-500 text-white hover:bg-red-700"
                >
                  Back <TbArrowBackUp />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
