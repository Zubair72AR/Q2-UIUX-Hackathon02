"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import products from "@/components/ArrayData";
import { Button } from "./ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function ProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [brandFilter, setBrandFilter] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("dateAdded");
  const [priceSortOption, setPriceSortOption] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [showFilterBtn, setShowFilterBtn] = useState<boolean>(false);
  const [showSortBtn, setShowSortBtn] = useState<boolean>(false);

  // Function to show more items
  const showMoreItems = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const filteredProduct = products.filter((p) => {
    // Apply Filters by Category
    const matchCategory =
      categoryFilter === "All" || p.category === categoryFilter;
    // Apply Filters by Product Type
    const matchType = typeFilter === "All" || p.type === typeFilter;
    // Apply Filters by Brands
    const matchBrand = brandFilter === "All" || p.brand === brandFilter;
    return matchCategory && matchType && matchBrand;
  });

  const sortedProducts = [...filteredProduct]
    .sort((a, b) => {
      // Sort by Date or Name
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "dateAdded")
        return (
          new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        );
      return 0;
    })
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

  // Hide Sort Button if Filter is Opened
  const filterButton = () => {
    setShowFilterBtn(!showFilterBtn);
    setShowSortBtn(false);
  };
  // Hide Filter Button if Sort is Opened
  const sortButton = () => {
    setShowSortBtn(!showSortBtn);
    setShowFilterBtn(false);
  };

  return (
    <div className="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      <div className="flex justify-between items-center py-5">
        <Button
          variant={"secondary"}
          onClick={filterButton}
          className="md:hidden"
        >
          Filters <IoMdArrowDropdown className="text-lg" />
        </Button>
        <Button
          variant={"secondary"}
          onClick={sortButton}
          className="md:hidden"
        >
          Sorting <IoMdArrowDropdown className="text-lg" />
        </Button>
        <div className="hidden md:flex justify-between items-center gap-8">
          {/* Filter by Category */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="All">Category</option>
            <option value="Furniture">Furniture</option>
            <option value="Decor">Decor</option>
            <option value="Lighting">Lighting</option>
          </select>
          {/* Filter by Products Type */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="All">Product type</option>
            <option value="Chair">Chair</option>
            <option value="Vase">Vase</option>
            <option value="Lamp">Lamp</option>
            <option value="Table">Table</option>
            <option value="Shelf">Shelf</option>
            <option value="Clock">Clock</option>
          </select>
          {/* Sort by Price */}
          <select
            value={priceSortOption}
            onChange={(e) => setPriceSortOption(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="">Price</option>
            <option value="lowToHigh">High</option>
            <option value="highToLow">Low</option>
          </select>
          {/* Filter by Brand */}
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="All">Brand</option>
            <option value="Brand A">A</option>
            <option value="Brand B">B</option>
            <option value="Brand C">C</option>
            <option value="Brand D">D</option>
          </select>
        </div>
        {/* Sort by Date/Name */}
        <div className="hidden md:flex justify-between items-center gap-2">
          <label>Sorting by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="dateAdded">Date added</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      {showSortBtn && (
        <div className="flex flex-col md:hidden gap-2">
          <label>Sorting by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="dateAdded">Date added</option>
            <option value="name">Name</option>
          </select>
        </div>
      )}
      {showFilterBtn && (
        <div className="flex flex-col md:hidden gap-2">
          {/* Filter by Category */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="All">Category</option>
            <option value="Furniture">Furniture</option>
            <option value="Decor">Decor</option>
            <option value="Lighting">Lighting</option>
          </select>
          {/* Filter by Products Type */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="All">Product type</option>
            <option value="Chair">Chair</option>
            <option value="Vase">Vase</option>
            <option value="Lamp">Lamp</option>
            <option value="Table">Table</option>
            <option value="Shelf">Shelf</option>
            <option value="Clock">Clock</option>
          </select>
          {/* Sort by Price */}
          <select
            value={priceSortOption}
            onChange={(e) => setPriceSortOption(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="">Price</option>
            <option value="lowToHigh">High</option>
            <option value="highToLow">Low</option>
          </select>
          {/* Filter by Brand */}
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="bg-white dark:bg-chart-1 outline-none px-1"
          >
            <option value="All">Brand</option>
            <option value="Brand A">A</option>
            <option value="Brand B">B</option>
            <option value="Brand C">C</option>
            <option value="Brand D">D</option>
          </select>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-8  cursor-pointer p-4">
        {sortedProducts.slice(0, visibleCount).map((p) => (
          <Link href={`/all-products/${p.path}`}>
            <div className="overflow-hidden hover:rounded-xl transition-all duration-1000">
              <Image
                src={p.image}
                alt={p.name}
                width={500}
                height={200}
                className={`object-contain bg-cover transition-all duration-500 hover:scale-110`}
              />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl mt-2 md:mt-3">
              {p.name}
            </h3>
            <p className="text-sm md:text-base lg:text-lg mt-0 md:mt-1">
              £{p.price}
            </p>
          </Link>
        ))}
      </div>
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
