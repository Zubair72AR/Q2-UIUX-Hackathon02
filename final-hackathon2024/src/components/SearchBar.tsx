"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface SearchBarProps {
  searchQuery: string;
  onClose?: () => void;
  className?: string;
}

export default function SearchBar({
  searchQuery,
  onClose,
  className,
}: SearchBarProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoized filtered results
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query)
    );
  }, [searchQuery, products]);

  // Fetch products with error handling
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        setError("Failed to load products ❌");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-4 bg-gray-100 text-gray-600 rounded-lg">
        Loading products...
      </div>
    );
  }

  return (
    <div
      className={`absolute w-full bg-[rgba(255,255,255,0.5)] backdrop-blur-lg shadow-lg rounded-lg z-40 pt-16 md:pt-1 ${className}`}
    >
      {filteredProducts.length > 0 ? (
        <div
          role="listbox"
          aria-label="Search results"
          className="divide-y divide-gray-100 max-w-96 mx-auto"
        >
          {filteredProducts.map((product) => {
            const imageUrl = product.image
              ? urlFor(product.image).url()
              : "/placeholder.svg";

            return (
              <Link
                href={`/all-products/${product.slug.current}`}
                key={product.slug.current}
                role="option"
                className="block hover:bg-gray-50 transition-colors"
                onClick={onClose}
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={imageUrl}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain rounded"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-semibold">
                        £{product.price.toFixed(2)}
                      </span>
                      <span
                        className={`text-sm ${
                          product.quantity > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : searchQuery ? (
        <div className="p-4 text-center text-gray-500">
          No products found for "{searchQuery}"
        </div>
      ) : null}
    </div>
  );
}
