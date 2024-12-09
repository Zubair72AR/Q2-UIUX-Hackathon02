"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import products from "@/components/ArrayData";

export default function ProductsPage() {
  const [sortOption, setSortOption] = useState("dateAdded");
  const [priceSortOption, setPriceSortOption] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [brandFilter, setBrandFilter] = useState("All");

  // Filtering products
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      categoryFilter === "All" || product.category === categoryFilter;
    const typeMatch = typeFilter === "All" || product.type === typeFilter;
    const brandMatch = brandFilter === "All" || product.brand === brandFilter;
    return categoryMatch && typeMatch && brandMatch;
  });

  // Sorting products
  const sortedProducts = [...filteredProducts]
    .sort((a, b) => {
      // Sort by Date or Name
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "dateAdded")
        return (
          new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        );
      return 0; // Default if no sorting
    })
    .sort((a, b) => {
      // Sort by Price (if selected)
      if (priceSortOption === "lowToHigh") return a.price - b.price;
      if (priceSortOption === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      {/* Filters */}
      <div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="text-sm "
        >
          <option value="All">Category</option>
          <option value="Furniture">Furniture</option>
          <option value="Decor">Decor</option>
          <option value="Lighting">Lighting</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Chair">Chair</option>
          <option value="Vase">Vase</option>
          <option value="Lamp">Lamp</option>
          <option value="Table">Table</option>
          <option value="Shelf">Shelf</option>
          <option value="Clock">Clock</option>
        </select>

        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
        >
          <option value="All">All Brands</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          <option value="Brand C">Brand C</option>
          <option value="Brand D">Brand D</option>
        </select>
      </div>

      {/* Sorting */}
      <div>
        {/* Sort by Date/Name */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="dateAdded">Date Added</option>
          <option value="name">Name</option>
        </select>

        {/* Sort by Price */}
        <select
          value={priceSortOption}
          onChange={(e) => setPriceSortOption(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-8  cursor-pointer">
        {sortedProducts.map((product) => (
          <Link href={`/all-products/${product.path}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={200}
              className={`object-contain hover:bg-cover  ${product.className}`}
            />
            <h3 className="text-base md:text-lg lg:text-xl mt-2 md:mt-3">
              {product.name}
            </h3>
            <p className="text-sm md:text-base lg:text-lg mt-0 md:mt-1">
              £{product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
