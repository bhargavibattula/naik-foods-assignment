"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { products, getProductBySlug, getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import PincodeChecker from "@/components/PincodeChecker";
import ProductCard from "@/components/ProductCard";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const { addToast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
  const [isSubscription, setIsSubscription] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="text-5xl block mb-4">🤷</span>
        <h1 className="font-serif text-2xl font-bold text-[#2b1b12] mb-2">Product Not Found</h1>
        <Link href="/store" className="text-[#c77b1f] text-sm hover:underline">
          ← Back to Store
        </Link>
      </div>
    );
  }

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  // Frequently bought together
  const relatedProducts = product.frequentlyBoughtWith
    .map((id) => getProductById(id))
    .filter(Boolean)
    .slice(0, 4);

  // More from same category
  const moreSameCategory = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#a89580] mb-6">
        <Link href="/" className="hover:text-[#c77b1f] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/store" className="hover:text-[#c77b1f] transition-colors">Store</Link>
        <span>/</span>
        <Link
          href={`/store?category=${product.categorySlug}`}
          className="hover:text-[#c77b1f] transition-colors"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[#2b1b12] font-medium truncate">{product.name}</span>
      </nav>

      {/* Main product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden bg-[#f3ead7] shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-3xl">
                <span className="px-6 py-3 bg-white/90 rounded-xl text-lg font-bold text-[#5a4636]">
                  Sold Out
                </span>
              </div>
            )}
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.badge && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
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
              </span>
            )}
            {discountPercent && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8a2e20] text-white">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Veg indicator */}
          <div className="absolute top-4 right-4">
            <div
              className={`w-6 h-6 border-2 rounded flex items-center justify-center bg-white/90 ${
                product.isVeg ? "border-[#4b6b3a]" : "border-[#8a2e20]"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  product.isVeg ? "bg-[#4b6b3a]" : "bg-[#8a2e20]"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#2b1b12] mb-2">{product.name}</h1>
          <p className="text-sm text-[#a89580] mb-4">{product.weight} • {product.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    star <= Math.round(product.rating) ? "text-[#c77b1f]" : "text-[#d8c9ae]"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-[#5a4636] font-medium">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Urgency signals */}
          <div className="space-y-2 mb-6">
            {product.weeklyPurchases > 50 && (
              <div className="flex items-center gap-2 text-sm text-[#4b6b3a] bg-[#4b6b3a]/5 px-3 py-2 rounded-lg">
                <span>🛒</span>
                <span className="font-medium">{product.weeklyPurchases}+ people bought this week</span>
              </div>
            )}
            {product.inStock && product.stockCount <= 20 && (
              <div className="flex items-center gap-2 text-sm text-[#8a2e20] bg-[#8a2e20]/5 px-3 py-2 rounded-lg animate-pulse-subtle">
                <span>🔥</span>
                <span className="font-medium">Only {product.stockCount} left in stock — order soon!</span>
              </div>
            )}
          </div>

          {/* Subscribe and Save UI */}
          {product.price > 0 && (
            <div className="mb-6 space-y-3">
              <label className={`block border-2 rounded-xl p-4 cursor-pointer transition-colors ${!isSubscription ? 'border-[#c77b1f] bg-[#c77b1f]/5' : 'border-[#d8c9ae] hover:border-[#c77b1f]/50'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="purchaseType" checked={!isSubscription} onChange={() => setIsSubscription(false)} className="w-5 h-5 text-[#c77b1f] border-gray-300 focus:ring-[#c77b1f]" />
                    <span className="font-semibold text-[#2b1b12]">One-time purchase</span>
                  </div>
                  <span className="text-xl font-bold text-[#2b1b12]">₹{product.price}</span>
                </div>
              </label>

              <label className={`block border-2 rounded-xl p-4 cursor-pointer transition-colors ${isSubscription ? 'border-[#c77b1f] bg-[#c77b1f]/5' : 'border-[#d8c9ae] hover:border-[#c77b1f]/50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="purchaseType" checked={isSubscription} onChange={() => setIsSubscription(true)} className="w-5 h-5 text-[#c77b1f] border-gray-300 focus:ring-[#c77b1f]" />
                    <div>
                      <span className="font-semibold text-[#2b1b12]">Subscribe & Save 10%</span>
                      <p className="text-xs text-[#4b6b3a] font-medium mt-0.5">Most popular choice! 🚀</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#c77b1f]">₹{Math.round(product.price * 0.9)}</span>
                    <p className="text-xs text-[#a89580] line-through">₹{product.price}</p>
                  </div>
                </div>
                {isSubscription && (
                  <div className="pl-8 pt-2 mt-2 border-t border-[#d8c9ae]/50">
                    <p className="text-sm text-[#5a4636]">Delivery every 1 month. Cancel anytime.</p>
                  </div>
                )}
              </label>
            </div>
          )}

          {/* Price fallback for 0 bug */}
          {product.price === 0 && (
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-[#8a2e20]/10 rounded-lg">
                <span className="text-[#8a2e20] font-semibold">⚠️ Price to be updated</span>
              </div>
            </div>
          )}

          {/* Add to cart */}
          {product.inStock && product.price > 0 && (
            <div className="flex gap-3 mb-6">
              <div className="flex items-center bg-[#f3ead7] rounded-xl border border-[#d8c9ae]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#5a4636] hover:text-[#c77b1f] transition-colors text-lg"
                >
                  −
                </button>
                <span className="w-10 text-center font-medium text-[#2b1b12]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#5a4636] hover:text-[#c77b1f] transition-colors text-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  addItem({
                    ...product,
                    price: isSubscription ? Math.round(product.price * 0.9) : product.price,
                  }, quantity);
                  addToast(`Added ${quantity} ${product.name} to cart`);
                }}
                className="flex-1 bg-[#c77b1f] text-white py-3 px-6 rounded-xl font-bold hover:bg-[#b06a19] transition-colors shadow-lg shadow-[#c77b1f]/20 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {isSubscription ? 'Subscribe Now' : 'Add to Cart'}
              </button>
            </div>
          )}

          {!product.inStock && (
            <button className="w-full py-3 bg-[#5a4636] text-white rounded-xl font-semibold text-sm mb-6 cursor-not-allowed opacity-60">
              Sold Out — Notify When Available
            </button>
          )}

          {/* Pincode checker */}
          <div className="mb-6">
            <PincodeChecker />
          </div>

          {/* Product highlights */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: "🌿", label: "100% Natural" },
              { icon: "🏡", label: "Pune Made" },
              { icon: "📦", label: "Fresh Packed" },
            ].map((h) => (
              <div key={h.label} className="text-center p-3 bg-[#f3ead7] rounded-xl">
                <span className="text-xl block mb-1">{h.icon}</span>
                <span className="text-[10px] text-[#5a4636] font-medium">{h.label}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Link
                key={tag}
                href={`/store?search=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-[#f3ead7] text-[#5a4636] rounded-full text-xs hover:bg-[#c77b1f]/10 hover:text-[#c77b1f] transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs: Description & Reviews */}
      <div className="mb-16">
        <div className="flex gap-1 border-b border-[#d8c9ae] mb-6">
          {(["description", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-all border-b-2 ${
                activeTab === tab
                  ? "text-[#c77b1f] border-[#c77b1f]"
                  : "text-[#a89580] border-transparent hover:text-[#5a4636]"
              }`}
            >
              {tab === "description" ? "Description" : `Reviews (${product.reviewCount})`}
            </button>
          ))}
        </div>

        {activeTab === "description" ? (
          <div className="max-w-2xl">
            <p className="text-sm text-[#5a4636] leading-relaxed">{product.description}</p>
          </div>
        ) : (
          <div className="max-w-2xl space-y-4">
            {/* Rating summary */}
            <div className="flex items-center gap-4 p-4 bg-[#f3ead7] rounded-xl mb-6">
              <div className="text-center">
                <span className="text-4xl font-bold text-[#2b1b12]">{product.rating}</span>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${star <= Math.round(product.rating) ? "text-[#c77b1f]" : "text-[#d8c9ae]"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[#a89580] mt-1">{product.reviewCount} reviews</p>
              </div>
              <div className="flex-1 space-y-1">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = product.reviews.filter((r) => r.rating === stars).length;
                  const percent = product.reviewCount > 0 ? (count / product.reviews.length) * 100 : 0;
                  return (
                    <div key={stars} className="flex items-center gap-2 text-xs">
                      <span className="text-[#a89580] w-3">{stars}</span>
                      <div className="flex-1 h-2 bg-[#d8c9ae] rounded-full overflow-hidden">
                        <div className="h-full bg-[#c77b1f] rounded-full" style={{ width: `${percent}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Individual reviews */}
            {product.reviews.map((review) => (
              <div key={review.id} className="p-4 bg-white rounded-xl border border-[#d8c9ae]/40">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#c77b1f]/10 flex items-center justify-center text-sm font-bold text-[#c77b1f]">
                      {review.author[0]}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#2b1b12]">{review.author}</span>
                      {review.verified && (
                        <span className="ml-2 text-[10px] text-[#4b6b3a] font-medium">✓ Verified Purchase</span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-[#a89580]">{review.date}</span>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-3.5 w-3.5 ${star <= review.rating ? "text-[#c77b1f]" : "text-[#d8c9ae]"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#5a4636]">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Frequently Bought Together */}
      {relatedProducts.length > 0 && (
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-[#2b1b12] mb-6">
            🛒 Frequently Bought Together
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p) => p && <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* More from category */}
      {moreSameCategory.length > 0 && (
        <section className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#2b1b12]">
              More from {product.category}
            </h2>
            <Link
              href={`/store?category=${product.categorySlug}`}
              className="text-sm text-[#c77b1f] font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moreSameCategory.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
