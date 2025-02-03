"use client";
import AllProductsLink from "@/components/AllProductsLink";
import BlogComp from "@/components/BlogComp";
import { OfferContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BlogType } from "../../../types/products";
import { blogType } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { blog } from "@/sanity/schemaTypes/blog";
import dayjs from "dayjs";

export default function Blog() {
  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible } = useContext(OfferContext);

  // Storing Data in the UseState Hook from Sanity CMS
  const [blogPostData, setBlogPostData] = useState<BlogType[]>([]);

  // Use State for Error Handling
  const [error, setError] = useState<string | null>(null);

  // Use State for Loading Text Display
  const [loading, setLoading] = useState<boolean>(true);

  // All Products Data Fetching from Sanity
  useEffect(() => {
    const getBlogPost = async () => {
      try {
        // Fetching Data
        const fetchedBlogPost: BlogType[] = await client.fetch(blogType);
        // Store Data in the useState
        setBlogPostData(fetchedBlogPost);
      } catch (error) {
        console.error("Error fetching Blog Post:", error);
        setError("Failed to load Blog Posts ❌");
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };
    getBlogPost();
  }, []);

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
        {/* hero Section of Blog */}
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

      <div className="my-12 px-6 sm:px-8 md:px-16 lg:px-24 2xl:px-40">
        {/* Blog List Heading */}
        <p>Browse and Read the Latest Stuff</p>
        <h2 className="text-3xl md:text-4xl">Latest Stories</h2>

        {/* Loading Spinner */}
        {loading ? (
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
            <p className="font-semibold md:text-xl">Loading Blog Post . . .</p>
          </div>
        ) : (
          <>
            {/* Error Handling */}
            {error ? (
              <p className="font-bold text-2xl text-red-700 grid place-items-center h-32">
                {error}
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
                {/* Blog Post List */}
                {blogPostData.map((data) => {
                  // Formatting the date for displaying in the product page
                  const formattedDate = dayjs(data.date).format("MMMM D, YYYY");

                  // Check if the Blog has an image
                  const imageUrl = data.image
                    ? urlFor(data.image).url()
                    : "/Placeholder.svg";
                  return (
                    <Link
                      href={`/blog/${data.slug.current}`}
                      key={data.slug.current}
                    >
                      <BlogComp
                        heading={data.heading}
                        src={imageUrl}
                        description={data.description}
                        date={formattedDate}
                        tags={data.tags}
                        author={data.author}
                        summary={data.summary}
                        className=""
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
