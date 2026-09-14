import React, { Suspense } from "react";
import StoreContent from "./StoreContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products | Naik Konkan Foods",
  description: "Browse our complete collection of authentic Konkan delicacies — masala, pickles, chikki, flours, papads, syrups, and more.",
};

export default function StorePage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-[#d8c9ae] rounded w-48" />
          <div className="h-12 bg-[#d8c9ae] rounded-xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-[#d8c9ae] rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    }>
      <StoreContent />
    </Suspense>
  );
}
