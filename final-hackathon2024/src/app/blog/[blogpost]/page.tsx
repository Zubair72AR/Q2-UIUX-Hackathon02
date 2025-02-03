"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import AllProductsLink from "@/components/AllProductsLink";
import { OfferContext } from "@/components/Context";
import { BlogType } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import dayjs from "dayjs";
import { blogType } from "@/sanity/lib/queries";

const ProductPage = ({ params }: { params: { blogpost: string } }) => {
  // Offer Strip Margin Top Setup for Navbar Scrolling
  const { isOfferVisible } = useContext(OfferContext);

  // Storing Data in the UseState Hook from Sanity CMS
  const [blogPostData, setBlogPostData] = useState<BlogType[]>([]);

  // All Products Data Fetching from Sanity
  useEffect(() => {
    const getBlogPost = async () => {
      try {
        const fetchedBlogPost: BlogType[] = await client.fetch(blogType);
        setBlogPostData(fetchedBlogPost);
      } catch (error) {
        console.error("Error fetching Blog Post:", error);
      }
    };
    getBlogPost();
  }, []);

  const { blogpost } = params;
  // Matching the Selected Product
  const myPost = blogPostData.find(
    (c) => c.slug.current.toLowerCase() === blogpost.toLowerCase()
  );

  console.log("blogpost", blogpost);
  console.log("MyPost", myPost);

  // If product is not found, return "Page not found"
  if (!myPost) {
    return (
      <div className={`${isOfferVisible ? "mt-[110px]" : "mt-[74px]"} `}>
        <AllProductsLink bgColor="bg-white" lineColor="" />

        {/* Error Page Content */}
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
  const formattedDate = dayjs(myPost.date).format("MMMM D, YYYY");

  // Check if the product has an image
  const imageUrl = myPost.image
    ? urlFor(myPost.image).url()
    : "/Placeholder.svg";

  return (
    // Offer Strip Margin Top Setup for Navbar Scrolling
    <div
      className={` ${
        isOfferVisible ? "mt-[97px] md:mt-[110px]" : "mt-[61px] md:mt-[74px]"
      } `}
    >
      {/* All Products List Navigation */}
      <AllProductsLink bgColor="bg-[hsl(0,0,97%)]" lineColor="border-none" />

      {/* Blog Detailed Page Content */}
      <div className="md:relative flex flex-col md:flex-row justify-center items-center md:w-[720px] mx-auto md:min-h-[600px] pb-12 md:py-16 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
        {/* Blog Post Image */}
        <Image
          src={imageUrl}
          alt={myPost.heading}
          width={500}
          height={500}
          className="rounded-xl relative top-16 md:top-auto md:absolute md:right-0 md:h-[500px] w-[80%] sm:w-[65%] md:w-auto"
        />
        <div className="rounded-2xl md:absolute md:left-0 md:w-[420px] bg-[rgba(245,245,245,0.5)] dark:bg-[rgba(29,25,54,0.5)] backdrop-blur-md p-8 border-2 shadow-xl space-y-4">
          {/* Blog Post Heading Description Other Details */}
          <h2 className="text-2xl font-medium">{myPost.heading}</h2>
          <p className="font-medium text-sm sm:text-base">
            {myPost.description}
          </p>
          <p className="text-sm">{myPost.summary}</p>

          <div className="flex flex-wrap justify-start items-center gap-2">
            {myPost.tags.map((val) => {
              return (
                <p className="text-xs font-medium bg-[rgb(237,237,237,0.5)] dark:bg-[rgb(26,24,48,0.5)] px-2 py-1 border rounded-md">
                  {val},
                </p>
              );
            })}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs font-medium text-green-500">
              {myPost.author}
            </p>
            <p className="text-xs font-medium text-red-500">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// heading,
// slug,
// "image": image.asset,
// description,
// date,
// "tags": tags->name,
// author,
// // summary
