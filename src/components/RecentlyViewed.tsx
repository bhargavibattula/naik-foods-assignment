"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";

export default function RecentlyViewed() {
  const { items } = useRecentlyViewed();

  if (items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#2b1b12] mb-1">
            👁️ Recently Viewed
          </h2>
          <p className="text-xs text-[#5a4636]">Products you checked out</p>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {items.slice(0, 6).map((product) => (
          <div key={product.id} className="shrink-0 w-[200px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
