"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";
import YouMightLike from "@/components/YouMightLike";
import MakesOurBrand from "@/components/MakesOurBrand";
import JoinClub from "@/components/JoinClub";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addToCart } from "@/app/store/slices/cartSlice";

const ProductPage = ({ params }: { params: { product: string } }) => {
  const [number, setNumber] = useState(1);
  const [addCart, setAddCart] = useState(true);

  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible } = useContext(OfferContext);

  // Storing Data in the UseState Hook from Sanity CMS
  const [products, setProducts] = useState<Product[]>([]);

  // Dispatch Action to Update the Number of Selected Product
  const dispatch = useAppDispatch();

  // Fetch and Store Data from Sanity
  // All Products Data Fetching from Sanity
  useEffect(() => {
    const getProducts = async () => {
      try {
        // Fetching Data
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        // Store Data in the useState
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const { product } = params;
  // Matching the Selected Product
  const myProd = products.find(
    (c) => c.slug.current.toLowerCase() === product.toLowerCase()
  );

  // If product is not found, return "Page not found"
  if (!myProd) {
    return (
      <div className={`${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} `}>
        <AllProductsLink bgColor="bg-white" lineColor="" />
        <div className="flex justify-center items-center flex-col gap-3 my-48">
          <h1 className="font-bold text-2xl text-red-500 leading-none">
            Error 404
          </h1>
          <div className="flex justify-center items-center flex-col">
            <p>Oops! This page was not found</p>
            <p className="text-chart-3">
              The products listed are not in the list, or you have entered a
              misspelling.
            </p>
          </div>
          <Button variant={"destructive"}>Back to Home</Button>
        </div>
      </div>
    );
  }

  // Formatting the date for displaying in the product page
  const formattedDate = dayjs(myProd.dateAdded).format("MMMM D, YYYY");

  // Check if the product has an image
  const imageUrl = myProd.image
    ? urlFor(myProd.image).url()
    : "/Placeholder.svg";

  return (
    // Offer Strip Margin Top Setup for Navbar Scrolling
    <div
      className={` ${
        isOfferVisible ? "mt-[97px] md:mt-[110px]" : "mt-[61px] md:mt-[74px]"
      } `}
    >
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-white" lineColor="" />

      {/* Image of Selected Product */}
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center gap-12">
        <Image
          src={imageUrl}
          alt={myProd.name || "Product Image"}
          width={500}
          height={200}
          className="object-contain hover:bg-cover shadow-md w-full md:w-1/2"
        />

        {/* Product Details */}
        <div className="space-y-10 w-full md:w-1/2 pr-6 sm:pr-8 md:pr-12 lg:pr-20 2xl:pr-36 pl-6 sm:pl-8 md:pl-0">
          <div className="space-y-4">
            {/* Product Date and Name */}
            <div>
              <p className="text-[10px]">Date Added: {formattedDate}</p>
              <h3 className="text-3xl">{myProd.name}</h3>
            </div>

            {/* Price and Stock Information */}
            <div className="flex justify-start items-center gap-12">
              <p className="text-xl">£{myProd.price}</p>
              <p className="text-zinc-500 dark:text-gray-300">
                Stock: {myProd.quantity}
              </p>
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-4">
            <p>Description</p>
            <p className="text-sm text-zinc-500 dark:text-gray-300">
              {myProd.description}
            </p>

            {/* Product Specifications */}
            <ul className="space-y-1 text-zinc-500 dark:text-gray-300">
              <li className="text-sm list-disc ml-6">{myProd.features[0]}</li>
              <li className="text-sm list-disc ml-6">{myProd.features[1]}</li>
              <li className="text-sm list-disc ml-6">{myProd.features[2]}</li>
            </ul>
          </div>

          {/* Product Dimensions */}
          <div className="space-y-4">
            <p>Dimensions</p>
            <div className="flex justify-start items-center gap-10">
              <div className="space-y-1">
                <p className="text-sm ">Height</p>
                <p className="text-sm text-zinc-500 dark:text-gray-300">
                  {myProd.dimensions.height}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm ">Width</p>
                <p className="text-sm text-zinc-500 dark:text-gray-300">
                  {myProd.dimensions.width}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm ">Depth</p>
                <p className="text-sm text-zinc-500 dark:text-gray-300">
                  {myProd.dimensions.depth}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-3">
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-3 md:gap-4 w-full md:w-auto">
              {/* Quantity Button  */}
              <p>Quantity:</p>
              <div className="flex justify-center items-center gap-6 md:gap-3 px-3 bg-chart-4 text-chart-1 w-full md:w-auto">
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

            <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full md:w-auto">
              {/* Button for Add to Cart and Remove  */}
              <Button
                onClick={() => dispatch(addToCart({ prod: myProd }))}
                className="mx-auto w-full md:w-auto"
              >
                {addCart ? "Add to cart" : "Remove to cart"}
              </Button>

              <Link href="/all-products" className="mx-auto w-full md:w-auto">
                <Button
                  variant={"secondary"}
                  className="bg-red-500 text-white hover:bg-red-700 mx-auto w-full md:w-auto"
                >
                  Back <TbArrowBackUp />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Other Components Data */}
      <YouMightLike />
      <MakesOurBrand />
      <JoinClub />
    </div>
  );
};

export default ProductPage;
