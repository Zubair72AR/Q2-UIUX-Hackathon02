import React, { useEffect, useState } from "react";
import { Brands, Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, brandName } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "./ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import ImageComp from "./ImageComp";

interface DisplayDataTypeCategory {
  categoryType: string;
}
export default function DisplayByCategory({
  categoryType,
}: DisplayDataTypeCategory) {
  // Storing Data in the UseState Hook from Sanity CMS
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brands[]>([]);
  // Use State for Loading Text Display
  const [loading, setLoading] = useState<boolean>(true);
  // Use State for Filtering Category, Type and Brands
  const [categoryFilter] = useState<string>(categoryType);
  const [brandFilter, setBrandFilter] = useState<string>("All");
  // Use State for Sorting by Name and Date
  const [sortOption, setSortOption] = useState<string>("dateAdded");
  const [priceSortOption, setPriceSortOption] = useState<string>("");

  // Use State for Mobile Device for Filtering and Display
  const [showFilterBtn, setShowFilterBtn] = useState<boolean>(false);
  // Use State for Mobile Device for Sorting and Display
  const [showSortBtn, setShowSortBtn] = useState<boolean>(false);

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
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };
    getProducts();
  }, []);

  // Fetch and Store Data from Sanity
  // Brands Name Data Fetching from Sanity
  useEffect(() => {
    const getBrands = async () => {
      try {
        // Fetching Data
        const fetchedBrands: Brands[] = await client.fetch(brandName);
        // Store Data in the useState
        setBrands(fetchedBrands);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };
    getBrands();
  }, []);

  // Storing Data in the Variable => After Filter Products by Category, Type and Brand
  const filteredProduct = products.filter((p) => {
    // Apply Filters by Category
    const matchCategory = p.categoryName === categoryFilter;
    // Apply Filters by Brands
    const matchBrand = brandFilter === "All" || p.brandName === brandFilter;
    return matchCategory && matchBrand;
  });

  // Storing Data in the Variable => After Sorting Products by Name and Date
  const sortedProducts = [...filteredProduct]
    .sort((a, b) => {
      // Sort by Name
      if (sortOption === "name") return a.name.localeCompare(b.name);
      // Sort by Date
      if (sortOption === "dateAdded")
        return (
          new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        );
      return 0;
    })
    // Sort by Price
    .sort((a, b) => {
      // Sort by Price (if selected)
      if (priceSortOption === "lowToHigh") return a.price - b.price;
      if (priceSortOption === "highToLow") return b.price - a.price;
      return 0;
    });

  // Show and hide Sort and Filter Button if Opened According to Media Size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowFilterBtn(false);
        setShowSortBtn(false);
      }
    };

    // Add Event Listener on Window Resize
    window.addEventListener("resize", handleResize);

    // Call HandleResize on Initial Render
    handleResize();

    // Remove Event Listener on Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Filter and Sorting for Mobile Devices
  // Hide Sort Button if Filter Button is Opened
  const filterButton = () => {
    setShowFilterBtn(!showFilterBtn);
    setShowSortBtn(false);
  };
  // Hide Filter Button if Sort Button is Opened
  const sortButton = () => {
    setShowSortBtn(!showSortBtn);
    setShowFilterBtn(false);
  };

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
    <div className="px-6 sm:px-8 md:pr-5 appearance-none2 lg:px-20 2xl:px-36">
      <div className="flex justify-between items-center py-5">
        {/* Filter Button for Mobile Devices */}
        <Button
          variant={"secondary"}
          onClick={filterButton}
          className="md:hidden"
        >
          Filters <IoMdArrowDropdown className="text-lg" />
        </Button>
        {/* Sorting Button for Mobile Devices */}
        <Button
          variant={"secondary"}
          onClick={sortButton}
          className="md:hidden"
        >
          Sorting <IoMdArrowDropdown className="text-lg" />
        </Button>
        <div className="hidden md:flex justify-between items-center gap-8">
          {/* Sort by Price for Large Screen */}
          <div className="flex justify-between items-center relative">
            <select
              value={priceSortOption}
              onChange={(e) => setPriceSortOption(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none"
            >
              <option value="">Price</option>
              <option value="lowToHigh">High</option>
              <option value="highToLow">Low</option>
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
          {/* Filter by Brand for Large Screen */}
          <div className="flex justify-between items-center relative">
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none"
            >
              <option value="All">Brand</option>
              {brands.map((value) => (
                <option value={value.name}>{value.name}</option>
              ))}
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
        </div>
        {/* Sort by Date/Name for Large Screen */}
        <div className="hidden md:flex justify-between items-center gap-2">
          <label>Sorting by:</label>
          <div className="flex justify-between items-center relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none"
            >
              <option value="dateAdded">Date added</option>
              <option value="name">Name</option>
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
        </div>
      </div>

      {/* Sort by Date/Name for Mobile Devices */}
      {showSortBtn && (
        <div className="flex flex-col md:hidden gap-2">
          <label>Sorting by:</label>
          <div className="flex justify-between items-center relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none w-full"
            >
              <option value="dateAdded">Date added</option>
              <option value="name">Name</option>
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
        </div>
      )}
      {showFilterBtn && (
        <div className="flex flex-col md:hidden gap-2">
          {/* Sort by Price for Mobile Devices */}
          <div className="flex justify-between items-center relative">
            <select
              value={priceSortOption}
              onChange={(e) => setPriceSortOption(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none w-full"
            >
              <option value="">Price</option>
              <option value="lowToHigh">High</option>
              <option value="highToLow">Low</option>
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
          {/* Filter by Brand for Mobile Devices */}
          <div className="flex justify-between items-center relative">
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none w-full"
            >
              <option value="All">Brand</option>
              {brands.map((value) => (
                <option value={value.name}>{value.name}</option>
              ))}
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-2 md:gap-x-3 gap-y-8 cursor-pointer p-4 max-w-7xl mx-auto">
        {/* Products List - By Default 12 Products are Shown */}
        {sortedProducts.map((p) => {
          // Check if the product has an image
          const imageUrl = p.image ? urlFor(p.image).url() : "/Placeholder.svg";
          return (
            // Dynamic Routes
            <Link href={`/all-products/${p.slug.current}`} key={p.slug.current}>
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
    </div>
  );
}
