"use client";

import React from "react";
import { Bundle, getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function BundleCard({ bundle }: { bundle: Bundle }) {
  const { addItem } = useCart();
  const bundleProducts = bundle.productIds.map((id) => getProductById(id)).filter(Boolean);
  const originalTotal = bundleProducts.reduce((sum, p) => sum + (p?.price || 0), 0);
  const discountedTotal = Math.round(originalTotal * (1 - bundle.discountPercent / 100));
  const savings = originalTotal - discountedTotal;

  const handleAddBundle = () => {
    bundleProducts.forEach((product) => {
      if (product && product.inStock && product.price > 0) {
        addItem(product);
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#c77b1f]/5 to-[#4b6b3a]/5 rounded-2xl border border-[#c77b1f]/20 p-5 hover:shadow-lg transition-all duration-300 hover:border-[#c77b1f]/40">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="inline-block px-2.5 py-0.5 bg-[#c77b1f] text-white text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">
            {bundle.badge}
          </span>
          <h3 className="font-serif text-lg font-bold text-[#2b1b12]">{bundle.name}</h3>
          <p className="text-xs text-[#5a4636] mt-0.5">{bundle.description}</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {bundleProducts.map(
          (product) =>
            product && (
              <div key={product.id} className="flex-1 text-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-[#f3ead7] mb-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] text-[#5a4636] truncate">{product.name}</p>
              </div>
            )
        )}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#2b1b12]">₹{discountedTotal}</span>
            <span className="text-sm text-[#a89580] line-through">₹{originalTotal}</span>
          </div>
          <p className="text-[10px] text-[#4b6b3a] font-semibold">You save ₹{savings}</p>
        </div>
        <button
          onClick={handleAddBundle}
          className="px-5 py-2.5 bg-[#c77b1f] text-white rounded-xl text-sm font-semibold hover:bg-[#a5620f] transition-all hover:shadow-md active:scale-[0.98]"
        >
          Add Bundle
        </button>
      </div>
    </div>
  );
}
