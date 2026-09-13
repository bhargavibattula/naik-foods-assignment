"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";
import QuickViewModal from "./QuickViewModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const { addToast } = useToast();
  const [showQuickView, setShowQuickView] = useState(false);
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

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product);
    addToast(
      wishlisted ? "Removed from wishlist" : `${product.name} saved!`,
      wishlisted ? "info" : "success",
      wishlisted ? "💔" : "❤️"
    );
  };

  return (
    <>
      <div className="group relative bg-white rounded-2xl border border-[#d8c9ae]/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              product.badge === "Sale"
                ? "bg-[#8a2e20] text-white"
                : product.badge === "Bestseller"
                ? "bg-[#c77b1f] text-white"
                : product.badge === "New"
                ? "bg-[#4b6b3a] text-white"
                : "bg-[#5a4636] text-white"
            }`}
          >
            {product.badge}
          </div>
        )}

        {/* Discount badge */}
        {discountPercent && !product.badge && (
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#8a2e20] text-white">
            -{discountPercent}%
          </div>
        )}

        {/* Top-right action buttons */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5">
          {/* Veg/Non-veg */}
          <div
            className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center bg-white/80 ${
              product.isVeg ? "border-[#4b6b3a]" : "border-[#8a2e20]"
            }`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                product.isVeg ? "bg-[#4b6b3a]" : "bg-[#8a2e20]"
              }`}
            />
          </div>

          {/* Wishlist heart */}
          <button
            onClick={handleWishlist}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
              wishlisted
                ? "bg-red-50 text-red-500 scale-110"
                : "bg-white/80 text-[#a89580] opacity-0 group-hover:opacity-100 hover:text-red-400 hover:bg-red-50"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${wishlisted ? "animate-heart-pop" : ""}`} viewBox="0 0 20 20" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth={wishlisted ? 0 : 1.5}>
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Quick view */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowQuickView(true);
            }}
            className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-[#a89580] opacity-0 group-hover:opacity-100 hover:text-[#c77b1f] hover:bg-[#c77b1f]/10 transition-all duration-300 shadow-sm"
            title="Quick View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <Link href={`/product/${product.slug}`}>
          <div className="aspect-square overflow-hidden bg-[#f3ead7] relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="px-4 py-2 bg-white/90 rounded-lg text-sm font-bold text-[#5a4636]">
                  Sold Out
                </span>
              </div>
            )}
            {/* Urgency signal */}
            {product.inStock && product.stockCount <= 15 && (
              <div className="absolute bottom-2 left-2 right-2 bg-[#8a2e20]/90 text-white text-[10px] font-semibold py-1 px-2 rounded-md text-center backdrop-blur-sm">
                🔥 Only {product.stockCount} left in stock!
              </div>
            )}
          </div>
        </Link>

        {/* Info */}
        <div className="p-4">
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-semibold text-sm text-[#2b1b12] line-clamp-2 mb-1 hover:text-[#c77b1f] transition-colors min-h-[2.5rem]">
              {product.name}
            </h3>
          </Link>

          <p className="text-[11px] text-[#a89580] mb-2">{product.weight}</p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-3.5 w-3.5 ${
                    star <= Math.round(product.rating) ? "text-[#c77b1f]" : "text-[#d8c9ae]"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[10px] text-[#a89580]">({product.reviewCount})</span>
          </div>

          {/* Weekly purchases */}
          {product.weeklyPurchases > 50 && (
            <p className="text-[10px] text-[#4b6b3a] font-medium mb-2">
              🛒 {product.weeklyPurchases}+ bought this week
            </p>
          )}

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-lg font-bold ${product.price === 0 ? "text-[#8a2e20]" : "text-[#2b1b12]"}`}>
              {product.price === 0 ? (
                <span className="text-sm">⚠️ Price TBD</span>
              ) : (
                `₹${product.price}`
              )}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#a89580] line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || product.price === 0}
            className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              !product.inStock || product.price === 0
                ? "bg-[#d8c9ae] text-[#a89580] cursor-not-allowed"
                : "bg-[#c77b1f] text-white hover:bg-[#a5620f] hover:shadow-md active:scale-[0.98]"
            }`}
          >
            {!product.inStock ? "Notify Me" : product.price === 0 ? "Price Coming Soon" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <QuickViewModal product={product} onClose={() => setShowQuickView(false)} />
      )}
    </>
  );
}
