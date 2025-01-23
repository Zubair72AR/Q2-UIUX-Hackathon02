"use client";
import ImageComp from "./ImageComp";
import { Button } from "./ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function NewCeramics() {
  // Storing Data in the UseState Hook from Sanity CMS
  const [products, setProducts] = useState<Product[]>([]);
  // Use State for Error Handling
  const [error, setError] = useState<string | null>(null);
  // Use State for Loading Text Display
  const [loading, setLoading] = useState<boolean>(true);

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
        setError("Failed to load products ❌");
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };
    getProducts();
  }, []);

  // Filter Products by Category
  const filteredProductsByCategory = products.filter(
    (val) => val.categoryName === "Ceramics"
  );

  if (loading)
    return (
      // Show Loading State
      <div className="w-full grid place-items-center my-10 gap-y-6">
        {/* Loading Image */}
        <Image
          src="/Loading.svg"
          alt="Loading Icon"
          width={200}
          height={200}
          className="rotate-clock w-12 h-12 md:w-16 md:h-16 dark:opacity-50"
        />
        <p className="font-semibold md:text-xl">Loading products . . .</p>
      </div>
    );

  return (
    <div className="space-y-8 py-14 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl">New ceramics</h2>
      {error ? (
        <p className="font-bold text-2xl text-red-700 grid place-items-center h-32">
          {error}
        </p>
      ) : (
        <>
          {/* Images*/}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 justify-between">
            {filteredProductsByCategory.slice(0, 4).map((p) => {
              // Check if the product has an image
              const imageUrl = p.image
                ? urlFor(p.image).url()
                : "/Placeholder.svg";
              return (
                // Dynamic Routes
                <Link
                  href={`/all-products/${p.slug.current}`}
                  key={p.slug.current}
                >
                  {/* Dynamic Image Component for Product Image */}
                  <ImageComp
                    src={imageUrl}
                    dec={p.name}
                    prices={`£${p.price}`}
                    tags={p.tags}
                    className="bg-gray-200"
                  />
                </Link>
              );
            })}
          </div>
        </>
      )}
      {/* Button */}
      <Link href="/all-products">
        <Button
          variant={"secondary"}
          className="mx-auto block w-full md:w-auto mt-8 md:mt-10"
        >
          View collection
        </Button>
      </Link>
    </div>
  );
}
