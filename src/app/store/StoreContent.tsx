"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { filterProducts, categories, products } from "@/data/products";

type SortOption = "popularity" | "price-asc" | "price-desc" | "rating" | "newest";

export default function StorePage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = (searchParams.get("sort") as SortOption) || "popularity";

  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>(initialSort);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isVeg, setIsVeg] = useState<boolean | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return filterProducts({
      search,
      category: selectedCategory || undefined,
      minPrice: priceRange[0] > 0 ? priceRange[0] : undefined,
      maxPrice: priceRange[1] < 500 ? priceRange[1] : undefined,
      inStockOnly,
      isVeg,
      sort,
    });
  }, [search, selectedCategory, sort, inStockOnly, isVeg, priceRange]);

  const maxPrice = Math.max(...products.map((p) => p.price));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#2b1b12] mb-2">
          {selectedCategory
            ? categories.find((c) => c.slug === selectedCategory)?.name || "Products"
            : search
            ? `Results for "${search}"`
            : "All Products"}
        </h1>
        <p className="text-sm text-[#5a4636]">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Search + sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#a89580]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search masala, pickle, chikki, flour..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d8c9ae] bg-white text-sm text-[#2b1b12] placeholder-[#a89580] focus:outline-none focus:ring-2 focus:ring-[#c77b1f] focus:border-transparent"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89580] hover:text-[#2b1b12]"
            >
              ✕
            </button>
          )}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="px-4 py-2.5 rounded-xl border border-[#d8c9ae] bg-white text-sm text-[#2b1b12] focus:outline-none focus:ring-2 focus:ring-[#c77b1f] cursor-pointer"
        >
          <option value="popularity">Most Popular</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest First</option>
        </select>

        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
            filtersOpen
              ? "bg-[#c77b1f] text-white border-[#c77b1f]"
              : "bg-white text-[#5a4636] border-[#d8c9ae] hover:border-[#c77b1f]"
          }`}
        >
          🎛️ Filters
        </button>
      </div>

      {/* Filters panel */}
      {filtersOpen && (
        <div className="mb-6 p-5 bg-white rounded-2xl border border-[#d8c9ae]/50 shadow-sm animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Category */}
            <div>
              <label className="text-xs font-bold text-[#5a4636] uppercase tracking-wider mb-2 block">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#d8c9ae] bg-[#fbf6ec] text-sm focus:outline-none focus:ring-2 focus:ring-[#c77b1f]"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.emoji} {cat.name} ({cat.productCount})
                  </option>
                ))}
              </select>
            </div>

            {/* Price range */}
            <div>
              <label className="text-xs font-bold text-[#5a4636] uppercase tracking-wider mb-2 block">
                Price Range: ₹{priceRange[0]} - ₹{priceRange[1] >= 500 ? "500+" : priceRange[1]}
              </label>
              <div className="flex gap-2">
                <input
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])
                  }
                  className="flex-1 accent-[#c77b1f]"
                />
                <input
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                  }
                  className="flex-1 accent-[#c77b1f]"
                />
              </div>
            </div>

            {/* Diet */}
            <div>
              <label className="text-xs font-bold text-[#5a4636] uppercase tracking-wider mb-2 block">
                Diet
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsVeg(undefined)}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isVeg === undefined ? "bg-[#c77b1f] text-white" : "bg-[#f3ead7] text-[#5a4636] hover:bg-[#d8c9ae]"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setIsVeg(true)}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isVeg === true ? "bg-[#4b6b3a] text-white" : "bg-[#f3ead7] text-[#5a4636] hover:bg-[#d8c9ae]"
                  }`}
                >
                  🟢 Veg
                </button>
                <button
                  onClick={() => setIsVeg(false)}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isVeg === false ? "bg-[#8a2e20] text-white" : "bg-[#f3ead7] text-[#5a4636] hover:bg-[#d8c9ae]"
                  }`}
                >
                  🔴 Non-Veg
                </button>
              </div>
            </div>

            {/* Stock */}
            <div>
              <label className="text-xs font-bold text-[#5a4636] uppercase tracking-wider mb-2 block">
                Availability
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-[#f3ead7]">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-[#c77b1f] w-4 h-4"
                />
                <span className="text-sm text-[#2b1b12]">In stock only</span>
              </label>
            </div>
          </div>

          {/* Active filters */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#d8c9ae]/50">
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#c77b1f]/10 text-[#c77b1f] rounded-full text-xs font-medium">
                {categories.find((c) => c.slug === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory("")} className="hover:text-[#8a2e20]">✕</button>
              </span>
            )}
            {isVeg !== undefined && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#c77b1f]/10 text-[#c77b1f] rounded-full text-xs font-medium">
                {isVeg ? "Veg Only" : "Non-Veg Only"}
                <button onClick={() => setIsVeg(undefined)} className="hover:text-[#8a2e20]">✕</button>
              </span>
            )}
            {inStockOnly && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#c77b1f]/10 text-[#c77b1f] rounded-full text-xs font-medium">
                In Stock
                <button onClick={() => setInStockOnly(false)} className="hover:text-[#8a2e20]">✕</button>
              </span>
            )}
            {(selectedCategory || isVeg !== undefined || inStockOnly || search) && (
              <button
                onClick={() => {
                  setSelectedCategory("");
                  setIsVeg(undefined);
                  setInStockOnly(false);
                  setSearch("");
                  setPriceRange([0, 500]);
                }}
                className="text-xs text-[#a89580] hover:text-[#8a2e20] underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Category pills (quick filter) */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        <button
          onClick={() => setSelectedCategory("")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
            !selectedCategory
              ? "bg-[#c77b1f] text-white"
              : "bg-white text-[#5a4636] border border-[#d8c9ae] hover:border-[#c77b1f]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(cat.slug === selectedCategory ? "" : cat.slug)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat.slug
                ? "bg-[#c77b1f] text-white"
                : "bg-white text-[#5a4636] border border-[#d8c9ae] hover:border-[#c77b1f]"
            }`}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="stagger-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="text-5xl block mb-4">🔍</span>
          <h3 className="font-serif text-xl font-bold text-[#2b1b12] mb-2">No products found</h3>
          <p className="text-sm text-[#5a4636] mb-6">
            Try adjusting your search or filters
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("");
              setIsVeg(undefined);
              setInStockOnly(false);
              setPriceRange([0, 500]);
            }}
            className="px-6 py-2.5 bg-[#c77b1f] text-white rounded-xl text-sm font-semibold hover:bg-[#a5620f] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
