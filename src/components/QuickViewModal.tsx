"use client";

import React from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";
import Link from "next/link";

interface QuickViewProps {
  product: Product;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewProps) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const { addToast } = useToast();
  const wishlisted = isInWishlist(product.id);

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const handleAddToCart = () => {
    if (product.inStock && product.price > 0) {
      addItem(product);
      addToast(`${product.name} added to cart!`, "success", "🛒");
    }
  };

  const handleWishlist = () => {
    toggleItem(product);
    addToast(
      wishlisted ? "Removed from wishlist" : `${product.name} saved to wishlist!`,
      wishlisted ? "info" : "success",
      wishlisted ? "💔" : "❤️"
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[150] backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[700px] md:max-h-[85vh] bg-[#fbf6ec] rounded-3xl z-[151] shadow-2xl overflow-hidden animate-scale-in flex flex-col">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#5a4636] hover:text-[#2b1b12] hover:bg-white transition-all shadow-sm"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row overflow-y-auto">
          {/* Image */}
          <div className="md:w-[280px] shrink-0 relative">
            <div className="aspect-square bg-[#f3ead7]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.badge && (
              <span
                className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  product.badge === "Sale" ? "bg-[#8a2e20] text-white"
                  : product.badge === "Bestseller" ? "bg-[#c77b1f] text-white"
                  : product.badge === "New" ? "bg-[#4b6b3a] text-white"
                  : "bg-[#5a4636] text-white"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="font-serif text-xl font-bold text-[#2b1b12]">{product.name}</h2>
              <button
                onClick={handleWishlist}
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  wishlisted
                    ? "bg-red-50 text-red-500 scale-110"
                    : "bg-[#f3ead7] text-[#a89580] hover:text-red-400 hover:bg-red-50"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth={wishlisted ? 0 : 1.5}>
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <p className="text-xs text-[#a89580] mb-3">{product.weight} • {product.category}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${s <= Math.round(product.rating) ? "text-[#c77b1f]" : "text-[#d8c9ae]"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-[#a89580]">{product.rating} ({product.reviewCount})</span>
            </div>

            <p className="text-sm text-[#5a4636] leading-relaxed mb-4 line-clamp-3">{product.description}</p>

            {/* Urgency */}
            {product.inStock && product.stockCount <= 20 && (
              <p className="text-xs text-[#8a2e20] font-medium mb-3 flex items-center gap-1">
                <span className="inline-block w-2 h-2 bg-[#8a2e20] rounded-full animate-pulse" />
                Only {product.stockCount} left in stock
              </p>
            )}
            {product.weeklyPurchases > 50 && (
              <p className="text-xs text-[#4b6b3a] font-medium mb-3">
                🛒 {product.weeklyPurchases}+ bought this week
              </p>
            )}

            {/* Price */}
            <div className="flex items-center gap-3 mb-5">
              {product.price === 0 ? (
                <span className="text-sm text-[#8a2e20] font-semibold">⚠️ Price to be updated</span>
              ) : (
                <>
                  <span className="text-2xl font-bold text-[#2b1b12]">₹{product.price}</span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <>
                      <span className="text-sm text-[#a89580] line-through">₹{product.originalPrice}</span>
                      <span className="px-2 py-0.5 bg-[#4b6b3a]/10 text-[#4b6b3a] text-[10px] font-bold rounded">
                        {discountPercent}% OFF
                      </span>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || product.price === 0}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  !product.inStock || product.price === 0
                    ? "bg-[#d8c9ae] text-[#a89580] cursor-not-allowed"
                    : "bg-[#c77b1f] text-white hover:bg-[#a5620f] hover:shadow-lg active:scale-[0.98]"
                }`}
              >
                {!product.inStock ? "Sold Out" : product.price === 0 ? "Price TBD" : "Add to Cart"}
              </button>
              <Link
                href={`/product/${product.slug}`}
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-sm font-medium border border-[#d8c9ae] text-[#5a4636] hover:border-[#c77b1f] hover:text-[#c77b1f] transition-all"
              >
                Full Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
