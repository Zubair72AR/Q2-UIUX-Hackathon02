"use client";
import Image from "next/image";
import products from "@/components/ArrayData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

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
    <div className="py-12 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      <div className="flex justify-between items-center gap-12">
        <Image
          src={myProd.image}
          alt={myProd.name || "Product Image"}
          width={500}
          height={200}
          className="object-contain hover:bg-cover rounded-3xl shadow-md"
        />
        <div className="space-y-5 w-1/2">
          <div className="space-y-1">
            <p className="text-[10px]">Date Added: {myProd.dateAdded}</p>
            <h3 className="text-3xl">
              <span className="text-xs">{myProd.id} .</span>
              {myProd.name}
            </h3>
            <p className="text-xl">£{myProd.price}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm ">Category: {myProd.category}</p>
            <p className="text-sm ">Brand: {myProd.brand}</p>
            <p className="text-sm ">Product Type: {myProd.type}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm ">Description</p>
            <p className="text-sm ">{myProd.description}</p>
          </div>
          <div className="flex justify-between items-center gap-2 pt-14">
            <div className="flex justify-center items-center gap-5">
              <p>Amount:</p>
              <div className="flex justify-between items-center bg-chart-4 text-chart-1">
                <button
                  onClick={() => {
                    number >= 2 && setNumber(number - 1);
                  }}
                  className="px-6 py-2 text-chart-3"
                >
                  -
                </button>
                {number}
                <button
                  onClick={() => {
                    setNumber(number + 1);
                  }}
                  className="px-6 py-2 text-chart-3"
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
                  Back
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
