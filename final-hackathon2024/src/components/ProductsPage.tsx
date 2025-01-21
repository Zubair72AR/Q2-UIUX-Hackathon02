import React, { useEffect, useState } from "react";
import { Brands, Category, Product, ProductType } from "../../types/products";
import { client } from "@/sanity/lib/client";
import {
  allProducts,
  brandName,
  category,
  productType,
} from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "./ui/button";
import { IoMdArrowDropdown } from "react-icons/io";

export default function ProductsPage() {
  // Storing Data in the UseState Hook from Sanity CMS
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brands[]>([]);
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  // Use State for Filtering Category, Type and Brands
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [brandFilter, setBrandFilter] = useState<string>("All");
  // Use State for Sorting by Name and Date
  const [sortOption, setSortOption] = useState<string>("dateAdded");
  const [priceSortOption, setPriceSortOption] = useState<string>("");
  // Use State for Showing only 12 Products by Default
  const [visibleCount, setVisibleCount] = useState<number>(12);
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
      }
    };
    getProducts();
  }, []);

  // Fetch and Store Data from Sanity
  // Categories Name Data Fetching from Sanity
  useEffect(() => {
    const getCategories = async () => {
      try {
        // Fetching Data
        const fetchedCategories: Category[] = await client.fetch(category);
        // Store Data in the useState
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
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
      }
    };
    getBrands();
  }, []);

  // Fetch and Store Data from Sanity
  // Products Type Data Fetching from Sanity
  useEffect(() => {
    const getProductsType = async () => {
      try {
        // Fetching Data
        const fetchedProductsType: ProductType[] =
          await client.fetch(productType);
        // Store Data in the useState
        setProductTypes(fetchedProductsType);
      } catch (error) {
        console.error("Error fetching Product Type:", error);
      }
    };
    getProductsType();
  }, []);

  // Button => Function to Show more Products
  const showMoreItems = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // Storing Data in the Variable => After Filter Products by Category, Type and Brand
  const filteredProduct = products.filter((p) => {
    // Apply Filters by Category
    const matchCategory =
      categoryFilter === "All" || p.categoryName === categoryFilter;
    // Apply Filters by Product Type
    const matchType = typeFilter === "All" || p.productType === typeFilter;
    // Apply Filters by Brands
    const matchBrand = brandFilter === "All" || p.brandName === brandFilter;
    return matchCategory && matchType && matchBrand;
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
          {/* Filter by Category for Large Screen */}
          <div className="flex justify-between items-center relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none"
            >
              <option value="All">Category</option>
              {categories.map((value) => (
                <option value={value.name}>{value.name}</option>
              ))}
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
          {/* Filter by Products Type for Large Screen */}
          <div className="flex justify-between items-center relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none"
            >
              <option value="All">Product type</option>
              {productTypes.map((value) => (
                <option value={value.name}>{value.name}</option>
              ))}
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
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
          {/* Filter by Category for Mobile Devices */}
          <div className="flex justify-between items-center relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none w-full"
            >
              <option value="All">Category</option>
              {categories.map((value) => (
                <option key={value._id} value={value.name}>
                  {value.name}
                </option>
              ))}
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
          {/* Filter by Products Type for Mobile Devices */}
          <div className="flex justify-between items-center relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-transparent dark:bg-chart-1 outline-none pr-5 appearance-none w-full"
            >
              <option value="All">Product type</option>
              {productTypes.map((value) => (
                <option value={value.name}>{value.name}</option>
              ))}
            </select>
            <IoMdArrowDropdown className="absolute right-0 pointer-events-none text-lg" />
          </div>
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
        {sortedProducts.slice(0, visibleCount).map((p) => (
          // Dynamic Routes
          <Link href={`/all-products/${p.slug.current}`}>
            {/* Image */}
            <div className="overflow-hidden hover:rounded-xl transition-all duration-1000">
              {p.image && (
                <Image
                  src={urlFor(p.image).url()}
                  alt={p.name}
                  width={500}
                  height={200}
                  className="object-contain bg-cover transition-all duration-500 hover:scale-110"
                />
              )}
            </div>

            {/* Name and Price */}
            <h3 className="text-base md:text-lg lg:text-xl mt-2 md:mt-3">
              {p.name}
            </h3>
            <p className="text-sm md:text-base lg:text-lg mt-0 md:mt-1">
              £{p.price}
            </p>
          </Link>
        ))}
      </div>
      {/* Load More Button */}
      <Button
        variant={"secondary"}
        onClick={showMoreItems}
        className="mx-auto block w-full md:w-auto my-10"
      >
        Load More
      </Button>
    </div>
  );
}
